import siteMetadata from '@/data/siteMetadata'
import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const TwitterBanner: FC = () => {
  return (
    <ul className="flex justify-center my-8">
      <li className="flex items-center space-x-2">
        <Image
          src={siteMetadata.image}
          width={38}
          height={38}
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <dl className="text-sm font-medium whitespace-nowrap leading-5">
          <dt className="sr-only">Name</dt>
          <dd className="text-gray-900 dark:text-gray-100">{siteMetadata.author}</dd>
          <dt className="sr-only">Twitter</dt>
          <dd>
            {siteMetadata.twitter && (
              <Link
                href={siteMetadata.twitter}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              >
                {siteMetadata.twitter.replace('https://twitter.com/', '@')}
              </Link>
            )}
          </dd>
        </dl>
      </li>
    </ul>
  )
}

export default TwitterBanner
