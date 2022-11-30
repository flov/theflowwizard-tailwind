import { Menu, Transition } from '@headlessui/react'
import React, { FC } from 'react'
import { GiGlassBall } from 'react-icons/gi'
import { SlFire } from 'react-icons/sl'
import Link from 'next/Link'

const Dropdown: FC = () => {
  const links = [
    { href: '/photos-contact', title: 'Contact' },
    { href: '/photos-fire', title: 'Fire' },
  ]

  return (
    <Menu>
      <Menu.Button className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4">
        Photos
      </Menu.Button>
      <Menu.Items className="absolute flex flex-col w-48 p-1 mt-2 text-white bg-gray-900 border border-gray-800 rounded">
        {links.map((link) => (
          <>
            {/* @ts-ignore */}
            <Menu.Item className="flex items-center p-2 rounded hover:bg-gray-800" key={link.title}>
              {({ active }) => (
                <Link href={link.href}>
                  {link.title === 'Contact' ? (
                    <GiGlassBall className="inline-block w-6 h-6 mr-2 text-blue-400" />
                  ) : (
                    <SlFire className="inline-block w-6 h-6 mr-2 text-red-500" />
                  )}

                  {link.title}
                </Link>
              )}
            </Menu.Item>
          </>
        ))}
      </Menu.Items>
    </Menu>
  )
}

export default Dropdown
