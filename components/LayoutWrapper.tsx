import { Montserrat } from '@next/font/google'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo2.png'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { ReactNode } from 'react'
import Image from 'next/image'
import Dropdown from './Dropdown'

interface Props {
  children: ReactNode
}

const inter = Montserrat({
  subsets: ['latin'],
  weight: '400',
})

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className={`${inter.className} flex h-screen flex-col justify-between font-sans`}>
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between logo">
                <Image className="mr-3" src={Logo} alt="Logo" width={50} height={50} />
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden text-3xl sm:block">{siteMetadata.headerTitle}</div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <>
                  {link.title === 'Photos' ? (
                    <Dropdown />
                  ) : (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                    >
                      {link.title}
                    </Link>
                  )}
                </>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
