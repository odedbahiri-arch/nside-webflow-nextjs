'use client';

import ScrollReveal from './ScrollReveal';

const teamMembers = [
  { name: 'Jessica Point', title: 'CEO', image: '/images/Portrait015.jpeg' },
  { name: 'Ryan Baser', title: 'COO', image: '/images/Portrait007.jpeg' },
  { name: 'Carrie Vath', title: 'CMO', image: '/images/Portrait020.jpeg' },
];

export default function TeamGrid() {
  return (
    <div>
      <div className="w-dyn-list">
        <ScrollReveal>
          <div role="list" className="collection-list w-dyn-items">
            {teamMembers.map((member) => (
              <div key={member.name} role="listitem" className="team-collection-item w-dyn-item">
                <div className="project-item">
                  <div className="project-image">
                    <div
                      className="background-image"
                      style={{ backgroundImage: `url('${member.image}')` }}
                    >
                      <div className="image-overlay light-overlay"></div>
                      <div className="card-circle overlay"></div>
                    </div>
                  </div>
                  <div className="project-card-info">
                    <div className="project-info-top team-info">
                      <h3>{member.name}</h3>
                      <div className="subtitle white">{member.title}</div>
                    </div>
                    <div className="project-hover-link-wrapper">
                      <div className="hover-link-wrapper project-view-link">
                        <a href="#" className="hover-link w-inline-block">
                          <div>About</div>
                        </a>
                      </div>
                    </div>
                    <div className="project-info-bottom">
                      <div className="team-social-wrapper">
                        <a href="#" className="team-social-icon w-inline-block">
                          <img src="/images/IG.svg" loading="lazy" alt="Instagram" />
                        </a>
                        <a href="#" className="team-social-icon w-inline-block">
                          <img src="/images/facebook-f.svg" loading="lazy" alt="Facebook" />
                        </a>
                        <a href="#" className="team-social-icon w-inline-block">
                          <img src="/images/linkedin.svg" loading="lazy" alt="LinkedIn" />
                        </a>
                        <a href="#" className="team-social-icon w-inline-block">
                          <img src="/images/YT.svg" loading="lazy" alt="YouTube" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
