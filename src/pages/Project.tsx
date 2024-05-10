import Heading from "../components/text/Heading";
import { HoverEffect } from "../components/ui/card-hover-effect";
import AddToCart from "../images/add-to-cart.png";

const projects = [
    {
        title: "Stripe",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        image: AddToCart,
        link: "https://stripe.com",
    },
    {
        title: "Netflix",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies.",
        image: AddToCart,
        link: "https://netflix.com",
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
        <div>
            <div>
                <h1 className=" text-3xl font-[500] font-roboto_condensed text-gray-300">
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
