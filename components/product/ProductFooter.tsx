import React from 'react';
import AddToCart from "./AddToCart";
import ShareBtn from "../general/buttons/ShareBtn";
import CopyLinkBtn from "../general/buttons/CopyLinkBtn";
import {ProductDataIFace} from "../../interfaces";
import useLocation from "../../hooks/useLocation";

const ProductFooter: React.FC<{product:ProductDataIFace}> = ({product}) => {
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