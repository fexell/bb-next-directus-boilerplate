'use client'

import { useEffect } from 'react'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import ContentComponent from '@/components/Content/Content.component'
import useMediaStore from '@/stores/Media.store'

import './tailwind.sass'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss                           = false

library.add(fas, fab)

const RootLayout                            = ({ children }) => {
  const {
    isDesktop,
    handleSetDesktop
  }                                         = useMediaStore()

  useEffect(() => {
    handleSetDesktop()

    window.addEventListener('resize', () => handleSetDesktop())
  }, [])

  return (
    <>
      <html lang="en">
        <body className='w-full min-h-screen bg-neutral-50'>
          <main
            id='App'
            className={ `${ isDesktop ? 'is-desktop' : 'is-mobile' } w-full min-h-screen` }>
            <div
              className='app-container w-full min-h-screen'>
              <ContentComponent
                children={ children } />
            </div>
          </main>
        </body>
      </html>
    </>
  )
}

export default RootLayout
