import { Globe } from "../core/Globe";

type Props = {};

const Home = (props: Props) => {
    return (
        <div>
            <div className=" lg:w-1/2 flex flex-col w-full h-screen px-4 sm:px-20 sticky lg:fixed lg:z-10 top-0 bg-gray-50 dark:bg-gray-900">
                <div className=" flex h-full items-center ">
                    <div className=" flex flex-col gap-8">
                        <div>
                            <p className=" dark:text-gray-300 text-4xl sm:text-5xl lg:text-[43px] font-bold font-roboto_slab">
                                Hello. I'm a freelance web
                            </p>
                            <p className="  dark:text-gray-300 text-4xl sm:text-5xl lg:text-[43px] font-bold font-roboto_slab mt-1">
                                app developer
                            </p>
                        </div>
                        <div className=" dark:text-gray-400">
                            <p className=" font-roboto_condensed">
                                My name is Thi Ha Zaw. I create user interfaces
                                using
                                <br />
                                modern web frontend technologies
                            </p>
                        </div>
                        <div className=" mt-2">
                            <button className=" border bg-gray-950 dark:bg-gray-400 dark:text-gray-800 text-white border-gray-700 px-6 py-2 rounded-full">
                                Let's work together!
                            </button>
                        </div>
                    </div>
                    
                </div>
                {/* <div className=" mt-auto mb-20">
                    <p>Find me at twitter,github and linkin</p>
                    <p>Downlad my resume</p>
                </div> */}
            </div>
            <div className=" w-full h-screen sticky top-0 bg-gray-50 dark:bg-gray-800 flex justify-end">
                <div className="lg:w-1/2 w-full">
                    <Globe />
                </div>
            </div>
            <div className=" w-full h-screen sticky top-0 bg-gray-50 flex justify-end">
                <div className="lg:w-1/2 w-full">
                    <div className=" p-20">
                        <div className=" flex gap-8 flex-col">
                            <h1 className=" text-3xl font-[500] font-roboto_condensed">
                                About me
                            </h1>
                            <p className=" text-lg leading-7 font-[450] font-roboto_slab">
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
                                <p className=" text-lg mb-1 font-[480] font-roboto_condensed">
                                    Technical
                                </p>
                                <p className="font-roboto_slab">
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
                                <p className=" text-lg mb-1 font-[480] font-roboto_condensed">
                                    Personal
                                </p>
                                <p className="font-roboto_slab">
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
            </div>
            <div className=" w-full h-screen sticky top-0 bg-gray-900 flex justify-end">
                <div className="lg:w-1/2 w-full">page 4</div>
            </div>
        </div>
    );
};

export default Home;
