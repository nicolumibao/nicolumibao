import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import sitedetails from "@/lib/constant/sitedetails";
export default function Page() {
  return (
    <>
      <Header title={sitedetails.position} />
      <h1 className="hidden">{sitedetails.fullname}</h1>
      <div className="animateOpacity min-h-[85vh] w-full max-w-screen-lg mx-auto py-20 px-8 xxl:px-0 flex flex-col lg:flex-row items-center gap-2 lg:gap-8">
        <div
          className={`${styles.image} boxShadow1 rounded-full px-4 py-4 bg2 max-w-sm`}
        >
          <div className="box">
            <div className="content">
              <Image
                alt={sitedetails.fullname}
                blurDataURL={sitedetails.mainImage}
                src={sitedetails.mainImage}
                width="300"
                height="300"
                className="img"
                priority
              />
            </div>
          </div>
        </div>
        <div className={`${styles.details} max-w-xl`}>
          <h2 className={`${styles.jobTitle} shine`}>{sitedetails.position}</h2>
          <p className={`${styles.name} font1`}>{sitedetails.fullname}</p>
          <h3 className={`${styles.description} font2 text-justify`}>
            {sitedetails.about}
          </h3>
          <div className="reflect flex gap-2 mt-[20px]">
            <Link href="/Nico_D_Lumibao.pdf" target="_blank">
              <button
                id="downloadcv"
                title="Download CV"
                className={`${styles.button} font1 bg1 border2 cvButton`}
              >
                Download CV
              </button>
            </Link>

            <Link href="/contact">
              <button
                id="getintouch"
                title="Get in Touch"
                className={`${styles.buttonBasic} font1 bg1 border1`}
              >
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
