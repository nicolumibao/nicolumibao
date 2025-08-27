import Image from "next/image";
import Header from "@/components/layout/Header";
import sitedetails from "@/lib/constant/sitedetails";
import Link from "next/link";
export default function Page() {
  return (
    <>
      <Header title="Contact" />
      <div className="animateOpacity min-h-[90vh] w-full max-w-screen-lg mx-auto py-20 px-4 md:px-8 justify-center flex flex-col items-center ">
        <div className="mt-[30px] w-full md:w-[700px]">
          <h1 className="font1 text-[30px] text-center mb-[20px] hidden">
            Contact
          </h1>
          <div className="boxShadow1 rounded-2xl p-[40px]">
            <div className="flex justify-center">
              <Image
                alt={sitedetails.fullname}
                blurDataURL={sitedetails.mainImage}
                src={sitedetails.mainImage}
                width="130"
                height="130"
                className="rounded-full"
                priority
              />
            </div>
            <div className="flex justify-center text-center">
              <div className="w-full">
                <p className="text-[25px] mt-[15px] mb-[5px] font1">
                  {sitedetails.fullname}
                </p>
                <p className="font2 text-[15px] font1">
                  {sitedetails.position}
                </p>
                <div className="flex flex-col md:flex-row gap-2 md:gap-0 mt-[50px] mb-[20px]">
                  <div className="w-full md:text-right">
                    <h2 className="font1">{sitedetails.email}</h2>
                  </div>
                  <div className="w-[2px] bg5 mx-[30px]"></div>
                  <div className="w-full md:text-left tracking-wider">
                    <h2 className="font1">{sitedetails.contact}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center w-full justify-center gap-4 md:gap-10 mt-[20px] md:mt-[40px]">
            <Link
              className="text-[13px] font1"
              href={sitedetails.facebook}
              target="_blank"
              aria-label="Facebook"
            >
              Facebook
            </Link>
            <Link
              className="text-[13px] font1"
              href={sitedetails.instagram}
              target="_blank"
              aria-label="Instagram"
            >
              Instagram
            </Link>
            <Link
              className="text-[13px] font1"
              href={sitedetails.linkedin}
              target="_blank"
              aria-label="LinkedIn"
            >
              LinkedIn
            </Link>
            {/* <Link
              className="text-[13px] font1"
              href={sitedetails.github}
              target="_blank"
              aria-label="Github"
            >
              Github
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
