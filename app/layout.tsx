import type { Metadata } from 'next';
import Script from 'next/script';
import { inter, openSans } from './fonts';
import '../styles/normalize.css';
import '../styles/webflow.css';
import '../styles/nside-cloneable-cms-template-db517e.webflow.css';

const wfInteractionStyles = `@media (min-width:992px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="4063be45-b8b3-9a31-cad9-bfe36485df5b"] {-webkit-transform:translate3d(-18px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(-18px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(-18px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(-18px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="1aa5acca-7f49-679e-50b8-388c32a77261"] {-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="1aa5acca-7f49-679e-50b8-388c32a7726f"] {-webkit-transform:translate3d(0vw, 0vw, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0vw, 0vw, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0vw, 0vw, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0vw, 0vw, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);width:6vw;height:6vw;}}`;

const scrollbarStyles = `#scrollbar::-webkit-scrollbar {width:5px;height: 0px;}@media only screen and (max-width: 600px) {#scrollbar::-webkit-scrollbar { width:0px; height: 0px;}}#scrollbar::-webkit-scrollbar-track {background:rgba(243, 246, 252, 0);border-radius:25px;}#scrollbar::-webkit-scrollbar-thumb {background:#e2e7f1;border-radius:25px;}#scrollbar::-webkit-scrollbar-thumb:hover {background: #090b19;}`;

const ix2OverrideStyles = `
/* Override Webflow IX2 animation initial states so content is visible without the IX2 engine */
/* Make scroll-entrance elements visible but preserve hover states */
.project-item[style*="opacity:0"],
.xxl-heading[style*="opacity:0"],
.large-heading[style*="opacity:0"],
.subtitle[style*="opacity:0"],
.button[style*="opacity:0"],
.hero-button-wrapper[style*="opacity:0"],
.card-hover-item[style*="opacity:0"] {
  opacity: 1 !important;
  transform: none !important;
}
/* Do NOT override hover-link-wrapper initial hidden state */
.preloader {
  display: none !important;
}
`;

export const metadata: Metadata = {
  title: 'Home — NSIDE',
  description: 'Interior design that matters. NSIDE innovates the way companies reinvent their office spaces.',
  icons: {
    icon: '/images/favicon.ico',
    apple: '/images/webclip.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${openSans.variable}`}
      data-wf-page="698fcb1e1d61b8c1f168a490"
      data-wf-site="698fcb1d1d61b8c1f168a42a"
    >
      <head>
        <style dangerouslySetInnerHTML={{ __html: wfInteractionStyles }} />
        <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />
        <style dangerouslySetInnerHTML={{ __html: ix2OverrideStyles }} />
      </head>
      <body className={`body ${inter.className}`}>
        {children}
        <Script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=698fcb1d1d61b8c1f168a42a"
          strategy="beforeInteractive"
        />
        <Script src="/js/webflow.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
