import { Link } from "react-router-dom";
import cami from "../assets/cami.png";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="h-screen w-full bg-white relative flex overflow-hidden">
        <aside className="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">
          <Link to="/">
            <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
          </Link>
        </aside>

        <div className="w-full h-full flex flex-col justify-between">
          <header className="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800">
            <div className="flex flex-shrink-0 items-center space-x-4 text-white">
              <div className="flex flex-col items-end ">
                <div className="text-md font-medium ">Namaz Vakitleri</div>
                <div className="text-sm font-regular">Free</div>
              </div>

              <div className="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400 overflow-hidden">
                <img
                  src={cami}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </header>

          <main className="max-w-full h-full flex relative overflow-y-hidden">
            {/**<!-- Container --> */}
            <div className="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">
              {/**<!-- Container --> */}
              {/**<div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div> */}
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
