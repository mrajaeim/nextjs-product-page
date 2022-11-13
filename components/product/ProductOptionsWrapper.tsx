import React from 'react';

const ProductOptionsWrapper: React.FC<{ children: React.ReactNode[] }> = ({children}) => {
    return <div className={"product-options-wrapper flex flex-wrap items-center content-center"}>
        {children}
    </div>
}

export default ProductOptionsWrapper