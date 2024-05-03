import React from "react";
import Footer from "../components/Footer";
import { Payment } from "../utiles/Product";
import {Esewa}  from "../services/Esewa"
import { Card } from "antd";
import KhaltiCheckout from 'khalti-checkout-web';
import {Khalti} from '../services/Khalti'
import { Link } from "react-router-dom";
import { FaHouseChimney } from "react-icons/fa6";

const Paymethod = () => {
  const [isPayment,setIsPayment]=React.useState({
    esewa:false,
    khalti:false,
  });
  const checkout = new KhaltiCheckout(Khalti);
    const path="https://uat.esewa.com.np/epay/main";
    const params={
        amt:100,
        psc:0,
        pdc:0,
        txAmt:0,
        tAmt:100,
        pid:"ee2c3cal",
        scd:"EPAYTEST",
        su:"https://merchant.com.np/page/esewa_payment_success",
        fu:"https://merchant.com.np/page/esewa_payment_failed",
      }
      const handlePayment=(id)=>{
        console.log('safas',id);
        if(id===1){
          setIsPayment({
            esewa:true,
            khalti:false,
          })
        }
      else if(id===2){
          checkout.show({amount:1000})
        }
      }
     

  return (
    <div className=" pt-3 text-center">
      <h1 className=" text-lg">Choose how to pay</h1>
      <Card className=" font-varela max-w-96  mx-auto">
      <div className=' flex items-center justify-center py-10 gap-x-3'>
      
      {
        Payment.map((item,idx)=>{
          return(
              <div key={idx} style={{color:`${item.color}`}} className=' h-8 text-lg 
              font-varela' onClick={()=>handlePayment(item.id)}>
                <img src={item.logo} alt="logo" className='  h-14'/>
                <h1 className=' text-center'>{item.name}</h1>
              </div>
          )
        })
      }

     
      </div>
      {
          isPayment.esewa &&(
            <Esewa path={path} params={params}/>
          )
        } 
    
      </Card>
      <Link to="/">
      <FaHouseChimney className=" mx-auto h-16"/></Link>

      <Footer/>
    </div>
  );
};

export default Paymethod;
