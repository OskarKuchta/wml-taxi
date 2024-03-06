import { useState } from "react";

const Hamburger = () => {
  const [straightLines, setStraightLines] = useState<boolean>(false);
  const showMenu = () => {
    setStraightLines(!straightLines);
  };
  return (
    <>
      <div className="fixed left-12 top-10">
        <button onClick={showMenu}>
          <div className="relative flex overflow-hidden items-center justify-center rounded-full w-12 h-12 md:w-16 md:h-16 transform transition-all bg-white ring-0 ring-black hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-500 origin-center overflow-hidden">
              <div
                className={`bg-black h-[2px] w-7 transform transition-all duration-500 ${
                  straightLines ? "rotate-45" : ""
                } -translate-x-1`}
              ></div>
              <div className="bg-black h-[2px] w-7 rounded transform transition-all duration-500 "></div>
              <div
                className={`bg-black h-[2px] w-7 transform transition-all duration-500 ${
                  straightLines ? "-rotate-45" : ""
                } -translate-x-1`}
              ></div>
            </div>
          </div>
        </button>
      </div>
      {straightLines ? (
        <div className="w-[60vw] md:w-[40vw] h-screen bg-[#8e8c8c] flex flex-col justify-center items-center gap-16">
          <h2>Główna</h2>
          <h2>Godziny pracy</h2>
          <h2>Zamów transport</h2>
          <h2>Kontakt</h2>
        </div>
      ) : null}
    </>
  );
};

export default Hamburger;
