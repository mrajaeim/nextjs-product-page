import React from 'react';
import Rate from 'rc-rate';
import Tooltip from "rc-tooltip";

const ProductRate: React.FC<{ rate?: number, count?: number }> = ({rate, count}) => {
    return rate ? <Tooltip
        placement="bottom"
        trigger={['hover']}
        overlay={<span>Rate {rate} form {count} vote!</span>}
    >
        <div className={"inline-block w-fit"}>
            <Rate count={5} value={rate} disabled className={"text-primary"}/>
        </div>
    </Tooltip> : null
}

export default ProductRate