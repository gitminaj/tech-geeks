import { FaArrowRight } from "react-icons/fa";
import YellowBtn from "../components/YellowBtn";
import BlackBtn from "../components/BlackBtn";

import bannerVideo from '../assets/testVideo.mp4';

export default function Home() {
  return (
    <>
      <div className="bg-[#000814] px-3 md:px-52 md:flex md:flex-col md:justify-center md:items-center">
        <p className="text-[#999DAA] p-3 bg-[#161D29] inline-flex items-center rounded-full shadow-sm shadow-[#FFFFFF2E] mt-5">
          {" "}
          Become an instructor <FaArrowRight className="ml-2" />{" "}
        </p>
        <h1 className="text-white text-[30px] font-[600] mt-5 ">
          Empower Your Future with
          <span className="text-transparent bg-clip-text bg-linear-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]">
            {" "}
            Coding Skills
          </span>{" "}
        </h1>
        <p className="text-[#838894] text-[16px] mt-3 md:w-[70%]">
          {" "}
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback
          instructor{" "}
        </p>

        <div className="flex flex-row justify-evenly mt-5 md:w-[50%]" >
          <YellowBtn body={"Learn More"} />
          <BlackBtn body={"Book a Demo"} />
        </div>

		<video src={bannerVideo} autoPlay muted loop />
      </div>
    </>
  );
}
