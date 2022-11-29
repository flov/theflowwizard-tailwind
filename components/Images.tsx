import React, { FC } from 'react'
import Image from 'next/image'

const Images: FC<{ images: string[] }> = ({ images }) => {
  return (
    <>
      {images.map((image, index) => (
        <div
          key={`image${index}`}
          className="w-full px-2 my-1 overflow-hidden xl:my-1 xl:w-1/2 xl:px-2"
        >
          <Image src={`/static/images/showcase/${image}`} alt="Showcase" />
        </div>
      ))}
    </>
  )
}

export default Images
