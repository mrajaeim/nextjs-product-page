import React from 'react';
import {mdiShareVariant} from "@mdi/js";
import Icon from "@mdi/react";
import Tooltip from "rc-tooltip";

const ShareBtn: React.FC<{ url: string, text?: string, title: string }> = ({url, text, title}) => {
    return <Tooltip
        placement="left"
        trigger={['hover']}
        overlay={<span>Share</span>}
    >
        <span onClick={() => navigator.share({url, text, title})}>
            <Icon
                path={mdiShareVariant}
                title="Share"
                size={1}
                color={"#b9b9b9"}
            />
        </span>
    </Tooltip>
}

export default ShareBtn