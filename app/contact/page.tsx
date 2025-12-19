
'use client';
import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Contact() {
    const [message, setMessage] = useState('');
    const submitRef = useRef<HTMLInputElement>(null);

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    const handleSubmitClick = (e: React.MouseEvent) => {
        e.preventDefault();
        submitRef.current?.click();
    };

    return (
        <div className="page-wrapper">
            <div className="global">
                <div className="embed_css w-embed">
                    <style>
                        {`
            [jo-figma-effect]{position:relative}[jo-figma-effect]:after{content:"";position:absolute;bottom:0;left:20%;width:60%;height:1px;border-radius:50px;background-color:#fff;transform:scaleX(0);transition:transform .1s}[jo-figma-effect].selected:after{transform:scaleX(1)}[jo-figma-element=canvas]:has([contentEditable=true]){cursor:inherit}[jo-figma-element=container] [contentEditable=true]{outline:none}[jo-figma-element=container] [contentEditable=true] h2:hover,[jo-figma-element=container] [contentEditable=true] .body-x-large:hover{outline:1px dotted #78abf7;cursor:text}.panel>.button{flex:1}
            .is-grow-wrap{display:grid}
            .is-grow-wrap:before{content:attr(data-placeholder-value) " ";white-space:pre-wrap;visibility:hidden}
            .is-grow-wrap:after{content:attr(data-replicated-value) " ";white-space:pre-wrap;visibility:hidden}
            .is-grow-wrap>textarea{resize:none;overflow:hidden}
            .is-grow-wrap>textarea,.is-grow-wrap:after,.is-grow-wrap:before{padding:8px 12px;font:inherit;grid-area:1 / 1 / 2 / 2}
            `}
                    </style>
                </div>
                <div id="cursor-label" className="cursor_label">
                    <div>Label</div>
                </div>
            </div>

            <Navbar />

            <section className="content">
                <section id="w-node-_144c66bb-5e06-7c91-519f-b306a7e2a5ac-e93de889" className="main">
                    <section className="section_contact grid-12">
                        <div jo-submitlink-element="wrapper" id="w-node-cc08dd1f-9f20-f98c-b8e1-850da53a3c67-e93de889" className="div-block-11">
                            <div className="panel is-growing">
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
                                        <h2 className="badge_text">Let's connect!</h2>
                                    </div>
                                    <div className="form-block w-form">
                                        <form id="email-form" name="email-form" data-name="Email Form" className="form" aria-label="Email Form">
                                            <label htmlFor="name">Hey, I'm</label>
                                            <input className="text-field w-input" maxLength={256} name="name" data-name="Name" placeholder="Ken" type="text" id="name" required />
                                            <label htmlFor="Message">and I'd like to tell you that</label>
                                            <div
                                                className="is-grow-wrap"
                                                data-placeholder-value="my website needs a total glow-up—right now it’s as bland as beige! Help me jazz it up and make it as cool as my Mojo Dojo Casa. Can you bring the sparkle? "
                                                data-replicated-value={message}
                                            >
                                                <textarea
                                                    id="Message"
                                                    name="Message"
                                                    maxLength={5000}
                                                    data-name="Message"
                                                    placeholder="my website needs a total glow-up—right now it’s as bland as beige! Help me jazz it up and make it as cool as my Mojo Dojo Casa. Can you bring the sparkle? "
                                                    required
                                                    className="text-field is-message-field w-input"
                                                    onChange={handleMessageChange}
                                                    value={message}
                                                ></textarea>
                                            </div>
                                            <label htmlFor="Email">Please reply at</label>
                                            <input className="text-field w-input" maxLength={256} name="Email" data-name="Email" placeholder="just.ken@barbie.com" type="email" id="Email" required />
                                            <input type="submit" ref={submitRef} data-wait="Please wait..." className="submit-button w-button" value="Submit" style={{ display: 'none' }} />
                                        </form>
                                        <div className="success-message w-form-done" tabIndex={-1} role="region" aria-label="Email Form success">
                                            <div className="div-block-30">
                                                <img src="/images/68ad9bd71f31e1e9f3275c8e_Dog.png" loading="lazy" alt="" />
                                                <div className="body-large">Great, let's start cooking!</div>
                                            </div>
                                        </div>
                                        <div className="error-message w-form-fail" tabIndex={-1} role="region" aria-label="Email Form failure">
                                            <div className="div-block-31">
                                                <img src="/images/68adafada79d4cd098042a46_Sad%20baby.png" loading="lazy" alt="" className="image-17" />
                                                <div>Well, that didn't work out… Maybe try again? Or just call us, like in the good old days!</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel">
                                <a onClick={handleSubmitClick} jo-rollinghover-element="button" data-wf--button--variant="base" href="#" className="button w-inline-block">
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
                                            <div>Send message</div>
                                            <div>Send message</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div id="w-node-_2a6684d0-41bf-791b-99ff-9a84230402e5-e93de889" className="panel">
                            <div className="pattern-wavy purple clip">
                                <div className="contact-img-wrapper">
                                    <img src="/images/678521e79255f4dec0bd21d2_letter_hand.png" loading="lazy" alt="" className="contact-img" />
                                </div>
                            </div>
                        </div>
                    </section>

                </section>
            </section>
            <Footer />
        </div>
    );
}
