import React from 'react';
import AddToCart from "./AddToCart";
import ShareBtn from "../atomic/ShareBtn";
import CopyLinkBtn from "../atomic/CopyLinkBtn";
import {Product} from "../../interfaces";
import useLocation from "../../hooks/useLocation";

const ProductFooter: React.FC<{product:Product}> = ({product}) => {
    const location = useLocation();
    return <div className={"mt-10 flex justify-between"}>
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

}

export default ProductFooter