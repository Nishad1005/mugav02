import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollableProjects from '@/components/ScrollableProjects';
import FigmaCursors from '@/components/FigmaCursors';
import TeamMembers from '@/components/TeamMembers';
import Locations from '@/components/Locations';
import OurFriends from '@/components/OurFriends';
import FromOurDesk from '@/components/FromOurDesk';

export default function Home() {
  return (
    <>
      <div id="cursor-label" className="cursor_label">
        <div>Label</div>
      </div>
      <Navbar />
      <section className="content">
        <section id="w-node-_9dbd33b2-b873-2b43-ebae-04c0acdf84e1-566aa279" className="main">

          <section className="section_hero">
            <div className="panel space-between">
              <div className="panel_content">
                <h1 className="heading-xlarge">Catchy title goes here*</h1>
                <p className="body-large right-aligned">We craft brands, interfaces, and <br />experiences that people love</p>
              </div>
            </div>
            <div className="panel">
              <div data-wf--breakbar--variant="with-icon" className="breakbar">
                <div jo-marquee-overflowingonly="true" jo-marquee-element="marquee" className="marquee">
                  <div jo-marquee-element="inner" className="div-block-23">
                    <div className="shapeicon break w-variant-d386a7cb-2d4d-8248-7744-2b0b9ea4097d w-embed"><svg
                      width="initial" height="initial" viewBox="0 0 40 40" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_275_1034)">
                        <path
                          d="M39.317 15.7815L38.0424 11.858L25.0584 16.0768L33.0832 5.03198L29.7458 2.60726L21.721 13.6526V0H17.596V13.6526L9.57122 2.60726L6.23434 5.03198L14.2586 16.0768L1.27466 11.858L0 15.7815L12.984 20.0003L0 24.219L1.27466 28.142L14.2586 23.9232L6.23434 34.968L9.57122 37.3927L17.596 26.3479V40H21.721V26.3479L29.7458 37.3927L33.0832 34.968L25.0584 23.9232L38.0424 28.142L39.317 24.219L26.333 20.0003L39.317 15.7815Z"
                          fill="currentColor"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_275_1034">
                          <rect width="40" height="40" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg></div>
                    <div className="rich-text-block w-richtext">
                      <p><em>Probably the hardest part about design...</em></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="section_home-services">
            <section className="panel">
              <div className="panel_content space-home-services">
                <div className="badge">
                  <div className="shapeicon badge_icon w-embed"><svg width="initial" height="initial" viewBox="0 0 40 40"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_275_1048)">
                      <path
                        d="M30 20C35.523 20 40 15.523 40 9.99999C40 4.47698 35.523 0 30 0C24.477 0 20 4.47698 20 9.99999C20 4.47698 15.523 0 10 0C4.477 0 0 4.47698 0 9.99999C0 15.523 4.477 20 10 20C4.477 20 0 24.477 0 30C0 35.523 4.477 40 10 40C15.523 40 20 35.523 20 30C20 35.523 24.477 40 30 40C35.523 40 40 35.523 40 30C40 24.477 35.523 20 30 20Z"
                        fill="currentColor"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_275_1048">
                        <rect width="40" height="40" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg></div>
                  <h2 className="badge_text">What we do</h2>
                </div>
                <div id="w-node-_54bb0a62-eeea-b2e1-df88-9d280aadb30e-566aa279" className="grid-10">
                  <p id="w-node-_07a44edb-cc2a-0e57-1a5c-a0557d290a81-566aa279" className="body-x-large">We create
                    user-friendly solutions that work for your business and are guided by accessibility and performance.
                  </p>
                </div>
                <div className="div-block-14"><img src="images/6784ee14ae836de2352937f3_hamburguer.png" loading="lazy"
                  alt="Sesame seed hamburger bun sandwich with lettuce, tomato, cheese, and beef patty."
                  className="image-8" /><img src="images/6784ee14c8071484d6ca1ffe_beer-glass.png" loading="lazy"
                    alt="Clear glass beer mug filled with dark beer and topped with white foam." className="image-11" /><img
                    src="images/6784ee14a3377e1cdeb671d9_coool-sunglassess.png" loading="lazy"
                    alt="Black sunglasses with large rectangular lenses and glossy finish." className="image-10" /><img
                    src="images/6784ee14e0f527e2cd037d84_tv.png" loading="lazy"
                    alt="Vintage black and gray CRT television with rounded screen and manual dials." className="image-9" /><img
                    src="images/6783bf8e94fd90427a96db89_hand-witch.png" loading="lazy"
                    sizes="(max-width: 558px) 95vw, 531px"
                    srcSet="images/6783bf8e94fd90427a96db89_hand-witch-p-500.png 500w, images/6783bf8e94fd90427a96db89_hand-witch.png 531w"
                    alt="Black and white image of a hand with long nails and multiple rings reaching forward against a black background."
                    className="image-7" /></div>
              </div>
            </section>
            <div className="grid-10 is-tablet-4">
              <section id="w-node-_64abf4aa-cf63-086f-e74e-6e53ba1ea11a-566aa279" className="panel">
                <div className="panel_content bottom-left">
                  <p className="heading-main">Experience is everything</p>
                </div>
              </section>
              <div id="w-node-_4afad4a8-edd9-82f6-481b-4106b1afa60e-566aa279" className="panel">
                <div className="pattern-checkered-minimizing red">
                  <div className="spacer-10"></div>
                </div>
              </div>
              <section id="w-node-_53f655c5-d764-3142-135b-28a2ab05e548-566aa279" className="panel">
                <div className="panel_content">
                  <div className="spacer-10"></div>
                  <p className="right-aligned"><span className="text-span">And everything is an experience.</span><br /><br />That’s
                    why we focus on creating a good experience with a user interface that achieves maximum results.</p>
                </div>
              </section>
              <div id="w-node-_12ea04e2-4381-f246-df7e-4b0fbba3ac14-566aa279" className="panel"><Link
                jo-rollinghover-element="button" data-wf--button--variant="base" href="/services"
                className="button w-inline-block">
                <div className="shapeicon hello w-embed"><svg width="initial" height="initial" viewBox="0 0 40 40"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_275_1034)">
                    <path
                      d="M39.317 15.7815L38.0424 11.858L25.0584 16.0768L33.0832 5.03198L29.7458 2.60726L21.721 13.6526V0H17.596V13.6526L9.57122 2.60726L6.23434 5.03198L14.2586 16.0768L1.27466 11.858L0 15.7815L12.984 20.0003L0 24.219L1.27466 28.142L14.2586 23.9232L6.23434 34.968L9.57122 37.3927L17.596 26.3479V40H21.721V26.3479L29.7458 37.3927L33.0832 34.968L25.0584 23.9232L38.0424 28.142L39.317 24.219L26.333 20.0003L39.317 15.7815Z"
                      fill="currentColor"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_275_1034">
                      <rect width="40" height="40" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg></div>
                <div jo-rollinghover-element="text" className="text-block-5">
                  <div className="jo-rollinghover-text" style={{ '--rollinghover-padding': '32px' } as React.CSSProperties}>
                    <div>Discov­er our pro­cess</div>
                    <div>Discov­er our pro­cess</div>
                  </div>
                </div>
              </Link></div>
            </div>
          </div>


          <div className="section_aboutus">
            <div jo-figma-element="container">
              <div className="panel">
                <TeamMembers />
              </div>
              <div className="panel">
                <div jo-figma-element="canvas" className="panel_content is-figma-container">
                  <div jo-figma-element="text">
                    <div className="badge">
                      <div className="shapeicon badge_icon w-embed"><svg width="initial" height="initial" viewBox="0 0 40 40"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_275_1048)">
                          <path
                            d="M30 20C35.523 20 40 15.523 40 9.99999C40 4.47698 35.523 0 30 0C24.477 0 20 4.47698 20 9.99999C20 4.47698 15.523 0 10 0C4.477 0 0 4.47698 0 9.99999C0 15.523 4.477 20 10 20C4.477 20 0 24.477 0 30C0 35.523 4.477 40 10 40C15.523 40 20 35.523 20 30C20 35.523 24.477 40 30 40C35.523 40 40 35.523 40 30C40 24.477 35.523 20 30 20Z"
                            fill="currentColor"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_275_1048">
                            <rect width="40" height="40" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg></div>
                      <h2 className="badge_text">Who we are</h2>
                    </div>
                  </div>
                  <FigmaCursors />
                  <div jo-figma-element="text" className="grid-10">
                    <div id="w-node-fce5d1ef-2152-181c-0917-c4f5209f732e-566aa279" className="body-x-large">We are a diverse
                      team distributed across 3 timezones</div>
                  </div>
                </div>
              </div>
            </div>
            <Locations />
          </div>
          <div className="section_clients">
            <OurFriends />
          </div>
          <div className="panel"><Link href="/projects" className="breakbar w-inline-block">
            <div jo-marquee-element="marquee" className="marquee --playing" style={{ '--marquee-out': 'translateX(-50%)' } as React.CSSProperties}>
              <div jo-marquee-element="inner" className="marquee_inner">
                {/* ... Marquee inner content ... */}
                <div className="breakbar_all-work">
                  <div className="break-allcaps">See our work</div>
                  <div className="breakbar_divider red"></div>
                </div>
              </div>
            </div>
          </Link></div>
          <div className="section_article-teaser">
            <FromOurDesk />
          </div>
        </section>
        <div className="projects-sidebar-container">
          <ScrollableProjects />
        </div>
      </section>
      <Footer />
    </>
  );
}

