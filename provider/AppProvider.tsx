import React, {useEffect} from 'react';
import usePageCarousel from "../zustands/usePageCarousel";
import {useRouter} from "next/router";

const AppProvider: React.FC<React.PropsWithChildren> = ({children}) => {
    const pageCarousel = usePageCarousel();
    const router = useRouter();
    useEffect(() => {
        try {
            if (router.route === "/products/[id]" && router.query?.id) {
                let id = +router.query.id;
                if (Number.isInteger(id) && id !== pageCarousel.page) {
                    pageCarousel.setPage(id)
                }
            }
        } catch (e) {
        }
    }, [router])
    return <>{children}</>
}

export default AppProvider