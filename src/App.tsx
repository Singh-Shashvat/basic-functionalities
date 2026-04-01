// import { Login } from "./pages/loginPage";
import { Route, Routes } from "react-router-dom";
// import LoginSignupForm from "./pages/loginSignupForm";
// import AuthPage from "./pages/auth";
// import DoctorsCard from "./components/doctorsCard";
import BBgColorChanger from "./components/bgcolourchanger/bgColorChanger";
import PasswordGenerator from "./components/password generator/passwordGenerator"

const App = () => {
  

  return (
    <>

      <Routes>
        <Route element ={<PasswordGenerator />} path="/" />
        <Route element ={<BBgColorChanger />} path="/bgcolor" />
      </Routes>
{/* 
      <DoctorsCard  
        profileurl="https://www.shutterstock.com/image-vector/male-doctor-smiling-selfconfidence-flat-600nw-2281709217.jpg" 
        name="Dr. Sumit Sarkar"
        speciality="Cardiologist"
        description="one of the finest cardiologist of raipur who work as hod of cardiology department at mekahara hospital at raipur" /> */}
        
      {/* <BBgColorChanger /> */}
      {/* <PasswordGenerator /> */}
      
    </>
  )
}

export default App
