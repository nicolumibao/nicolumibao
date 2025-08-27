import Link from "next/link";
import { useRouter } from "next/router";
import { ThemeContext } from "@/lib/context/context";
import { useContext } from "react";

export default function Menus() {
  const { theme } = useContext(ThemeContext);

  const router = useRouter();

  const findColor = (path) => {
    if (router?.route === path) {
      return theme === "dark" ? "#FFFFFF" : "#FFFFFF";
    }
    return "#898989";
  };

  const isActive = (path) => {
    return router?.route === path ? "activeMenu" : "";
  };

  return (
    // <div className="absolute top-1/3 bottom-2/3 z-10 bg-transparent">
    <div className="fixed z-10 bg-transparent w-full lg:w-fit lg:top-1/3 lg:bottom-2/3">
      {/* <div className="fixed z-10 bg-transparent w-full lg:flex lg:h-full items-center"> */}
      <div>
        <div className="mainMenu flex space-x-4 py-2 justify-center lg:flex-col lg:space-x-0 lg:space-y-3 lg:max-w-fit lg:px-3 lg:max-h-fit lg:py-3 lg:ml-2 lg:rounded-lg lg:mt-[-50px]">
          <button
            id="home"
            title="Home"
            className={`menu-list ${isActive("/")}`}
          >
            <Link href="/" aria-label="Home">
              <svg
                fill={findColor("/")}
                width="25px"
                height="25px"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z" />
              </svg>
            </Link>
          </button>
          <button
            id="about"
            title="About"
            className={`menu-list ${isActive("/about")}`}
          >
            <Link href="/about" aria-label="About">
              <svg
                fill={findColor("/about")}
                height="25px"
                width="25px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  className="st0"
                  d="M458.159,404.216c-18.93-33.65-49.934-71.764-100.409-93.431c-28.868,20.196-63.938,32.087-101.745,32.087
                  c-37.828,0-72.898-11.89-101.767-32.087c-50.474,21.667-81.479,59.782-100.398,93.431C28.731,448.848,48.417,512,91.842,512
                  c43.426,0,164.164,0,164.164,0s120.726,0,164.153,0C463.583,512,483.269,448.848,458.159,404.216z"
                />
                <path
                  className="st0"
                  d="M256.005,300.641c74.144,0,134.231-60.108,134.231-134.242v-32.158C390.236,60.108,330.149,0,256.005,0
                  c-74.155,0-134.252,60.108-134.252,134.242V166.4C121.753,240.533,181.851,300.641,256.005,300.641z"
                />
              </svg>
            </Link>
          </button>
          <button
            id="knowledge"
            title="Knowledge"
            className={`menu-list ${isActive("/knowledge")}`}
          >
            <Link href="/knowledge" aria-label="Knowledge">
              <svg
                fill={findColor("/knowledge")}
                height="25px"
                width="25px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 612 612"
              >
                <path
                  d="M477.951,120.549c-8.689-24.09-21.458-45.428-37.952-63.419C406.228,20.289,358.651,0,306.032,0
                  c-52.627,0-100.216,20.286-134.001,57.122c-16.503,17.992-29.279,39.331-37.973,63.421c-8.631,23.915-13.008,49.961-13.008,77.415
                  c0,69.626,30.818,116.284,53.319,150.353l0.072,0.109c16.684,25.188,26.125,40.221,26.125,56.228v8.984
                  c0,18.024,11.587,33.344,27.728,38.924v71.074c0,7.722,6.092,14.001,13.73,14.342c-0.452,3.048-0.717,6.157-0.717,9.333
                  c0,35.732,28.964,64.694,64.694,64.694c35.729,0,64.694-28.962,64.694-64.694c0-3.176-0.265-6.285-0.719-9.333
                  c7.638-0.34,13.73-6.62,13.73-14.342v-70.471c5.979-2.038,11.472-5.432,16.001-10.013c7.78-7.869,12.066-18.536,11.895-29.599
                  l-0.161-10.251c0.549-10.987,6.071-19.389,21.148-39.797c11.831-16.031,26.535-35.958,38.167-62.577
                  c13.588-31.087,20.192-64.768,20.192-102.963C490.948,170.505,486.574,144.461,477.951,120.549z M399.463,339.023
                  c-15.914,21.538-28.482,38.584-29.22,63.818l0.176,11.346l-66.171-0.287l67.783-139.569c0.182-0.49,0.042-1.015-0.382-1.416
                  c-0.418-0.412-1.071-0.639-1.765-0.639h-52.915l45.093-110.07c0-0.822-0.399-1.623-1.927-1.623c-0.1,0-61.871-0.014-61.971-0.014
                  c-0.99,0-1.876,0.488-2.144,1.204l-56.055,145.418c-0.179,0.493-0.039,1.01,0.38,1.422c0.423,0.402,1.074,0.638,1.773,0.638h65.572
                  l-18,104.585l-47.94-0.207v-8.984c0-29.215-15.25-52.215-33.016-79.037c-20.721-31.371-46.499-70.41-46.499-127.654
                  c0-92.297,59.128-156.773,143.798-156.773c84.648,0,143.733,64.476,143.733,156.773
                  C449.763,270.827,421.874,308.653,399.463,339.023z"
                />
              </svg>
            </Link>
          </button>
          <button
            id="contact"
            title="Contact"
            className={`menu-list ${isActive("/contact")}`}
          >
            <Link href="/contact" aria-label="Contact">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill={findColor("/contact")}
                  d="M1.60175 4.20114C2.14997 3.47258 3.02158 3 4 3H20C20.9784 3 21.85 3.47258 22.3982 4.20113L12 11.7635L1.60175 4.20114Z"
                />
                <path
                  fill={findColor("/contact")}
                  d="M1 6.2365V18C1 19.6523 2.34772 21 4 21H20C21.6523 21 23 19.6523 23 18V6.23649L13.1763 13.381C12.475 13.891 11.525 13.891 10.8237 13.381L1 6.2365Z"
                />
              </svg>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
