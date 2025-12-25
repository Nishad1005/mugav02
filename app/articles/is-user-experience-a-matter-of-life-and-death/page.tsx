
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ArticleLifeAndDeath() {
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
                <section id="w-node-_3ec7ec84-946d-3c81-12a3-47e8f36c17be-b56b623d" className="main">
                    <div id="w-node-fe67165b-c912-f4e8-dead-c49cdd8348c4-b56b623d" className="section_article grid-12">
                        <div id="w-node-_0d5f2be1-1b2c-faa1-ac45-db7ec40b1240-b56b623d" className="section_article_metainfo">
                            <div id="w-node-d564e1e5-ca7e-12c8-6efb-9dbf7ff2443d-b56b623d" className="panel">
                                <div className="div-block-13 red">
                                    <div className="pattern-checkered-minimizing pattern-spiral-lightning-thick">
                                        <img src="/images/68cd6d2d86fe0c90ce6ba3d9_Skull.png" loading="lazy" alt="" className="image-6" />
                                    </div>
                                </div>
                            </div>
                            <div id="w-node-b5584f71-ed9d-6347-1ac4-82ffc53565df-b56b623d" className="panel">
                                <div className="panel_content bottom-left">
                                    <div className="heading-small">Björgvin Pétur</div>
                                    <div className="body-small">September 19, 2025</div>
                                </div>
                            </div>
                            <div id="w-node-ec1cac2d-7095-ad6d-2bd4-73c8081add8e-b56b623d" className="panel">
                                <div className="panel_content">
                                    <img src="/images/68d64ced1d39636f24bd0622_image_bjorgvin_noBG.png" loading="lazy" alt="" />
                                </div>
                            </div>
                        </div>
                        <div id="w-node-_448dca18-b9c2-f1b7-3fcd-2e349d41762b-b56b623d" className="panel">
                            <div className="panel_content is-article-title">
                                <h1 className="heading-main">Is User Experience a Matter of Life and Death?</h1>
                            </div>
                        </div>
                        <div id="w-node-_5fc4ee14-556e-2019-ef71-019b5136f355-b56b623d" className="panel">
                            <div className="panel_content">
                                <div className="body-large">When we talk about user experience (UX), most people think of websites, apps, or maybe that one annoying button on their phone they wish worked differently. But UX is much more than pretty screens and smooth clicks — it can be a literal matter of life and death.</div>
                            </div>
                        </div>
                        <div id="w-node-_1ce8926e-519d-4512-fefc-a87f6d464e1e-b56b623d" className="panel">
                            <div className="article_article w-richtext">
                                <h2>What Is UX, Really?</h2>
                                <p>UX covers all the touchpoints and interactions between a person and a company — its services, its products, and its communications. Don Norman, the father of UX, put it best:</p>
                                <p><em>“User experience encompasses all aspects of the end-user’s interaction with the company, its services, and its products.”</em></p>
                                <p>In other words, UX is not just screens and buttons. It’s how easy your product is to find. How clearly it communicates. How well it works. How it makes people feel.</p>
                                <p>Good UX is:</p>
                                <ul role="list">
                                    <li><strong>Useful</strong> – It solves a real problem.</li>
                                    <li><strong>Usable</strong> – It’s simple and intuitive.</li>
                                    <li><strong>Findable</strong> – People can actually discover it.</li>
                                    <li><strong>Accessible</strong> – It works for everyone.</li>
                                    <li><strong>Desirable</strong> – It looks and feels great.</li>
                                    <li><strong>Credible</strong> – People trust it.</li>
                                    <li><strong>Valuable</strong> – It’s worth their time and money.</li>
                                </ul>
                                <p>Sounds straightforward — but as any designer knows, creating something simple is incredibly complex.</p>
                                <figure style={{ maxWidth: '1888px' }} className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                                    <div>
                                        <img src="/images/68cd6f88e0147e3264d4af1a_content.jpg" loading="lazy" alt="" />
                                    </div>
                                </figure>
                                <h2>When UX Goes Wrong</h2>
                                <p>Poor UX is more than just frustrating — it can have real-world consequences.</p>
                                <p>Take Three Mile Island, the site of the worst nuclear accident in U.S. history. Investigations found that the control room interfaces were so confusing they might as well have been designed to fail. As Don Norman observed:</p>
                                <p><em>“The control room and computer interfaces at Three Mile Island could not have been more confusing if they had tried.”</em></p>
                                <p>Bad UX doesn’t always cause nuclear disasters, of course. Most of the time, it just leads to lost sales, frustrated users, and wasted opportunities. But the principle holds: if no one can use your product or service, you won’t make money.</p>
                                <figure style={{ maxWidth: '2202px' }} className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                                    <div>
                                        <img src="/images/68cd6f963eb502d9b0996d89_image%20234.jpg" loading="lazy" alt="" />
                                    </div>
                                </figure>
                                <h2>UX Is Business-Critical</h2>
                                <p>Great design isn’t decoration — it’s survival. If your users can’t complete their tasks, they leave. If they feel frustrated, they switch to competitors. UX is the difference between thriving and disappearing.</p>
                                <p>That’s why we at Jökulá take UX seriously. We don’t just make things look good; we make them work, for real people, in real life — whether that life is about convenience or, in extreme cases, about safety.</p>
                                <h2>Final Thoughts</h2>
                                <p>User experience isn’t a “nice-to-have.” It’s the core of how your product interacts with the world. When done well, it can be invisible — smooth, seamless, even delightful. When done poorly, it’s glaring and, sometimes, dangerous.</p>
                                <p>So yes, UX <em>is</em> a matter of life and death. At least, it’s a matter of whether your product lives or dies.</p>
                                <p>‍</p>
                            </div>
                        </div>
                    </div>

                    <div id="w-node-b78a6535-75a2-96b4-15c1-912c0cae9659-b56b623d" className="section_articles-cta grid-12">
                        <div id="w-node-_0c6ed078-9cd7-b56c-e076-e5de0a2554d3-b56b623d" className="panel">
                            <div className="panel_content top-right">
                                <div className="div-block-9">
                                    <div className="body-large">Do you need help with UX?</div>
                                </div>
                            </div>
                        </div>
                        <div id="w-node-_7cec6a8f-0f3a-3452-4c28-bdda358846d5-b56b623d" className="panel">
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
                        <div id="w-node-_7ae30ef2-e46a-d584-0fbb-f03e14c9fd08-b56b623d" className="panel">
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

                    <div className="section_articles-more grid-12">
                        <div id="w-node-_38696a3d-87b9-b930-bbfa-29aa55022abf-b56b623d" className="panel">
                            <div className="panel_content is-heading">
                                <h2 className="heading-main">Hungry for more?</h2>
                            </div>
                        </div>
                        <div id="w-node-_9f4cbcd0-0a21-c63e-b5ce-1a229c113022-b56b623d" className="panel">
                            <Link jo-rollinghover-element="button" data-wf--button--variant="light" href="/articles" className="button w-variant-32bef84d-cd20-989f-99ee-3f490f3150ef w-inline-block">
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
                                        <div>See all articles</div>
                                        <div>See all articles</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div id="w-node-fa0ec58e-66b5-b20f-bbd2-31c4577119e2-b56b623d" className="w-dyn-list">
                            <div role="list" className="grid-12 w-dyn-items">
                                <div id="w-node-fa0ec58e-66b5-b20f-bbd2-31c4577119e4-b56b623d" role="listitem" className="collection-item-5 w-dyn-item">
                                    <div className="panel">
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
                                <div id="w-node-fa0ec58e-66b5-b20f-bbd2-31c4577119e4-b56b623d" role="listitem" className="collection-item-5 w-dyn-item">
                                    <div className="panel">
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
                                <div id="w-node-fa0ec58e-66b5-b20f-bbd2-31c4577119e4-b56b623d" role="listitem" className="collection-item-5 w-dyn-item">
                                    <div className="panel">
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
                            </div>
                        </div>
                    </div>
                </section>

            </section>
            <Footer />
        </div>
    );
}
