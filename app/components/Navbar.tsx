'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const TEAM_MEMBERS = [
  { name: 'Jessica Point', role: 'CEO' },
  { name: 'Ryan Baser', role: 'COO' },
  { name: 'Carrie Vath', role: 'CMO' },
];

const PROJECT_CATEGORIES = [
  { name: 'Space Planning', href: '/projects' },
  { name: 'Custom Furniture', href: '/projects' },
  { name: 'Furniture Layouts', href: '/projects' },
];

const NEWS_CATEGORIES = [
  { name: 'Furniture', href: '/news' },
  { name: 'Remote Spaces', href: '/news' },
  { name: 'Office Tech', href: '/news' },
];

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="menu-lottie" style={{ width: 24, height: 24, position: 'relative' }}>
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="close-x"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="2" y1="2" x2="18" y2="18" />
              <line x1="18" y1="2" x2="2" y2="18" />
            </svg>
          </motion.div>
        ) : (
          <motion.div
            key="hamburger"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <span
              style={{
                position: 'absolute',
                left: 0,
                top: 4,
                width: '100%',
                height: 2,
                backgroundColor: 'currentColor',
                borderRadius: 1,
              }}
            />
            <span
              style={{
                position: 'absolute',
                left: 0,
                top: 11,
                width: '100%',
                height: 2,
                backgroundColor: 'currentColor',
                borderRadius: 1,
              }}
            />
            <span
              style={{
                position: 'absolute',
                left: 0,
                top: 18,
                width: '100%',
                height: 2,
                backgroundColor: 'currentColor',
                borderRadius: 1,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DropdownArrow({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </motion.div>
  );
}

function MobileDropdown({
  title,
  children,
  isTop = false,
}: {
  title: string;
  children: React.ReactNode;
  isTop?: boolean;
}) {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={`dropdown w-dropdown ${isTop ? 'top' : ''}`}>
      <button
        type="button"
        className="dropdown-toggle w-dropdown-toggle"
        onClick={() => setOpen(!isOpen)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left' }}
      >
        <div className="body-display dark">{title}</div>
        <div className="dropdown-lottie">
          <DropdownArrow isOpen={isOpen} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="dropdown-list w-dropdown-list"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            {children}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isMenuOpen]);

  return (
    <div role="banner" className="navbar w-nav">
      <div className="wrapper navbar-wrapper">
        <div className="left-navbar">
          <Link href="/" aria-current="page" className="brand w-nav-brand w--current">
            <div>NSIDE.</div>
          </Link>
          <button
            type="button"
            className="full-menu-button"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <HamburgerIcon isOpen={isMenuOpen} />
          </button>
        </div>
        <div className="menu-wrapper">
          <nav role="navigation" className="nav-menu w-nav-menu">
            <div className="navigation-links">
              <Link href="/services" className="nav-link w-inline-block">
                <div className="button-text">Services</div>
                <div className="nav-link-hover-button" />
              </Link>
              <Link href="/projects" className="nav-link w-inline-block">
                <div className="button-text">Projects</div>
                <div className="nav-link-hover-button" />
              </Link>
              <Link href="/contact" className="nav-link bottom w-inline-block">
                <div className="button-text">Contact</div>
                <div className="nav-link-hover-button" />
              </Link>
            </div>
          </nav>
          <div className="w-nav-button">
            <div className="w-icon-nav-menu" />
          </div>
          <div className="navigation-cover" />
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                key="mega-menu"
                className="mega-menu"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ overflow: 'hidden', display: 'block' }}
              >
                <div className="large-menu-wrapper">
                  <div id="w-node-_17c43587-c790-b4d8-1466-5f40336b9d5b-336b9d43" className="projects-search-wrapper">
                    <div id="w-node-_17c43587-c790-b4d8-1466-5f40336b9d5d-336b9d43" className="search-wrapper">
                      <form action="/search" className="search w-form" method="get">
                        <input
                          className="search-input w-input"
                          maxLength={256}
                          name="query"
                          placeholder="Search projects…"
                          type="search"
                          id="search"
                          required
                        />
                        <input type="submit" className="search-button w-button" value="Search" />
                      </form>
                    </div>
                    <div id="w-node-_6fe66bf6-22c6-7c4b-e980-c09ffd4740ae-336b9d43" className="mega-social-wrapper">
                      <div className="team-social-wrapper">
                        <a href="https://www.instagram.com/tycreated/" target="_blank" rel="noopener noreferrer" className="team-social-icon outline w-inline-block">
                          <Image src="/images/IG.svg" alt="Instagram" width={24} height={24} loading="lazy" />
                        </a>
                        <a href="https://twitter.com/Tycreated" target="_blank" rel="noopener noreferrer" className="team-social-icon outline w-inline-block">
                          <Image src="/images/facebook-f.svg" alt="Facebook" width={24} height={24} loading="lazy" />
                        </a>
                        <a href="https://twitter.com/Tycreated" target="_blank" rel="noopener noreferrer" className="team-social-icon outline w-inline-block">
                          <Image src="/images/linkedin.svg" alt="LinkedIn" width={24} height={24} loading="lazy" />
                        </a>
                        <a href="https://twitter.com/Tycreated" target="_blank" rel="noopener noreferrer" className="team-social-icon outline w-inline-block">
                          <Image src="/images/YT.svg" alt="YouTube" width={24} height={24} loading="lazy" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div id="w-node-_16738520-6de8-1fcc-6cbc-d48e45d42b91-336b9d43" className="mega-category-list">
                    <div className="stacked-description horizontal">
                      <div className="subtitle">Our team</div>
                      <Link href="/team" className="button grey-outline small w-inline-block">
                        <div className="button-text">About us</div>
                      </Link>
                    </div>
                    <div>
                      <div className="mega-menu-list-wrapper w-dyn-items">
                        {TEAM_MEMBERS.map((member) => (
                          <div key={member.name} role="listitem" className="menu-collection-list-item w-dyn-item">
                            <Link href="/team" className="post-list-item category-list-item w-inline-block">
                              <div className="stacked-description horizontal">
                                <div className="list-item-text">{member.name}</div>
                                <div className="subtitle">{member.role}</div>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div id="w-node-_17c43587-c790-b4d8-1466-5f40336b9d61-336b9d43" className="mega-category-list middle">
                    <div className="stacked-description horizontal">
                      <div className="subtitle">Project Categories</div>
                      <Link href="/projects" className="button grey-outline small w-inline-block">
                        <div className="button-text">View all</div>
                      </Link>
                    </div>
                    <div>
                      <div className="mega-menu-list-wrapper w-dyn-items">
                        {PROJECT_CATEGORIES.map((cat) => (
                          <div key={cat.name} role="listitem" className="menu-collection-list-item w-dyn-item">
                            <Link href={cat.href} className="post-list-item category-list-item w-inline-block">
                              <div className="stacked-description">
                                <div className="list-item-text">{cat.name}</div>
                              </div>
                              <Image src="/images/arrow-right48x482x.svg" alt="" width={24} height={24} loading="lazy" className="list-item-arrow" />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div id="w-node-e16c4357-004d-8209-e100-36bb04545bd4-336b9d43" className="mega-category-list">
                    <div className="stacked-description horizontal">
                      <div className="subtitle">News Categories</div>
                      <Link href="/news" className="button grey-outline small w-inline-block">
                        <div className="button-text">View all</div>
                      </Link>
                    </div>
                    <div>
                      <div className="mega-menu-list-wrapper w-dyn-items">
                        {NEWS_CATEGORIES.map((cat) => (
                          <div key={cat.name} role="listitem" className="menu-collection-list-item w-dyn-item">
                            <Link href={cat.href} className="post-list-item category-list-item w-inline-block">
                              <div className="stacked-description">
                                <div className="list-item-text">{cat.name}</div>
                              </div>
                              <Image src="/images/arrow-right48x482x.svg" alt="" width={24} height={24} loading="lazy" className="list-item-arrow" />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div id="w-node-d364a0a1-eed2-cc02-8c38-c72be241387a-336b9d43" className="tablet-mobile-menu">
                    <MobileDropdown title="Our team" isTop>
                      <div className="mega-menu-list-wrapper w-dyn-items">
                        {TEAM_MEMBERS.map((member) => (
                          <div key={member.name} role="listitem" className="menu-collection-list-item w-dyn-item">
                            <Link href="/team" className="post-list-item category-list-item w-inline-block">
                              <div className="stacked-description horizontal">
                                <div className="list-item-text">{member.name}</div>
                                <div className="subtitle">{member.role}</div>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                      <Link href="/team" className="post-list-item category-list-item w-inline-block">
                        <div>About us</div>
                        <Image src="/images/arrow-right48x482x.svg" alt="" width={24} height={24} loading="lazy" className="list-item-arrow" />
                      </Link>
                    </MobileDropdown>
                    <MobileDropdown title="Project categories">
                      <div className="mega-menu-list-wrapper w-dyn-items">
                        {PROJECT_CATEGORIES.map((cat) => (
                          <div key={cat.name} role="listitem" className="menu-collection-list-item w-dyn-item">
                            <Link href={cat.href} className="post-list-item category-list-item w-inline-block">
                              <div className="stacked-description">
                                <div className="list-item-text">{cat.name}</div>
                              </div>
                              <Image src="/images/arrow-right48x482x.svg" alt="" width={24} height={24} loading="lazy" className="list-item-arrow" />
                            </Link>
                          </div>
                        ))}
                      </div>
                      <Link href="/projects" className="post-list-item category-list-item w-inline-block">
                        <div>View all</div>
                        <Image src="/images/arrow-right48x482x.svg" alt="" width={24} height={24} loading="lazy" className="list-item-arrow" />
                      </Link>
                    </MobileDropdown>
                    <MobileDropdown title="News categories">
                      <div className="mega-menu-list-wrapper w-dyn-items">
                        {NEWS_CATEGORIES.map((cat) => (
                          <div key={cat.name} role="listitem" className="menu-collection-list-item w-dyn-item">
                            <Link href={cat.href} className="post-list-item category-list-item w-inline-block">
                              <div className="stacked-description">
                                <div className="list-item-text">{cat.name}</div>
                              </div>
                              <Image src="/images/arrow-right48x482x.svg" alt="" width={24} height={24} loading="lazy" className="list-item-arrow" />
                            </Link>
                          </div>
                        ))}
                      </div>
                      <Link href="/news" className="post-list-item category-list-item w-inline-block">
                        <div>View all</div>
                        <Image src="/images/arrow-right48x482x.svg" alt="" width={24} height={24} loading="lazy" className="list-item-arrow" />
                      </Link>
                    </MobileDropdown>
                  </div>

                  <div id="w-node-be6e1212-c8c8-b564-9d2f-b92422ca9045-336b9d43" className="tablet-mobile-nav-links">
                    <div className="navigation-links">
                      <Link href="/services" className="nav-link w-inline-block">
                        <div className="button-text">Services</div>
                        <div className="nav-link-hover-button" />
                      </Link>
                      <Link href="/projects" className="nav-link w-inline-block">
                        <div className="button-text">Projects</div>
                        <div className="nav-link-hover-button" />
                      </Link>
                      <Link href="/contact" className="nav-link bottom w-inline-block">
                        <div className="button-text">Contact</div>
                        <div className="nav-link-hover-button" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                key="mega-menu-overlay"
                className="mega-menu-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                onClick={closeMenu}
                role="button"
                aria-label="Close menu"
                style={{ display: 'block', cursor: 'pointer' }}
              />
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
