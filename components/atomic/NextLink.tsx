import React from 'react';
import Link from "next/link";
import usePageCarousel from "../../zustands/usePageCarousel";
import {mdiChevronRight} from '@mdi/js';
import Icon from '@mdi/react';
import { motion } from 'framer-motion';

const NextLink: React.FC<{ name: string, href: string }> = ({name, href}) => {
    const pageCarousel = usePageCarousel();
    return <Link href={href} prefetch={false} onClick={pageCarousel.next}>
        <motion.span initial={{boxShadow:"0px 0px 0px 0 #cdc5c5"}} whileTap={{boxShadow:"2px 0px 3px 0 #cdc5c5"}} className={"rounded-r bg-gray-200 flex justify-center items-center content-center w-6"}>
            <Icon path={mdiChevronRight} size={1} color={"rgb(129,129,129)"}/>
        </motion.span>
    </Link>
}

export default NextLink;