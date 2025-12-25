
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Articles() {
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
                <section id="w-node-_38ec06f7-c567-1c3a-95ed-d135ef4f6481-15c23c3d" className="main">
                    <section className="section_hero">
                        <div className="panel is-hero-img">
                            <div className="panel_content bottom-left">
                                <h1 className="heading-main">What's up?</h1>
                            </div>
                        </div>
                        <div className="collection-list-wrapper-2 w-dyn-list">
                            <div role="list" className="collection-list-6 w-dyn-items">
                                <div role="listitem" className="collection-item-6 w-dyn-item">
                                    <Link jo-cursor-label="Read it" href="/articles/is-user-experience-a-matter-of-life-and-death" className="grid-12 is-hero-text w-inline-block">
                                        <div id="w-node-_38ec06f7-c567-1c3a-95ed-d135ef4f6486-15c23c3d" className="panel space-between">
                                            <div className="red">
                                                <div className="pattern-checkered-minimizing pattern-spiral-lightning-thick">
                                                    <img src="/images/68cd6d2d86fe0c90ce6ba3d9_Skull.png" loading="lazy" alt="" className="article_title-img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div id="w-node-_38ec06f7-c567-1c3a-95ed-d135ef4f648d-15c23c3d" className="panel">
                                            <div className="panel_content bottom-left">
                                                <div className="heading-medium">Is User Experience a Matter of Life and Death?</div>
                                            </div>
                                        </div>
                                        <div id="w-node-_58cbc67a-7972-f16e-6bd1-f246b0e6e558-15c23c3d" className="panel hide-desktop">
                                            <div data-wf--button-no-link--variant="light" className="button w-variant-c194ae5d-d169-e5c2-83c4-d7836b9a07a9">
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
                                                <div className="text-block-5">Read It</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
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
                                            <p>“Lorem ipsum” placeholder text has been in use since the 1500s — it’s older than Iceland’s independence.</p>
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
                                            <p>“Lorem ipsum” placeholder text has been in use since the 1500s — it’s older than Iceland’s independence.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="w-dyn-list">
                        <div role="list" className="section_articles w-dyn-items">
                            <div role="listitem" className="collection-item-4 w-dyn-item">
                                <div className="panel is-growing">
                                    <Link href="/articles/why-you-shouldnt-skip-skip-navigation" className="card w-inline-block">
                                        <div className="card_article_thumbnail green">
                                            <div className="pattern-boxy-spiral pattern-mario-cart">
                                                <div className="card_article_image-wrapper">
                                                    <img src="/images/68cd6c6e0476ea03f5b8675b_Traffic%20Light.png" loading="lazy" alt="" className="card_article_image" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card_text">
                                            <div className="card_main">Why you shouldn’t skip ‘Skip navigation’</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div role="listitem" className="collection-item-4 w-dyn-item">
                                <div className="panel is-growing">
                                    <Link href="/articles/what-does-our-eye-scanner-do" className="card w-inline-block">
                                        <div className="card_article_thumbnail yellow">
                                            <div className="pattern-boxy-spiral pattern-rounded-spiral">
                                                <div className="card_article_image-wrapper">
                                                    <img src="/images/68cd6bc2154cca5f963ef4a3_Eye%20-%20surprised.png" loading="lazy" alt="" className="card_article_image" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card_text">
                                            <div className="card_main">What does our eye scanner do?</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div role="listitem" className="collection-item-4 w-dyn-item">
                                <div className="panel is-growing">
                                    <Link href="/articles/does-online-accessibility-matter" className="card w-inline-block">
                                        <div className="card_article_thumbnail">
                                            <div className="pattern-boxy-spiral">
                                                <div className="card_article_image-wrapper">
                                                    <img src="/images/68cd6ba56944ad9b7e8c5916_Rubix.png" loading="lazy" alt="" className="card_article_image" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card_text">
                                            <div className="card_main">Does online accessibility matter?</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div role="listitem" className="collection-item-4 w-dyn-item">
                                <div className="panel is-growing">
                                    <Link href="/articles/in-defense-of-whitespace" className="card w-inline-block">
                                        <div className="card_article_thumbnail green">
                                            <div className="pattern-boxy-spiral pattern-herringbone">
                                                <div className="card_article_image-wrapper">
                                                    <img src="/images/68cd6b3b761fb67a320d3258_Hand%20-%20with%20phone.png" loading="lazy" alt="" className="card_article_image" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card_text">
                                            <div className="card_main">In defense of whitespace</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div role="listitem" className="collection-item-4 w-dyn-item">
                                <div className="panel is-growing">
                                    <Link href="/articles/chatbots-in-wrong-jobs" className="card w-inline-block">
                                        <div className="card_article_thumbnail pink">
                                            <div className="pattern-boxy-spiral pattern-spiral-lightning-thin">
                                                <div className="card_article_image-wrapper">
                                                    <img src="/images/68cd6ab85da08820b2b72194_Robot.png" loading="lazy" alt="" className="card_article_image" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card_text">
                                            <div className="card_main">Chatbots in wrong jobs</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div role="listitem" className="collection-item-4 w-dyn-item">
                                <div className="panel is-growing">
                                    <Link href="/articles/the-10-accessibility-heuristics" className="card w-inline-block">
                                        <div className="card_article_thumbnail yellow">
                                            <div className="pattern-boxy-spiral pattern-boxy-spiral">
                                                <div className="card_article_image-wrapper">
                                                    <img src="/images/68cc29a701c76db83be4dff3_top10.png" loading="lazy" alt="" className="card_article_image" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card_text">
                                            <div className="card_main">The 10 Accessibility Heuristics</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div role="listitem" className="collection-item-4 w-dyn-item">
                                <div className="panel is-growing">
                                    <Link href="/articles/words-used-by-only-web-designers" className="card w-inline-block">
                                        <div className="card_article_thumbnail red">
                                            <div className="pattern-boxy-spiral pattern-wavy">
                                                <div className="card_article_image-wrapper">
                                                    <img src="/images/68c95b2ca4b5417495031bde_Mouth%20-%20gasp.png" loading="lazy" alt="" className="card_article_image" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card_text">
                                            <div className="card_main">Words used by only web designers</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div role="listitem" className="collection-item-4 w-dyn-item">
                                <div className="panel is-growing">
                                    <Link href="/articles/behind-the-scenes-of-vordur-design-system" className="card w-inline-block">
                                        <div className="card_article_thumbnail yellow">
                                            <div className="pattern-boxy-spiral pattern-spiral-stripes">
                                                <div className="card_article_image-wrapper">
                                                    <img src="/images/68c95a85d0fc7ffcd1ad2d6a_Old%20tv.png" loading="lazy" alt="" className="card_article_image" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card_text">
                                            <div className="card_main">Behind the scenes of Vörður design system</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div role="listitem" className="collection-item-4 w-dyn-item">
                                <div className="panel is-growing">
                                    <Link href="/articles/are-we-forgetting-reality" className="card w-inline-block">
                                        <div className="card_article_thumbnail green">
                                            <div className="pattern-boxy-spiral pattern-swirl">
                                                <div className="card_article_image-wrapper">
                                                    <img src="/images/68c95957445f1e7ec4c51cce_Bruno.png" loading="lazy" alt="" className="card_article_image" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card_text">
                                            <div className="card_main">Are we forgetting reality?</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div role="listitem" className="collection-item-4 w-dyn-item">
                                <div className="panel is-growing">
                                    <Link href="/articles/what-is-ux-and-what-does-it-mean" className="card w-inline-block">
                                        <div className="card_article_thumbnail blue">
                                            <div className="pattern-boxy-spiral pattern-checkered-large">
                                                <div className="card_article_image-wrapper">
                                                    <img src="/images/68c9586ce0f2d9372b8dfbcd_whatisux.png" loading="lazy" alt="" className="card_article_image" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card_text">
                                            <div className="card_main">What is UX and what does it mean?</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </section>
            <Footer />
        </div>
    );
}
