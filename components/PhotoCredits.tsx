import React, { FC } from 'react'

const PhotoCredits: FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <p>
        From the center of my ❤️, I thank all the talented photographers for capturing so many
        moments, from so many places that I have visited in my life. Most of these Photos have been
        made between 2012 and 2022 at festivals and circus conventions around Australia and Europe.
        I hope you enjoy them as much as I do.
      </p>

      <h1 className="mt-4 text-2xl md:text-4xl">Photo Credits:</h1>
      <p className="mt-2 mb-8">
        <a
          target="_blank"
          className="underline"
          rel="noopener noreferrer"
          href="http://julianfrees.com/"
        >
          Julian Frees Photography
        </a>
        ,{' '}
        <a
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/awtransform/"
        >
          {' '}
          Amir Weiss
        </a>
        ,{' '}
        <a
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/josifineart/"
        >
          {' '}
          Fineart
        </a>
        ,{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/spinferno_australia/"
          className="underline"
        >
          Spinferno
        </a>
        ,{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/RomainShutterbug"
          className="underline"
        >
          Romain Shutterbug
        </a>
      </p>
    </div>
  )
}

export default PhotoCredits
