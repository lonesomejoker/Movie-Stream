import { Layout } from 'antd';
import React from 'react'
import Header from './Header';
import Footer from './Footer';

const Series = () => {
    
  return (
    <Layout className='bg-gradient-to-r from-zinc-600 via-neutral-800 to-black'>
    <Header/>
    <div className=' mt-14 min-h-28'>
    <h1 className=' text-black'>No any Series at the moment...</h1>
    </div>
    <Footer/>
    </Layout>
  )
}

export default Series
