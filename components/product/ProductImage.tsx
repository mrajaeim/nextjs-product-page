import React, {useEffect} from 'react';
import useColorPicker from "../../zustands/useColorPicker";
import Image from "next/image";
import {Product} from "../../interfaces";
import {motion, animate, useMotionValue} from "framer-motion";

const ProductImage: React.FC<{ product: Product }> = ({product}) => {
    const color = useColorPicker(state => state.color);
    const bgColor = useMotionValue(color);
    useEffect(() => {
        animate(bgColor, color, {ease:"easeInOut"})
    }, [color])
    return <motion.div
        className={"product-image w-full md:w-1/3 p-10 h-auto flex flex-wrap justify-center items-center content-center"}
        style={{background: bgColor}}
    >
        <Image
            alt={product.title}
            src={product.image}
            className={"mix-blend-darken"}
            layout={'responsive'}
            height={300} width={300}
        />
        <span className={"product-image-shadow"}/>
    </motion.div>
}

export default ProductImage