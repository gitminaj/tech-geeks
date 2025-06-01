import { FaArrowRight } from "react-icons/fa";
import YellowBtn from "../components/Btn";

import bannerVideo from "../assets/testVideo.mp4";
import BlueText from "../components/BlueText";
import Btn from "../components/Btn";
import DummyCode from "../components/DummyCode";

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

        <div className="flex flex-row w-[100%] mt-10">
          <div className="w-[50%] pr-20">
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
          <div className="w-[50%] flex justify-center">
            <DummyCode/>
          </div>
        </div>

        <div className="flex flex-row w-[100%] mt-10">

          <div className="w-[50%] flex justify-center">
            <DummyCode/>
          </div>
                    <div className="w-[50%] pr-20">
            <h1 className="text-white text-[30px] font-[600] mt-5 ">
              Start
              <BlueText body={`coding in seconds`} /> 
            </h1>
            <p className="text-[#838894] text-[16px] mt-3">
          {" "}
         Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.{" "}
        </p>  
        <div className="flex flex-row mt-5">

        <Btn active={true} className="mr-5"> Try it Yourself <FaArrowRight className="ml-2" /> </Btn>
        <Btn body={"Learn More"} />
        </div>
          </div>
        </div>

        <div>
          <p className="text-[36px] text-white text-center font-semibold"> Unlock the <BlueText body={"Power of Code"} /> </p>
          <p className="text-[#838894] text-center text-[16px]">
         Learn to Build Anything You Can Imagine
        </p>
        <div>
          <div className="relative w-[300px] h-[244px] px-5 bg-white">
            <p className="font-semibold text-[20px] pt-5 " >Learn HTML</p>
            <p className='text-[#585D69] text-[16px] pt-3'>This course covers the basic concepts of HTML including creating and structuring
               web pages, adding text, links, images, and more.</p>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between mt-auto">
              <p className="text-[#0A5A72] text-[16px]"> Beginner  </p>
              <p className="text-[#0A5A72] text-[16px]"> Lessons  </p>
            </div>
          </div>
        </div>
        </div>

        


      </div>
    </>
  );
}
