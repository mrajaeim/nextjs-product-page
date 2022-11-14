import React from 'react';
import Link from "next/link";
import usePageCarousel from "../../zustands/usePageCarousel";

const PrevLink: React.FC<{name:string, href:string}> = ({name, href}) => {
    const prev = usePageCarousel(state=>state.next);
    return  <Link href={href} prefetch={false} onClick={prev}>
        {name}
    </Link>
}

export default PrevLink