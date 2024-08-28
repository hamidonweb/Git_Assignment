import { useEffect, useState } from 'react';
import DropDown from './DropDown';
import { Link, NavLink } from 'react-router-dom';
import Button from '../Button';

export default function Header({ logoUrl, variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);
  return (
    <header
      className={`cs_site_header cs_style_1 cs_sticky_header ${
        variant ? variant : ''
      } ${isSticky ? 'cs_gescout_sticky cs_gescout_show' : ''}`}
    >
      <div className="cs_main_header">
        <div className="container">
          <div className="cs_main_header_in">
            <div className="cs_main_header_left">
              <a className="cs_site_branding" href="/">
                <img src={logoUrl} alt="Logo" />
              </a>
            </div>
            <div className="cs_main_header_center">
              <div className="cs_nav">
                <span
                  className={
                    mobileToggle
                      ? 'cs_menu_toggle cs_teggle_active'
                      : 'cs_menu_toggle'
                  }
                  onClick={() => setMobileToggle(!mobileToggle)}
                >
                  <span></span>
                </span>
                <ul className="cs_nav_list">
                  <li className="menu-item-has-children">
                    <NavLink to="/" onClick={() => setMobileToggle(false)}>
                      Home
                    </NavLink>
                    <DropDown>
                      <ul>
                        <li>
                          <NavLink
                            to="/"
                            onClick={() => setMobileToggle(false)}
                          >
                            Designer Landing
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/home-v2"
                            onClick={() => setMobileToggle(false)}
                          >
                            Developer Landing
                          </NavLink>
                        </li>
                      </ul>
                    </DropDown>
                  </li>
                  <li className="menu-item-has-children">
                    <NavLink to="/about" onClick={() => setMobileToggle(false)}>
                      About
                    </NavLink>
                    <DropDown>
                      <ul>
                        <li>
                          <NavLink
                            to="/about"
                            onClick={() => setMobileToggle(false)}
                          >
                            Designer About
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/about-v2"
                            onClick={() => setMobileToggle(false)}
                          >
                            Developer About
                          </NavLink>
                        </li>
                      </ul>
                    </DropDown>
                  </li>
                  <li className="menu-item-has-children">
                    <NavLink
                      to="/portfolio"
                      onClick={() => setMobileToggle(false)}
                    >
                      Portfolio
                    </NavLink>
                    <DropDown>
                      <ul>
                        <li>
                          <NavLink
                            to="/portfolio"
                            onClick={() => setMobileToggle(false)}
                          >
                            Portfolio
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/portfolio/portfolio-details"
                            onClick={() => setMobileToggle(false)}
                          >
                            Portfolio Details
                          </NavLink>
                        </li>
                      </ul>
                    </DropDown>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="/" onClick={() => setMobileToggle(false)}>
                      Pages
                    </Link>
                    <DropDown>
                      <ul>
                        <li>
                          <NavLink
                            to="/testimonial"
                            onClick={() => setMobileToggle(false)}
                          >
                            Testimonial
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/faq"
                            onClick={() => setMobileToggle(false)}
                          >
                            FAQ
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/404"
                            onClick={() => setMobileToggle(false)}
                          >
                            Error 404
                          </NavLink>
                        </li>
                      </ul>
                    </DropDown>
                  </li>
                  <li className="menu-item-has-children">
                    <NavLink to="/blog" onClick={() => setMobileToggle(false)}>
                      Blog
                    </NavLink>
                    <DropDown>
                      <ul>
                        <li>
                          <NavLink
                            to="/blog"
                            onClick={() => setMobileToggle(false)}
                          >
                            Blog
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog/blog-details"
                            onClick={() => setMobileToggle(false)}
                          >
                            Blog Details
                          </NavLink>
                        </li>
                      </ul>
                    </DropDown>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      onClick={() => setMobileToggle(false)}
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cs_main_header_right">
              <Button
                btnText="Hire Me"
                btnUrl="/contact"
                variant="cs_btn cs_style_1 cs_primary_font"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
