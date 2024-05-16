import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

import { EmblaOptionsType } from "embla-carousel";
import Heading from "../components/text/Heading";
import Project from "./Project";
import Lottie from "lottie-react";
import developerAnimation from "../data/dev-1.json";
import Contact from "./Contact";
import EmblaCarousel from "../components/carousel/EmblaCarousel";

type Props = {};

export type Project = {
    src: string;
    title: string;
    description: string;
};

const Home = (props: Props) => {
    const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
   

    return (
        <>
            <section className=" lg:w-1/2 flex flex-col w-full h-screen px-4 sm:px-20 sticky lg:fixed lg:z-10 top-0 bg-gray-800 ">
                <div className=" flex h-full items-center ">
                    <div className=" flex flex-col gap-9">
                        <div>
                            <p className="text-gray-50 animate__animated animate__fadeInLeft tracking-wide  text-4xl sm:text-5xl lg:text-[43px] font-bold font-roboto_slab">
                                Hello. I'm a freelance web
                            </p>
                            <p className="text-gray-50 animate__animated animate__fadeInLeft tracking-wide   text-4xl sm:text-5xl lg:text-[43px] font-bold font-roboto_slab mt-2">
                                app developer
                            </p>
                        </div>
                        <div className=" ">
                            <p className=" animate__animated animate__fadeInLeft font-roboto_condensed text-gray-300 tracking-wide">
                                My name is Thi Ha Zaw. I create beautiful web
                                apps using
                                <br />
                                modern web frontend and backend technologies
                            </p>
                        </div>
                        <div className=" mt-1">
                            <button className=" animate__animated animate__fadeInLeft border shadow-sm shadow-gray-50 bg-gray-800 text-gray-300 border-gray-700 px-6 py-2 rounded-full">
                                Let's work together!
                            </button>
                        </div>
                        <div>
                            <div className=" flex gap-3 items-center animate__animated animate__fadeInLeft">
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
            <section className=" w-full h-screen sticky top-0 bg-gray-900 flex justify-end">
                <div className="lg:w-1/2 w-full">
                    <div className=" p-5 sm:p-20">
                        <div className=" flex gap-8 flex-col">
                            <Heading title="About me" />
                            <p className=" text-gray-400 text-lg leading-7 font-[450] font-roboto_slab">
                                One of the aspects of development that excites
                                me the most is problem-solving. I enjoy tackling
                                challenges head-on, whether it's debugging an
                                issue in the code or architecting a scalable
                                solution to meet the needs of a project. My
                                analytical mindset and attention to detail
                                enable me to approach problems methodically and
                                find effective solutions.
                            </p>
                            <div>
                                <p className=" text-gray-400 text-lg mb-1 font-[480] font-roboto_condensed">
                                    Technical
                                </p>
                                <p className="font-roboto_slab text-gray-500">
                                    I specialize in front-end technologies such
                                    as HTML, CSS, and JavaScript, with expertise
                                    in modern frameworks like React.js. While my
                                    heart lies in front-end development, I also
                                    have proficiency in back-end technologies
                                    such as Php, Laravel, Node.js and
                                    Express.js.
                                </p>
                            </div>
                            <div>
                                <p className=" text-lg text-gray-400 mb-1 font-[480] font-roboto_condensed">
                                    Personal
                                </p>
                                <p className="font-roboto_slab text-gray-500">
                                    I'm Thi Ha Zaw, a passionate full-stack
                                    developer based in Myanmar. With a strong
                                    inclination towards web app development, I
                                    love crafting immersive and user-friendly
                                    experiences that bring ideas to life on the
                                    web.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" w-full min-h-screen h-screen sticky top-0 bg-gray-50 flex justify-end">
                <div className="lg:w-1/2 w-full">
                    {/* <div className=" px-0 sm:px-20 pt-10 sm:pt-20 ">
                        <Project />
                    </div> */}
                    <div className=" p-5 sm:px-10 sm:pb-20 sm:pt-14">
                        <div className=" mb-12">
                            <h1 className=" text-3xl font-[500] font-roboto_condensed">
                                Projects
                            </h1>
                        </div>
                        <EmblaCarousel options={OPTIONS} />
                    </div>
                </div>
            </section>
            <section className=" w-full min-h-screen h-screen sticky top-0 bg-white flex justify-end">
                <div className="lg:w-1/2 w-full ">
                    <div className=" p-5 sm:p-20 ">
                        <Contact />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
