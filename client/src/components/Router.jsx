import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Dashboard from "../pages/patient/Dashboard";
import Appointments from "../pages/patient/Appointments";
import PatientProfile from "../pages/patient/PatientProfile";
import Payment from "../pages/patient/Payment";
import TherapistProfile from "../pages/Therapist/TherapistProfile";
import Newemails from "../pages/Therapist/Newemails";
import ScheduledAppointments from "../pages/Therapist/Scheduledappointments";
import Paymentt from "../pages/Therapist/Paymentt";
// import Therapist from "../pages/T";
import Email from "../pages/patient/Email";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import TherapistForm from "../pages/TherapistForm";
import RegisterForm from "../pages/RegisterForm";


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/therapistform"
          element={
            <Layout>
              <TherapistForm />
            </Layout>
          }
        />
        <Route
          path="/dashboard/profile"
          element={
            <Layout>
              <PatientProfile />
            </Layout>
          }
        />
        <Route
          path="dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        <Route
          path="/dashboard/appointments"
          element={
            <Layout>
              <Appointments />
            </Layout>
          }
        />
        <Route
          path="/dashboard/email"
          element={
            <Layout>
              <Email />
            </Layout>
          }
        />
        <Route
          path="/dashboard/payment"
          element={
            <Layout>
              <Payment />
            </Layout>
          }
        />
        <Route
          path="/dashboardt/therapistprofile"
          element={
            <Layout>
              <TherapistProfile />
            </Layout>
          }
        />
        <Route
          path="/dashboardt/newemails"
          element={
            <Layout>
              <Newemails />
            </Layout>
          }
        />
        <Route
          path="/dashboardt/scheduledappointments"
          element={
            <Layout>
              <ScheduledAppointments />
            </Layout>
          }
        />
        <Route
          path="/dashboardt/paymentt"
          element={
            <Layout>
              <Paymentt />
            </Layout>
          }
        />
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
              <TherapistForm />
            </Layout>
          }
        />
        <Route
          path="/registerformm"
          element={
            <Layout>
              <RegisterForm />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
