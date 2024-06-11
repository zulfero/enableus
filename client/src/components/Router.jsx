import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Therapist from "../pages/Therapist";
import Info from "../pages/Info";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/signup"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        />
        <Route
          path="/signin"
          element={
            <Layout>
              <Signin />
            </Layout>
          }
        />
        <Route
          path="/therapist"
          element={
            <Layout>
              <Therapist />
            </Layout>
          }
        />
        <Route
          path="/therapistinfo"
          element={
            <Layout>
              <Info />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
