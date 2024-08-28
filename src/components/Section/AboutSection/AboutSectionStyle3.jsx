import parse from 'html-react-parser';
export default function AboutSectionStyle3({
  imgUrl,
  title,
  subTitle1,
  SubTitle2,
  summaryTitle,
  summaryData,
}) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="cs_font_48 cs_semi_bold mb-0">{parse(title)}</h3>
            <div className="cs_height_20 cs_height_lg_10" />
            <p className="mb-0">{subTitle1}</p>
            <div className="cs_height_lg_15" />
          </div>
          <div className="col-lg-5 offset-lg-1 align-self-end">
            <p className="mb-0">{SubTitle2}</p>
          </div>
        </div>
        <div className="cs_height_55 cs_height_lg_30" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cs_image_box cs_radius_20 overflow-hidden">
              <img className="w-100" src={imgUrl} alt={title} />
            </div>
            <div className="cs_height_lg_30" />
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cs_about cs_style_1 cs_type_1">
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
    </>
  );
}
