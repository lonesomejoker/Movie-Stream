import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "../App";
import AuthLayout from "../layout/AuthLayout";
import Signup from "../auth/Signup";
import Series from "../components/Series";
import Details from "../user/Details";
import Originals from "../components/Originals";
import Login from "../auth/Login";
import Subscription from "../layout/Subscription";
import Premium from "../components/subs/Premium";
import Standard from "../components/subs/Standard";
import Basic from "../components/subs/Basic";
import Mobile from "../components/subs/Mobile";

import Paymethod from "../layout/Paymethod";

export const MainRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App/>}/>
      <Route path="series" element={<Series/>} />
      <Route path="details" element={<Details/>} />
      <Route path="originals" element={<Originals/>} />
     
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>

      <Route path="/subs" element={<Subscription/>}>
      <Route path="premium" element={<Premium />} />
      <Route  path="standard"  element={<Standard />} />
      <Route path="basic" element={<Basic />} />
      <Route path="mobile" element={<Mobile />} />

      </Route>
   
      <Route path="/paymethod" element={<Paymethod/>}/>
    </Route>
  )
);
