import React, {useEffect, useState} from 'react';
import {mdiShareVariant} from "@mdi/js";
import Icon from "@mdi/react";
import Tooltip from "rc-tooltip";
import {motion} from "framer-motion";

const ShareBtn: React.FC<{ url: string, text?: string, title: string }> = ({url, text, title}) => {
    return <span className={"inline-block"}>
        <Tooltip
            placement="left"
            trigger={['hover']}
            overlay={<span>Share</span>}
        >
            <motion.span
                onClick={() => navigator.share({url, text, title})}
                className={"cursor-pointer rounded-full flex justify-center items-center content-center p-1"}
                transition={{type: "tween"}}
                initial={{
                    background: "#00000000",
                    boxShadow: "0 0 0px 0px #eeeeee",
                }}
                whileTap={{
                    background: "#cccccc",
                    boxShadow: "0 0 20px 5px #eeeeee",
                }}
                whileHover={{
                    background: "#eeeeee",
                }}
            >
                <Icon
                    path={mdiShareVariant}
                    size={1}
                    color={"#b9b9b9"}
                />
            </motion.span>
        </Tooltip>
    </span>
}

export default ShareBtn