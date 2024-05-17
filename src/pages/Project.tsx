import EmblaCarousel from "../components/carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

import Delivery from "../images/devli_one.jpg";
import TodoList from "../images/todolist.jpg";
import Shop from "../images/shop.jpg";
import News from "../images/news.jpg";
import ERP from "../images/erp.jpg";



export type Project = {
    href: string;
    src: string;
    title: string;
    description: string;
};

const Project = () => {
    const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

    const slides: Project[] = [
        {
            href : "https://react-todoapp-tsx.netlify.app",
            src: Delivery,
            title: "Delivery",
            description:
                "A streamlined app for tracking and managing deliveries in real-time.",
        },
        {
            href : "https://react-todoapp-tsx.netlify.app",
            src: TodoList,
            title: "Todo List",
            description:
                "An intuitive task management tool to help organize daily activities and projects.",
        },
        {
            href : "https://react-todoapp-tsx.netlify.app",
            src: Shop,
            title: "Shop",
            description:
                "A comprehensive e-commerce platform for browsing and purchasing products.",
        },
        {
            href : "https://react-todoapp-tsx.netlify.app",
            src: News,
            title: "News",
            description:
                "A dynamic news aggregator delivering the latest headlines and stories.",
        },
        {
            href : "https://react-todoapp-tsx.netlify.app",
            src: ERP,
            title: "ERP",
            description:
                "An enterprise resource planning system to optimize business processes and workflows.",
        },
    ];
    return (
        <section className=" w-full min-h-screen h-screen sticky top-0 bg-white flex justify-end">
            <div className="lg:w-2/3 flex justify-end w-full">
                <div className=" py-10 md:pt-32 lg:py-10">
                    <div className=" mb-12 flex flex-col gap-5 px-5 sm:px-20">
                        <h1 className=" text-3xl font-[500] font-roboto_condensed">
                            Projects
                        </h1>
                        <p className=" font-roboto_condensed text-sm text-gray-400">
                            Swipe or Drag below to see a small selection of
                            projects I worked on
                        </p>
                    </div>
                    <EmblaCarousel slides={slides} options={OPTIONS} />
                </div>
            </div>
        </section>
    );
};

export default Project;
