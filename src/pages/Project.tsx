import { HoverEffect } from "../components/ui/card-hover-effect";
import AddToCart from "../images/add-to-cart.png";
import TodoApp from "../images/todoapp.png";

const projects = [
    {
        title: "Stripe",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        image: AddToCart,
        link: "https://stripe.com",
    },
    {
        title: "Todoapp",
        description:
            "A platform that services your daily tasks have to be noted.",
        image: TodoApp,
        link: "https://react-todoapp-tsx.netlify.app",
    },
    {
        title: "Google",
        description:
            "A multinational technology company that specializes in Internet-related services.",
        image: AddToCart,
        link: "https://google.com",
    },
    {
        title: "Meta",
        description:
            "A technology company that focuses on building products that advance Facebook's mission.",
        image: AddToCart,
        link: "https://meta.com",
    },
];

const Project = () => {
    return (
        <div className="">
            <div>
                <h1 className=" ps-5 sm:ps-0 text-3xl font-[500] font-roboto_condensed text-gray-300">
                    Projects
                </h1>
            </div>
            <div className=" flex h-full items-center font-open_sans">
                <HoverEffect items={projects} />
            </div>
        </div>
    );
};

export default Project;
