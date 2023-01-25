import React from 'react';
import ProductPrevLink from "./ProductPrevLink";
import ProductNextLink from "./ProductNextLink";
import {ProductDataIFace} from "../../interfaces";

const ProductNavigation: React.FC<Pick<ProductDataIFace,"id">> = ({id}) => {
    return <div className={"flex mb-6"}>
        <ProductPrevLink
            disabled={id - 1 < 1}
            href={`/products/${id - 1}`}
            name={`/products/${id - 1}`}
        />
        <ProductNextLink
            disabled={id + 1 > 20}
            href={`/products/${id + 1}`}
            name={`/products/${id + 1}`}
        />
    </div>
}

export default ProductNavigation