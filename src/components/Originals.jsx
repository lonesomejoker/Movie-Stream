import React from 'react'
import Header from './Header'
import { Layout } from 'antd'
import Footer from './Footer'

const Originals = () => {
  return (
    <div>
    <Layout className='bg-gradient-to-r from-zinc-600 via-neutral-800 to-black'>
    <Header/>
      <h2 className=' mt-14 min-h-36'>Kei pani xaina Eta</h2>
     <Footer/>
      </Layout>
    </div>
  )
}

export default Originals
