import React, { useState } from 'react'
import { Gallery } from 'react-grid-gallery'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import { images, CustomImage } from '@/data/images'
import TwitterBanner from '@/components/TwitterBanner'
import PhotoCredits from '@/components/PhotoCredits'

export default function Photos() {
  const [index, setIndex] = useState(-1)

  const currentImage = images[index]
  const nextIndex = (index + 1) % images.length
  const nextImage = images[nextIndex] || currentImage
  const prevIndex = (index + images.length - 1) % images.length
  const prevImage = images[prevIndex] || currentImage

  const handleClick = (index: number, item: CustomImage) => setIndex(index)
  const handleClose = () => setIndex(-1)
  const handleMovePrev = () => setIndex(prevIndex)
  const handleMoveNext = () => setIndex(nextIndex)

  return (
    <div>
      <header className="">
        <div className="text-center space-y-1">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 leading-9 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              Contact Juggling Photo Gallery
            </h1>
          </div>
        </div>
      </header>

      <TwitterBanner />

      <div className="max-w-2xl mx-auto">
        <p>
          From the center of my ❤️, I thank all the talented photographers for capturing so many
          moments from so many places that I have visited in my life. Most of these Photos have been
          made between 2012 and 2022 at festivals and circus conventions around Australia and
          Europe. I hope you enjoy them as much as I do.
        </p>

        <PhotoCredits />
      </div>

      <Gallery images={images} onClick={handleClick} enableImageSelection={false} />
      {!!currentImage && (
        /* @ts-ignore */
        <Lightbox
          mainSrc={currentImage.original}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  )
}
