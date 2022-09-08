import React, { useState } from "react";
import Navbar from "@/Components/main/Navbar";
import "../../css/home.css";
import Sosmed from "@/Components/main/Sosmed";
import { CgGames } from "react-icons/cg";
import { BsLaptop } from "react-icons/bs";
import Homecard from "@/Components/main/Homecard";
import Article from "@/Components/main/Article";

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

            <section className="h-fit bg-white py-12 z-10 relative">
                <main className="flex flex-col items-center relative z-40">
                    <h2 className="text-2xl md:text-4xl font-bold text-poppins text-center text-[#5B5B5B] z-30">
                        Read Articles
                    </h2>
                    <p className="text-gray-400 w-fit text-sm px-10 mt-2 md:text-1xl text-center z-30">
                        you can read the articles to help you avoid drugs
                    </p>
                    <div className="flex flex-col md:flex-row mx-5 gap-5 mt-10 text-poppins">
                        <Article
                            title="Upscale your skill"
                            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ...."
                            imgUrl="https://flowbite.com/docs/images/blog/image-1.jpg"
                        />
                        <Article
                            title="Types of drugs ?"
                            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ...."
                            imgUrl="https://asean.org/wp-content/uploads/2022/02/istockphoto-1184787665-612x612-1.jpg"
                        />
                        <Article
                            title="How to avoid drugs ?"
                            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ...."
                            imgUrl="https://www.turnbridge.com/wp-content/uploads/2021/11/AdobeStock_166028406-scaled.jpeg"
                        />
                    </div>
                </main>
            </section>

            <section className="h-screen bg-white z-10 relative">
                <main className="flex flex-col items-center relative z-40">
                    <h2 className="text-2xl md:text-4xl font-bold text-poppins text-center text-[#5B5B5B] z-30">
                        Feedback
                    </h2>
                    <p className="text-gray-400 w-fit text-sm px-10 mt-2 md:text-1xl text-center z-30">
                        Give me a feedback to help us make a better articles
                    </p>

                    <div className="flex flex-col md:flex-row mt-10 w-full px-10">
                        <img
                            src="/assets/happy-1.png"
                            alt="thumbnail"
                            className="h-96 flex-auto object-contain"
                        />

                        <form
                            action=""
                            className="flex flex-col gap-2 w-full md:w-1/2 px-5 py-5"
                        >
                            <p className="text-sm text-poppins text-gray-400">
                                Give me a feedback to help us make a better
                                articles
                            </p>
                            <input
                                type="text"
                                className="border-1 border-gray-200 rounded-md"
                                placeholder="Type your email"
                            />
                            <textarea
                                cols="30"
                                rows="10"
                                placeholder="Type description"
                                className="border-1 border-gray-200 rounded-md"
                            ></textarea>
                            <button className="w-full bg-sky-600 py-2 rounded-md font-bold text-white hover:scale-105 smooth delay-150 duration-300">
                                Submit
                            </button>
                        </form>
                    </div>
                </main>

                <div className="h-full w-96 left-full-radius bg-[#F8F8F8] absolute top-0 right-0"></div>
            </section>

            <section className="h-96 w-full bg-[#269BCC]"></section>
        </>
    );
};

export default Home;
