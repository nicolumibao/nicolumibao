import { useEffect, useState } from "react";
import { ThemeContext } from "@/lib/context/context";
import Menus from "@/components/layout/Menus";
import Menu2 from "@/components/layout/Menu2";
export default function DefaultLayout(props) {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const themeHandler = localStorage.getItem("theme");
    if (themeHandler) {
      setTheme(themeHandler);
    } else {
      setTheme("dark");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!theme || theme === "") {
    return <></>;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`${theme} min-h-screen bg-no-repeat bg-cover`}
        style={{ backgroundImage: "url(/images/background.avif)" }}
      >
        <Menus />
        <Menu2 />
        {props.children}
      </div>
    </ThemeContext.Provider>
  );
}
