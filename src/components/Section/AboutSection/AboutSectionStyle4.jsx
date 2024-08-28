import parse from 'html-react-parser';
export default function AboutSectionStyle4({
  imgUrl,
  funFactNumber,
  funFactTitle,
  title,
  subTitle,
  summaryTitle,
  summaryData,
}) {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="cs_pr_65">
            <div className="cs_image_box cs_style_3 position-relative">
              <div className="cs_imagebox_shape_about_2 position-absolute">
                <img src="/images/about_shape_3.svg" alt="Shape" />
              </div>
              <div className="cs_image_wrap cs_radius_20 overflow-hidden">
                <img className="w-100" src={imgUrl} alt="About" />
              </div>
              <div className="cs_happy_client position-absolute cs_white_bg d-flex align-items-center cs_radius_20 cs_gap_15">
                <p className="mb-0 cs_emoji_text">😍</p>
                <div>
                  <h3 className="mb-0 cs_font_24 cs_semi_bold cs_accent_color">
                    {funFactNumber}
                  </h3>
                  <p className="mb-0 cs_font_16 cs_medium">{funFactTitle}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cs_height_lg_40" />
        </div>
        <div className="col-lg-6">
          <div className="cs_about cs_style_1 cs_pl_50">
            <h3 className="cs_about_title cs_font_48 cs_semi_bold">
              {parse(title)}
            </h3>
            <p className="cs_about_text">{subTitle}</p>
            <h4 className="cs_about_subtitle cs_font_36 cs_semi_bold">
              {summaryTitle}
            </h4>
            <ul className="cs_mp_0 cs_about_summary_list">
              {summaryData?.map((item, index) => (
                <li key={index}>
                  <p className="m-0 text-capitalize">{item.heading}</p>
                  <h5 className="cs_font_20 m-0 cs_semi_bold">
                    {item.description}
                  </h5>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
