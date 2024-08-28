import React from "react";
import SectionHeading from "../../SectionHeading";
import IconBoxStyle2 from "../../IconBox/IconBoxStyle2";

export default function AboutSectionStyle2({
  titleUp,
  title,
  iconUrl,
  myselfText,

  data,
}) {
  return (
    <div className="container">
      <div
        className="row "
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div className="col-lg-6  ">
          <div className="cs_pr_50">
            <SectionHeading title={title} titleUp={titleUp} iconUrl={iconUrl} />
            <div className="cs_height_40 cs_height_lg_30" />
            <p className="m-0">{myselfText}</p>
            <div className="cs_height_25 cs_height_lg_20" />
          </div>
          <div className="cs_height_lg_30" />
        </div>
        <div className="col-lg-6">
          <div className="cs_pl_70">
            {data?.map((item, index) => (
              <IconBoxStyle2 {...item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
