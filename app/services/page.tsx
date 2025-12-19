
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Services() {
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
                <section id="w-node-d60dca42-8319-2ca9-a81b-c70f3e53edb6-6a061703" className="main">
                    <section className="section_min-hero">
                        <div className="panel is-hero-img">
                            <img
                                src="/images/68cbe72515ea7b788e745833_service.webp"
                                loading="lazy"
                                sizes="(max-width: 479px) 95vw, (max-width: 767px) 97vw, (max-width: 991px) 98vw, 100vw"
                                srcSet="/images/68cbe72515ea7b788e745833_service-p-500.webp 500w, /images/68cbe72515ea7b788e745833_service-p-800.webp 800w, /images/68cbe72515ea7b788e745833_service-p-1080.webp 1080w, /images/68cbe72515ea7b788e745833_service-p-1600.webp 1600w, /images/68cbe72515ea7b788e745833_service-p-2000.webp 2000w, /images/68cbe72515ea7b788e745833_service-p-2600.webp 2600w, /images/68cbe72515ea7b788e745833_service-p-3200.webp 3200w, /images/68cbe72515ea7b788e745833_service.webp 5079w"
                                alt=""
                                className="hero_img"
                            />
                        </div>
                        <div className="grid-12 is-hero-text">
                            <div id="w-node-_6490213e-5a59-e889-b06f-5fbe67e848e3-6a061703" className="panel space-between">
                                <div className="panel_content">
                                    <h1 className="heading-main">We make interfaces feel great</h1>
                                </div>
                            </div>
                            <div id="w-node-a7df6f34-9ce8-f5fa-b267-890f97e29739-6a061703" className="panel">
                                <div className="panel_content bottom-left">
                                    <div>
                                        Obsessed with user experiences since 2015, companies large and small have turned to Jokula for transformative UX, UI, and branding.
                                    </div>
                                </div>
                            </div>
                            <div id="w-node-_2c51b3a8-32ef-41fc-e410-2ad20988f824-6a061703" className="panel">
                                <Link jo-rollinghover-element="button" data-wf--button--variant="base" href="/contact" className="button w-inline-block">
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
                                            <div>Contact us</div>
                                            <div>Contact us</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
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
                                            <p>Open taps: probably too many</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section_services">
                        <div className="services_row">
                            <div id="w-node-_0f2b62b5-9426-707c-3962-afea470a101d-6a061703" className="panel">
                                <div className="pattern-swirl pink">
                                    <div className="services_brains">
                                        <img src="/images/678506a882522e410277baf0_brain.png" loading="lazy" alt="" className="services_brain" />
                                        <img src="/images/678506a882522e410277baf0_brain.png" loading="lazy" alt="" className="services_brain" />
                                        <img src="/images/678506a882522e410277baf0_brain.png" loading="lazy" alt="" className="services_brain" />
                                        <img src="/images/678506a882522e410277baf0_brain.png" loading="lazy" alt="" className="services_brain" />
                                        <img src="/images/678506a882522e410277baf0_brain.png" loading="lazy" alt="" className="services_brain" />
                                    </div>
                                </div>
                            </div>
                            <div id="w-node-_8e7223ee-a4ff-5934-080f-102f8ddc6bb1-6a061703" className="panel">
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
                                        <h2 className="badge_text">Analysis</h2>
                                    </div>
                                    <div>
                                        Our experts study projects to analyze challenges, opportunities, target audiences and user stories. <br /><br />
                                        The process includes interviews with stakeholders and thorough user testing using our state-of-the-art eye scanner.
                                    </div>
                                </div>
                            </div>
                            <div id="w-node-_63f01f1e-2b37-7591-5a66-45c4dd5c1cba-6a061703" className="panel">
                                <div className="panel_content">
                                    <div className="services_tags-container">
                                        <div className="heading-small">Workshops</div>
                                        <div className="heading-small">Design sprints</div>
                                        <div className="heading-small">Digital strategy</div>
                                        <div className="heading-small">Analysis</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="services_row">
                            <div id="w-node-_07140da5-81e6-6745-8359-5525b4c3e33a-6a061703" className="panel">
                                <div className="pattern-spiral-stripes yellow">
                                    <div className="services_chesss">
                                        <img src="/images/678506a8cc97a3113a70006d_chess-king%201.png" loading="lazy" alt="" className="services_chess rotated-1" />
                                        <img src="/images/678506a8cc97a3113a70006d_chess-king%201.png" loading="lazy" alt="" className="services_chess rotated-2" />
                                        <img src="/images/678506a8cc97a3113a70006d_chess-king%201.png" loading="lazy" alt="" className="services_chess rotated-3" />
                                        <img src="/images/678506a8cc97a3113a70006d_chess-king%201.png" loading="lazy" alt="" className="services_chess rotated-4" />
                                        <img src="/images/678506a8cc97a3113a70006d_chess-king%201.png" loading="lazy" alt="" className="services_chess rotated-5" />
                                        <img src="/images/678506a8cc97a3113a70006d_chess-king%201.png" loading="lazy" alt="" className="services_chess rotated-6" />
                                        <img src="/images/678506a8cc97a3113a70006d_chess-king%201.png" loading="lazy" alt="" className="services_chess rotated-7" />
                                        <img src="/images/678506a8cc97a3113a70006d_chess-king%201.png" loading="lazy" alt="" className="services_chess rotated-8" />
                                    </div>
                                </div>
                            </div>
                            <div id="w-node-_07140da5-81e6-6745-8359-5525b4c3e33c-6a061703" className="panel">
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
                                        <h2 className="badge_text">User experience</h2>
                                    </div>
                                    <div>
                                        The user's experience, whether by interface, website, app or brand, shapes their long-term opinion of the company. We help you create the right experience with a good user interface and design that is both easy and convenient to use and respond to.<br />
                                    </div>
                                </div>
                            </div>
                            <div id="w-node-_07140da5-81e6-6745-8359-5525b4c3e341-6a061703" className="panel">
                                <div className="panel_content">
                                    <div className="services_tags-container">
                                        <div className="heading-small">User testing</div>
                                        <div className="heading-small">User flow</div>
                                        <div className="heading-small">Wireframe</div>
                                        <div className="heading-small">Information architecture</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="services_row">
                            <div id="w-node-efcd4f7f-4b91-123c-df4a-41d594409e3f-6a061703" className="panel">
                                <div className="pattern-serpentine-stripes green">
                                    <div className="services_brushes">
                                        <div className="div-block-18">
                                            <img src="/images/678506a8ba6d6b33005c4610_brush.png" loading="lazy" alt="" className="image-12" />
                                            <img src="/images/678506a8ba6d6b33005c4610_brush.png" loading="lazy" alt="" className="image-12 hide-desktop" />
                                        </div>
                                        <div className="div-block-18">
                                            <img src="/images/678506a8ba6d6b33005c4610_brush.png" loading="lazy" alt="" className="image-12" />
                                            <img src="/images/678506a8ba6d6b33005c4610_brush.png" loading="lazy" alt="" className="image-12 hide-desktop" />
                                            <img src="/images/678506a8ba6d6b33005c4610_brush.png" loading="lazy" alt="" className="image-12" />
                                        </div>
                                        <div className="div-block-18">
                                            <img src="/images/678506a8ba6d6b33005c4610_brush.png" loading="lazy" alt="" className="image-12" />
                                            <img src="/images/678506a8ba6d6b33005c4610_brush.png" loading="lazy" alt="" className="image-12 hide-desktop" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="w-node-efcd4f7f-4b91-123c-df4a-41d594409e41-6a061703" className="panel">
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
                                        <h2 className="badge_text">Design</h2>
                                    </div>
                                    <div>
                                        All that we create is designed for ease of access and effective communication. Everything we make will act as your brand ambassador and represent you and your brand to your users. No matter how big or small, our designs will be someone’s first impression of you, and we take that seriously.
                                    </div>
                                </div>
                            </div>
                            <div id="w-node-efcd4f7f-4b91-123c-df4a-41d594409e46-6a061703" className="panel">
                                <div className="panel_content">
                                    <div className="services_tags-container">
                                        <div className="heading-small">Interface design</div>
                                        <div className="heading-small">Design branding</div>
                                        <div className="heading-small">Design system</div>
                                        <div className="heading-small">Creative direction</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="services_row">
                            <div id="w-node-b653b598-3b34-57d0-e7a8-886a263e6c8b-6a061703" className="panel">
                                <div className="pattern-wavy red">
                                    <div className="services_hands">
                                        <img src="/images/678506a803cb2d9341193d47_hand-sign-three.png" loading="lazy" alt="" className="services_hand rotated-1" />
                                        <img src="/images/678506a803cb2d9341193d47_hand-sign-three.png" loading="lazy" alt="" className="services_hand rotated-2" />
                                        <img src="/images/678506a803cb2d9341193d47_hand-sign-three.png" loading="lazy" alt="" className="services_hand rotated-3" />
                                        <img src="/images/678506a803cb2d9341193d47_hand-sign-three.png" loading="lazy" alt="" className="services_hand rotated-5" />
                                        <img src="/images/678506a803cb2d9341193d47_hand-sign-three.png" loading="lazy" alt="" className="services_hand rotated-4" />
                                    </div>
                                </div>
                            </div>
                            <div id="w-node-b653b598-3b34-57d0-e7a8-886a263e6c8d-6a061703" className="panel">
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
                                        <h2 className="badge_text">Iteration</h2>
                                    </div>
                                    <div>
                                        We like doing things for you, our client, and taking care of all of the jibber jabber that comes along. From the Q and A, to all of the communications, the last steps of the project, down to the the final hand-off - our job isn’t done until it’s done.
                                    </div>
                                </div>
                            </div>
                            <div id="w-node-b653b598-3b34-57d0-e7a8-886a263e6c92-6a061703" className="panel">
                                <div className="panel_content">
                                    <div className="services_tags-container">
                                        <div className="heading-small">User tests</div>
                                        <div className="heading-small">Optimization</div>
                                        <div className="heading-small">User experience audits</div>
                                        <div className="heading-small">Accessibility analysis</div>
                                    </div>
                                </div>
                            </div>
                        </div>

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
                                            <p>Breakbar Text, don't style, except <em>italics</em></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section_cta">
                        <div id="w-node-_2ef8da5b-542e-c367-d878-a55630445395-6a061703" className="panel">
                            <div className="panel_content">
                                <h2 className="heading-main">Together, we can achieve great things.</h2>
                            </div>
                        </div>
                        <div id="w-node-fdb30d93-1c0b-970d-3127-69cfa112b270-6a061703" className="panel">
                            <div className="panel_content clip">
                                <img src="/images/678521e79255f4dec0bd21d2_letter_hand.png" loading="lazy" alt="" className="cta_img" />
                            </div>
                        </div>
                        <div id="w-node-d18a8b0f-09be-4813-0936-83737f0533c8-6a061703" className="panel">
                            <div className="panel_content">
                                <div>Let’s have coffee. <br />It’s on us!</div>
                            </div>
                        </div>
                        <div id="w-node-_4a66691f-828d-c4b3-c3b6-cb1e82d090d2-6a061703" className="panel">
                            <Link jo-rollinghover-element="button" data-wf--button--variant="base" href="/contact" className="button w-inline-block">
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
                                        <div>Contact us</div>
                                        <div>Contact us</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

            </section>
            <Footer />
        </div>
    );
}
