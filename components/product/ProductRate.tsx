import React from 'react';
import Rate from 'rc-rate';
import Tooltip from "rc-tooltip";

const ProductRate: React.FC<{ rate?: number, count?: number }> = ({rate, count}) => {
    return rate ? <div className={"inline-block w-fit"}>
        <Tooltip
            placement="bottom"
            trigger={['hover']}
            overlay={<span>Rate {rate} form {count} vote!</span>}
        >
            <div className={"inline-block w-fit"}>
                <Rate count={5} value={rate} disabled/>
            </div>
        </Tooltip>
    </div> : null
}

export default ProductRate