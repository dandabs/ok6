import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

import { SiDiscord, SiGithub, SiInstagram, SiLinkedin, SiSnapchat, SiYoutube } from 'react-icons/si'
 
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <body className="flex flex-col items-center">
        <nav className="w-full h-12 absolute px-32 py-3">
            
        </nav>
        <div className="w-full px-48">
            <Main />

            <div id="socials" className="fixed flex flex-col text-neutral-400 bottom-0 left-[3%] text-xl items-center content-center">
                <a className="after:content-none text-neutral-400" href="https://github.com/dandabs"><SiGithub className="my-2 cursor-pointer hover:text-white"/></a>
                <a className="after:content-none text-neutral-400" href="https://www.linkedin.com/in/dandabs/"><SiLinkedin className="my-2 cursor-pointer hover:text-white"/></a>
                <a className="after:content-none text-neutral-400" href="https://youtube.com/dandabs"><SiYoutube className="my-2 cursor-pointer hover:text-white" /></a>
                <a className="after:content-none text-neutral-400" href="discord://-/users/784899654696566825"><SiDiscord className="my-2 cursor-pointer hover:text-white" /></a>
                <a className="after:content-none text-neutral-400" href="https://instagram.com/dandabs"><SiInstagram className="my-2 cursor-pointer hover:text-white" /></a>
                <a className="after:content-none text-neutral-400" href="https://snapchat.com/add/dandabsx"><SiSnapchat className="my-2 cursor-pointer hover:text-white" /></a>
                <div className="w-[2px] h-32 bg-neutral-400 mt-2"></div>
            </div>
        </div>
        <NextScript />
      </body>
    </Html>
  )
}