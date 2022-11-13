import React, {useState} from 'react';
import Icon from '@mdi/react'
import {mdiCart, mdiReload, mdiCheck} from '@mdi/js';
import {motion} from "framer-motion";

const AddToCart: React.FC = () => {
    const [state, setState] = useState<"add" | "loading" | "done">("add");
    const handleClick = () => {
        if (state === "add") {
            setState("loading")
            setTimeout(() => {
                setState("done")
            }, 1200)
        }
    }
    return <motion.button
        className={"rounded-lg cursor-pointer py-2 px-4 border-0 flex justify-center items-center content-center primary-btn"}
        transition={{type: "spring"}}
        whileTap={{
            scale: 1.08,
        }}
        whileHover={{
            scale: 1.02,
        }}
        onClick={handleClick}
    >
        <Icon
            path={state === "loading" ? mdiReload : state === "done" ? mdiCheck : mdiCart}
            size={1}
            color={"#fff"}
            spin={state === "loading"}
        />
        <span className={"ml-2 font-medium text-white"}>
            ADD TO CART
        </span>
    </motion.button>
}

export default AddToCart