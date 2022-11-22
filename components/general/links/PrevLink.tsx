import React from 'react';
import Link from "next/link";
import usePageCarousel from "../../../zustands/usePageCarousel";
import Icon from "@mdi/react";
import {mdiChevronLeft} from "@mdi/js";
import {motion} from 'framer-motion';
import clsx from "clsx";

const PrevLink: React.FC<{ name: string, href: string, disabled?: boolean }> = ({name, href, disabled = false}) => {
    const pageCarousel = usePageCarousel();
    return <Link
        href={href}
        prefetch={false}
        onClick={pageCarousel.prev}
        className={clsx([disabled && "disabled-link"])}
    >
        <motion.span
            initial={{boxShadow: "0px 0px 0px 0 #cdc5c5"}}
            whileTap={{boxShadow: "-2px 0px 3px 0 #cdc5c5"}}
            className={clsx([disabled && "disabled-btn", "rounded-l bg-gray-200 flex justify-center items-center content-center w-6"])}
        >
            <Icon path={mdiChevronLeft} size={1} color={"rgb(129,129,129)"}/>
        </motion.span>
    </Link>
}

export default PrevLink