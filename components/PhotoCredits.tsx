import React, { FC } from 'react'

const PhotoCredits: FC<{ credits: Record<string, string>[] }> = ({ credits }) => {
  console.log(credits)
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
        {credits.map((credit, i) => (
          <span key={credit.name}>
            <a target="_blank" className="underline" rel="noopener noreferrer" href={credit.link}>
              {credit.name}
            </a>
            {i < credits.length - 1 ? ', ' : ''}
          </span>
        ))}
      </p>
    </div>
  )
}

export default PhotoCredits
