import React from 'react';
import {GetServerSideProps} from "next";
import axios from "axios";
import {FAKE_STORE_API} from "../../config";
import {Product} from "../../interfaces";
import useLocation from "../../hooks/useLocation";
import Image from 'next/image'
import ShareBtn from "../../components/atomic/ShareBtn";
import CopyLinkBtn from "../../components/atomic/CopyLinkBtn";
import ProductRate from "../../components/product/ProductRate";
import AddToCart from "../../components/product/AddToCart";
import ProductOption from "../../components/product/ProductOption";
import ProductOptionsWrapper from "../../components/product/ProductOptionsWrapper";
import ColorPicker from "../../components/product/ProductColor";
import ProductImage from "../../components/product/ProductImage";

const ProductPage: React.FC<{ product: Product }> = ({product}) => {
    const location = useLocation();
    return <>
        <div className={"min-h-screen flex justify-center items-center content-center bg-[#f6f6f6] py-12"}>
            <div
                className={"product flex content-center w-11/12 bg-white rounded-2xl overflow-hidden flex-wrap shadow-[0_0_20px_0_#e3e3e3]"}
            >
                <ProductImage product={product}/>
                {/*end of image*/}
                <div className={"product-detail w-full md:w-2/3 lg:p-12 md:p-10 p-8"}>
                    <header>
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
                                {"GREEN".toUpperCase()}
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
                    <div className={"product-body"}>
                        <h2 className={"text-secondary text-sm font-semibold"}>
                            DESCRIPTION
                        </h2>
                        <p className={"font-light text-gray-400 ellipsis-text clamp3 text-justify"}>
                            {product.description}
                        </p>
                        <div className={"product-options"}>
                            <ProductOptionsWrapper>
                                <ProductOption title={"COLOR"} className={"mb-4 w-full sm:w-full lg:w-1/3"}>
                                    <ColorPicker color={"#58E8C7"}/>
                                    <ColorPicker color={"#FFEE72"}/>
                                    <ColorPicker color={"#6655AF"}/>
                                    <ColorPicker color={"#DEDEDE"}/>
                                </ProductOption>
                                <ProductOption title={"SIZE"} className={"mb-4 w-full sm:w-1/2 lg:w-1/3 lg:pl-4"}/>
                                <ProductOption title={"QTY"} className={"mb-4 w-full sm:w-1/2 sm:pl-4 lg:w-1/3"}/>
                            </ProductOptionsWrapper>
                        </div>
                        <div className={"mt-10 flex justify-between"}>
                            <AddToCart/>
                            <div className={"product-share"}>
                                <span>
                                    <ShareBtn url={location?.href || ""} title={product.title}/>
                                </span>
                                <span className={"ml-3"}>
                                    <CopyLinkBtn/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*end of product*/}
        </div>
    </>
}

export default ProductPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        let id = Number(context.query['id']);
        // validate id
        if (!(Number.isInteger(id) && !Number.isNaN(id) && id > 0))
            throw "id is not valid"

        let {data} = await axios.get(FAKE_STORE_API(id));
        // check is data is valid or not
        if (!('title' in data))
            throw "data is not valid";

        return {
            props: {product: data}
        }
    } catch (e) {
        return {
            notFound: true
        }
    }
}