import Heading from "../components/text/Heading";

type Props = {};

const About = (props: Props) => {
    return (
        <section className=" w-full h-screen sticky top-0 bg-gray-900 flex justify-end">
            <div className="lg:w-1/2 w-full">
                <div className=" px-5 py-20 sm:px-20 ">
                    <div className=" flex gap-8 flex-col">
                        <Heading title="About me" />
                        <p className=" text-gray-400 sm:text-lg leading-7 font-[450] font-roboto_slab">
                            One of the aspects of development that excites me
                            the most is problem-solving. I enjoy tackling
                            challenges head-on, whether it's debugging an issue
                            in the code or architecting a scalable solution to
                            meet the needs of a project. My analytical mindset
                            and attention to detail enable me to approach
                            problems methodically and find effective solutions.
                        </p>
                        <div>
                            <p className=" text-gray-400 sm:text-lg mb-1 font-[480] font-roboto_condensed">
                                Technical
                            </p>
                            <p className="font-roboto_slab text-gray-500 text-sm sm:text-base">
                                I specialize in front-end technologies such as
                                HTML, CSS, and JavaScript, with expertise in
                                modern frameworks like React.js. While my heart
                                lies in front-end development, I also have
                                proficiency in back-end technologies such as
                                Php, Laravel, Node.js and Express.js.
                            </p>
                        </div>
                        <div>
                            <p className=" sm:text-lg text-gray-400 mb-1 font-[480] font-roboto_condensed">
                                Personal
                            </p>
                            <p className="font-roboto_slab text-gray-500 text-sm sm:text-base">
                                I'm Thi Ha Zaw, a passionate full-stack
                                developer based in Myanmar. With a strong
                                inclination towards web app development, I love
                                crafting immersive and user-friendly experiences
                                that bring ideas to life on the web.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
