import React, {useEffect, useState} from 'react';
import Icon from '@mdi/react'
import {mdiContentCopy} from '@mdi/js';
import Tooltip from "rc-tooltip";
import {CopyToClipboard} from "react-copy-to-clipboard";
import useLocation from "../../hooks/useLocation";

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
        <Tooltip
            placement="left"
            trigger={['hover']}
            overlay={<span>{copied ? "Copied!" : "Copy link"}</span>}
        >
            <CopyToClipboard
                text={location?.href || ""}
                onCopy={() => setCopied(true)}
            >
                <Icon
                    path={mdiContentCopy}
                    title="Copy"
                    size={1}
                    className={"cursor-pointer"}
                    color={"#b9b9b9"}
                />
            </CopyToClipboard>
        </Tooltip>
    )
}

export default CopyLinkBtn;