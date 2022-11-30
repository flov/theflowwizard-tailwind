import React, { useState } from 'react'
import { Gallery } from 'react-grid-gallery'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import { fireImages, CustomImage } from '@/data/images'
import TwitterBanner from '@/components/TwitterBanner'
import PhotoCredits from '@/components/PhotoCredits'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function PhotosContact() {
  const [index, setIndex] = useState(-1)

  const currentImage = fireImages[index]
  const nextIndex = (index + 1) % fireImages.length
  const nextImage = fireImages[nextIndex] || currentImage
  const prevIndex = (index + fireImages.length - 1) % fireImages.length
  const prevImage = fireImages[prevIndex] || currentImage

  const handleClick = (index: number, item: CustomImage) => setIndex(index)
  const handleClose = () => setIndex(-1)
  const handleMovePrev = () => setIndex(prevIndex)
  const handleMoveNext = () => setIndex(nextIndex)

  const credits = [
    { name: 'Julian Frees', link: 'http://julianfrees.com/' },
    { name: 'Psymon Photography', link: 'https://www.instagram.com/psymon.photography/' },
    { name: 'Fineart', link: 'https://www.instagram.com/josifineart/' },
    { name: 'Spinferno', link: 'https://www.instagram.com/spinferno_australia/' },
    { name: 'Mr. Bautzen', link: 'https://www.instagram.com/mr.bautzen/' },
  ]

  return (
    <>
      <PageSEO
        title={siteMetadata.title + ' - Photos'}
        description="Photo Gallery of the flow wizard"
      />

      <div>
        <header className="">
          <div className="text-center space-y-1">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 leading-9 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                Fire Juggling Photo Gallery
              </h1>
            </div>
          </div>
        </header>

        <TwitterBanner />
        <PhotoCredits credits={credits} />

        <Gallery images={fireImages} onClick={handleClick} enableImageSelection={false} />
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
    </>
  )
}
