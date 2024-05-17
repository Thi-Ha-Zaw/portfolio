import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

import Lottie from "lottie-react";
import developerAnimation from "../data/dev-1.json";


const Home = () => {
    return (
        <>
            <section className=" lg:w-1/2 flex flex-col w-full h-screen px-4 sm:px-16 lg:px-20 sticky lg:fixed lg:z-10 top-0 bg-gray-800 ">
                <div className=" flex h-full items-center ">
                    <div className=" flex flex-col gap-9 animate__animated animate__fadeIn">
                        <div>
                            <p className="text-gray-50 tracking-wide  text-4xl sm:text-5xl lg:text-[43px] font-bold font-roboto_slab">
                                Hello. I'm a freelance web
                            </p>
                            <p className="text-gray-50 tracking-wide   text-4xl sm:text-5xl lg:text-[43px] font-bold font-roboto_slab mt-2">
                                app developer
                            </p>
                        </div>
                        <div className=" w-full sm:w-2/3">
                            <p className=" font-roboto_condensed text-gray-300 tracking-wide">
                                My name is Thi Ha Zaw. I create beautiful web
                                apps using modern web frontend and backend
                                technologies
                            </p>
                        </div>
                        <div className=" mt-1">
                            <button className=" active:scale-75 duration-200 border shadow-sm shadow-gray-50 bg-gray-800 text-gray-300 border-gray-700 px-6 py-2 rounded-full">
                                Let's work together!
                            </button>
                        </div>
                        <div>
                            <div className=" flex gap-3 items-center">
                                <a href="https://github.com/Thi-Ha-Zaw">
                                    <FaGithub className=" text-gray-50 text-xl" />
                                </a>
                                <a href="https://www.instagram.com/thzaw4321">
                                    <FaInstagram className=" text-gray-50 text-xl" />
                                </a>
                                <a href="https://www.linkedin.com/in/thi-ha-zaw-69a822270">
                                    <FaLinkedin className=" text-gray-50 text-xl" />
                                </a>
                                <a href="mailto:thzaw4321@gmail.com">
                                    <IoMail className=" text-gray-50 text-[23px]" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" w-full h-screen sticky top-0 flex justify-end bg-white ">
                <div className="lg:w-1/2 w-full pt-32">
                    <div className=" animate__animated animate__fadeIn">
                        <Lottie
                            animationData={developerAnimation}
                            loop={true}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
