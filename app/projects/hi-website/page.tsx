
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function HiWebsite() {
    return (
        <div className="page-wrapper">
            <div className="global">
                <div className="embed_css w-embed">
                    <style>
                        {`
            [jo-figma-effect]{position:relative}[jo-figma-effect]:after{content:"";position:absolute;bottom:0;left:20%;width:60%;height:1px;border-radius:50px;background-color:#fff;transform:scaleX(0);transition:transform .1s}[jo-figma-effect].selected:after{transform:scaleX(1)}[jo-figma-element=canvas]:has([contentEditable=true]){cursor:inherit}[jo-figma-element=container] [contentEditable=true]{outline:none}[jo-figma-element=container] [contentEditable=true] h2:hover,[jo-figma-element=container] [contentEditable=true] .body-x-large:hover{outline:1px dotted #78abf7;cursor:text}.panel>.button{flex:1}
            `}
                    </style>
                </div>
                <div id="cursor-label" className="cursor_label">
                    <div>Label</div>
                </div>
            </div>

            <Navbar />

            <section className="content">
                <section id="w-node-_6b92fcd7-76ca-1de9-4a94-e25e65d70cc7-7719a36a" className="main">
                    <section className="section_project-hero">
                        <div className="panel is-hero-img">
                            <img src="/images/68cc51edd6b03b3ea7023e6b_jokulahiwebplatform011691x.webp" loading="lazy" alt="" className="hero_img" />
                        </div>
                        <div className="grid-12 is-project-hero">
                            <div id="w-node-_957f4b5a-c2c8-d0d6-e810-38c8fab484b2-fab484ae" className="panel space-between">
                                <div className="panel_content">
                                    <div jo-fittext-element="container" className="div-block-25">
                                        <h1 jo-fittext-element="text" className="project-title heading-main">Accessible design for higher education</h1>
                                    </div>
                                </div>
                            </div>
                            <div id="w-node-_957f4b5a-c2c8-d0d6-e810-38c8fab484b7-fab484ae" className="panel">
                                <div className="panel_content">
                                    <h3 className="heading-small">Our Roles</h3>
                                    <div className="spacer-1"></div>
                                    <div className="body-small">UX/UI Design<br />Web Accessibility<br />Global design system</div>
                                </div>
                            </div>
                            <div id="w-node-_957f4b5a-c2c8-d0d6-e810-38c8fab484c2-fab484ae" className="panel">
                                <div className="panel_content">
                                    <h3 className="heading-small">Client</h3>
                                    <div className="spacer-1"></div>
                                    <div className="body-small">University of Iceland (Háskóli Íslands)</div>
                                </div>
                            </div>
                            <div id="w-node-_500a19a2-1cce-489b-b334-6d91543a69f0-fab484ae" className="div-block-32">
                                <div id="w-node-_957f4b5a-c2c8-d0d6-e810-38c8fab484c9-fab484ae" className="panel">
                                    <div className="panel_content">
                                        <h3 className="heading-small">Description</h3>
                                        <div className="spacer-1"></div>
                                        <div className="body-small">We partnered with the University of Iceland to redesign its digital presence—a future-proof site that’s more accessible, engaging, and true to the university’s values.</div>
                                    </div>
                                </div>
                                <div id="w-node-_957f4b5a-c2c8-d0d6-e810-38c8fab484d0-fab484ae" className="panel">
                                    <Link jo-rollinghover-element="button" data-wf--button--variant="base" href="https://english.hi.is/" className="button w-inline-block">
                                        <div className="shapeicon hello w-embed">
                                            <svg width="initial" height="initial" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_275_1034)">
                                                    <path d="M39.317 15.7815L38.0424 11.858L25.0584 16.0768L33.0832 5.03198L29.7458 2.60726L21.721 13.6526V0H17.596V13.6526L9.57122 2.60726L6.23434 5.03198L14.2586 16.0768L1.27466 11.858L0 15.7815L12.984 20.0003L0 24.219L1.27466 28.142L14.2586 23.9232L6.23434 34.968L9.57122 37.3927L17.596 26.3479V40H21.721V26.3479L29.7458 37.3927L33.0832 34.968L25.0584 23.9232L38.0424 28.142L39.317 24.219L26.333 20.0003L39.317 15.7815Z" fill="currentColor"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_275_1034">
                                                        <rect width="40" height="40" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div jo-rollinghover-element="text" className="text-block-5">
                                            <div className="jo-rollinghover-text" style={{ '--rollinghover-padding': '32px' } as React.CSSProperties}>
                                                <div>visit live site</div>
                                                <div>visit live site</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="panel">
                        <div data-wf--breakbar--variant="base" className="breakbar">
                            <div jo-marquee-overflowingonly="true" jo-marquee-element="marquee" className="marquee">
                                <div jo-marquee-element="inner" className="div-block-23">
                                    <div className="shapeicon break w-embed">
                                        <svg width="initial" height="initial" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_275_1034)">
                                                <path d="M39.317 15.7815L38.0424 11.858L25.0584 16.0768L33.0832 5.03198L29.7458 2.60726L21.721 13.6526V0H17.596V13.6526L9.57122 2.60726L6.23434 5.03198L14.2586 16.0768L1.27466 11.858L0 15.7815L12.984 20.0003L0 24.219L1.27466 28.142L14.2586 23.9232L6.23434 34.968L9.57122 37.3927L17.596 26.3479V40H21.721V26.3479L29.7458 37.3927L33.0832 34.968L25.0584 23.9232L38.0424 28.142L39.317 24.219L26.333 20.0003L39.317 15.7815Z" fill="currentColor"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_275_1034">
                                                    <rect width="40" height="40" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="rich-text-block w-richtext">
                                        <p>Did you know that the University of Iceland has the largest website in Iceland?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section_mission">
                        <div id="w-node-f0b6fbb1-d6e7-03c9-8af7-683f225fa8ea-225fa8e9" className="panel">
                            <div className="panel_content space-xxl">
                                <div className="badge">
                                    <div className="shapeicon badge_icon w-embed">
                                        <svg width="initial" height="initial" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_275_1048)">
                                                <path d="M30 20C35.523 20 40 15.523 40 9.99999C40 4.47698 35.523 0 30 0C24.477 0 20 4.47698 20 9.99999C20 4.47698 15.523 0 10 0C4.477 0 0 4.47698 0 9.99999C0 15.523 4.477 20 10 20C4.477 20 0 24.477 0 30C0 35.523 4.477 40 10 40C15.523 40 20 35.523 20 30C20 35.523 24.477 40 30 40C35.523 40 40 35.523 40 30C40 24.477 35.523 20 30 20Z" fill="currentColor"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_275_1048">
                                                    <rect width="40" height="40" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <h2 className="badge_text">The mission</h2>
                                </div>
                                <div className="body-x-large">The University of Iceland needed a site that could handle complex content, serve diverse users, and meet modern accessibility standards. Our mission was to create a flexible, inclusive, and future-ready platform without compromising the university’s identity or overwhelming its users.</div>
                            </div>
                        </div>
                        <div id="w-node-f0b6fbb1-d6e7-03c9-8af7-683f225fa8f0-225fa8e9">
                            <div className="grid-12">
                                <div id="w-node-f0b6fbb1-d6e7-03c9-8af7-683f225fa8f2-225fa8e9" className="collectionimage-collection">
                                    <div className="panel">
                                        <img src="/images/68cc51ede197e26a55843b06_jokulahiwebplatform02321x.webp" loading="lazy" alt="" className="collectionimage-image" />
                                    </div>
                                </div>
                                <div id="w-node-f0b6fbb1-d6e7-03c9-8af7-683f225fa8f5-225fa8e9" className="collectionimage-collection">
                                    <div className="panel">
                                        <img src="/images/68c9b70144cb65c5d04b91c8_jokula_hi_web_platform_03_3_2_.webp" loading="lazy" alt="" className="collectionimage-image" />
                                    </div>
                                </div>
                                <div id="w-node-f0b6fbb1-d6e7-03c9-8af7-683f225fa8f8-225fa8e9" className="collectionimage-collection">
                                    <div className="panel">
                                        <img src="/images/68c9b701497e5deb110d6736_jokula_hi_web_platform_04_3_2_.webp" loading="lazy" alt="" className="collectionimage-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <section className="section_statement grid-12">
                            <div id="w-node-_33d1df73-1d77-e79a-a410-a35dc7fbda3a-c7fbda39" className="statement-header">
                                <div className="panel">
                                    <div className="panel_content">
                                        <div className="badge">
                                            <div className="shapeicon badge_icon w-embed">
                                                <svg width="initial" height="initial" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_275_1048)">
                                                        <path d="M30 20C35.523 20 40 15.523 40 9.99999C40 4.47698 35.523 0 30 0C24.477 0 20 4.47698 20 9.99999C20 4.47698 15.523 0 10 0C4.477 0 0 4.47698 0 9.99999C0 15.523 4.477 20 10 20C4.477 20 0 24.477 0 30C0 35.523 4.477 40 10 40C15.523 40 20 35.523 20 30C20 35.523 24.477 40 30 40C35.523 40 40 35.523 40 30C40 24.477 35.523 20 30 20Z" fill="currentColor"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_275_1048">
                                                            <rect width="40" height="40" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <h2 className="badge_text">UX Design</h2>
                                        </div>
                                        <div className="spacer-10"></div>
                                        <div className="project-statement w-richtext">
                                            <h2>Built around users</h2>
                                            <p>We inherited wireframes from Mennsk and built on user research to shape a clean, user-focused interface. With students, faculty, alumni, and the public all using the site, we had to balance clarity with flexibility. Modular design components let editors build pages that adapt to any content—without breaking UX.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="w-node-_55a7a6d6-bafc-90ad-e5b3-606dbfc0300c-c7fbda39">
                                <div className="panel">
                                    <img src="/images/68cc51ed709ca124cedb0c5e_jokulahiwebplatform05231x.webp" loading="lazy" alt="" />
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="section_quote">
                        <div id="w-node-_76c4be2a-ec00-7e82-3392-69733596f1eb-3596f1ea" className="panel">
                            <div className="panel_content space-xxl">
                                <div>
                                    <div className="quote_symbol">“</div>
                                </div>
                                <div className="quote_textauthor">
                                    <div className="body-x-large">Jökulá played a pivotal role in developing a new web design system for the University of Iceland… They delivered innovative and elegant solutions that significantly enhanced the user experience and supported users in achieving their goals.</div>
                                    <div>The University of Iceland Web Team</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="section_statement grid-12">
                        <div id="w-node-_33d1df73-1d77-e79a-a410-a35dc7fbda3a-c7fbda39" className="statement-header">
                            <div className="panel">
                                <div className="panel_content">
                                    <div className="badge">
                                        <div className="shapeicon badge_icon w-embed">
                                            <svg width="initial" height="initial" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_275_1048)">
                                                    <path d="M30 20C35.523 20 40 15.523 40 9.99999C40 4.47698 35.523 0 30 0C24.477 0 20 4.47698 20 9.99999C20 4.47698 15.523 0 10 0C4.477 0 0 4.47698 0 9.99999C0 15.523 4.477 20 10 20C4.477 20 0 24.477 0 30C0 35.523 4.477 40 10 40C15.523 40 20 35.523 20 30C20 35.523 24.477 40 30 40C35.523 40 40 35.523 40 30C40 24.477 35.523 20 30 20Z" fill="currentColor"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_275_1048">
                                                        <rect width="40" height="40" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h2 className="badge_text">Visual Design</h2>
                                    </div>
                                    <div className="spacer-10"></div>
                                    <div className="project-statement w-richtext">
                                        <h2>Modern, confident, unique</h2>
                                        <p>We gave the University of Iceland a fresh visual identity to stand out in a sea of lookalike institutional sites. Enter Deep Pink: a bold, friendly contrast to the traditional blue, adding warmth without sacrificing credibility. Paired with a clean, legible typeface, the result feels modern, confident, and uniquely theirs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="w-node-_55a7a6d6-bafc-90ad-e5b3-606dbfc0300c-c7fbda39">
                            <div className="panel">
                                <img src="/images/68cc51edf8df338f0c32a558_jokulahiwebplatform06321x.webp" loading="lazy" alt="" />
                            </div>
                            <div className="panel">
                                <img src="/images/68cc51ede197e26a55843af6_jokulahiwebplatform07321x.webp" loading="lazy" alt="" />
                            </div>
                        </div>
                    </section>

                    <section className="section_statement grid-12">
                        <div id="w-node-_33d1df73-1d77-e79a-a410-a35dc7fbda3a-c7fbda39" className="statement-header">
                            <div className="panel">
                                <div className="panel_content">
                                    <div className="badge">
                                        <div className="shapeicon badge_icon w-embed">
                                            <svg width="initial" height="initial" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_275_1048)">
                                                    <path d="M30 20C35.523 20 40 15.523 40 9.99999C40 4.47698 35.523 0 30 0C24.477 0 20 4.47698 20 9.99999C20 4.47698 15.523 0 10 0C4.477 0 0 4.47698 0 9.99999C0 15.523 4.477 20 10 20C4.477 20 0 24.477 0 30C0 35.523 4.477 40 10 40C15.523 40 20 35.523 20 30C20 35.523 24.477 40 30 40C35.523 40 40 35.523 40 30C40 24.477 35.523 20 30 20Z" fill="currentColor"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_275_1048">
                                                        <rect width="40" height="40" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h2 className="badge_text">Development</h2>
                                    </div>
                                    <div className="spacer-10"></div>
                                    <div className="project-statement w-richtext">
                                        <h2>Built to Last</h2>
                                        <p>We worked closely with the University of Iceland’s internal development team. Every component was documented, tested, and built to be responsive and accessible. The design system became the single source of truth—making handoff smoother and future updates far less painful.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="w-node-_55a7a6d6-bafc-90ad-e5b3-606dbfc0300c-c7fbda39">
                            <div className="panel">
                                <img src="/images/68cc51ed050d24dfa8002bec_jokulahiwebplatform08321x.webp" loading="lazy" alt="" />
                            </div>
                            <div className="panel">
                                <img src="/images/68cc51ed724ce1dc4757dfd1_jokulahiwebplatform09321x.webp" loading="lazy" alt="" />
                            </div>
                            <div className="panel">
                                <img src="/images/68cc51ed24c471812c80f2fb_jokulahiwebplatform10321x.webp" loading="lazy" alt="" />
                            </div>
                        </div>
                    </section>

                    <section className="section_statement grid-12">
                        <div id="w-node-_33d1df73-1d77-e79a-a410-a35dc7fbda3a-c7fbda39" className="statement-header">
                            <div className="panel">
                                <div className="panel_content">
                                    <div className="badge">
                                        <div className="shapeicon badge_icon w-embed">
                                            <svg width="initial" height="initial" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_275_1048)">
                                                    <path d="M30 20C35.523 20 40 15.523 40 9.99999C40 4.47698 35.523 0 30 0C24.477 0 20 4.47698 20 9.99999C20 4.47698 15.523 0 10 0C4.477 0 0 4.47698 0 9.99999C0 15.523 4.477 20 10 20C4.477 20 0 24.477 0 30C0 35.523 4.477 40 10 40C15.523 40 20 35.523 20 30C20 35.523 24.477 40 30 40C35.523 40 40 35.523 40 30C40 24.477 35.523 20 30 20Z" fill="currentColor"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_275_1048">
                                                        <rect width="40" height="40" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h2 className="badge_text">Accessibility</h2>
                                    </div>
                                    <div className="spacer-10"></div>
                                    <div className="project-statement w-richtext">
                                        <h2>Inclusive by design</h2>
                                        <p>Accessibility wasn’t a checkbox—it shaped every decision. From adopting the Atkinson Hyperlegible typeface to implementing pause buttons on carousels, we made sure users of all abilities could navigate with ease. High color contrast, logical reading order, focus states—you name it, we covered it.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="w-node-_55a7a6d6-bafc-90ad-e5b3-606dbfc0300c-c7fbda39">
                            <div className="panel">
                                <img src="/images/68cc51ed24c471812c80f2ed_jokulahiwebplatform11321x.webp" loading="lazy" alt="" />
                            </div>
                            <div className="panel">
                                <img src="/images/68cc51ed6961feb9adde2167_jokulahiwebplatform12321x.webp" loading="lazy" alt="" />
                            </div>
                            <div className="panel">
                                <img src="/images/68cc51edbb1c4c133e37a9a1_jokulahiwebplatform13321x.webp" loading="lazy" alt="" />
                            </div>
                        </div>
                    </section>

                    <section className="section_statement grid-12">
                        <div id="w-node-_33d1df73-1d77-e79a-a410-a35dc7fbda3a-c7fbda39" className="statement-header">
                            <div className="panel">
                                <div className="panel_content">
                                    <div className="badge">
                                        <div className="shapeicon badge_icon w-embed">
                                            <svg width="initial" height="initial" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_275_1048)">
                                                    <path d="M30 20C35.523 20 40 15.523 40 9.99999C40 4.47698 35.523 0 30 0C24.477 0 20 4.47698 20 9.99999C20 4.47698 15.523 0 10 0C4.477 0 0 4.47698 0 9.99999C0 15.523 4.477 20 10 20C4.477 20 0 24.477 0 30C0 35.523 4.477 40 10 40C15.523 40 20 35.523 20 30C20 35.523 24.477 40 30 40C35.523 40 40 35.523 40 30C40 24.477 35.523 20 30 20Z" fill="currentColor"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_275_1048">
                                                        <rect width="40" height="40" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h2 className="badge_text">Conclusion</h2>
                                    </div>
                                    <div className="spacer-10"></div>
                                    <div className="project-statement w-richtext">
                                        <p>The new site is a bold, accessible platform that lives up to the University of Iceland’s reputation. It’s now easier to explore, more inclusive, and built for growth. Best part? The internal team has a system they can confidently build on.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="w-node-_55a7a6d6-bafc-90ad-e5b3-606dbfc0300c-c7fbda39">
                            <div className="panel">
                                <img src="/images/68cc51ee7ffce52a99ec346b_jokulahiwebplatform14231x.webp" loading="lazy" alt="" />
                            </div>
                        </div>
                    </section>

                    <section className="section_stats">
                        <div id="w-node-b407d935-ad9a-7663-44fe-d00e25793de8-90fca5f5" className="collection-list-wrapper">
                            <div className="stats_images">
                                <div id="w-node-_560c67ee-28d7-9726-2fb8-118df94f2952-f94f2952" className="collectionimage-collection">
                                    <div className="panel">
                                        <img loading="lazy" src="/images/68cc7cca7f852631062a03b8_jokulahiwebplatform1532.webp" alt="" className="collectionimage-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="w-node-_3c16cfbf-b4aa-3dd2-10f2-ae5197dcccde-90fca5f5" className="stats_info">
                            <div id="w-node-_20c241a4-aab5-4820-dffe-94ea29402dcb-29402dcb" className="panel">
                                <div className="panel_content">
                                    <div className="project-statistics w-richtext">
                                        <p><strong>83</strong>Figma pages created… and counting</p>
                                    </div>
                                </div>
                            </div>
                            <div id="w-node-_20c241a4-aab5-4820-dffe-94ea29402dcb-29402dcb" className="panel">
                                <div className="panel_content">
                                    <div className="project-statistics w-richtext">
                                        <p><strong>3k</strong> Figma elements created</p>
                                    </div>
                                </div>
                            </div>
                            <div id="w-node-_20c241a4-aab5-4820-dffe-94ea29402dcb-29402dcb" className="panel">
                                <div className="panel_content">
                                    <div className="project-statistics w-richtext">
                                        <p><strong>1041</strong> Comments resolved</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-embed">
                            <style>
                                {`
                .project-statistics.w-richtext:before, 
                .project-statistics.w-richtext:after{
                  content: none;
                }

                .section_stats strong{
                  color: #131313;
                  font-variant-numeric: lining-nums tabular-nums;
                  font-family: "Bagossstandard";
                  font-size: 5.375rem;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 100%; /* 9.375rem */
                  align-self: flex-start;
                }

                @media (max-width: 62rem) {
                  .section_stats strong{
                    font-size: 3.75rem;
                  }
                }

                .section_stats .stats_info .panel:has(+ .w-condition-invisible) {
                  grid-column: 1 / -1;
                }

                .section_stats .stats_info .panel:first-child:nth-last-child(2),
                .section_stats .stats_info .panel:nth-child(3):nth-last-child(1) {
                  grid-column: 1 / -1 !important;
                }
                `}
                            </style>
                        </div>
                    </section>

                    <div className="panel">
                        <div data-wf--breakbar--variant="base" className="breakbar">
                            <div jo-marquee-overflowingonly="true" jo-marquee-element="marquee" className="marquee --playing" style={{ '--marquee-out': 'translateX(-50%)' } as React.CSSProperties}>
                                <div jo-marquee-element="inner" className="div-block-23">
                                    <div className="shapeicon break w-embed">
                                        <svg width="initial" height="initial" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_275_1034)">
                                                <path d="M39.317 15.7815L38.0424 11.858L25.0584 16.0768L33.0832 5.03198L29.7458 2.60726L21.721 13.6526V0H17.596V13.6526L9.57122 2.60726L6.23434 5.03198L14.2586 16.0768L1.27466 11.858L0 15.7815L12.984 20.0003L0 24.219L1.27466 28.142L14.2586 23.9232L6.23434 34.968L9.57122 37.3927L17.596 26.3479V40H21.721V26.3479L29.7458 37.3927L33.0832 34.968L25.0584 23.9232L38.0424 28.142L39.317 24.219L26.333 20.0003L39.317 15.7815Z" fill="currentColor"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_275_1034">
                                                    <rect width="40" height="40" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="rich-text-block w-richtext">
                                        <p>Did you know UX designers were once called “human factors engineers.”. We want to be called that.</p>
                                    </div>
                                </div>
                                <div jo-marquee-element="inner" className="div-block-23">
                                    <div className="shapeicon break w-embed">
                                        <svg width="initial" height="initial" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_275_1034)">
                                                <path d="M39.317 15.7815L38.0424 11.858L25.0584 16.0768L33.0832 5.03198L29.7458 2.60726L21.721 13.6526V0H17.596V13.6526L9.57122 2.60726L6.23434 5.03198L14.2586 16.0768L1.27466 11.858L0 15.7815L12.984 20.0003L0 24.219L1.27466 28.142L14.2586 23.9232L6.23434 34.968L9.57122 37.3927L17.596 26.3479V40H21.721V26.3479L29.7458 37.3927L33.0832 34.968L25.0584 23.9232L38.0424 28.142L39.317 24.219L26.333 20.0003L39.317 15.7815Z" fill="currentColor"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_275_1034">
                                                    <rect width="40" height="40" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="rich-text-block w-richtext">
                                        <p>Did you know UX designers were once called “human factors engineers.”. We want to be called that.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="section_next-project grid-12">
                        <div id="w-node-_03d86446-e0da-2331-beb5-a61583d2bc36-83d2bc35" className="panel">
                            <div className="panel_content heading-main is-heading">
                                <h2 className="heading-main">Next project</h2>
                            </div>
                        </div>
                        <div id="w-node-_03d86446-e0da-2331-beb5-a61583d2bc3a-83d2bc35" className="panel">
                            <Link jo-rollinghover-element="button" data-wf--button--variant="light" href="/projects" className="button w-variant-32bef84d-cd20-989f-99ee-3f490f3150ef w-inline-block">
                                <div className="shapeicon hello w-embed">
                                    <svg width="initial" height="initial" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_275_1034)">
                                            <path d="M39.317 15.7815L38.0424 11.858L25.0584 16.0768L33.0832 5.03198L29.7458 2.60726L21.721 13.6526V0H17.596V13.6526L9.57122 2.60726L6.23434 5.03198L14.2586 16.0768L1.27466 11.858L0 15.7815L12.984 20.0003L0 24.219L1.27466 28.142L14.2586 23.9232L6.23434 34.968L9.57122 37.3927L17.596 26.3479V40H21.721V26.3479L29.7458 37.3927L33.0832 34.968L25.0584 23.9232L38.0424 28.142L39.317 24.219L26.333 20.0003L39.317 15.7815Z" fill="currentColor"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_275_1034">
                                                <rect width="40" height="40" fill="white"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div jo-rollinghover-element="text" className="text-block-5">
                                    <div className="jo-rollinghover-text" style={{ '--rollinghover-padding': '32px' } as React.CSSProperties}>
                                        <div>see all projects</div>
                                        <div>see all projects</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div id="w-node-_03d86446-e0da-2331-beb5-a61583d2bc3d-83d2bc35" className="panel">
                            <img loading="lazy" src="/images/68ca7a4658a8292c999a1d60_jokula-frodleiksfusi-next-02.webp" alt="" className="next-project_thumb" />
                        </div>
                        <div id="w-node-_03d86446-e0da-2331-beb5-a61583d2bc3f-83d2bc35" className="panel">
                            <img loading="lazy" src="/images/68ca7a4716eb73cf3fff0ab1_jokula-frodleiksfusi-next-01.webp" alt="" className="next-project_thumb" />
                        </div>
                        <div id="w-node-_03d86446-e0da-2331-beb5-a61583d2bc41-83d2bc35" className="panel">
                            <div className="panel_content">
                                <h3 className="heading-medium">Engaging interactive learning</h3>
                            </div>
                        </div>
                        <div id="w-node-_03d86446-e0da-2331-beb5-a61583d2bc44-83d2bc35" className="panel">
                            <div className="panel_content">
                                <div className="body-small">Branding<br />Design System<br />Game design<br />Illustration</div>
                            </div>
                        </div>
                        <div id="w-node-_03d86446-e0da-2331-beb5-a61583d2bc4c-83d2bc35" className="panel">
                            <Link jo-rollinghover-element="button" data-wf--button--variant="light" href="/projects/frodleiksfusi" className="button w-variant-32bef84d-cd20-989f-99ee-3f490f3150ef w-inline-block">
                                <div className="shapeicon hello w-embed">
                                    <svg width="initial" height="initial" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_275_1034)">
                                            <path d="M39.317 15.7815L38.0424 11.858L25.0584 16.0768L33.0832 5.03198L29.7458 2.60726L21.721 13.6526V0H17.596V13.6526L9.57122 2.60726L6.23434 5.03198L14.2586 16.0768L1.27466 11.858L0 15.7815L12.984 20.0003L0 24.219L1.27466 28.142L14.2586 23.9232L6.23434 34.968L9.57122 37.3927L17.596 26.3479V40H21.721V26.3479L29.7458 37.3927L33.0832 34.968L25.0584 23.9232L38.0424 28.142L39.317 24.219L26.333 20.0003L39.317 15.7815Z" fill="currentColor"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_275_1034">
                                                <rect width="40" height="40" fill="white"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div jo-rollinghover-element="text" className="text-block-5">
                                    <div className="jo-rollinghover-text" style={{ '--rollinghover-padding': '32px' } as React.CSSProperties}>
                                        <div>see case study</div>
                                        <div>see case study</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </section>
                </section>
            </section>
            <Footer />
        </div>
    );
}
