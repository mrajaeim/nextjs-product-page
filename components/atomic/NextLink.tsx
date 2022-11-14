import React from 'react';
import Link from "next/link";
import usePageCarousel from "../../zustands/usePageCarousel";

const NextLink: React.FC<{name:string, href:string}> = ({name, href}) => {
    const pageCarousel = usePageCarousel();
    return  <Link href={href} prefetch={false} onClick={pageCarousel.next}>
        {name}
    </Link>
}

export default NextLink;