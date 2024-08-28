import React from 'react';
import { Link } from 'react-router-dom';

export default function IconBox({
  iconUrl,
  titleUp,
  title,
  subTitle,
  btnText,
  btnUrl,
  percentage,
}) {
  return (
    <div className="cs_iconbox cs_style_1 cs_transform_up_hover_5 cs_transition_4">
      <div className="cs_iconbox_in">
        <div className="cs_iconbox_icon cs_center rounded-circle cs_white_bg">
          <img src={iconUrl} alt="Icon" />
        </div>
        <p className="cs_iconbox_mini_title cs_ternary_color text-uppercase cs_font_15">
          {titleUp}
        </p>
        <h3 className="cs_iconbox_title cs_font_28 cs_medium">{title}</h3>
        <p className="cs_iconbox_subtitle">{subTitle}</p>
        <Link
          to={btnUrl}
          className="cs_iconbox_btn cs_primary_color_hover cs_center_between"
        >
          <span className="cs_iconbox_btn_text position-relative d-inline-block cs_font_16">
            {btnText}
          </span>
          <span className="cs_circle_btn cs_style_1 cs_accent_color cs_center rounded-circle">
            <svg
              width={11}
              height={11}
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 10L10 1"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 1H10V10"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width={11}
              height={11}
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 10L10 1"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 1H10V10"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </div>
      <div className="cs_progressbar cs_style_1 text-center">
        <h3 className="cs_progressbar_head cs_accent_color cs_normal cs_font_14">
          {percentage}%
        </h3>
        <div className="cs_progress">
          <div className="cs_progress_in" style={{ width: `${percentage}%` }} />
        </div>
      </div>
    </div>
  );
}
