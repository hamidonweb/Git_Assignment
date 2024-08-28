import parse from "html-react-parser";
import { Link } from "react-router-dom";
import Spacing from "../Spacing";

export default function SectionHeading({
  title,
  titleUp,
  iconUrl,
  titleUpVariant,
  btnUrl,
  btnText,
  subTitle,
  variant,
}) {
  return (
    <div className={`cs_section_heading cs_style_1 ${variant ? variant : ""}`}>
      <p
        className={`cs_section_subtitle ${
          titleUpVariant ? titleUpVariant : "cs_accent_color_2"
        } cs_font_16`}
      >
        {titleUp && <span>{titleUp}</span>}
        {iconUrl && <img src={iconUrl} alt="Icon" />}
      </p>
      {title && <h2 className="">{parse(title)}</h2>}
      {subTitle && (
        <>
          <Spacing lg="25" md="10" />
          <p className="mb-0">{subTitle}</p>
        </>
      )}

      {btnText && (
        <>
          <Spacing lg="45" md="10" />
          <Link
            to={btnUrl}
            className="cs_accent_color cs_font_16 cs_medium text-uppercase cs_gap_15 d-inline-flex align-items-center"
          >
            <span className="cs_text_btn">{btnText}</span>
            <svg
              width={5}
              height={9}
              viewBox="0 0 5 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0L5 4.5L0 9L0 0Z" fill="currentColor" />
            </svg>
          </Link>
        </>
      )}
    </div>
  );
}
