import React from 'react';
import Link from "next/link";
import usePageCarousel from "../../zustands/usePageCarousel";

const NextLink: React.FC<{name:string, href:string}> = ({name, href}) => {
    const next = usePageCarousel(state=>state.next);
    return  <Link href={href} prefetch={false} onClick={next}>
        {name}
    </Link>
}

export default NextLink;