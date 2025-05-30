import { FaArrowRight } from "react-icons/fa";
import YellowBtn from "../components/Btn";

import bannerVideo from "../assets/testVideo.mp4";
import BlueText from "../components/BlueText";
import Btn from "../components/Btn";

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
          <BlueText body={"Coding Skills"} />
        </h1>
        <p className="text-[#838894] text-center text-[16px] mt-3 md:w-[70%]">
          {" "}
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback
          instructor{" "}
        </p>

        <div className="flex flex-row justify-center mt-8 md:w-[50%]">
          <Btn body={"Learn More"} active={true} className="mr-5" />
          <Btn body={"Book a Demo"} />
        </div>

        <video className="mt-5" src={bannerVideo} autoPlay muted loop />

        <div className="flex flex-row w-[100%]">
          <div className="w-50% pr-20">
            <h1 className="text-white text-[30px] font-[600] mt-5 ">
              Unlock your
              <BlueText body={"coding potential"} /> with our online courses.
            </h1>
            <p className="text-[#838894] text-[16px] mt-3">
          {" "}
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback
          instructor{" "}
        </p>  
        <div className="flex flex-row mt-5">

        <Btn active={true} className="mr-5"> Try it Yourself <FaArrowRight className="ml-2" /> </Btn>
        <Btn body={"Learn More"} />
        </div>
          </div>
          <div className="w-50%">
            <span>
              {`<!DOCTYPE html>
              <html>
              head><title>Example</title><linkrel="stylesheet"href="styles.css">
              /head>
              body>
              h1><ahref="/">Header</a>
              /h1>
              nav><ahref="one/">One</a><ahref="two/
              ">Two</a><ahref="three/">Three</a>
              /nav>
              
              
              `}
            </span>
          </div>
          
        </div>
      </div>
    </>
  );
}
