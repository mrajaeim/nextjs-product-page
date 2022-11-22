import React from 'react';
import PrevLink from "../general/links/PrevLink";
import NextLink from "../general/links/NextLink";

const ProductNavigation: React.FC<{ id: number }> = ({id}) => {
    return <div className={"flex mb-6"}>
        <PrevLink
            disabled={id - 1 < 1}
            href={`/products/${id - 1}`}
            name={`/products/${id - 1}`}
        />
        <NextLink
            disabled={id + 1 > 20}
            href={`/products/${id + 1}`}
            name={`/products/${id + 1}`}
        />
    </div>
}

export default ProductNavigation