import "./App.css";
import SignUpMobile from "./assets/images/illustration-sign-up-mobile.svg";
import SignUpBig from "./assets/images/illustration-sign-up-desktop.svg";
import IconSuccess from "./assets/images/icon-success.svg";

import useMediaQuery from "./Shared/useMediaQuery";
import { MediaQuery } from "./Shared/useMediaQuery";

function App() {
  const isMobile = useMediaQuery(MediaQuery.MOBILE);
  const isBig = useMediaQuery(MediaQuery.BIG);

  return (
    <main className="w-full bg-white text-primary md:flex md:aspect-[1/0.6] md:w-[50%] md:rounded-xl md:p-4">
      <div className="flex md:order-2 md:w-fit md:self-end">
        {isMobile && !isBig && (
          <img src={SignUpMobile} className="w-full" alt="" />
        )}
        {isBig && <img src={SignUpBig} className="w-full" alt="" />}
      </div>
      <div className="flex w-fit flex-col justify-center gap-4 p-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold md:text-3xl">Stay updated!</h1>
          <h2 className="md:text-sm">
            Join 60,000+ product managers receiving monthly updates on:
          </h2>
          <ul className="flex flex-col justify-center gap-4 text-sm">
            <li className="flex gap-4">
              <span className="mt-1 aspect-square w-5 self-start">
                <img className="h-full w-full" src={IconSuccess} alt="" />
              </span>
              <span>Product discovery and building what matters</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 aspect-square w-5 self-start">
                <img className="h-full w-full" src={IconSuccess} alt="" />
              </span>
              <span>Measuring to ensure updates are a success</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 aspect-square w-5 self-start">
                <img className="h-full w-full" src={IconSuccess} alt="" />
              </span>
              <span>And much more!</span>
            </li>
          </ul>
        </div>
        <form className="flex flex-col gap-5 rounded-xl">
          <div className="flex flex-col justify-center gap-2">
            <label htmlFor="mail" className="font-bold">
              Email address
            </label>
            <div className="w-full rounded-lg border border-[#D8D8D8] p-3 px-4">
              <input
                id="mail"
                type="text"
                placeholder="email@company.com"
                className="w-full outline-none"
              />
            </div>
          </div>
          <button className="w-full rounded-lg bg-secondary p-2 text-white">
            <span className="text-sm font-bold">
              Subscribe to monthly newsletter
            </span>
          </button>
        </form>
      </div>
    </main>
  );
}

export default App;
