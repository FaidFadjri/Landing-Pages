import React from "react";
import { Link } from "@inertiajs/inertia-react";

const Homecard = ({ title, description, imgUrl, className }) => {
    return (
        <>
            <div
                className={`card w-full flex flex-col md:items-center md:justify-between ${className}`}
            >
                <div className="card-thumbnail w-full flex flex-col items-center justify-center mb-3">
                    <img
                        src={imgUrl}
                        alt="thumbnail"
                        className="h-56 md:h-80 object-contain"
                    />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-1xl md:text-2xl text-poppins font-bold text-gray-600 px-5">
                        {title}
                    </h3>
                    <p className="text-sm md:text-1xl text-poppins text-gray-500 px-5">
                        {description}
                    </p>
                    <Link>
                        <button className="bg-sky-600 w-fit px-10 py-2 mt-5 rounded-full text-white font-bold hover:scale-110 smooth delay-150 duration-300">
                            Learn More
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Homecard;
