import React from 'react';
import ProductRate from "./ProductRate";
import {Product} from "../../interfaces";

const ProductHead: React.FC<{ product: Product }> = ({product}) => {
    return <header>
        <div className={"product-title"}>
            <div className={"product-rate md:w-full md:hidden mb-1"}>
                <ProductRate rate={product?.rating?.rate} count={product?.rating?.count}/>
            </div>
            <div className={'flex justify-between items-center content-center flex-wrap'}>
                <h1 className={"mb-2 mt-0 w-full md:w-3/5 text-2xl text-secondary leading-6 font-medium"}>
                    {product.title}
                </h1>
                <div className={"product-rate hidden md:w-1/5 md:inline-block"}>
                    <ProductRate rate={product?.rating?.rate} count={product?.rating?.count}/>
                </div>
            </div>

            <p className={"font-semibold text-muted italic mb-2 mt-0"}>
                {"SOME GOOD BRAND".toUpperCase()}
            </p>
            <p className={"font-semibold mb-2 mt-0 text-xl"}>
                <del className={"text-secondary mr-3"}>
                    ${(product.price + 5).toFixed(2)}
                </del>
                <span className={"text-primary"}>
                    ${(product.price).toFixed(2)}
                </span>
            </p>
        </div>
    </header>
}

export default ProductHead