import React, {HTMLAttributes, useEffect, useRef} from 'react';
import Zoom from "react-medium-image-zoom";

interface PropsIFace extends HTMLAttributes<any> {
    name: string,
    image: string
}

const Preview: React.FC<PropsIFace> = ({name, image, ...rest}) => {
    const imageRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLSpanElement>(null);
    useEffect(() => {
        if (imageRef.current && nameRef.current) {
            imageRef.current.addEventListener('mouseenter', () => {
                if (nameRef.current) {
                    nameRef.current.classList.add("text-primary");
                }
            })
            imageRef.current.addEventListener('mouseout', () => {
                if (nameRef.current) {
                    nameRef.current.classList.remove("text-primary");
                }
            })
        }
    }, [imageRef, nameRef])
    return (
        <div {...rest}>
            <span ref={nameRef} className={"text-muted hover:text-primary cursor-default"}>{name}</span>
            <Zoom wrapElement={"span"}>
                <div
                    ref={imageRef}
                    role="img"
                    style={{
                        backgroundColor: '#fff',
                        backgroundImage: `url("${image}")`,
                        backgroundPosition: '50%',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        height: 100,
                        width: 100,
                        border: '1px solid #d8d8d8',
                        borderRadius: '10px',
                        boxShadow: '0 0 9px 0 #d8d8d8',
                    }}
                />
            </Zoom>
        </div>
    )

}

export default Preview;