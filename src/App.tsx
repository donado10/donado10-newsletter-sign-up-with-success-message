import "./App.css";
import SignUpMobile from "./assets/images/illustration-sign-up-mobile.svg";
import SignUpBig from "./assets/images/illustration-sign-up-desktop.svg";
import IconSuccess from "./assets/images/icon-success.svg";

import useMediaQuery from "./Shared/useMediaQuery";
import { MediaQuery } from "./Shared/useMediaQuery";
import { useRef, useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

const Subscribe: React.FC<{
  onSubscribeHandler: React.Dispatch<ISubscribe>;
}> = ({ onSubscribeHandler }) => {
  const isMobile = useMediaQuery(MediaQuery.MOBILE);
  const isBig = useMediaQuery(MediaQuery.BIG);

  const [formFocus, setFormFocus] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<{ mail: string }>();

  const submitHandler: SubmitHandler<{ mail: string }> = () => {
    onSubscribeHandler({
      isSuccess: true,
      mail: getValues().mail,
    });
  };

  return (
    <div className="bg-white md:flex md:aspect-[1/0.6] md:w-[47rem] md:rounded-xl md:p-4">
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
        <form
          className="flex flex-col gap-5 rounded-xl"
          onSubmit={handleSubmit(submitHandler)}
        >
          <div className="flex flex-col justify-center gap-2">
            <div className="flex items-center justify-between">
              <label htmlFor="mail" className="font-bold">
                Email address
              </label>
              {errors.mail && (
                <span className="text-[0.7rem] font-bold text-red-600">
                  Valid email required
                </span>
              )}
            </div>
            <div
              className={`w-full rounded-lg border border-[#D8D8D8] p-3 px-4 ${errors.mail && "border-red-600 bg-red-600/15"} ${formFocus && "border-primary"}`}
            >
              <input
                id="mail"
                type="text"
                placeholder="email@company.com"
                className={`w-full bg-transparent outline-none ${errors.mail && "text-red-600"}`}
                {...register("mail", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
                name="mail"
                onFocus={() => setFormFocus(true)}
                onBlur={() => setFormFocus(false)}
              />
            </div>
          </div>
          <button
            className="hover:custom-gradient w-full rounded-lg bg-secondary p-2 text-white"
            onClick={handleSubmit(submitHandler)}
          >
            <span className="text-sm font-bold">
              Subscribe to monthly newsletter
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

const SubscribeSuccess: React.FC<{
  onSubscribeHandler: React.Dispatch<ISubscribe>;
  mail: string;
}> = ({ onSubscribeHandler, mail }) => {
  return (
    <div className="flex min-h-screen flex-col justify-center gap-3 p-5 md:flex md:min-h-fit md:w-[25rem] md:gap-6 md:rounded-xl md:bg-white md:p-10">
      <div className="mt-auto aspect-square w-16 md:mt-0">
        <img src={IconSuccess} alt="" />
      </div>
      <h1 className="text-4xl font-bold md:text-3xl">
        Thanks for subscribing!
      </h1>
      <h2>
        A confirmation email has been sent to
        <span className="font-bold">{mail}</span>. Please open it and click the
        button inside to confirm your subscription
      </h2>
      <button
        className="hover:custom-gradient mt-auto w-full self-end rounded-lg bg-secondary p-2 text-white md:mt-0"
        onClick={() => {
          onSubscribeHandler({ isSuccess: false, mail: null });
        }}
      >
        <span className="text-sm font-bold">Dismiss message</span>
      </button>
    </div>
  );
};

interface ISubscribe {
  mail: string | null;
  isSuccess: boolean;
}

function App() {
  const [suscribeData, setSuscribeData] = useState<ISubscribe>({
    mail: null,
    isSuccess: false,
  });
  return (
    <main className="w-full text-primary md:flex md:items-center md:justify-center">
      {!suscribeData.isSuccess && (
        <Subscribe onSubscribeHandler={setSuscribeData} />
      )}
      {suscribeData.isSuccess && (
        <SubscribeSuccess
          onSubscribeHandler={setSuscribeData}
          mail={suscribeData.mail!}
        />
      )}
    </main>
  );
}

export default App;
