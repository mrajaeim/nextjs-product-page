import React from 'react';
import {GetServerSideProps} from "next";
import axios from "axios";
import {FAKE_STORE_API} from "../../config";
import {Product} from "../../interfaces";
import ShareBtn from "../../components/atomic/ShareBtn";
import CopyLinkBtn from "../../components/atomic/CopyLinkBtn";
import useLocation from "../../hooks/useLocation";
import ProductRate from "../../components/product/ProductRate";

const ProductPage: React.FC<{ product: Product }> = ({product}) => {
    const location = useLocation();
    return <>
        <div>
            <ShareBtn title={product.title} url={location?.href || ""}/>
        </div>
        <div>
            <CopyLinkBtn/>
        </div>
        <div>
            <ProductRate rate={product?.rating?.rate} count={product?.rating?.count}/>
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