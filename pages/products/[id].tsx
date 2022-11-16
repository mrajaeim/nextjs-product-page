import React from 'react';
import {GetServerSideProps} from "next";
import axios from "axios";
import {FAKE_STORE_API} from "../../config";
import {Product} from "../../interfaces";
import useLocation from "../../hooks/useLocation";
import ShareBtn from "../../components/atomic/ShareBtn";
import CopyLinkBtn from "../../components/atomic/CopyLinkBtn";
import AddToCart from "../../components/product/AddToCart";
import ProductImage from "../../components/product/ProductImage";
import Layout from "../../components/layout/Layout";
import ProductPageSeo from "../../seo/ProductPageSeo";
import ProductNavigation from "../../components/product/ProductNavigation";
import ProductHead from "../../components/product/ProductHead";
import ProductOptions from "../../components/product/ProductOptions";
import ProductFooter from "../../components/product/ProductFooter";
import ProductDescription from "../../components/product/ProductDescription";

const ProductPage: React.FC<{ product: Product }> = ({product}) => {
    return <>
        <Layout>
            <ProductPageSeo product={product}/>
            <div className={"min-h-screen flex justify-center items-center content-center bg-[#f6f6f6] py-12"}>
                <div
                    className={"product flex content-center w-11/12 bg-white rounded-2xl overflow-hidden flex-wrap shadow-[0_0_20px_0_#e3e3e3]"}
                >
                    <ProductImage product={product}/>
                    {/*end of image*/}
                    <div className={"product-detail w-full md:w-2/3 lg:p-12 lg:pt-8 md:p-10 md:pt-6 p-8 pt-4"}>
                        <ProductNavigation id={product.id}/>
                        <ProductHead product={product}/>
                        <div className={"product-body"}>
                            <ProductDescription description={product.description}/>
                            <ProductOptions/>
                            <ProductFooter product={product}/>
                        </div>
                    </div>
                </div>
                {/*end of product*/}
            </div>
        </Layout>
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