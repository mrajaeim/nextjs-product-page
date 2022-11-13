import React from 'react';
import {GetServerSideProps} from "next";
import axios from "axios";
import {FAKE_STORE_API} from "../../config";
import {Product} from "../../interfaces";

const ProductPage: React.FC<{ product: Product }> = ({product}) => {
    return <>{product.title}</>
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