import { useContext } from "react";
import { TThemeContextProps, ThemeContext } from "../context/ThemeProvider";

const ThemeToggleButton = () => {
  const { dark, setDark } = useContext(ThemeContext) as TThemeContextProps;
  console.log(dark);
  return (
    <div className={`w-full ${dark ? "bg-black" : "bg-white"}`}>
      <button
        onClick={() => setDark(!dark)}
        className="group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
      >
        <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
          Download
        </span>
      </button>
    </div>
  );
};

export default ThemeToggleButton;
