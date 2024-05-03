import React from "react";
import { HiStar, HiTv } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import HeaderItem from "./HeaderItem";
import logo from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Avatar, Badge, Button, Input,Layout,Modal } from 'antd';
import { MdOutlineMenu } from "react-icons/md";
const { Search } = Input;

const onSearch = (value,_e,info) => console.log(info?.source, value);

const Header = ({showDrawer}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [toggle, setToggle] = React.useState(false);
  const {fav}=useSelector((state)=>state.favourite);
  console.log("fav:",fav);
  const navigate=useNavigate();
  
  const menu = [
    {
      name: "HOME",
      icon: FaHome,
      path:"/"
    },
   
    {
      name: "SERIES",
      icon: HiTv,
      path:"/series"
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
      path:"/originals"
    },
  ];
  return (
    <Layout className="fixed w-full z-10 text-white
    bg-gradient-to-r from-neutral-800 to-black">
    <div className="flex items-center justify-between px-3 font-madimi py-2">
      <div className="flex items-center gap-8">
        <img src={logo} alt="Disney"
          className="object-cover h-[20px] md:h-[35px]" />

        {/* shown for medium + screen, hidden for small screen */}
        <div className=" hidden md:flex gap-8">
          {menu.map((item, idx) => (

           <Link to={item.path} key={idx}> <HeaderItem name={item.name} 
           Icon={item.icon}/></Link>
          ))}
        </div>

        {/* shown for small screen, hidden for medium + screens*/}
        <div className=" flex md:hidden gap-5">
          {menu.map(
            (item, idx) =>idx < 2 && 
           <Link to={item.path} key={idx}> <HeaderItem name={""} Icon={item.icon} key={idx} /></Link>
          )}

          {/*This div is for 3 dots menu*/}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={CiMenuKebab} />
            {toggle ? (
              <div className="absolute mt-3 border-2 px-3 py-5 bg-gray-950 z-10 text-white">
                {menu.map(
                  (item, idx) =>idx > 1 && (
                     <Link to={item.path} key={idx}><HeaderItem name={item.name} Icon={item.icon} key={idx}  /></Link>
                    )
                )}
              </div> ) : null}
          </div>
          
        </div>
       
      </div>
     
      <section className=" flex gap-x-2">
      <Badge size="small" count={fav.length} className=" mr-3">
      <Avatar shape="circle" size="medium" onClick={showDrawer} >
        <FaRegHeart color="red" className=" size-4"/>
      </Avatar>
      </Badge>
      <Search className=" max-w-20 md:max-w-40 flex items-center h-7 bg-slate-400 rounded-md"
      placeholder="input search text"
      allowClear
      onSearch={onSearch}/>
       <MdOutlineMenu onClick={showModal} className=" size-5 md:size-7"/>
       {  isModalOpen && (
       <Modal title="Authentication" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <section className=" text-center space-y-3">
        <Button className=" bg-emerald-400 font-madimi" onClick={()=>navigate("/auth/login")}>LOGIN</Button>
         <h1 className=" text-center font-madimi">OR</h1>
        <Button className=" bg-yellow-400 font-madimi" onClick={()=>navigate("/auth/signup")}>REGISTER</Button>
        </section>
      </Modal> )
       }

      </section>
    </div>
    </Layout>
  );
};

export default Header;
