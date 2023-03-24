import Image from 'next/image'
import React from 'react'
import bg from "../../../public/intro-bg.jpg";
const BG = () => {
    return (
        // <div
        //     style={{
        //         position: "relative",
        //         height: "100vh",
        //         width: "100vw",
        //         clipPath: "inset(0 0 0 0)",
        //     }}
        // >
            
        // </div>
        <div
                style={{
                    position: "fixed",
                    height: "100vh",
                    width: "100vw",
                    overflow: 'hidden',
                    zIndex: -1,
                }}
            >
                <Image
                    src={bg}
                    placeholder="blur"
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                    }}
                    alt=""
                />
            </div>
    )
}

export default BG