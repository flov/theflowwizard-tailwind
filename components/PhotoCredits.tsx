import React, { FC } from 'react'

const PhotoCredits: FC = () => {
  return (
    <>
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
    </>
  )
}

export default PhotoCredits
