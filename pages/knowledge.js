import {
  ReactIcon,
  MysqlIcon,
  DynamoIcon,
  LaravelIcon,
  AdonisIcon,
  VueIcon,
  DockerIcon,
  TailwindIcon,
  PHPIcon,
  NextJSIcon,
} from "@/components/svg/svg";
import styles from "@/styles/Knowledge.module.css";
import Header from "@/components/layout/Header";
export default function Page() {
  const knowledges = [
    {
      name: "NextJS",
      description:
        "Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces...",
      link: "https://nextjs.org/",
      image: <NextJSIcon width="70px" height="70px" />,
    },
    {
      name: "Adonis JS",
      description:
        "AdonisJS is a backend framework for Node.js. The framework is written in TypeScript, and the application you will ...",
      link: "https://adonisjs.com/",
      image: <AdonisIcon width="70px" height="70px" />,
    },
    {
      name: "React JS",
      description:
        "React is a JavaScript library for building user interfaces.",
      link: "https://reactjs.org/",
      image: <ReactIcon width="70px" height="70px" />,
    },
    {
      name: "Vue JS",
      description:
        "Vue is a framework and ecosystem that covers most of the common features needed in frontend development.",
      link: "https://vuejs.org/",
      image: <VueIcon width="70px" height="70px" />,
    },
    {
      name: "PHP",
      description:
        "A popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragma...",
      link: "https://www.php.net/",
      image: <PHPIcon width="70px" height="70px" />,
    },
    {
      name: "Laravel",
      description:
        "Laravel is a web application framework with expressive, elegant syntax. A web framework provides a structure and ...",
      link: "https://laravel.com/",
      image: <LaravelIcon width="70px" height="70px" />,
    },
    {
      name: "MySQL",
      description:
        "MySQL is an open-source relational database management system. As with other relational databases, MySQL ...",
      link: "https://www.mysql.com/",
      image: <MysqlIcon width="90px" height="90px" />,
    },
    {
      name: "AWS DynamoDB",
      description:
        "Fast, flexible NoSQL database service for single-digit millisecond performance at any scale.",
      link: "https://aws.amazon.com/dynamodb/",
      image: <DynamoIcon width="70px" height="70px" />,
    },
    {
      name: "Tailwind CSS",
      description:
        "Tailwind CSS is a utility-first CSS framework designed to enable users to create applications faster and easier.",
      link: "https://tailwindcss.com/",
      image: <TailwindIcon width="70px" height="70px" />,
    },
    {
      name: "Docker",
      description:
        "Docker allows you to separate your applications from your infrastructure so you can deliver software quickly.",
      link: "https://www.docker.com/",
      image: <DockerIcon width="80px" height="80px" />,
    },
  ];

  return (
    <>
      <Header title="Knowledge" />
      <div className="leftToright min-h-[100vh] w-full max-w-screen-lg mx-auto py-20 px-4 xxl:px-0">
        <div className={`${styles.name} font1`}>
          <h1>Knowledge</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {knowledges.map((knowledge, key) => (
            <div
              onClick={() => window.open(knowledge.link)}
              key={key}
              className={`${styles.projectContainer} cursor-pointer border4 mb-[30px] flex flex-col lg:flex-row items-center gap-4 lg:gap-5`}
            >
              <div className="px-[10px]">{knowledge.image}</div>
              <div className="details min-w-[300px]">
                <h2 className={`${styles.jobTitle} font3`}>{knowledge.name}</h2>
                <h3 className={`${styles.description} font2`}>
                  {knowledge.description}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
