import { Layout, Skeleton } from 'antd';
import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSeries } from '../services/SeriesApi';
import { Content } from 'antd/es/layout/layout';

const Series = () => {
  const dispatch=useDispatch();
  const {data}=useSelector((state)=>state.allseries.series) 
  const {loading}=useSelector((state)=>state.allseries) 
  React.useEffect(() => {
    dispatch (fetchSeries());
   }, [dispatch])
   console.log("serie:", data);
   
    
  return (
    <Layout className='bg-gradient-to-r from-zinc-600 via-neutral-800 to-black'>
    <Header/>
    <Skeleton loading={loading}>
    <Content className=' mt-20 mb-6 font-varela px-3'>
      
       <p>Nothing at the moment</p>
   
    </Content>
    </Skeleton>

    <Footer/>
    </Layout>
  )
}

export default Series
