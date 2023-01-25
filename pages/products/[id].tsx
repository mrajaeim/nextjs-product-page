import React from 'react';
import {GetServerSideProps} from "next";
import {ProductDataIFace} from "../../interfaces";
import ProductImage from "../../components/product/ProductImage";
import Layout from "../../components/layout/Layout";
import ProductPageSeo from "../../seo/ProductPageSeo";
import ProductNavigation from "../../components/product/ProductNavigation";
import ProductHead from "../../components/product/ProductHead";
import ProductOptions from "../../components/product/ProductOptions";
import ProductFooter from "../../components/product/ProductFooter";
import ProductDescription from "../../components/product/ProductDescription";
import {getProduct} from '../../networks/products'

const ProductPage: React.FC<{ product: ProductDataIFace }> = ({product}) => {
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
        if (!Number.isInteger(id) || id < 1)
            throw "id is not valid"

        const product = await getProduct({id})
        
        return {
            props: {product}
        }
    } catch (e) {
        return {
            notFound: true
        }
    }
}