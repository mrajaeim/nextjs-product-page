import React from 'react';
import {ProductDataIFace} from "../../interfaces";

const ProductDescription: React.FC<Pick<ProductDataIFace,"description">> = ({description}) => {
    return <>
        <h2 className={"text-secondary text-sm font-semibold"}>
            DESCRIPTION
        </h2>
        <p className={"font-light text-gray-400 ellipsis-text clamp3 text-justify"}>
            {description}
        </p>
    </>
}

export default ProductDescription