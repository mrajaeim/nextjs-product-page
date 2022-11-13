import React from 'react';

const ProductOption: React.FC<React.PropsWithChildren<{ title: string, className?: string }>> = (
    {
        title,
        children,
        className = ""
    }
) => {
    return <div className={"inline-block " + className}>
        <h3 className={"text-secondary text-sm font-semibold m-0"}>
            {title}
        </h3>
        <div className={"py-2 flex justify-start items-center"}>
            {children}
        </div>
    </div>
}

export default ProductOption