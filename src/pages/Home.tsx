import React from "react";

type Props = {};

const Home = (props: Props) => {
    return (
        <div>
            <div className=" lg:w-1/2 w-full h-screen sticky lg:fixed lg:z-10 top-0 bg-gray-50">
                <div>page 1</div>
            </div>
            <div className=" w-full h-screen sticky top-0 bg-gray-100 flex justify-end">
                <div className="lg:w-1/2 w-full">page 2</div>
            </div>
            <div className=" w-full h-screen sticky top-0 bg-gray-200 flex justify-end">
                <div className="lg:w-1/2 w-full">page 3</div>
            </div>
            <div className=" w-full h-screen sticky top-0 bg-gray-300 flex justify-end">
                <div className="lg:w-1/2 w-full">page 4</div>
            </div>
        </div>
    );
};

export default Home;
