import React from 'react';
import {NextSeo} from "next-seo";
import {ProductDataIFace} from "../interfaces";

const ProductPageSeo: React.FC<{ product: ProductDataIFace }> = ({product}) => {
    return <NextSeo
        title={product.title}
        description={product.description}
        openGraph={{
            title: product.title,
            description: product.description,
            images: [{
                url: product.image,
                alt: product.title
            }]
        }}
    />
}

export default ProductPageSeo