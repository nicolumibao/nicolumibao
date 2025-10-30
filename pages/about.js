import styles from "@/styles/About.module.css";
import resume from "@/styles/Resume.module.css";
import { ThemeContext } from "@/lib/context/context";
import { useContext } from "react";
import Header from "@/components/layout/Header";
import sitedetails from "@/lib/constant/sitedetails";
import Link from "next/link";
export default function Page() {
  const { theme } = useContext(ThemeContext);

  const educations = [
    {
      year: "2012 - 2016",
      school: "AMA Computer Learning Center",
      type: "College - Bachelor of Science in Information Technology",
    },
    {
      year: "2007 - 2011",
      school: "Ramos National High School",
      type: "High School - Tarlac",
    },
    {
      year: "2001 - 2007",
      school: "Coral Elementay School",
      type: "Elementary - Tarlac",
    },
  ];

  const experiences = [
    {
      year: "2022 - 2024",
      company: "Halcyon Agile",
      position: "Software Development Team Lead",
    },
    {
      year: "2021 - 2022",
      company: "Halcyon Digital Media Design Inc.",
      position: "Software Developer",
    },
    {
      year: "2017 - 2021",
      company: "Halcyon Digital Media Design Inc.",
      position: "Laravel Developer",
    },
    {
      year: "2016 - 2017",
      company: "Hack & Hustle",
      position: "Laravel Developer",
    },
  ];

  return (
    <>
      <Header title="About" />
      <h1 className="hidden">About</h1>
      <div className="leftToright">
        <div className="w-full max-w-screen-lg mx-auto pt-20 px-4 lg:px-0">
          <div className={`mb-[30px]`}>
            <p className={`${styles.name} font1`}>{sitedetails.fullname}</p>
            <p className={`${styles.jobTitle} font3`}>{sitedetails.position}</p>
          </div>
        </div>

        <div className="bg4">
          <div className="w-full max-w-screen-lg mx-auto">
            <div className="pt-[40px] pb-[30px] px-4 lg:px-0">
              <p className={`${styles.descriptionV2} font1`}>
                Hi, my name is Nico Lumibao, and I’m a Software Developer and
                former Software Development Team Lead with a strong focus on
                building scalable, efficient, and user-centered web
                applications. I specialize in React, Next.js, Vue.js, Node.js,
                Laravel, and Tailwind CSS, delivering high-quality frontend and
                backend solutions.
              </p>
              <p className={`${styles.descriptionV2} font1`}>
                I have solid experience across the software development
                lifecycle, from system design and coding to deployment and
                optimization. I take pride in writing clean, maintainable, and
                well-structured code while adhering to best practices and modern
                development standards.
              </p>
              <p className={`${styles.descriptionV2} font1`}>
                My background includes developing RESTful APIs, integrating
                cloud-based services, and deploying applications through AWS,
                Vercel, and Cloudflare. I’m passionate about continuous learning
                and using technology to create impactful, reliable, and scalable
                software solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-screen-lg mx-auto font1 px-4 lg:px-0">
          <div
            className={`grid sm:grid-cols-2 gap-4 pt-[40px] pb-[40px] text-xs`}
          >
            <div className="flex">
              <div className="font-semibold">Nationality:</div>
              <div className="ml-[15px]">Filipino</div>
            </div>

            <div className="flex">
              <div className="font-semibold">Address:</div>
              <div className="ml-[15px]">Coral-Iloco, Ramos, Tarlac</div>
            </div>

            <div className="flex">
              <div className="font-semibold">Birthday:</div>
              <div className="ml-[15px]">October 24, 1994</div>
            </div>

            <div className="flex">
              <div className="font-semibold">Study:</div>
              <div className="ml-[15px]">BS Information Technology</div>
            </div>

            <div className="flex">
              <div className="font-semibold">Age:</div>
              <div className="ml-[15px]">31</div>
            </div>

            <div className="flex">
              <div className="font-semibold">Interest:</div>
              <div className="ml-[15px]">Learning new tech, Sports</div>
            </div>

            <div className="flex">
              <div className="font-semibold">Email:</div>
              <div className="ml-[15px]">{sitedetails.email}</div>
            </div>

            <div className="flex">
              <div className="font-semibold">Language:</div>
              <div className="ml-[15px]">English, Filipino</div>
            </div>
          </div>
        </div>

        <div className="bg4 font1 px-4 lg:px-0">
          <div className="w-full max-w-screen-lg mx-auto">
            <div className={`grid lg:grid-cols-2 gap-3 pt-[20px] pb-[20px]`}>
              <div>
                <h2 className={`${resume.name}`}>Experience</h2>
                <ul className={`${resume.StepProgress} bl1`}>
                  {experiences.map((experience, key) => (
                    <li
                      key={key}
                      className={`${resume.StepProgressItem} custombg1`}
                    >
                      <div className="flex flex-col sm:flex-row pt-[30px]">
                        <div className="min-w-[40%] mb-[30px]">
                          <span
                            className={`${resume.year} border1 ${
                              key === 0 && "border3"
                            }`}
                          >
                            {experience.year}
                          </span>
                        </div>
                        <div className="mt-[-10px]">
                          <p className={resume.school}>{experience.company}</p>
                          <span className={resume.type}>
                            {experience.position}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className={`${resume.name}`}>Education</h2>
                <ul className={`${resume.StepProgress} bl1`}>
                  {educations.map((education, key) => (
                    <li
                      key={key}
                      className={`${resume.StepProgressItem} custombg1`}
                    >
                      <div className="flex flex-col sm:flex-row pt-[30px]">
                        <div className="min-w-[40%] mb-[30px]">
                          <span className={`${resume.year} border1`}>
                            {education.year}
                          </span>
                        </div>
                        <div className="mt-[-10px]">
                          <p className={resume.school}>{education.school}</p>
                          <span className={resume.type}>{education.type}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-screen-lg mx-auto pt-[30px] pb-[30px] px-2 lg:px-0">
          <div className="grid grid-cols-2">
            <div>
              <Link href="/Nico_D_Lumibao.pdf" target="_blank">
                <button className={`${styles.buttonBasic} bg5 font4`}>
                  Download CV
                </button>
              </Link>
            </div>
            <div>
              <ul className="flex gap-4 float-right">
                <li>
                  <Link
                    href={sitedetails.facebook}
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <svg
                      fill={theme === "dark" ? "#FFFFFF" : "#000000"}
                      height="40px"
                      width="40px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-143 145 512 512"
                    >
                      <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145zM169.5,357.6l-2.9,38.3h-39.3v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7c8.7-11.5,20.6-19.3,41.1-19.3c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    href={sitedetails.instagram}
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <svg
                      fill={theme === "dark" ? "#FFFFFF" : "#000000"}
                      height="40px"
                      width="40px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-271 273 256 256"
                    >
                      <path
                        d="M-64.5,273h-157c-27.3,0-49.5,22.2-49.5,49.5v52.3v104.8c0,27.3,22.2,49.5,49.5,49.5h157c27.3,0,49.5-22.2,49.5-49.5V374.7
                      v-52.3C-15.1,295.2-37.3,273-64.5,273z M-50.3,302.5h5.7v5.6v37.8l-43.3,0.1l-0.1-43.4L-50.3,302.5z M-179.6,374.7
                      c8.2-11.3,21.5-18.8,36.5-18.8s28.3,7.4,36.5,18.8c5.4,7.4,8.5,16.5,8.5,26.3c0,24.8-20.2,45.1-45.1,45.1s-44.9-20.3-44.9-45.1
                      C-188.1,391.2-184.9,382.1-179.6,374.7z M-40,479.5C-40,493-51,504-64.5,504h-157c-13.5,0-24.5-11-24.5-24.5V374.7h38.2
                      c-3.3,8.1-5.2,17-5.2,26.3c0,38.6,31.4,70,70,70c38.6,0,70-31.4,70-70c0-9.3-1.9-18.2-5.2-26.3H-40V479.5z"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    href={sitedetails.linkedin}
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <svg
                      fill={theme === "dark" ? "#FFFFFF" : "#000000"}
                      height="40px"
                      width="40px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-143 145 512 512"
                    >
                      <path
                        d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z
                      M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7
                      c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4
                      c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6
                      c35.5,0,63.3,23,63.3,72.4V508.1z"
                      />
                    </svg>
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href={sitedetails.github}
                    target="_blank"
                    aria-label="Github"
                  >
                    <svg
                      className="mt-[-4px] ml-[-4px] jam jam-github"
                      fill={theme === "dark" ? "#FFFFFF" : "#000000"}
                      width="48px"
                      height="48px"
                      viewBox="-2 -2 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMinYMin"
                    >
                      <path d="M18.88 1.099C18.147.366 17.265 0 16.233 0H3.746C2.714 0 1.832.366 1.099 1.099.366 1.832 0 2.714 0 3.746v12.487c0 1.032.366 1.914 1.099 2.647.733.733 1.615 1.099 2.647 1.099H6.66c.19 0 .333-.007.429-.02a.504.504 0 0 0 .286-.169c.095-.1.143-.245.143-.435l-.007-.885c-.004-.564-.006-1.01-.006-1.34l-.3.052c-.19.035-.43.05-.721.046a5.555 5.555 0 0 1-.904-.091 2.026 2.026 0 0 1-.872-.39 1.651 1.651 0 0 1-.572-.8l-.13-.3a3.25 3.25 0 0 0-.41-.663c-.186-.243-.375-.407-.566-.494l-.09-.065a.956.956 0 0 1-.17-.156.723.723 0 0 1-.117-.182c-.026-.061-.004-.111.065-.15.07-.04.195-.059.378-.059l.26.04c.173.034.388.138.643.311a2.1 2.1 0 0 1 .631.677c.2.355.44.626.722.813.282.186.566.28.852.28.286 0 .533-.022.742-.065a2.59 2.59 0 0 0 .585-.196c.078-.58.29-1.028.637-1.34a8.907 8.907 0 0 1-1.333-.234 5.314 5.314 0 0 1-1.223-.507 3.5 3.5 0 0 1-1.047-.872c-.277-.347-.505-.802-.683-1.365-.177-.564-.266-1.215-.266-1.952 0-1.049.342-1.942 1.027-2.68-.32-.788-.29-1.673.091-2.652.252-.079.625-.02 1.119.175.494.195.856.362 1.086.5.23.14.414.257.553.352a9.233 9.233 0 0 1 2.497-.338c.859 0 1.691.113 2.498.338l.494-.312a6.997 6.997 0 0 1 1.197-.572c.46-.174.81-.221 1.054-.143.39.98.424 1.864.103 2.653.685.737 1.028 1.63 1.028 2.68 0 .737-.089 1.39-.267 1.957-.177.568-.407 1.023-.689 1.366-.282.343-.633.63-1.053.865-.42.234-.828.403-1.223.507a8.9 8.9 0 0 1-1.333.235c.45.39.676 1.005.676 1.846v3.11c0 .147.021.266.065.357a.36.36 0 0 0 .208.189c.096.034.18.056.254.064.074.01.18.013.318.013h2.914c1.032 0 1.914-.366 2.647-1.099.732-.732 1.099-1.615 1.099-2.647V3.746c0-1.032-.367-1.914-1.1-2.647z" />
                    </svg>
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
