import { Button, Layout } from "antd";
import React from "react";
import Header from "../components/Header";
import { Content, Footer } from "antd/es/layout/layout";
import { Link, Outlet } from "react-router-dom";
import { useLocation,useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";


const Subscription = () => {
  const head = [
    {
      name: "Premium",
      res: "4k",
      path: "/subs/premium",
    },
    {
      name: "Standard",
      res: "1080p",
      path: "/subs/standard",
    },
    {
      name: "Basic",
      res: "720p",
      path: "/subs/basic",
    },
    {
      name: "Mobile",
      res: "480p",
      path: "/subs/mobile",
      
      
    },
  ];
  const [activePath, setActivePath] = React.useState();
  const location = useLocation(); // gets the current location

  React.useEffect(() => {
    setActivePath(location.pathname);
    // updates active path when the route changes
  }, [location]);

 const navigate=useNavigate();

  console.log("path:", activePath);
  return (
    <div className="  bg-gradient-to-r from-zinc-600 via-neutral-800 to-black h-screen">
      <Layout className=" font-varela max-w-[550px] mx-auto py-5 rounded-md bg-gray-300">
        <h1 className=" text-center text-2xl">
          Choose the plan that's right for you
        </h1>
        <div className=" flex justify-center gap-x-4 py-3">
          {head.map((item, idx) => {
            return (
              <Link key={idx} to={item.path}>
                <div key={idx}
                  className={`border-2 border-black px-3 py-1 rounded-md w-20 
                  ${activePath === item.path ? "bg-gradient-to-r from-indigo-600  to-violet-500 text-white" : ""} `}>
                  <h1>{item.name}</h1>
                  <h1>{item.res}</h1>
                </div>
              </Link>
            );
          })}
        </div>
        <Content>
          <div className=" flex justify-evenly">
            <section>
              <h1>Monthly price</h1>
              <h1>Video and sound quality</h1>
              <h1>Resolution</h1>
              <h1>Supported devices</h1>
              <h1>Number of devices</h1>
            </section>

            <section>
              <Outlet />
            </section>
          </div>
        </Content>
        <Footer className="  text-center">
          <h2 className=" text-sm md:text-md text-start">
            HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
            subject to your internet service and device capabilities. Not all
            content is available in all resolutions. See our Terms of Use for
            more details.
            <br />
            Only people who live with you may use your account. Watch on 4
            different devices at the same time with Premium, 2 with Standard,
            and 1 with Basic and Mobile.
          </h2>
          <button className=" w-4/5 bg-green-300 rounded-sm py-2" 
          onClick={()=>navigate('/paymethod')}>Next</button>
          <ImCross className=" mx-auto my-3" size={26} onClick={()=>navigate("/details")}/>
        </Footer>
        
      

      <Footer/>
      </Layout>
    </div>
  );
};

export default Subscription;
