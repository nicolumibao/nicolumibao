import styles from "@/styles/Resume.module.css";

export default function Page() {
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
      position: "Software Developer - Team Lead",
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
      year: "2017",
      company: "Hack & Hustle",
      position: "Laravel Developer",
    },
  ];
  return (
    <div className="min-h-[85vh] w-full max-w-screen-lg mx-auto py-20 px-8 xxl:px-0 flex flex-col lg:flex-row gap-24 lg:gap-8 border-t-2 border-black/10">
      <div className="w-full">
        <h3 className={`${styles.name}`}>Education</h3>
        <ul className={`${styles.StepProgress}`}>
          {educations.map((education, key) => (
            <li key={key} className={`${styles.StepProgressItem}`}>
              <div className="flex pt-[30px]">
                <div className="min-w-[40%] mb-[30px]">
                  <span className={styles.year}>{education.year}</span>
                </div>
                <div className="mt-[-10px]">
                  <p className={styles.school}>{education.school}</p>
                  <span className={styles.type}>{education.type}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={`${styles.wrapper} w-full`}>
        <h3 className={`${styles.name}`}>Experience</h3>
        <ul className={`${styles.StepProgress}`}>
          {experiences.map((experience, key) => (
            <li key={key} className={`${styles.StepProgressItem}`}>
              <div className="flex pt-[30px]">
                <div className="min-w-[40%] mb-[30px]">
                  <span
                    className={`${styles.year} ${
                      key === 0 && styles.borderGreen
                    }`}
                  >
                    {experience.year}
                  </span>
                </div>
                <div className="mt-[-10px]">
                  <p className={styles.school}>{experience.company}</p>
                  <span className={styles.type}>{experience.position}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
