import React from 'react';
import ProductOptionsWrapper from "./ProductOptionsWrapper";
import ProductOption from "./ProductOption";
import ColorPicker from "./ProductColor";
import Select from "rc-select";
import useColorPicker from "../../zustands/useColorPicker";

const ProductOptions: React.FC = () => {
    const productColors = useColorPicker(state => state.colors);
    return <div className={"product-options"}>
        <ProductOptionsWrapper>
            <ProductOption title={"COLOR"} className={"mb-4 w-full sm:w-full lg:w-1/3"}>
                {productColors.map((color, index) => <ColorPicker color={color} key={index}/>)}
            </ProductOption>
            <ProductOption title={"SIZE"} className={"mb-4 w-full sm:w-1/2 lg:w-1/3 lg:pl-4"}>
                <Select defaultValue={"(UK 7)"}>
                    <Select.Option value="(UK 7)">(UK 7)</Select.Option>
                    <Select.Option value="(UK 8)">(UK 8)</Select.Option>
                    <Select.Option value="(UK 9)">(UK 9)</Select.Option>
                    <Select.Option value="(UK 10)">(UK 10)</Select.Option>
                </Select>
            </ProductOption>
            <ProductOption title={"QTY"} className={"mb-4 w-full sm:w-1/2 sm:pl-4 lg:w-1/3"}>
                <Select defaultValue={"(1)"}>
                    <Select.Option value="(1)">(1)</Select.Option>
                    <Select.Option value="(2)">(2)</Select.Option>
                    <Select.Option value="(3)">(3)</Select.Option>
                    <Select.Option value="(4)">(4)</Select.Option>
                </Select>
            </ProductOption>
        </ProductOptionsWrapper>
    </div>

}

export default ProductOptions