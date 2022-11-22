import React from 'react';
import ProductPrevLink from "./ProductPrevLink";
import ProductNextLink from "./ProductNextLink";

const ProductNavigation: React.FC<{ id: number }> = ({id}) => {
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