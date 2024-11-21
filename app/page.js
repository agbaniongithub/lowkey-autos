'use client'

import React from 'react'
import Main from '@/components/Main'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Collections from '@/components/Collections'
import Testimonials from '@/components/Testimonials'
import Sectiondivider from '@/components/Sectiondivider'

const Homepage = () => {
  return (
    <>
      <Header />
      <Main />
      <Sectiondivider />
      <Collections />
      <Testimonials />
    <Footer />
    </>
  )
}

export default Homepage