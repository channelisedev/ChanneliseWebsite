import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import Image from "next/image";

export function BackgroundGradientAnimationDemo() {
    const size: number = 75;
    return (
        <BackgroundGradientAnimation>
            <div className="absolute z-40 gap-3 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
                <p className="bg-clip-text flex p-3 flex-col gap-3 text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                    <span className="flex gap-3 items-center justify-center opacity-[50%] text-white">
                        <Image
                            className="opacity-[100%] w-[35px] md:w-[45px] lg:w-[80px]"
                            src={"/symbol_light.png"}
                            alt="logo"
                            width={size}
                            height={size}
                        />
                        Channelise
                    </span>
                    <hr className="opacity-[10%]"/>
                    <span className="text-[25px] text-4xl">Coming Soon</span>
                </p>
            </div>
        </BackgroundGradientAnimation>
    );
}
