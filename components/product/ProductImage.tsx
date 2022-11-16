import React, {useEffect} from 'react';
import useColorPicker from "../../zustands/useColorPicker";
import Image from "next/image";
import {Product} from "../../interfaces";
import {motion, animate, useMotionValue, useTransform} from "framer-motion";
import ProductOption from "./ProductOption";
import ColorPicker from "./ProductColor";

const ProductImage: React.FC<{ product: Product }> = ({product}) => {
    const colorPicker = useColorPicker();
    const currentColor = useMotionValue(0);
    useEffect(() => {
        currentColor.set(0)
        animate(currentColor, 100, {ease: "easeInOut"})
    }, [colorPicker.color])
    const background = useTransform(
        currentColor,
        [0, 100],
        [
            `linear-gradient(30deg, ${colorPicker.prevColor} 0%, ${colorPicker.prevColor.replace(", 1)", ", .25)")} 75%)`,
            `linear-gradient(30deg, ${colorPicker.color} 0%, ${colorPicker.color.replace(", 1)", ", .25)")} 75%)`,
        ]
    )
    return <motion.div
        className={"product-image w-full md:w-1/3 p-10 h-auto flex flex-wrap justify-center items-center content-center"}
        style={{background: background}}
    >
        <Image
            alt={product.title}
            src={product.image}
            className={"mix-blend-darken"}
            layout={'responsive'}
            height={300} width={300}
            placeholder='blur'
        />
        <span className={"product-image-shadow"}/>
        <div className={"absolute left-4 bottom-4 bg-white rounded z-10 pl-2 md:hidden"}>
            <ProductOption className={"w-full"}>
                {colorPicker.colors.map((color, index) => <ColorPicker color={color} key={index}/>)}
            </ProductOption>
        </div>
    </motion.div>
}

export default ProductImage