import React, { useState } from 'react'
import { Gallery } from 'react-grid-gallery'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import { contactImages, CustomImage } from '@/data/images'
import TwitterBanner from '@/components/TwitterBanner'
import PhotoCredits from '@/components/PhotoCredits'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Script from 'next/script'

export default function PhotosContact() {
  const [index, setIndex] = useState(-1)

  const currentImage = contactImages[index]
  const nextIndex = (index + 1) % contactImages.length
  const nextImage = contactImages[nextIndex] || currentImage
  const prevIndex = (index + contactImages.length - 1) % contactImages.length
  const prevImage = contactImages[prevIndex] || currentImage

  const handleClick = (index: number, item: CustomImage) => setIndex(index)
  const handleClose = () => setIndex(-1)
  const handleMovePrev = () => setIndex(prevIndex)
  const handleMoveNext = () => setIndex(nextIndex)

  const credits = [
    { name: 'Julian Frees', link: 'http://julianfrees.com/' },
    { name: 'Amir Weiss', link: 'https://www.instagram.com/awtransform/' },
    { name: 'Fineart', link: 'https://www.instagram.com/josifineart/' },
    { name: 'Spinferno', link: 'https://www.instagram.com/spinferno_australia/' },
    { name: 'Romain Shutterbug', link: 'https://www.facebook.com/RomainShutterbug' },
    { name: 'Luci Rainbowness', link: 'https://www.instagram.com/lucie.rainbowness/' },
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
                Contact Juggling Photo Gallery
              </h1>
            </div>
          </div>
        </header>

        <TwitterBanner />
        <PhotoCredits credits={credits} />

        <Gallery images={contactImages} onClick={handleClick} enableImageSelection={false} />

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
      <div className="mt-8 giscus"></div>
      <Script
        src="https://giscus.app/client.js"
        data-repo="flov/theflowwizard-tailwind"
        data-repo-id="R_kgDOIhJjNg"
        data-category="General"
        data-category-id="DIC_kwDOIhJjNs4CS1Uo"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="en"
        crossOrigin="anonymous"
        async
      ></Script>
    </>
  )
}
