import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import Button from '../Button';

export default function HeroStyle2({
  title,
  name,
  designation,
  description,
  bgUrl,
  imgUrl,
  funFactNumber,
  funFactTitle,
  funFactSubTitle,
  btnText,
  btnUrl
,btnText2,
btnUrl2
}) {
  return (
    <section
      className="cs_hero cs_style_2 cs_filled_bg"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="cs_hero_info cs_pr_20">
              <h4 className="cs_hero_meta cs_font_48 cs_white_blue_text_2 cs_semi_bold cs_primary_font mb-0">
                {parse(title)}
              </h4>
              <h1 className="cs_hero_title cs_font_92 cs_black">
                {parse(name)}
              </h1>
              <h4 className="cs_hero_subtitle cs_font_36 cs_semi_bold cs_primary_font cs_white_blue_text_2">
                {parse(designation)}
              </h4>
              <p className="cs_hero_text">{parse(description)}</p>
              <div className="cs_social_btns d-flex">
                <Link className="cs_accent_color_2" to="https://hamidonweb.com">
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
                <Link className="cs_accent_color_2" to="https://hamidonweb.com">
                  <svg
                    width={22}
                    height={24}
                    viewBox="0 0 22 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.3002 23V18.6C15.4532 17.222 15.0581 15.8391 14.2002 14.75C17.5002 14.75 20.8002 12.55 20.8002 8.7C20.8882 7.325 20.5032 5.972 19.7002 4.85C20.0082 3.585 20.0082 2.265 19.7002 1C19.7002 1 18.6002 1 16.4002 2.65C13.4962 2.1 10.5042 2.1 7.60016 2.65C5.40016 1 4.30016 1 4.30016 1C3.97016 2.265 3.97016 3.585 4.30016 4.85C3.49922 5.96747 3.11048 7.32807 3.20016 8.7C3.20016 12.55 6.50016 14.75 9.80016 14.75C9.37116 15.289 9.05216 15.905 8.86516 16.565C8.67816 17.225 8.62316 17.918 8.70016 18.6V23"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.7 18.5999C3.739 20.7999 3.2 16.3999 1 16.3999"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link className="cs_accent_color_2" to="https://hamidonweb.com">
                  <svg
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 9C12.67 9 12 8.33 12 7.5V2.5C12 1.67 12.67 1 13.5 1C14.33 1 15 1.67 15 2.5V7.5C15 8.33 14.33 9 13.5 9Z"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.5 9H18V7.5C18 6.67 18.67 6 19.5 6C20.33 6 21 6.67 21 7.5C21 8.33 20.33 9 19.5 9Z"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.5 13C9.33 13 10 13.67 10 14.5V19.5C10 20.33 9.33 21 8.5 21C7.67 21 7 20.33 7 19.5V14.5C7 13.67 7.67 13 8.5 13Z"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.5 13H4V14.5C4 15.33 3.33 16 2.5 16C1.67 16 1 15.33 1 14.5C1 13.67 1.67 13 2.5 13Z"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13 13.5C13 12.67 13.67 12 14.5 12H19.5C20.33 12 21 12.67 21 13.5C21 14.33 20.33 15 19.5 15H14.5C13.67 15 13 14.33 13 13.5Z"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.5 18H13V19.5C13 20.33 13.67 21 14.5 21C15.33 21 16 20.33 16 19.5C16 18.67 15.33 18 14.5 18Z"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 8.5C9 7.67 8.33 7 7.5 7H2.5C1.67 7 1 7.67 1 8.5C1 9.33 1.67 10 2.5 10H7.5C8.33 10 9 9.33 9 8.5Z"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.5 4H9V2.5C9 1.67 8.33 1 7.5 1C6.67 1 6 1.67 6 2.5C6 3.33 6.67 4 7.5 4Z"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link className="cs_accent_color_2" to="https://hamidonweb.com">
                  <svg
                    width={24}
                    height={22}
                    viewBox="0 0 24 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7367 7.3158C17.4117 7.3158 19.0182 7.98121 20.2026 9.16565C21.3871 10.3501 22.0525 11.9565 22.0525 13.6316V21H17.842V13.6316C17.842 13.0732 17.6201 12.5378 17.2253 12.1429C16.8305 11.7481 16.295 11.5263 15.7367 11.5263C15.1783 11.5263 14.6429 11.7481 14.248 12.1429C13.8532 12.5378 13.6314 13.0732 13.6314 13.6316V21H9.4209V13.6316C9.4209 11.9565 10.0863 10.3501 11.2708 9.16565C12.4552 7.98121 14.0616 7.3158 15.7367 7.3158Z"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.21053 8.36841H1V21H5.21053V8.36841Z"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.10526 5.21053C4.26797 5.21053 5.21053 4.26797 5.21053 3.10526C5.21053 1.94256 4.26797 1 3.10526 1C1.94256 1 1 1.94256 1 3.10526C1 4.26797 1.94256 5.21053 3.10526 5.21053Z"
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
                    height={18}
                    viewBox="0 0 22 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 1H19C20.1 1 21 1.9 21 3V15C21 16.1 20.1 17 19 17H3C1.9 17 1 16.1 1 15V3C1 1.9 1.9 1 3 1Z"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 3L11 10L1 3"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link className="cs_accent_color_2" to="/">
                  <svg
                    width={25}
                    height={18}
                    viewBox="0 0 25 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.4286 17C9.8 17 5.11429 16.7714 3.17143 16.3143C2.37143 16.0857 1.8 15.5143 1.57143 14.7143C1.22857 13.4571 1 10.8286 1 9C1 7.17143 1.22857 4.54286 1.57143 3.28571C1.8 2.48571 2.37143 1.91429 3.17143 1.68571C5.11429 1.22857 9.8 1 12.4286 1C15.0571 1 19.7429 1.22857 21.6857 1.68571C22.4857 1.91429 23.0571 2.48571 23.2857 3.28571C23.6286 4.54286 23.8571 7.17143 23.8571 9C23.8571 10.8286 23.6286 13.4571 23.2857 14.7143C23.0571 15.5143 22.4857 16.0857 21.6857 16.3143C19.7429 16.7714 15.0571 17 12.4286 17Z"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.1426 12.4287L15.8569 9.0001L10.1426 5.57153V12.4287Z"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
              <div className="cs_btns">
                <Button
                  btnText={btnText}
                  btnUrl={btnUrl}
                  variant="cs_btn cs_style_1 cs_primary_font"
                />
              
              </div>
           
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="cs_hero_image_box cs_filled_bg"
              style={{ backgroundImage: `url(/images/bg/hero_bg_3.svg)` }}
            >
              <div className="cs_imagebox_img w-100">
                <img src={imgUrl} alt="heroImg" />
              </div>
              <div className="cs_happy_client position-absolute cs_white_bg d-flex align-items-center cs_radius_20 cs_gap_15">
                <div className="cs_font_36 cs_semi_bold cs_accent_color_2">
                  {funFactNumber}
                </div>
                <div>
                  <h5 className="mb-0 cs_normal">{funFactTitle}</h5>
                  <p className="mb-0 cs_font_16">{funFactSubTitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
