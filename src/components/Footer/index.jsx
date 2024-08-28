import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      className="cs_footer cs_style_1 cs_filled_bg position-relative"
      style={{ backgroundImage: 'url("/images/bg/footer_bg.svg")' }}
    >
      <div className="position-absolute cs_footer_shape_1">
        <img src="/images/footer_shape.svg" alt="" />
      </div>
      <div className="container">
        <div className="cs_footer_cta">
          <h2 className="cs_font_92 cs_gradient_text_2 cs_semi_bold">
            Have a project?
          </h2>
          <Button
            btnText="Let’s Talk"
            btnUrl="/contact"
            variant="cs_btn cs_style_1 cs_primary_font"
          />
        </div>
        <div className="cs_copyright">
          © 2024 <Link to="/">portm</Link>. All rights reserved
        </div>
      </div>
    </footer>
  );
}
