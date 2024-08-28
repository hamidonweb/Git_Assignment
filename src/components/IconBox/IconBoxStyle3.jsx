import React from 'react';
import { Link } from 'react-router-dom';

export default function IconBoxStyle3({
  iconUrl,
  title,
  subTitle,
  btnText,
  btnUrl,
}) {
  return (
    <div className="cs_iconbox cs_style_4 cs_radius_10 d-flex cs_gap_30">
      <div className="cs_iconbox_icon">
        <img src={iconUrl} alt="Icon" />
      </div>
      <div className="cs_iconbox_info">
        <h4 className="cs_iconbox_title cs_font_24 cs_semi_bold">{title}</h4>
        <p className="cs_iconbox_text">{subTitle}</p>
        <Link
          className="cs_accent_color_2 cs_accent_color_hover cs_text_btn"
          to={btnUrl}
        >
          {btnText}
        </Link>
      </div>
    </div>
  );
}
