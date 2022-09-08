import React, { useState } from "react";
import Navbar from "@/Components/main/Navbar";
import "../../css/home.css";
import Sosmed from "@/Components/main/Sosmed";
import { CgGames } from "react-icons/cg";
import { BsLaptop } from "react-icons/bs";
import Homecard from "@/Components/main/Homecard";

const Home = () => {
    return (
        <>
            <Navbar />
            <section className="h-screen bg-white bg-white pt-16 z-10">
                <main className="banner">
                    <div className="tagline-wrap">
                        <p className="hashtag">#WorldFreeDrugs</p>
                        <h1 className="tagline">Say no to drugs!</h1>
                        <p className="tagline-desc">
                            “Drugs are a waste of time. They destroy your memory
                            and your self-respect and everything that goes along
                            with with your self-esteem.”
                        </p>

                        <div className="button-wrap">
                            <div className="button-typografi">
                                <p className="header">How to avoid drugs ?</p>
                                <p className="desc">
                                    Start by reading the article
                                </p>
                            </div>
                            <button className="button-start">
                                Get started
                            </button>
                        </div>
                    </div>
                    <div className="thumbnail-wrap">
                        <img
                            src="/assets/main.png"
                            alt="thumbnail"
                            className="thumbnail"
                        />
                    </div>
                </main>
                <Sosmed />
                <div className="cirlce"></div>
                <div className="rest-section flex flex-col md:flex-row py-5 gap-4 md:gap-0 md:py-0 justify-between px-10">
                    <div className="items flex gap-2 items-center">
                        <button className="bg-sky-500 w-fit h-fit px-2 py-2 rounded-md text-white">
                            <CgGames size={30} />
                        </button>
                        <div className="flex flex-col">
                            <p className="text-poppins text-1xl font-bold text-gray-500">
                                Play Games
                            </p>
                            <p className="text-poppins text-xs text-gray-500">
                                Playing a games avoid you from stress
                            </p>
                        </div>
                    </div>
                    <div className="items flex gap-2 items-center">
                        <button className="bg-rose-500 w-fit h-fit px-2 py-2 rounded-md text-white">
                            <BsLaptop size={30} />
                        </button>
                        <div className="flex flex-col">
                            <p className="text-poppins text-1xl font-bold text-gray-500">
                                Get More Skill & Knowledge
                            </p>
                            <p className="text-poppins text-xs text-gray-500">
                                you will have more knowledge including about
                                drugs
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="min-h-screen bg-white pt-10 z-10">
                <main className="flex flex-col items-center relative z-50">
                    <h2 className="text-2xl md:text-4xl font-bold text-poppins text-center text-[#5B5B5B] z-30">
                        why do people get into drugs?
                    </h2>
                    <p className="text-gray-400 w-fit text-sm px-10 mt-2 md:text-1xl text-center z-30">
                        Addiction is a serious dangerous things, Let's learn how
                        to avoid it
                    </p>

                    <div className="reason flex flex-col gap-10 mt-10 md:px-20 z-30">
                        <Homecard
                            title=":: Stress"
                            description="some people got stress cause a broken home, some others got stress cause their relationship. Even thought drugs not the only one which makes us feel better. We can to a lot of positive things to do"
                            imgUrl="/assets/sad-1.png"
                            className="md:flex-row md:px-10"
                        />
                        <Homecard
                            title=":: Bullying"
                            description="some people got stress caused bullying. they feel unworthy
                            after bullying. They think their useless, have no pride"
                            imgUrl="/assets/sad-2.png"
                            className="md:flex-row-reverse md:px-10"
                        />
                    </div>
                    <div className="w-3/5 h-full bg-[#F8F8F8] absolute top-0 left-0 z-10 top-full-radius"></div>
                </main>
            </section>

            <section className="min-h-screen bg-white pt-10 z-10"></section>
        </>
    );
};

export default Home;
