import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {useRouter} from "next/router";
import usePageCarousel from "../../zustands/usePageCarousel";

const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
    const {asPath} = useRouter();
    const getVariants = usePageCarousel((state) => state.getVariants)
    return (
        <div
            className={"overflow-hidden"}
        >
            <AnimatePresence
                exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >
                <motion.main
                    key={asPath}
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    variants={getVariants()}
                    transition={{type: 'linear'}}
                >
                    {children}
                </motion.main>
            </AnimatePresence>
        </div>
    )
}

export default Layout