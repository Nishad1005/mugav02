
'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function LegacyScriptReloader() {
    const pathname = usePathname();
    const initialLoadRef = useRef(true);

    useEffect(() => {
        const loadScripts = async () => {
            const load = (src: string) => new Promise((resolve, reject) => {
                const existing = document.querySelector(`script[src="${src}"]`);
                if (existing) {
                    existing.remove();
                }
                const s = document.createElement('script');
                s.src = src;
                s.async = false; // Ensure sequential execution if browser supports it, but we await anyway
                s.onload = resolve;
                s.onerror = reject;
                document.body.appendChild(s);
            });

            try {
                // webflow-init.js first
                await load('/js/webflow-init.js');
                // then jokula-init.js which relies on Webflow array
                await load('/js/jokula-init.js');
                // console.log('Legacy scripts reloaded for path:', pathname);
            } catch (err) {
                console.error('Failed to reload legacy scripts:', err);
            }
        };

        // On initial load, the scripts might be loaded by layout (if we kept them there), 
        // but better to manage them here solely to avoid duplication.
        // However, if strict mode is on, this might run twice.

        loadScripts();

    }, [pathname]);

    return null;
}
