import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "../App";
import AuthLayout from "../layout/AuthLayout";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import Series from "../components/Series";

export const MainRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}/>
      <Route path="/series" element={<Series/>} />
     
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Route>
  )
);
