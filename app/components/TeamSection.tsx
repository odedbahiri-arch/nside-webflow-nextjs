'use client';

import TeamGrid from './TeamGrid';

export default function TeamSection() {
  return (
    <div className="section">
      <div className="wrapper">
        <div data-w-id="f8995adf-f440-eb1c-b576-c54a6fe6800a" className="tripple-grid">
          <div id="w-node-f8995adf-f440-eb1c-b576-c54a6fe6800c-f168a490" className="intro-wrapper">
            <div className="subtitle-wrapper">
              <div
                style={{
                  transform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)',
                  opacity: 0,
                }}
                className="subtitle"
              >
                Our team
              </div>
            </div>
            <div className="clip">
              <h1
                style={{
                  transform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)',
                  opacity: 0,
                }}
                className="large-heading"
              >
                Behind the design.
              </h1>
            </div>
          </div>
          <div id="w-node-_4aa1e293-2ce7-c7b6-5938-b5dfd439db55-f168a490" className="clip">
            <a
              style={{
                transform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)',
                opacity: 0,
              }}
              href="/team"
              className="button w-inline-block"
            >
              <div className="button-text">Learn about nside</div>
            </a>
          </div>
        </div>
        <TeamGrid />
      </div>
    </div>
  );
}
