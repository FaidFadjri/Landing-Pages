import React from "react";
import { Card } from "flowbite-react";

const Article = ({ title, desc, imgUrl }) => {
    return (
        <>
            <div className="max-w-sm">
                <Card imgSrc={imgUrl}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-500 dark:text-white">
                        {title}
                    </h5>
                    <p className="font-normal text-gray-400 dark:text-gray-400">
                        {desc}
                    </p>
                </Card>
            </div>
        </>
    );
};

export default Article;
