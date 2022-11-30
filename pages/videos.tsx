import { NextPage } from 'next'
import React from 'react'

const Videos: NextPage = () => {
  return (
    <div className="mx-auto prose dark:prose-dark">
      <h1 className="text-3xl font-extrabold tracking-tight text-center text-gray-900 leading-9 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
        Videos
      </h1>

      <h2>Spirit Of Nature 2019</h2>
      <p>
        It was a heart warming experience to show the magical world of contact juggling to so many
        bright children. They truly melted my heart for this performance. This goes down to the best
        show I've ever done. ✨🔮🧙‍♂️❤️
      </p>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Yha-TXPw6Ms"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <h2>The Great Ocean Road Drone Videoshooting</h2>
      <p>
        In 2016, <a href="https://www.youtube.com/@TomFrancome">Tom Fracone</a>, a video producer
        from Melbourne, Australia invited me to shoot a video at the Great Ocean Road. With the help
        of a professional drone operator, we made this video on the great ocean road.
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/XRRmFf3BmjE"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Videos
