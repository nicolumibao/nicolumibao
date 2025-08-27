import styles from "@/styles/Projects.module.css"
import Image from "next/image";

export default function Page() {

  const projects = [
    {
      name: 'Filinvest',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt autem amet perspiciatis, est cum ad blanditiis labore ducimus facilis incidunt deserunt vitae placeat optio magni sed tempora saepe ipsam eius officiis nostrum.',
      link: '/',
      image: '/images/filinvest.png'
    },
    {
      name: 'ENZ Education',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt autem amet perspiciatis, est cum ad blanditiis labore ducimus facilis incidunt deserunt vitae placeat optio magni sed tempora saepe ipsam eius officiis nostrum.',
      link: '/',
      image: '/images/filinvest.png'
    },
    {
      name: 'McDonald Philippines',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt autem amet perspiciatis, est cum ad blanditiis labore ducimus facilis incidunt deserunt vitae placeat optio magni sed tempora saepe ipsam eius officiis nostrum.',
      link: '/',
      image: '/images/filinvest.png'
    },
    {
      name: 'Insurance',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt autem amet perspiciatis, est cum ad blanditiis labore ducimus facilis incidunt deserunt vitae placeat optio magni sed tempora saepe ipsam eius officiis nostrum.',
      link: '/',
      image: '/images/filinvest.png'
    },
  ]

  return (
    <div className="min-h-[85vh] w-full max-w-screen-lg mx-auto py-20 px-8 xxl:px-0">
      <div className={`${styles.name}`}>
        <h2>Projects</h2>
      </div>
      {
        projects.map((project, key) => (

          <div key={key} className={`${styles.projectContainer} mb-[30px] flex flex-col lg:flex-row items-center gap-24 lg:gap-8`}>
            <div className={`min-w-[350px]`}>
              <Image
                alt="Nico Lumibao"
                blurDataURL="/images/filinvest.png"
                src="/images/filinvest.png"
                width="500"
                height="500"
                className={`${styles.image}`}
              />
            </div>
            <div className="details max-w-xl">
              <h3 className={styles.jobTitle}>{project.name}</h3>
              <p className={`${styles.description} `}>
                {project.description}
              </p>
              <div className="flex gap-2 mt-[20px] ">
                <button className={styles.buttonBasic}>Visit</button>
              </div>
            </div>
          </div>

        ))
      }
    </div>
  );
};

