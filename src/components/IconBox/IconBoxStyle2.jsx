import React from "react";
import { Link } from "react-router-dom";

export default function IconBoxStyle2({

  name,
  description,
  forks_count,
  stargazers_count,
  html_url,
}) {
  return (
    <div className="cs_iconbox cs_style_2 cs_radius_20 cs_transition_4">
      <div className="cs_iconbox_in">
        {/* <div className="cs_iconbox_icon cs_center">
          <img src={iconUrl} alt="Icon" />
        </div> */}
        <div className="cs_iconbox_info position-relative w-100">
          <h3 className="cs_iconbox_title cs_font_28 cs_medium m-0">{name}</h3>
          <p className="cs_iconbox_text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="cs_letter_spacing_15 cs_ternary_color cs_secondary_font cs_font_15 text-uppercase m-0">
              Fork Count
            </span>
            <span className="cs_letter_spacing_15 cs_ternary_color cs_secondary_font cs_font_15 text-uppercase m-0">
              {forks_count}
            </span>

            <span className="cs_letter_spacing_15 cs_ternary_color cs_secondary_font cs_font_15 text-uppercase m-0">
              Star Count
            </span>
            {stargazers_count}
            <Link
              to={html_url}
              className="cs_circle_btn cs_style_1 cs_accent_color_2 cs_center rounded-circle"
            >
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
