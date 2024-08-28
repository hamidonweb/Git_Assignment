import { useState } from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import Button from '../../Button';

export default function AboutSection({
  imgUrl,
  funFactNumber,
  funFactTitle,
  titleUp,
  title,
  iconUrl,
  myselfText,
  educationText,
  myToolsText,
  btnText,
  btnUrl,
}) {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = tabNumber => {
    setActiveTab(tabNumber);
  };
  return (
    <>
      <div className="position-absolute cs_about_shape_2">
        <img src="/images/about_shape_2.svg" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cs_image_box cs_style_1 position-relative">
              <img
                className="position-absolute cs_about_shape"
                src="/images/about_shape_1.svg"
                alt="About"
              />
              <img className="w-100" src={imgUrl} alt="About" />
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
          <div className="col-lg-6">
            <div className="cs_pl_70">
              <Spacing lg="40" md="30" />
              <SectionHeading
                title={title}
                titleUp={titleUp}
                iconUrl={iconUrl}
              />
              <Spacing lg="40" md="30" />
              <div className="cs_tabs cs_style_1">
                <ul className="cs_tab_links cs_mp_0">
                  <li className={activeTab === 1 ? 'active' : ''}>
                    <span
                      className="text-uppercase "
                      onClick={() => handleTabClick(1)}
                    >
                      Myself
                    </span>
                  </li>
                  <li className={activeTab === 2 ? 'active' : ''}>
                    <span
                      className="text-uppercase "
                      onClick={() => handleTabClick(2)}
                    >
                      Education
                    </span>
                  </li>
                  <li className={activeTab === 3 ? 'active' : ''}>
                    <span
                      className="text-uppercase "
                      onClick={() => handleTabClick(3)}
                    >
                      My tools
                    </span>
                  </li>
                </ul>
                <div className="cs_tab_body">
                  {activeTab === 1 && (
                    <div className="cs_tab active">
                      <p className="m-0">{myselfText}</p>
                      <Spacing lg="30" md="20" />
                      <Button
                        btnText={btnText}
                        btnUrl={btnUrl}
                        variant="cs_btn cs_style_1"
                      />
                    </div>
                  )}
                  {activeTab === 2 && (
                    <div className="cs_tab active">
                      <p className="m-0">{educationText}</p>
                      <Spacing lg="30" md="20" />
                      <Button
                        btnText={btnText}
                        btnUrl={btnUrl}
                        variant="cs_btn cs_style_1"
                      />
                    </div>
                  )}
                  {activeTab === 3 && (
                    <div className="cs_tab active">
                      <p className="m-0">{myToolsText}</p>
                      <Spacing lg="30" md="20" />
                      <Button
                        btnText={btnText}
                        btnUrl={btnUrl}
                        variant="cs_btn cs_style_1"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
