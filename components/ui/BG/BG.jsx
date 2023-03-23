import Image from 'next/image'
import React from 'react'
import bg from "../../../public/intro-bg.jpg";
const BG = () => {
    return (
        <div
            style={{
                position: "relative",
                height: "100vh",
                width: "100%",
                clipPath: "inset(0 0 0 0)",
            }}
        >
            <div
                style={{
                    position: "fixed",
                    height: "100%",
                    width: "100%",
                    left: "0",
                    top: "0",
                }}
            >
                <Image
                    src={bg}
                    quality={100}
                    placeholder="blur"
                    loading="eager"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    sizes="100vh"
                />
            </div>
        </div>
    )
}

export default BG