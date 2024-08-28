import React from 'react';
import { Link } from 'react-router-dom';
import Spacing from '../Spacing';

export default function Hero({
  imgUrl,
  name,
  btnText,
  btnUrl,
  designation,
  country,
  email,
  featureList,
}) {
  return (
    <section
      className="cs_hero cs_style_1 cs_filled_bg"
      style={{ backgroundImage: `url(/images/bg/hero_bg.svg)` }}
    >
      <div className="cs_hero_box">
        <img src={imgUrl} alt={name} />
        <div className="cs_hero_box_in">
          <h1 className="cs_hero_title cs_font_92 cs_extra_bold cs_link cs_gradient_text_2">
            {name}
          </h1>
          <p className="cs_hero_subtitle cs_font_24">
            Do you have a project?{' '}
            <Link
              to={btnUrl}
              className="cs_semi_bold cs_accent_color cs_text_btn"
            >
              {btnText}
            </Link>
          </p>
        </div>
      </div>
      <div className="container cs_hero_info d-flex justify-content-between">
        <div className="cs_hero_left">
          <ul className="cs_mp_0">
            <li className="cs_hero_meta d-flex align-items-center">
              <div>
                <div className="cs_dot cs_accent_color cs_font_20 cs_semi_bold">
                  {designation}
                </div>
                <span className="cs_white_color cs_opacity_06">
                  Based in {country}
                </span>
              </div>
            </li>
            <li className="cs_hero_meta d-flex align-items-center">
              <div>
                <div className="cs_dot cs_white_color cs_opacity_06">
                  Say hello to
                </div>
                <span className="cs_white_color">{email}</span>
              </div>
            </li>
          </ul>
          <Spacing lg="75" md="50" />
          <div className="cs_social_btns d-flex cs_gap_30">
            <Link className="cs_accent_color_2" to="/">
              <svg
                width={13}
                height={22}
                viewBox="0 0 13 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 6V9H1V13H4V21H8V13H11L12 9H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1Z"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link className="cs_accent_color_2" to="/">
              <svg
                width={22}
                height={20}
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 1.00784C21 1.00784 20.3 3.10784 19 4.40784C20.6 14.4078 9.6 21.7078 1 16.0078C3.2 16.1078 5.4 15.4078 7 14.0078C2 12.5078 -0.5 6.60784 2 2.00784C4.2 4.60784 7.6 6.10784 11 6.00784C10.1 1.80784 15 -0.592165 18 2.20784C19.1 2.20784 21 1.00784 21 1.00784Z"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link className="cs_accent_color_2" to="/">
              <svg
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 1H6C3.23858 1 1 3.23858 1 6V16C1 18.7614 3.23858 21 6 21H16C18.7614 21 21 18.7614 21 16V6C21 3.23858 18.7614 1 16 1Z"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.9997 10.3701C15.1231 11.2023 14.981 12.0523 14.5935 12.7991C14.206 13.5459 13.5929 14.1515 12.8413 14.5297C12.0898 14.908 11.2382 15.0397 10.4075 14.906C9.57683 14.7723 8.80947 14.3801 8.21455 13.7852C7.61962 13.1903 7.22744 12.4229 7.09377 11.5923C6.96011 10.7616 7.09177 9.90995 7.47003 9.15843C7.84829 8.40691 8.45389 7.7938 9.20069 7.4063C9.94749 7.0188 10.7975 6.87665 11.6297 7.00006C12.4786 7.12594 13.2646 7.52152 13.8714 8.12836C14.4782 8.73521 14.8738 9.52113 14.9997 10.3701Z"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 5.5H16.51"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link className="cs_accent_color_2" to="/">
              <svg
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.13 4.09009C14.22 8.14009 9 9.44009 1.25 9.94009"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.7501 11.8401C14.1301 10.4301 8.61012 12.8401 4.37012 18.1601"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.56006 1.75C11.9301 7.75 13.5601 11.17 15.5601 19.47"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div>
          {featureList?.map((item, index) => (
            <div className="cs_funfact cs_style_1 text-end" key={index}>
              <h2 className="cs_funfact_number cs_font_24 cs_white_color cs_semi_bold m-0">
                {item.number}
              </h2>
              <div className="cs_white_color cs_opacity_06">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
