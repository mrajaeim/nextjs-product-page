import React from 'react';
import Rate from 'rc-rate';
import Tooltip from "rc-tooltip";
import {ProductDataIFace} from "../../interfaces";

const ProductRate: React.FC<Pick<ProductDataIFace,"rating">> = ({rating}) => {
    return rating.rate ? <Tooltip
        placement="bottom"
        trigger={['hover']}
        overlay={<span>Rate {rating.rate} form {rating.count} vote!</span>}
    >
        <div className={"inline-block w-fit"}>
            <Rate count={5} value={rating.rate} disabled className={"text-primary"}/>
        </div>
    </Tooltip> : null
}

export default ProductRate