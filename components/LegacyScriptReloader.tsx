'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const SURFACE_LIGHT_RGB: [number, number, number] = [204, 211, 218];
const SURFACE_DARK_RGB: [number, number, number] = [20, 20, 20];

const clamp01 = (value: number) => Math.max(0, Math.min(1, value));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const toSurface = (t: number) => {
    const r = Math.round(lerp(SURFACE_LIGHT_RGB[0], SURFACE_DARK_RGB[0], t));
    const g = Math.round(lerp(SURFACE_LIGHT_RGB[1], SURFACE_DARK_RGB[1], t));
    const b = Math.round(lerp(SURFACE_LIGHT_RGB[2], SURFACE_DARK_RGB[2], t));
    return `rgba(${r}, ${g}, ${b}, 1)`;
};

export default function LegacyScriptReloader() {
    const pathname = usePathname();

    useEffect(() => {
        let isApplyingTheme = false;
        let themeRafId: number | null = null;

        const updateFooterTheme = () => {
            const html = document.documentElement;
            const footer = document.querySelector<HTMLElement>('.footer');

            const footerTop = footer ? footer.getBoundingClientRect().top : Number.POSITIVE_INFINITY;
            const start = window.innerHeight * 1.12;
            const end = window.innerHeight * 0.35;
            const progress = clamp01((start - footerTop) / (start - end));

            const surface = toSurface(progress);
            const currentSurface = html.style.getPropertyValue('--colors--surface').trim();

            isApplyingTheme = true;
            try {
                if (currentSurface !== surface) {
                    html.style.setProperty('--colors--surface', surface);
                }

                html.style.setProperty('--footer-theme-progress', progress.toFixed(3));
                html.classList.toggle('footer-theme-active', progress > 0.32);
                document.body.style.backgroundColor = 'var(--colors--surface)';
            } finally {
                isApplyingTheme = false;
            }
        };

        const mountFooterThemeSync = () => {
            const scheduleFooterThemeUpdate = () => {
                if (themeRafId !== null) return;
                themeRafId = window.requestAnimationFrame(() => {
                    themeRafId = null;
                    updateFooterTheme();
                });
            };

            updateFooterTheme();
            window.addEventListener('scroll', scheduleFooterThemeUpdate, { passive: true });
            window.addEventListener('resize', scheduleFooterThemeUpdate);

            return () => {
                window.removeEventListener('scroll', scheduleFooterThemeUpdate);
                window.removeEventListener('resize', scheduleFooterThemeUpdate);
                if (themeRafId !== null) {
                    window.cancelAnimationFrame(themeRafId);
                    themeRafId = null;
                }
            };
        };

        const loadScripts = async () => {
            const load = (src: string) =>
                new Promise<void>((resolve, reject) => {
                    const existing = document.querySelector(`script[src="${src}"]`);
                    if (existing) {
                        existing.remove();
                    }

                    const s = document.createElement('script');
                    s.src = src;
                    s.async = false;
                    s.onload = () => resolve();
                    s.onerror = () => reject(new Error(`Failed to load ${src}`));
                    document.body.appendChild(s);
                });

            try {
                await load('/js/webflow-init.js');
                await load('/js/jokula-init.js');
            } catch (err) {
                console.error('Failed to reload legacy scripts:', err);
            } finally {
                updateFooterTheme();
                requestAnimationFrame(updateFooterTheme);
                setTimeout(updateFooterTheme, 120);
            }
        };

        updateFooterTheme();

        const stopFooterThemeSync = mountFooterThemeSync();

        const observer = new MutationObserver(() => {
            if (!isApplyingTheme) {
                updateFooterTheme();
            }
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['style'],
        });

        loadScripts();

        return () => {
            observer.disconnect();
            stopFooterThemeSync();
            document.documentElement.classList.remove('footer-theme-active');
            document.documentElement.style.setProperty('--colors--surface', toSurface(0));
            document.documentElement.style.removeProperty('--footer-theme-progress');
        };
    }, [pathname]);

    return null;
}
