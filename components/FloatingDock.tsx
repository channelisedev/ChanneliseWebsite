import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconHome,
    IconBrandLinkedin,
    IconBrandInstagram,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/",
        },
        {
            title: "Linked In",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/company/channelisetech/?viewAsMember=true",
        },
        {
            title: "Instagram",
            icon: (
                <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.instagram.com/channelise.in/?utm_source=ig_web_button_share_sheet",
        },
    ];
    return (
        <div className="flex items-center justify-center w-full">
            <FloatingDock
                items={links}
            />
        </div>
    );
}
