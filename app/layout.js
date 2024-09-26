"use client"

import "./globals.css"
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Script from 'next/script'

import Header from "@/_components/_layout/Header"
import Footer from "@/_components/_layout/Footer"

const RootLayout = ({ children }) => {
  const pathname = usePathname()

  return (
    <html lang="ru">
      <head>
        <Script src="https://telegram.org/js/telegram-web-app.js" />
      </head>
      <body className="flex justify-center bg-slate-900">
        <div className="flex flex-col w-[450px] my-3 mx-3">
          <Header />
          <AnimatePresence mode="wait">
            <motion.div key={pathname}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }} className="mt-40">
              {children}
            </motion.div>
          </AnimatePresence>
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default RootLayout