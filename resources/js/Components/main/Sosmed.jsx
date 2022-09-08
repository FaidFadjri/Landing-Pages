import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

const Sosmed = () => {
    return (
        <>
            <ul className="sosmed">
                <li>
                    <a>
                        <AiFillFacebook size={25} />
                    </a>
                </li>
                <li>
                    <a>
                        <AiFillInstagram size={25} />
                    </a>
                </li>
                <li>
                    <a>
                        <AiFillYoutube size={25} />
                    </a>
                </li>
                <li>
                    <a>
                        <FaTiktok size={25} />
                    </a>
                </li>
            </ul>
        </>
    );
};

export default Sosmed;
