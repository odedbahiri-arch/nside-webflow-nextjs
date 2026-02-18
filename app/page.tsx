import Navbar from './components/Navbar';
import ProjectsGrid from './components/ProjectsGrid';
import TeamSection from './components/TeamSection';

const preloaderContent = `
  <div class="preloader">
    <div class="preloader-middle">
      <div class="left-preloader"></div>
      <div class="middle-preloader">
        <div class="stripe-preloader left"></div>
        <div class="stripe-preloader middle"></div>
        <div class="stripe-preloader right"></div>
      </div>
      <div class="right-preloader"></div>
    </div>
  </div>
`;

const bodyContentBeforeProjects = `
    <div class="stripe-wrapper">
      <div class="wrapper no-padding">
        <div class="stripe-container">
          <div class="pin-stripe hide-horizontal-mobile"></div>
          <div class="pin-stripe hide-tablet"></div>
          <div class="pin-stripe"></div>
          <div class="pin-stripe"></div>
        </div>
      </div>
    </div>
    <div data-w-id="79b87f19-3f60-9142-4d39-aa5e81099a63" class="home-hero">
      <div class="stripe-wrapper">
        <div class="wrapper no-padding">
          <div class="stripe-container">
            <div class="pin-stripe white"></div>
            <div class="pin-stripe white hide-tablet"></div>
            <div class="pin-stripe white hide-horizontal-mobile"></div>
            <div class="pin-stripe white"></div>
          </div>
        </div>
      </div>
      <div class="background-cover">
        <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1.2, 1.2, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1.2, 1.2, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1.2, 1.2, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1.2, 1.2, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="hero-background-image">
          <div class="image-overlay"></div>
        </div>
      </div>
      <div class="grid-wrapper">
        <div id="w-node-dd002ff0-1786-f7aa-b0cb-21b79ffd8f18-f168a490">
          <div class="subtitle white">INSIDE innovation</div>
        </div>
        <div id="w-node-_8e07c8f2-059d-6f6d-2fac-5813639df6f0-f168a490" data-w-id="8e07c8f2-059d-6f6d-2fac-5813639df6f0" class="hover-link-wrapper">
          <a href="#scroll" class="hover-link w-inline-block"><img src="/images/arrow-down24x242x.svg" loading="lazy" width="24" alt="" class="scroll-icon"></a>
        </div>
        <div id="w-node-d71299dc-e2cf-e714-cc8e-cbf4e6f5ae15-f168a490" class="hero-content-wrapper">
          <div>
            <div class="clip">
              <h1 style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);opacity:0" class="xxl-heading one">Interior design</h1>
            </div>
            <div class="clip">
              <h1 style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);opacity:0" class="xxl-heading two">that matters.</h1>
            </div>
          </div>
          <div id="w-node-_991b9d86-d746-6bac-12b8-a27bc65d39a9-f168a490" class="clip">
            <div style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);opacity:0" class="hero-button-wrapper">
              <a href="/contact" class="button white-outline w-inline-block">
                <div class="button-text">Schedule a call</div>
              </a>
            </div>
          </div>
        </div>
        <div id="w-node-c3dc174b-78b2-9eb5-4dbe-d315274a7469-f168a490" class="transparent-fill"></div>
        <div id="w-node-b128c289-fbf9-8a15-41a5-2bcdbae8da0b-f168a490" class="hero-bottom-feature">
          <div class="w-dyn-list">
            <div role="list" class="w-dyn-items">
              <div role="listitem" class="w-dyn-item">
                <a data-w-id="4282c529-e0b4-d272-d2b7-ccf85631c59e" href="/projects/metlife-corporate-space" class="hero-feature-card w-inline-block">
                  <div class="stacked-description">
                    <div class="subtitle">AUSTIN, TEXAS</div>
                    <h4>MetLife Corporate Space</h4>
                  </div><img src="/images/arrow-right48x482x.svg" loading="lazy" data-w-id="4063be45-b8b3-9a31-cad9-bfe36485df5b" id="w-node-_4063be45-b8b3-9a31-cad9-bfe36485df5b-f168a490" alt="" class="list-item-arrow">
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="w-node-d75a5be9-120d-a9cc-09fb-cefd7dff224e-f168a490" class="featured-project-column">
          <div class="rotate-text">Featured</div>
        </div>
      </div>
    </div>
    <div id="scroll" class="section no-verticle-padding clip">
      <div class="wrapper">
        <div class="page-info-ribbon">
          <div id="w-node-c27b363e-e641-8c08-06d3-18a7d9643386-f168a490" class="credits-wrapper">
            <div id="w-node-_66927e21-ee65-d8e1-cc31-2e0bbfb2a5cd-f168a490" class="logos-headline">
              <div class="subtitle small grey">corporate clients</div>
              <div class="horizontal-line"></div>
            </div>
            <div id="w-node-_990b7f6f-cf54-17fa-e0a6-c8d9ae6da3cb-f168a490" class="credit-item"><img src="/images/Logo007.svg" loading="lazy" alt=""></div>
            <div id="w-node-_3e8f31ed-6771-e859-636c-b476dcab981b-f168a490" class="credit-item"><img src="/images/Logo005.svg" loading="lazy" alt=""></div>
            <div id="w-node-_747ab98d-2da9-b9b9-65c3-eaa5259f2fe9-f168a490" class="credit-item"><img src="/images/Logo004.svg" loading="lazy" alt=""></div>
            <div id="w-node-_0f453a3e-66f8-fb3d-0e56-c1cfd80a8551-f168a490" class="credit-item"><img src="/images/Logo006.svg" loading="lazy" alt=""></div>
          </div>
        </div>
      </div>
    </div>
    <div class="section clip">
      <div class="wrapper">
        <div data-w-id="0442c40a-f5dc-0897-a9fb-169a73db4490" class="tripple-grid">
          <div id="w-node-_864b30ac-902a-1bc5-c775-6b8cda770129-f168a490" class="intro-wrapper">
            <div class="subtitle-wrapper">
              <div style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);opacity:0" class="subtitle">Services</div>
            </div>
            <div class="clip">
              <h1 style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);opacity:0" class="large-heading">We do it best.</h1>
            </div>
          </div>
          <div id="w-node-_70edc27a-5d85-b4b7-cc4a-a4055e230b7f-f168a490" class="clip">
            <a style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);opacity:0" href="/services" class="button w-inline-block">
              <div class="button-text">View all services</div>
            </a>
          </div>
        </div>
        <div class="services-grid">
          <div data-w-id="740c604e-5a91-f71f-7b54-c6974b436c83" style="-webkit-transform:translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);-moz-transform:translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);-ms-transform:translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);transform:translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);opacity:0" class="card-hover-item">
            <div class="card-circle"></div>
            <div class="services-card">
              <div class="icon"><img src="/images/list-icon-dark.svg" loading="lazy" alt=""></div>
              <div class="feature-card-info">
                <div class="feature-card-description">
                  <h3 class="heading">Space Planning</h3>
                  <div class="body-display">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna eu pharetra elementum.</div>
                </div>
                <div class="card-button-wrapper">
                  <div class="clip">
                    <a href="/contact" class="button grey-outline small w-inline-block">
                      <div class="button-text">Schedule a call</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-w-id="fc9bc2c3-441c-49e9-3161-c6e9cd50542d" style="-webkit-transform:translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);-moz-transform:translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);-ms-transform:translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);transform:translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);opacity:0" class="card-hover-item">
            <div class="card-circle"></div>
            <div class="services-card">
              <div class="icon"><img src="/images/filters-icon-dark.svg" loading="lazy" alt=""></div>
              <div class="feature-card-info">
                <div class="feature-card-description">
                  <h3 class="heading">Custom Furniture</h3>
                  <div class="body-display">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna eu pharetra elementum.</div>
                </div>
                <div class="card-button-wrapper">
                  <div class="clip">
                    <a href="/contact" class="button grey-outline small w-inline-block">
                      <div class="button-text">Schedule a call</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-w-id="d3404f02-a3e3-7279-5052-cdcdd7aa3af9" style="-webkit-transform:translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);-moz-transform:translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);-ms-transform:translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);transform:translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);opacity:0" class="card-hover-item">
            <div class="card-circle"></div>
            <div class="services-card">
              <div class="icon"><img src="/images/dashboard-2-icon-dark.svg" loading="lazy" alt=""></div>
              <div class="feature-card-info">
                <div class="feature-card-description">
                  <h3>Furniture Layouts</h3>
                  <div class="body-display">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna eu pharetra elementum.</div>
                </div>
                <div class="card-button-wrapper">
                  <div class="clip">
                    <a href="/contact" class="button grey-outline small w-inline-block">
                      <div class="button-text">Schedule a call</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-w-id="6651cf14-b9da-58c6-2040-d964bb6c7371" class="section video-section">
      <div class="wrapper">
        <div class="dual-wrapper">
          <div class="video-info">
            <div id="w-node-d56ca079-049b-55b7-0bb4-65c2201bf821-f168a490">
              <div class="subtitle white">About nside</div>
            </div>
            <div class="client-quote">
              <h1 class="large-heading">We&#x27;re innovating the way companies reinvent their office spaces for the remote workforce.</h1>
              <div class="client-quote-credit">
                <div class="subtitle white">JESSICA POINT, CEO</div>
              </div>
            </div>
            <div data-w-id="14230aae-f25e-c1ee-6f5d-8c96461b913a" class="hover-link-wrapper video-link-wrapper">
              <a href="#" class="hover-link w-inline-block w-lightbox"><img src="/images/play24x242x.svg" loading="lazy" width="24" alt="" class="scroll-icon">
                <script type="application/json" class="w-json">{
  "items": [
    {
      "url": "https://youtube.com/watch?v=eh4dWMtULrg",
      "originalUrl": "https://youtube.com/watch?v=eh4dWMtULrg",
      "width": 940,
      "height": 528,
      "thumbnailUrl": "https://i.ytimg.com/vi/eh4dWMtULrg/hqdefault.jpg",
      "html": "<iframe class=\\"embedly-embed\\" src=\\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Feh4dWMtULrg%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Deh4dWMtULrg&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Feh4dWMtULrg%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube\\" width=\\"940\\" height=\\"528\\" scrolling=\\"no\\" title=\\"YouTube embed\\" frameborder=\\"0\\" allow=\\"autoplay; fullscreen\\" allowfullscreen=\\"true\\"></iframe>",
      "type": "video"
    }
  ],
  "group": ""
}</script>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="background-cover">
        <div class="background-banner video-banner">
          <div class="image-overlay"></div>
        </div>
        <div class="stripe-wrapper">
          <div class="wrapper no-padding">
            <div class="stripe-container">
              <div class="pin-stripe white"></div>
              <div class="pin-stripe white hide-tablet"></div>
              <div class="pin-stripe white hide-horizontal-mobile"></div>
              <div class="pin-stripe white"></div>
            </div>
          </div>
        </div>
      </div>
      <div style="height:100%" class="section-bottom-cover">
        <div class="stripe-wrapper">
          <div class="wrapper no-padding">
            <div class="stripe-container">
              <div class="pin-stripe hide-horizontal-mobile"></div>
              <div class="pin-stripe hide-tablet"></div>
              <div class="pin-stripe"></div>
              <div class="pin-stripe"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-w-id="e2699792-c77d-89e0-17cb-721eef36642c" class="section no-bottom-padding clip">
      <div class="wrapper">
        <div class="banner-wrapper">
          <div class="stripe-wrapper">
            <div class="wrapper no-padding">
              <div class="stripe-container">
                <div class="pin-stripe white"></div>
                <div class="pin-stripe white hide-tablet"></div>
                <div class="pin-stripe white hide-horizontal-mobile"></div>
                <div class="pin-stripe white"></div>
              </div>
            </div>
          </div>
          <div class="banner-content">
            <div class="banner-intro">
              <div>
                <div class="subtitle-wrapper clip">
                  <div class="subtitle white">Explore our work</div>
                </div>
                <div class="clip">
                  <h1 style="-webkit-transform:translate3d(0, 150%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(null, 7deg);-moz-transform:translate3d(0, 150%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(null, 7deg);-ms-transform:translate3d(0, 150%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(null, 7deg);transform:translate3d(0, 150%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(null, 7deg);opacity:0" class="large-heading">See what we can do together.</h1>
                </div>
              </div>
              <div id="w-node-be149a0b-6298-faa0-2b2f-e4e9152cb286-f168a490" class="clip">
                <a href="/projects" class="button white-outline w-inline-block">
                  <div class="button-text">View All Projects</div>
                </a>
              </div>
            </div>
            <div class="background-banner projects-banner">
              <div class="image-overlay"></div>
            </div>
          </div>
          <div class="image-cover-wrapper">
            <div style="width:100%" class="image-cover"></div>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="project-categories-wrapper">
          <div style="height:auto;padding-top:0" class="banner-categories">
            <div class="category-collection-list-wrapper">
              <div role="list" class="categories-grid">
                <div role="listitem" class="category-collection-item">
                  <div class="card-hover-item">
                    <div class="card-circle white"></div>
                    <a href="/services#space-planning" class="category-link w-inline-block">
                      <div class="subtitle">Space Planning</div>
                    </a>
                  </div>
                </div>
                <div role="listitem" class="category-collection-item">
                  <div class="card-hover-item">
                    <div class="card-circle white"></div>
                    <a href="/services#custom-furniture" class="category-link w-inline-block">
                      <div class="subtitle">Custom Furniture</div>
                    </a>
                  </div>
                </div>
                <div role="listitem" class="category-collection-item">
                  <div class="card-hover-item">
                    <div class="card-circle white"></div>
                    <a href="/services#furniture-layouts" class="category-link w-inline-block">
                      <div class="subtitle">Furniture Layouts</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
`;

const bodyContentAfterProjects = `
    <div class="section no-verticle-padding dark">
      <div class="wrapper">
        <div class="testimonial-wrapper">
          <div data-delay="4000" data-animation="fade" class="testimonial-slider w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="true" data-autoplay-limit="0" data-nav-spacing="3" data-duration="0" data-infinite="true">
            <div class="w-slider-mask">
              <div class="testimonial-slide w-slide">
                <div class="testimonial-content">
                  <div id="w-node-a2f09074-2040-5038-c74e-4369d77c8856-f168a490" class="testimonial-column testimonial-image">
                    <div class="background-image testimonial-003">
                      <div class="image-overlay"></div>
                    </div>
                  </div>
                  <div id="w-node-a2f09074-2040-5038-c74e-4369d77c8859-f168a490" class="testimonial-column testimonial-name">
                    <div>
                      <div class="clip"><h1 class="large-heading one">Samantha</h1></div>
                      <div class="clip"><h1 class="large-heading two">Vohnhale</h1></div>
                    </div>
                    <div id="w-node-a2f09074-2040-5038-c74e-4369d77c8861-f168a490" class="clip">
                      <div class="subtitle white">San Francisco, California</div>
                    </div>
                  </div>
                  <div id="w-node-a2f09074-2040-5038-c74e-4369d77c8864-f168a490" class="testimonial-column testimonial-description">
                    <div class="clip">
                      <div class="body-display white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna eu pharetra elementum. Suspendisse potenti.<br><br>Vestibulum ut quam luctus, pharetra dui sed, rutrum felis. Vestibulum tellus ipsum, rhoncus sed suscipit a, eleifend in.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="testimonial-slide w-slide">
                <div class="testimonial-content">
                  <div id="w-node-_4f60ef0f-3908-f7a3-dbd4-1c535b280b76-f168a490" class="testimonial-column testimonial-image">
                    <div class="background-image testimonial-004"><div class="image-overlay"></div></div>
                  </div>
                  <div id="w-node-_4f60ef0f-3908-f7a3-dbd4-1c535b280b79-f168a490" class="testimonial-column testimonial-name">
                    <div>
                      <div class="clip"><h1 class="large-heading one">Wilson</h1></div>
                      <div class="clip"><h1 class="large-heading two">Tomales</h1></div>
                    </div>
                    <div id="w-node-_4f60ef0f-3908-f7a3-dbd4-1c535b280b81-f168a490" class="clip">
                      <div class="subtitle white">New York, New York</div>
                    </div>
                  </div>
                  <div id="w-node-_4f60ef0f-3908-f7a3-dbd4-1c535b280b84-f168a490" class="testimonial-column testimonial-description">
                    <div class="clip">
                      <div class="body-display white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna eu pharetra elementum. Suspendisse potenti.<br><br>Vestibulum ut quam luctus, pharetra dui sed, rutrum felis. Vestibulum tellus ipsum, rhoncus sed suscipit a, eleifend in.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="testimonial-slide w-slide">
                <div class="testimonial-content">
                  <div id="w-node-_8f986286-6be5-7fda-4809-b0f5bd562441-f168a490" class="testimonial-column testimonial-image">
                    <div class="background-image testimonial-001"><div class="image-overlay"></div></div>
                  </div>
                  <div id="w-node-_8f986286-6be5-7fda-4809-b0f5bd562444-f168a490" class="testimonial-column testimonial-name">
                    <div>
                      <div class="clip"><h1 class="large-heading one">Tammy</h1></div>
                      <div class="clip"><h1 class="large-heading two">Georgeon</h1></div>
                    </div>
                    <div id="w-node-_8f986286-6be5-7fda-4809-b0f5bd56244c-f168a490" class="clip">
                      <div class="subtitle white">Miami, Florida</div>
                    </div>
                  </div>
                  <div id="w-node-_8f986286-6be5-7fda-4809-b0f5bd56244f-f168a490" class="testimonial-column testimonial-description">
                    <div class="clip">
                      <div class="body-display white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna eu pharetra elementum. Suspendisse potenti.<br><br>Vestibulum ut quam luctus, pharetra dui sed, rutrum felis. Vestibulum tellus ipsum, rhoncus sed suscipit a, eleifend in.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="testimonial-slide w-slide">
                <div class="testimonial-content">
                  <div id="w-node-_55b430a6-fcdd-50cc-dc29-08e683d81333-f168a490" class="testimonial-column testimonial-image">
                    <div class="background-image testimonial-005"><div class="image-overlay"></div></div>
                  </div>
                  <div id="w-node-_55b430a6-fcdd-50cc-dc29-08e683d81336-f168a490" class="testimonial-column testimonial-name">
                    <div>
                      <div class="clip"><h1 class="large-heading one">Emily</h1></div>
                      <div class="clip"><h1 class="large-heading two">Camphon</h1></div>
                    </div>
                    <div id="w-node-_55b430a6-fcdd-50cc-dc29-08e683d8133e-f168a490" class="clip">
                      <div class="subtitle white">Austin, Texas</div>
                    </div>
                  </div>
                  <div id="w-node-_55b430a6-fcdd-50cc-dc29-08e683d81341-f168a490" class="testimonial-column testimonial-description">
                    <div class="clip">
                      <div class="body-display white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna eu pharetra elementum. Suspendisse potenti.<br><br>Vestibulum ut quam luctus, pharetra dui sed, rutrum felis. Vestibulum tellus ipsum, rhoncus sed suscipit a, eleifend in.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="testimonial-slide w-slide">
                <div class="testimonial-content">
                  <div id="w-node-_3850b16f-a2a0-2373-1b72-c7e1f76395e0-f168a490" class="testimonial-column testimonial-image">
                    <div class="background-image testimonial-002"><div class="image-overlay"></div></div>
                  </div>
                  <div id="w-node-_3850b16f-a2a0-2373-1b72-c7e1f76395e3-f168a490" class="testimonial-column testimonial-name">
                    <div>
                      <div class="clip"><h1 class="large-heading one">Cassie</h1></div>
                      <div class="clip"><h1 class="large-heading two">Shamath</h1></div>
                    </div>
                    <div id="w-node-_3850b16f-a2a0-2373-1b72-c7e1f76395eb-f168a490" class="clip">
                      <div class="subtitle white">Los Angeles, California</div>
                    </div>
                  </div>
                  <div id="w-node-_3850b16f-a2a0-2373-1b72-c7e1f76395ee-f168a490" class="testimonial-column testimonial-description">
                    <div class="clip">
                      <div class="body-display white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna eu pharetra elementum. Suspendisse potenti.<br><br>Vestibulum ut quam luctus, pharetra dui sed, rutrum felis. Vestibulum tellus ipsum, rhoncus sed suscipit a, eleifend in.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="testimonial-arrow w-slider-arrow-left">
              <div class="rotate-text no-rotate-on-mobile">Previous</div>
            </div>
            <div class="testimonial-arrow right-arrow w-slider-arrow-right">
              <div class="rotate-text no-rotate-on-mobile">Next</div>
            </div>
            <div class="slider-dots w-slider-nav w-round"></div>
          </div>
        </div>
      </div>
      <div class="stripe-wrapper">
        <div class="wrapper no-padding">
          <div class="stripe-container">
            <div class="pin-stripe white"></div>
            <div class="pin-stripe white hide-tablet"></div>
            <div class="pin-stripe white hide-horizontal-mobile"></div>
            <div class="pin-stripe white"></div>
          </div>
        </div>
      </div>
    </div>
    <div data-w-id="2db516f2-b446-bb59-0d56-ba4cbbc6a808" class="section no-horizontal-padding">
      <div class="grid-wrapper">
        <div class="stripe-wrapper">
          <div class="wrapper no-padding">
            <div class="stripe-container">
              <div class="pin-stripe white"></div>
              <div class="pin-stripe white hide-tablet"></div>
              <div class="pin-stripe white hide-horizontal-mobile"></div>
              <div class="pin-stripe white"></div>
            </div>
          </div>
        </div>
        <div id="w-node-f0c63057-7c7c-2a90-b49b-0a201e7e42b3-f168a490" class="newsletter-wrapper">
          <div id="w-node-_86d8087c-f402-31b5-d612-f055e8856137-f168a490" class="newsletter-intro">
            <div>
              <div class="subtitle-wrapper">
                <div class="subtitle">Newsletter</div>
              </div>
              <div class="clip">
                <h2 class="large-heading">Everything interior design in your inbox.</h2>
              </div>
            </div>
            <div id="w-node-_9e302ef9-a044-afc5-3392-3585167ef4fb-f168a490" class="checklist">
              <div class="checklist-item">
                <div id="w-node-c401ca72-aae4-9c20-edba-400cc2545a1a-f168a490" class="checklist-icon"><img src="/images/check24x242x.svg" loading="lazy" width="12" alt=""></div>
                <div id="w-node-_158353d8-f5c3-bf30-52a2-714256d40766-f168a490" class="body-display">Odio error vel autem et ut earum</div>
              </div>
              <div class="checklist-item">
                <div id="w-node-fa1f8cec-23d9-cc72-cc5a-6169aabb1732-f168a490" class="checklist-icon"><img src="/images/check24x242x.svg" loading="lazy" width="12" alt=""></div>
                <div id="w-node-fa1f8cec-23d9-cc72-cc5a-6169aabb1733-f168a490" class="body-display">Odio error vel autem et ut earum</div>
              </div>
              <div class="checklist-item">
                <div id="w-node-_9fb60b98-6b85-1cf8-84f5-4c9583a249af-f168a490" class="checklist-icon"><img src="/images/check24x242x.svg" loading="lazy" width="12" alt=""></div>
                <div id="w-node-_9fb60b98-6b85-1cf8-84f5-4c9583a249b0-f168a490" class="body-display">Odio error vel autem et ut earum</div>
              </div>
            </div>
          </div>
          <div id="w-node-_91bc64b8-353b-a94a-b0a2-353d8cfc61b5-f168a490" class="form-block w-form">
            <form id="email-form" name="email-form" data-name="Email Form" method="get" class="newsletter-form-wrapper" data-wf-page-id="698fcb1e1d61b8c1f168a490" data-wf-element-id="91bc64b8-353b-a94a-b0a2-353d8cfc61b6">
              <div id="w-node-_16d65def-c5d5-fd1d-5298-95653be6a9a3-f168a490" class="form-column">
                <div class="sticky-services-menu">
                  <div class="service-menu-list white"><label class="radio-item w-radio">
                      <div class="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-node-_93871b0e-b4be-09b5-05fe-cb47e8639aea-f168a490 w-radio-input"></div><input type="radio" data-name="Radio" id="radio" name="radio" style="opacity:0;position:absolute;z-index:-1" value="Radio"><span id="w-node-_93871b0e-b4be-09b5-05fe-cb47e8639aeb-f168a490" class="list-item-text w-form-label" for="radio">Weekly</span>
                    </label><label class="radio-item w-radio">
                      <div class="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-node-af714f2c-c722-46c7-fb15-8967bc04065b-f168a490 w-radio-input"></div><input type="radio" data-name="Radio 4" id="radio-4" name="radio" style="opacity:0;position:absolute;z-index:-1" value="Radio"><span id="w-node-af714f2c-c722-46c7-fb15-8967bc04065c-f168a490" class="list-item-text w-form-label" for="radio-4">Bi-weekly</span>
                    </label><label id="w-node-bd4c12fa-0d2a-1a7a-7e67-7e82535f682e-f168a490" class="radio-item w-radio">
                      <div class="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-node-bd4c12fa-0d2a-1a7a-7e67-7e82535f682f-f168a490 w-radio-input"></div><input type="radio" data-name="Radio 5" id="radio-5" name="radio" style="opacity:0;position:absolute;z-index:-1" value="Radio"><span id="w-node-bd4c12fa-0d2a-1a7a-7e67-7e82535f6830-f168a490" class="list-item-text w-form-label" for="radio-5">Monthly</span>
                    </label></div>
                </div>
              </div>
              <div class="form-column right">
                <div class="form">
                  <div class="field-wrapper"><label for="name" id="w-node-_91bc64b8-353b-a94a-b0a2-353d8cfc61b7-f168a490" class="field-label">Name</label><input class="text-field light w-node-_91bc64b8-353b-a94a-b0a2-353d8cfc61b9-f168a490 w-input" maxlength="256" name="name" data-name="Name" placeholder="First name" type="text" id="name"><input class="text-field light w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="Last name" type="text" id="name-2"></div>
                  <div class="field-wrapper"><label for="email" id="w-node-_91bc64b8-353b-a94a-b0a2-353d8cfc61ba-f168a490" class="field-label">Email Address</label><input class="text-field light w-node-_91bc64b8-353b-a94a-b0a2-353d8cfc61bc-f168a490 w-input" maxlength="256" name="email" data-name="Email" placeholder="Your email" type="email" id="email" required=""></div><input type="submit" data-wait="Please wait..." id="w-node-_91bc64b8-353b-a94a-b0a2-353d8cfc61bd-f168a490" class="submit-button white w-button" value="Subscribe">
                </div>
              </div>
              <div id="w-node-_686199a2-7e08-8c35-0bc2-9fc0b2c1f7c2-f168a490" class="list-heading-wrapper">
                <div class="subtitle white">Frequency</div>
              </div>
            </form>
            <div class="utility-message w-form-done">
              <div class="success-wrapper dark">
                <h2 class="large-heading">Thank you!</h2>
                <div class="body-display white">You&#x27;re subscribed to the NSIDE Newsletter.</div>
              </div>
            </div>
            <div class="error-message w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
        <div id="w-node-bffc60b2-ad33-2b9a-4184-6b56bb9d8cc8-f168a490" data-w-id="bffc60b2-ad33-2b9a-4184-6b56bb9d8cc8" class="dark-cover">
          <div class="background-banner newsletter-banner">
            <div class="newsletter-overlay"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="wrapper">
        <div data-w-id="1aa5acca-7f49-679e-50b8-388c32a77250" class="tripple-grid">
          <div id="w-node-_1aa5acca-7f49-679e-50b8-388c32a77251-f168a490" class="intro-wrapper">
            <div class="subtitle-wrapper">
              <div style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);opacity:0" class="subtitle">Recent Posts</div>
            </div>
            <div class="clip">
              <h1 style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);opacity:0" class="large-heading">What&#x27;s new?</h1>
            </div>
          </div>
          <div id="w-node-_1aa5acca-7f49-679e-50b8-388c32a77258-f168a490" class="clip">
            <a style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg);opacity:0" href="/news" class="button w-inline-block">
              <div class="button-text">View all posts</div>
            </a>
          </div>
        </div>
        <div class="tripple-grid">
          <div id="w-node-_1aa5acca-7f49-679e-50b8-388c32a7725d-f168a490" class="collection-list-wrapper w-dyn-list">
            <div role="list" class="featured-news-list w-dyn-items">
              <div id="w-node-_1aa5acca-7f49-679e-50b8-388c32a7725f-f168a490" data-w-id="1aa5acca-7f49-679e-50b8-388c32a7725f" style="-webkit-transform:translate3d(0, 15vh, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 5deg);-moz-transform:translate3d(0, 15vh, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 5deg);-ms-transform:translate3d(0, 15vh, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 5deg);transform:translate3d(0, 15vh, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 5deg);opacity:0" role="listitem" class="collection-list-item w-dyn-item">
                <div class="blog-card-image-wrapper">
                  <div data-w-id="1aa5acca-7f49-679e-50b8-388c32a77261" class="background-image" style="background-image:url('/images/Space006.jpeg')">
                    <div class="image-overlay"></div>
                    <div data-w-id="1aa5acca-7f49-679e-50b8-388c32a77263" class="hover-link-wrapper project-view-link">
                      <a href="#" class="hover-link w-inline-block">
                        <div>Read</div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="post-card-info">
                  <a href="#" class="post-card-description w-inline-block">
                    <div id="w-node-_1aa5acca-7f49-679e-50b8-388c32a77269-f168a490" class="stacked-description">
                      <h4>5 Principles Of Effective Web Design</h4>
                      <div class="body-display">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                    <div class="subtitle grey">Floor Plans</div>
                    <div id="w-node-_1aa5acca-7f49-679e-50b8-388c32a7726e-f168a490" class="subtitle grey">4.5.21</div>
                  </a>
                  <div data-w-id="1aa5acca-7f49-679e-50b8-388c32a7726f" class="card-circle"></div>
                </div>
              </div>
              <div data-w-id="post-card-2" role="listitem" class="collection-list-item w-dyn-item">
                <div class="blog-card-image-wrapper">
                  <div data-w-id="post-card-2-bg" class="background-image" style="background-image:url('/images/Space008.jpeg')">
                    <div class="image-overlay"></div>
                    <div data-w-id="post-card-2-hover" class="hover-link-wrapper project-view-link">
                      <a href="#" class="hover-link w-inline-block">
                        <div>Read</div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="post-card-info">
                  <a href="#" class="post-card-description w-inline-block">
                    <div class="stacked-description">
                      <h4>Why We Love Webflow (And You Should, Too!)</h4>
                      <div class="body-display">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                    <div class="subtitle grey">Interior</div>
                    <div class="subtitle grey">3.18.21</div>
                  </a>
                  <div data-w-id="post-card-2-circle" class="card-circle"></div>
                </div>
              </div>
              <div data-w-id="post-card-3" role="listitem" class="collection-list-item w-dyn-item">
                <div class="blog-card-image-wrapper">
                  <div data-w-id="post-card-3-bg" class="background-image" style="background-image:url('/images/Space002.jpeg')">
                    <div class="image-overlay"></div>
                    <div data-w-id="post-card-3-hover" class="hover-link-wrapper project-view-link">
                      <a href="#" class="hover-link w-inline-block">
                        <div>Read</div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="post-card-info">
                  <a href="#" class="post-card-description w-inline-block">
                    <div class="stacked-description">
                      <h4>7 Things About Web Design Your Boss Wants To Know</h4>
                      <div class="body-display">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                    <div class="subtitle grey">Organization</div>
                    <div class="subtitle grey">4.5.21</div>
                  </a>
                  <div data-w-id="post-card-3-circle" class="card-circle"></div>
                </div>
              </div>
              <div data-w-id="post-card-4" role="listitem" class="collection-list-item w-dyn-item">
                <div class="blog-card-image-wrapper">
                  <div data-w-id="post-card-4-bg" class="background-image" style="background-image:url('/images/Space012.jpeg')">
                    <div class="image-overlay"></div>
                    <div data-w-id="post-card-4-hover" class="hover-link-wrapper project-view-link">
                      <a href="#" class="hover-link w-inline-block">
                        <div>Read</div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="post-card-info">
                  <a href="#" class="post-card-description w-inline-block">
                    <div class="stacked-description">
                      <h4>The Worst Advice We&#x27;ve Ever Heard About Web Design</h4>
                      <div class="body-display">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                    <div class="subtitle grey">Floor Plans</div>
                    <div class="subtitle grey">4.5.21</div>
                  </a>
                  <div data-w-id="post-card-4-circle" class="card-circle"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-_1aa5acca-7f49-679e-50b8-388c32a77273-f168a490" class="services-menu-wrapper grey">
            <div class="sticky-services-menu">
              <div class="list-heading-wrapper">
                <div class="subtitle">Popular categories</div>
              </div>
              <div class="w-dyn-list">
                <div role="list" class="service-menu-list w-dyn-items">
                  <div role="listitem" class="w-dyn-item">
                    <a href="#" class="menu-list-item w-inline-block">
                      <div class="list-item-text">Furniture</div><img src="/images/arrow-right48x482x.svg" loading="lazy" alt="" class="list-item-arrow">
                    </a>
                  </div>
                  <div role="listitem" class="w-dyn-item">
                    <a href="#" class="menu-list-item w-inline-block">
                      <div class="list-item-text">Remote Spaces</div><img src="/images/arrow-right48x482x.svg" loading="lazy" alt="" class="list-item-arrow">
                    </a>
                  </div>
                  <div role="listitem" class="w-dyn-item">
                    <a href="#" class="menu-list-item w-inline-block">
                      <div class="list-item-text">Office Tech</div><img src="/images/arrow-right48x482x.svg" loading="lazy" alt="" class="list-item-arrow">
                    </a>
                  </div>
                  <div role="listitem" class="w-dyn-item">
                    <a href="#" class="menu-list-item w-inline-block">
                      <div class="list-item-text">Floor Plans</div><img src="/images/arrow-right48x482x.svg" loading="lazy" alt="" class="list-item-arrow">
                    </a>
                  </div>
                  <div role="listitem" class="w-dyn-item">
                    <a href="#" class="menu-list-item w-inline-block">
                      <div class="list-item-text">Organization</div><img src="/images/arrow-right48x482x.svg" loading="lazy" alt="" class="list-item-arrow">
                    </a>
                  </div>
                  <div role="listitem" class="w-dyn-item">
                    <a href="#" class="menu-list-item w-inline-block">
                      <div class="list-item-text">Interior Design</div><img src="/images/arrow-right48x482x.svg" loading="lazy" alt="" class="list-item-arrow">
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="services-menu-hide-cover">
              <div class="wrapper">
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-w-id="c6a86f47-145d-b8c8-1c44-2b43c426b91d" class="footer-section">
      <div class="wrapper">
        <div class="footer-wrapper">
          <div id="w-node-c6a86f47-145d-b8c8-1c44-2b43c426b920-c426b91d" class="stacked-description">
            <h1>NSIDE.</h1>
          </div>
          <div id="w-node-c6a86f47-145d-b8c8-1c44-2b43c426b923-c426b91d" class="stacked-description">
            <div class="subtitle white" style="margin-left: -8px;">Follow us</div>
            <div class="service-menu-list white">
              <a href="https://www.instagram.com/tycreated/" target="_blank" class="menu-list-item white small w-inline-block">
                <div class="team-social-icon small"><img src="/images/IG.svg" loading="lazy" alt=""></div>
                <div id="w-node-c6a86f47-145d-b8c8-1c44-2b43c426b929-c426b91d">@nside</div><img src="/images/arrow-right-white48x482x.svg" loading="lazy" id="w-node-_9528b6cc-5881-ac46-ac4f-f9567a600aa3-c426b91d" alt="" class="list-item-arrow">
              </a>
              <a href="https://twitter.com/Tycreated" target="_blank" class="menu-list-item white small w-inline-block">
                <div class="team-social-icon small"><img src="/images/facebook-f.svg" loading="lazy" alt=""></div>
                <div id="w-node-c6a86f47-145d-b8c8-1c44-2b43c426b92d-c426b91d">@nside</div><img src="/images/arrow-right-white48x482x.svg" loading="lazy" id="w-node-_3ba5fc0d-00d1-0032-83ee-52ea90be55fb-c426b91d" alt="" class="list-item-arrow">
              </a>
              <a href="https://twitter.com/Tycreated" target="_blank" class="menu-list-item white small w-inline-block">
                <div class="team-social-icon small"><img src="/images/linkedin.svg" loading="lazy" alt=""></div>
                <div id="w-node-c6a86f47-145d-b8c8-1c44-2b43c426b931-c426b91d">@nside</div><img src="/images/arrow-right-white48x482x.svg" loading="lazy" id="w-node-d7478ca7-7861-03a0-e2af-d807b17707c6-c426b91d" alt="" class="list-item-arrow">
              </a>
              <a href="https://twitter.com/Tycreated" target="_blank" class="menu-list-item white small w-inline-block">
                <div class="team-social-icon small"><img src="/images/YT.svg" loading="lazy" alt=""></div>
                <div id="w-node-c6a86f47-145d-b8c8-1c44-2b43c426b935-c426b91d">@nside</div><img src="/images/arrow-right-white48x482x.svg" loading="lazy" id="w-node-_7efe9b07-839d-97d2-24ef-14c8a804e1f9-c426b91d" alt="" class="list-item-arrow">
              </a>
            </div>
          </div>
          <div id="w-node-c6a86f47-145d-b8c8-1c44-2b43c426b937-c426b91d" class="stacked-description">
            <div class="subtitle white">Navigation</div>
            <div class="service-menu-list white">
              <a href="/team" class="menu-list-item white w-inline-block">
                <div id="w-node-c6a86f47-145d-b8c8-1c44-2b43c426b93c-c426b91d" class="list-item-text">Team</div><img src="/images/arrow-right-white48x482x.svg" loading="lazy" id="w-node-eaf30d13-d8b4-446b-d7d2-d527e95fa99a-c426b91d" alt="" class="list-item-arrow">
              </a>
              <a href="/projects" class="menu-list-item white w-inline-block">
                <div id="w-node-c6a86f47-145d-b8c8-1c44-2b43c426b93f-c426b91d" class="list-item-text">Projects</div><img src="/images/arrow-right-white48x482x.svg" loading="lazy" id="w-node-_6e84a20c-5fdf-34ef-f5da-11af0219cea5-c426b91d" alt="" class="list-item-arrow">
              </a>
              <a href="/services" class="menu-list-item white w-inline-block">
                <div id="w-node-c6a86f47-145d-b8c8-1c44-2b43c426b942-c426b91d" class="list-item-text">Services</div><img src="/images/arrow-right-white48x482x.svg" loading="lazy" id="w-node-_800e5816-2ed2-cae5-269d-04a046bc20b0-c426b91d" alt="" class="list-item-arrow">
              </a>
              <a href="/news" class="menu-list-item white w-inline-block">
                <div id="w-node-c6a86f47-145d-b8c8-1c44-2b43c426b945-c426b91d" class="list-item-text">News</div><img src="/images/arrow-right-white48x482x.svg" loading="lazy" id="w-node-_47bab92c-8f85-cc70-5380-573db90b0da1-c426b91d" alt="" class="list-item-arrow">
              </a>
              <a href="/contact" class="menu-list-item white w-inline-block">
                <div id="w-node-c6a86f47-145d-b8c8-1c44-2b43c426b948-c426b91d" class="list-item-text">Contact</div><img src="/images/arrow-right-white48x482x.svg" loading="lazy" id="w-node-f9bea813-e527-c7ca-8e20-11a3cd4098db-c426b91d" alt="" class="list-item-arrow">
              </a>
            </div>
          </div>
          <div id="w-node-c6a86f47-145d-b8c8-1c44-2b43c426b94a-c426b91d" class="about-description">
            <h4>About us</h4>
            <div class="body-display white">Mauris accumsan urna eu pharetra elementum. Suspendisse potenti.Vestibulum ut quam luctus, pharetra dui sed, rutrum felis. Vestibulum tellus ipsum, rhoncus sed suscipit a, eleifend in. Vestibulum ut quam luctus, pharetra dui sed, rutrum felis.</div>
          </div>
          <div id="w-node-c6a86f47-145d-b8c8-1c44-2b43c426b94f-c426b91d" class="footer-credits">
            <div>&copy; 2021 NSIDE. All rights reserved.</div>
          </div>
        </div>
      </div>
      <div class="stripe-wrapper">
        <div class="wrapper no-padding">
          <div class="stripe-container">
            <div class="pin-stripe white"></div>
            <div class="pin-stripe white hide-tablet"></div>
            <div class="pin-stripe white hide-horizontal-mobile"></div>
            <div class="pin-stripe white"></div>
          </div>
        </div>
      </div>
    </div>
`;

const moreProjectsContent = `
  <div class="more-projects-wrapper in-page">
    <div class="project-gallery-wrapper">
      <div class="grid-wrapper projects-search">
        <div id="w-node-_397244f1-6d58-8f51-019c-f7e5a2b1e41a-f9270e17" class="project-discovery-wrapper">
          <div id="w-node-_849e754c-a02b-b240-b303-2bf5e8a0db81-f9270e17" class="project-discovery-cover two"></div>
          <div id="w-node-a30333d2-032c-03e5-f1b1-a5d31eb7f5e4-f9270e17" class="gallery-items-wrapper">
            <div class="project-discovery-list">
              <div class="gallery-heading">
                <h3 class="heading-2">Explore our work</h3>
              </div>
              <div id="scrollbar" class="project-search-collection w-dyn-list">
                <div role="list" class="project-search-items w-dyn-items">
                  <div role="listitem" class="project-search-collection-item w-dyn-item">
                    <a href="#" class="menu-list-item discovery-item w-inline-block">
                      <div id="w-node-c47dbc6c-9b93-d53a-3ac5-94688c374a85-f9270e17" class="stacked-description short">
                        <div class="list-item-text subtitle grey w-dyn-bind-empty"></div>
                        <div class="list-item-text w-dyn-bind-empty"></div>
                      </div><img src="/images/arrow-right48x482x.svg" loading="lazy" id="w-node-_6ad8919c-2309-2a37-80a2-1e0756464dfe-f9270e17" alt="" class="list-item-arrow">
                    </a>
                  </div>
                </div>
                <div class="w-dyn-empty">
                  <div>No items found.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="w-node-_24909537-2aef-fa73-cf08-5d19c7632e15-f9270e17" class="project-discovery-cover one"></div>
        <div class="project-gallery-overlay"></div>
      </div>
      <div class="more-projects-wrapper">
        <div class="grid-wrapper fixed">
          <div id="w-node-a30333d2-032c-03e5-f1b1-a5d31eb7f5f0-f9270e17" data-w-id="a30333d2-032c-03e5-f1b1-a5d31eb7f5f0" class="fly-out-button on-click">
            <div id="w-node-a30333d2-032c-03e5-f1b1-a5d31eb7f5f1-f9270e17" class="projects-lottie-wrapper">
              <div data-is-ix2-target="1" class="projects-lottie" data-w-id="a30333d2-032c-03e5-f1b1-a5d31eb7f5f2" data-animation-type="lottie" data-src="/documents/Project-open-dropdown.json" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="2.4791666666666665" data-duration="0" data-ix2-initial-state="0"></div>
            </div>
            <div id="w-node-a30333d2-032c-03e5-f1b1-a5d31eb7f5f3-f9270e17" class="subtitle">Discover projects</div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-wrapper project-discovery-grid">
      <div id="w-node-c1267971-e98a-4887-2b61-4f4973f4569f-f9270e17" class="discovery-button-wrapper">
        <div id="w-node-_93ff6921-d28d-6640-4312-da6eaaed889e-f9270e17" class="fly-out-button-wrapper">
          <div data-w-id="fc177a8e-c247-e188-8355-4c56f9270e19" class="fly-out-button off-click">
            <div id="w-node-fc177a8e-c247-e188-8355-4c56f9270e1a-f9270e17" class="projects-lottie-wrapper">
              <div data-is-ix2-target="1" class="projects-lottie" data-w-id="fc177a8e-c247-e188-8355-4c56f9270e1b" data-animation-type="lottie" data-src="/documents/Project-open-dropdown.json" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="2.4791666666666665" data-duration="0" data-ix2-initial-state="0"></div>
            </div>
            <div id="w-node-fc177a8e-c247-e188-8355-4c56f9270e1c-f9270e17" class="subtitle">Discover projects</div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

const newsletterSectionStart = '    <div data-w-id="2db516f2-b446-bb59-0d56-ba4cbbc6a808" class="section no-horizontal-padding">';
const [bodyContentBeforeTeam, bodyContentAfterTeam] = bodyContentAfterProjects.split(newsletterSectionStart);

export default function HomePage() {
  return (
    <div style={{ display: 'contents' }}>
      <div dangerouslySetInnerHTML={{ __html: preloaderContent }} />
      <Navbar />
      <div className="page-wrapper">
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: bodyContentBeforeProjects }} />
        <ProjectsGrid />
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: bodyContentBeforeTeam }} />
        <TeamSection />
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: newsletterSectionStart + bodyContentAfterTeam }} />
      </div>
      <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: moreProjectsContent }} />
    </div>
  );
}
