"use client";

import { motion } from "framer-motion";
import React from "react";
import { BackgroundBeamsDemo } from "@/components/Beams";
import Image from "next/image";

const page = () => {
    return (
        <div className="">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed flex items-center justify-center gap-2 inset-x-0 top-0 mx-auto bg-neutral-800 text-sm font-semibold py-3 px-5 rounded-b-2xl shadow-lg z-50 w-fit"
            >
                <Image
                    src={"/symbol_light.png"}
                    height={19}
                    width={19}
                    alt="logo"
                    className="text-neutral-300"
                />
                <p className="text-xl text-neutral-300">Channelise</p>
            </motion.div>

            <BackgroundBeamsDemo />
        </div>
    );
};

export default page;
