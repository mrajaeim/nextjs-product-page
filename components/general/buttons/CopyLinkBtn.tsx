import React, {useEffect, useState} from 'react';
import Icon from '@mdi/react'
import {mdiContentCopy} from '@mdi/js';
import Tooltip from "rc-tooltip";
import {CopyToClipboard} from "react-copy-to-clipboard";
import useLocation from "../../../hooks/useLocation";
import {motion} from "framer-motion";

const CopyLinkBtn: React.FC = () => {
    const location = useLocation();
    const [copied, setCopied] = useState(false);
    useEffect(() => {
        if (copied)
            setTimeout(() => {
                setCopied(false)
            }, 3000)
    }, [copied])
    return (
        <span className={"inline-block"}>
            <Tooltip
                placement="bottom"
                trigger={['hover']}
                overlay={<span>{copied ? "Copied!" : "Copy link"}</span>}
            >
                <CopyToClipboard
                    text={location?.href || ""}
                    onCopy={() => setCopied(true)}
                >
                    <motion.span
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
                            path={mdiContentCopy}
                            size={1}
                            color={"#b9b9b9"}
                        />
                    </motion.span>
                </CopyToClipboard>
            </Tooltip>
        </span>
    )
}

export default CopyLinkBtn;