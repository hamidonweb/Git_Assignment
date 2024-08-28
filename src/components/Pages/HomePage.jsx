import HeroStyle2 from "../Hero/HeroStyle2";
import Section from "../Section";
import AboutSectionStyle2 from "../Section/AboutSection/AboutSectionStyle2";
import { useEffect, useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import toast from "react-hot-toast";

export default function HomePageV2() {
  // State variables to manage profile, repos, loading status, and error messages
  const [profile, setProfile] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Function to fetch profile and repos data from GitHub API
    const fetchData = async () => {
      try {
        // Fetch profile data
        const profileResponse = await axios.get(
          "https://api.github.com/users/hamidonweb"
        );
        setProfile(profileResponse.data);

        // Fetch repository data
        const reposResponse = await axios.get(
          "https://api.github.com/users/hamidonweb/repos"
        );
        setRepos(reposResponse.data);

        // Display success message upon successful data retrieval
        toast.success("Profile Fetched Successfully");
      } catch (error) {
        // Display error message and update error state
        toast.error("Error fetching data");
        setError(error?.response?.data?.message || "An error occurred");
      } finally {
        // Always stop loading regardless of success or error
        setLoading(false);
      }
    };

    // Delay the data fetching by 3 seconds
    const fetchTimeout = setTimeout(fetchData, 3000);

    // Clean up timeout on component unmount
    return () => clearTimeout(fetchTimeout);
  }, []);

  return (
    <>
      {loading ? (
        // Display loader while data is being fetched
        <div
          style={{
            width: "100%",
            height: "100vh",
          }}
          className="w-full cs_center h-62"
        >
          <ClipLoader color="#37c0af" size={100} />
        </div>
      ) : error ? (
        // Display error message if there is an error
        <div className="cs_center autoDiv">
          <p className="m-0 errormessage p-3">{error}</p>
        </div>
      ) : (
        // Display profile and repositories data after successful fetch
        <>
          <HeroStyle2
            title="Hi! I’m"
            name={`<span className='cs_gradient_text'> ${
              profile?.name || ""
            }</span>`}
            designation="Full-stack <span className='cs_accent_color_2'>Web Developer</span>"
            description={profile.bio || ""}
            btnText="Download CV"
            btnUrl="https://hamidonweb.com/Hamid_Anjum_CV.pdf"
            btnText2="Let’s Talk"
            btnUrl2="/"
            bgUrl="/images/bg/hero_bg_2.svg"
            imgUrl={profile?.avatar_url}
            funFactNumber="12+"
            funFactTitle="Years"
            funFactSubTitle="Happy Clients"
          />
          <Section
            className="position-relative"
            topLg={150}
            topMd={75}
            bottomLg={150}
            bottomMd={80}
          >
            <AboutSectionStyle2
              titleUp="About Me"
              title='My <span className="cs_accent_color">Repositories</span>'
              iconUrl="/images/icon/section_heading_icon_1.svg"
              myselfText=""
              data={repos}
            />
          </Section>
        </>
      )}
    </>
  );
}
