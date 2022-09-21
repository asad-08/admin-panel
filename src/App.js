import { useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("");
  function handleTheme(e, name) {
    e.preventDefault();
    setTheme(name);
  }

  return (
    <div
      className={
        theme === "dark"
          ? "theme-dark"
          : theme === "purple"
          ? "theme-purple"
          : theme === "pink"
          ? "theme-pink"
          : theme === "yellow"
          ? "theme-yellow"
          : theme === "green"
          ? "theme-green"
          : ""
      }
    >
      <div className="fixed top-[50%] right-[0%] transform translate-x-[-50%] translate-y-[-50%] flex flex-col bg-white p-4">
        <label
          onClick={(e) => handleTheme(e, "dark")}
          className="hover:cursor-pointer hover:text-fuchsia-700"
        >
          dark
        </label>
        <label
          onClick={(e) => handleTheme(e, "purple")}
          className="hover:cursor-pointer hover:text-fuchsia-700"
        >
          purple
        </label>
        <label
          onClick={(e) => handleTheme(e, "pink")}
          className="hover:cursor-pointer hover:text-fuchsia-700"
        >
          pink
        </label>
        <label
          onClick={(e) => handleTheme(e, "yellow")}
          className="hover:cursor-pointer hover:text-fuchsia-700"
        >
          yellow
        </label>
        <label
          onClick={(e) => handleTheme(e, "green")}
          className="hover:cursor-pointer hover:text-fuchsia-700"
        >
          green
        </label>
      </div>
      <div className="min-h-screen min-w-max">
        <div className="h-screen flex items-start justify-center flex-col px-32">
          <label className="text-skin-base bg-skin-fill border-current p-2">
            Lorem Ipsum is simply dummy text of the
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
