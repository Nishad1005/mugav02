
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Projects() {
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
                <section id="w-node-_893eb31f-b1e3-8ef2-a32a-6c9c6a1e38ef-4d09e6b8" className="section_projects-header">
                    <div className="panel">
                        <div className="panel_content is-article-title">
                            <div className="body-x-large">We create disruptive brandings, problem-solving websites, and some sleek apps for the world's biggest brands.</div>
                        </div>
                    </div>
                </section>

                <div id="work-column-right" className="work-column w-node-_94cff1f6-4902-901f-d9a1-8f26a150173e-4d09e6b8">
                    <div className="panel">
                        <Link jo-cursor-label="University of Iceland" href="/projects/hi-website" className="w-inline-block">
                            <img width="Auto" data-cursor-label="University of Iceland" alt="" loading="eager" src="/images/68cae63c83367e4c3b2a23f1_HI.webp" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="Volcano Express" href="/projects/volcano-express" className="w-inline-block">
                            <img width="Auto" data-cursor-label="Volcano Express" alt="Close up view of the hover effect for the &quot;Buy Tickets&quot; CTA in the main navigation." loading="eager" src="/images/68d29f318f588205b50d7f79_jokulavolcanoexpresswebsitethumbnail03.webp" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="Viska" href="/projects/viska" className="w-inline-block">
                            <img width="Auto" data-cursor-label="Viska" alt="" loading="eager" src="/images/68da8c466b40d56c88a9d15a_next01.webp" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="Þétt" href="/projects/thett" className="w-inline-block">
                            <img width="Auto" data-cursor-label="Þétt" alt="Þétt branded mockup of membrane glue tubes on black background, featuring black and neon green graphics." loading="eager" src="/images/68d3f3ecd676526e85ad086a_Thumbnail2.jpg" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="Asembla" href="/projects/asembla" className="w-inline-block">
                            <img width="Auto" data-cursor-label="Asembla" alt="" loading="eager" src="/images/68d656d4e365b6c73b341984_project-07.webp" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="SVEF" href="/projects/svef" className="w-inline-block">
                            <img width="Auto" data-cursor-label="SVEF" alt="" loading="eager" src="/images/68cae63cfbee380cfdfb62d7_Project-08.webp" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="National Hospital" href="/projects/lsh" className="w-inline-block">
                            <img width="Auto" data-cursor-label="National Hospital" alt="" loading="eager" src="/images/68cae63c0212d3597a844f4f_next-01.webp" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="Björninn Hockey team" href="/projects/bjorninn" className="w-inline-block">
                            <img width="Auto" data-cursor-label="Björninn Hockey team" alt="" loading="eager" src="/images/68cae63d150c88395c694a0f_2T6A4471.webp" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="Gefum Saman" href="/projects/gefum-saman" className="w-inline-block">
                            <img width="Auto" data-cursor-label="Gefum Saman" alt="" loading="eager" src="/images/68cae63d848606a701db3ec7_jokula-fagkaup-gefum-saman-03.webp" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="Fuglar" href="/projects/fuglar" className="w-inline-block">
                            <img width="Auto" data-cursor-label="Fuglar" alt="" loading="eager" src="/images/68cae63cca5c9415ef8bcaa1_Next-project-01.webp" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="Orkan" href="/projects/orkan" className="w-inline-block">
                            <img width="Auto" data-cursor-label="Orkan" alt="" loading="eager" src="/images/68cbcc9e85c8e478bd5e1e22_thumbnail.webp" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="Fróðleiksfúsi" href="/projects/frodleiksfusi" className="w-inline-block">
                            <img width="Auto" data-cursor-label="Fróðleiksfúsi" alt="" loading="eager" src="/images/68ca7a53243ab3a027f77278_jokula-frodleiksfusi-04.webp" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="Ölgerðin" href="/projects/olgerdin" className="w-inline-block">
                            <img width="Auto" data-cursor-label="Ölgerðin" alt="" loading="eager" src="/images/69037fa868ec8f9ea6d93721_jokula-olgerdin-homepage-thumbnail-03.webp" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="Fly Fishing Bar" href="/projects/fly-fishing-bar" className="w-inline-block">
                            <img width="Auto" data-cursor-label="Fly Fishing Bar" alt="" loading="eager" src="/images/68d5615ff2d8332c6ee3d47b_Next02.webp" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="Advania" href="/projects/advania-co2" className="w-inline-block">
                            <img width="Auto" data-cursor-label="Advania" alt="" loading="eager" src="/images/68cae63c5a2a960410bb6d8d_Project-06.webp" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="Nova" href="/projects/nova-app" className="w-inline-block">
                            <img width="Auto" data-cursor-label="Nova" alt="" loading="eager" src="/images/68cac1da7fdde0cd1c584f17_thumbnails-01.webp" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="The Pirate Party" href="/projects/piratar" className="w-inline-block">
                            <img width="Auto" data-cursor-label="The Pirate Party" alt="Purple Píratar logo on a light purple background. " loading="eager" src="/images/68d42b51b8d75e202c8d8763_Thumbnail-02.webp" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="Volcano Express" href="/projects/volcano-express" className="w-inline-block">
                            <img width="Auto" data-cursor-label="Volcano Express" alt="Mockup of minimal lava animation used in the web experience." loading="eager" src="/images/68d29f311c05c55115334383_jokulavolcanoexpresswebsitethumbnail01.webp" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="Ölgerðin" href="/projects/olgerdin" className="w-inline-block">
                            <img width="Auto" data-cursor-label="Ölgerðin" alt="" loading="eager" src="/images/68f8ce577bab8b71a452bd88_jokula-olgerdin-homepage-thumbnail.webp" className="work-image" />
                        </Link>
                    </div>
                </div>

                <div id="work-column-left" className="work-column w-node-cd4919e5-88cf-e364-0409-97599bb945b6-4d09e6b8">
                    <div className="panel">
                        <Link jo-cursor-label="Ræktum vitið" href="/projects/raektum-vitid" className="w-inline-block">
                            <img width="Auto" data-cursor-label="Ræktum vitið" alt="" loading="eager" src="/images/68ca9489b81bbe1f7d34e0c8_Project-12.webp" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="Fly Fishing Bar" href="/projects/fly-fishing-bar" className="w-inline-block">
                            <img width="Auto" data-cursor-label="Fly Fishing Bar" alt="" loading="eager" src="/images/68d5616172998641762495aa_Next01.webp" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="Ölgerðin" href="/projects/olgerdin" className="w-inline-block">
                            <img width="Auto" data-cursor-label="Ölgerðin" alt="" loading="eager" src="/images/69037fa82b5a1d11467b0a95_jokula-olgerdin-homepage-thumbnail-02.webp" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="Token Express" href="/projects/token-express" className="w-inline-block">
                            <img width="Auto" data-cursor-label="Token Express" alt="" loading="eager" src="/images/68cae63c9522733829aa517a_Home-thumbnail-1.webp" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="Volcano Express" href="/projects/volcano-express" className="w-inline-block">
                            <img width="Auto" data-cursor-label="Volcano Express" alt="Volcanic eruption at night with lava flows, smoke, and intense flames under sky." loading="eager" src="/images/68d29f328bc2c15d108e71de_jokulavolcanoexpresswebsitethumbnail02.webp" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="Nova Design System" href="/projects/konfetti" className="w-inline-block">
                            <img width="Auto" data-cursor-label="Nova Design System" alt="" loading="eager" src="/images/68cbeac15aecaf12fafc0133_ThumbnailHome.jpg" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="The Pirate Party" href="/projects/piratar" className="w-inline-block">
                            <img width="Auto" data-cursor-label="The Pirate Party" alt="Colorful enamel pins feature smiley faces and Icelandic phrases in vibrant purple, pink, and yellow hues." loading="eager" src="/images/68d42b527ff905ffd3452da0_webthumbnail-01.webp" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="Þétt" href="/projects/thett" className="w-inline-block">
                            <img width="Auto" data-cursor-label="Þétt" alt="Black traffic conde icon on a neon green background." loading="eager" src="/images/68d3f3ec9b39b13485226320_Thumbnail1.jpg" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="Svef" href="/projects/svef" className="w-inline-block">
                            <img width="Auto" data-cursor-label="Svef" alt="" loading="eager" src="/images/68cad1f84267478dc2633c3a_Project-03.webp" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="Walmart" href="/projects/walmart" className="w-inline-block">
                            <img width="Auto" data-cursor-label="Walmart" alt="" loading="eager" src="/images/68cae63b3eb41e4b5015ab4a_jokula-walmart-websolution-thumbnail-01.webp" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="Vörður" href="/projects/vordur-design-system" className="w-inline-block">
                            <img width="Auto" data-cursor-label="Vörður" alt="" loading="eager" src="/images/68caaca6e6ba82688db594ee_Thumbnail.webp" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="Elko" href="/projects/elko" className="w-inline-block">
                            <img width="Auto" data-cursor-label="Elko" alt="" loading="eager" src="/images/68cae63c8c6b5e4df8d3336c_homepage-thumbnail-05%20%282_3%29.webp" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="Nóri" href="/projects/nori" className="w-inline-block">
                            <img width="Auto" data-cursor-label="Nóri" alt="" loading="eager" src="/images/68cae63c6034542f19071610_homepage-thumbnail-01%20%281_1%29.webp" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="Asembla" href="/projects/asembla" className="w-inline-block">
                            <img width="Auto" data-cursor-label="Asembla" alt="" loading="eager" src="/images/68d656d4a9fcef78318f8b86_Thumbnail-06.webp" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="Viska" href="/projects/viska" className="w-inline-block">
                            <img width="Auto" data-cursor-label="Viska" alt="" loading="eager" src="/images/68da8c461a09fc0b7caa70a9_Project01.webp" className="work-image" />
                        </Link>
                    </div>
                    <div className="panel">
                        <Link jo-cursor-label="Synia" href="/projects/synia" className="w-inline-block">
                            <img width="Auto" data-cursor-label="Synia" alt="" loading="eager" src="/images/68cae63ce86df86370add231_jokula-branding-synia-startup-next-thumbnail-01.webp" className="work-image" />
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
