import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Personal from './components/Personal'
import Account from './components/Account'
import Review from './components/Review'

function App() {
  const [step,setStep]=useState(1);
  const [formData,setformData]=useState({
    name:"",
    email:"",
    username:"",
    password:""
  });

  function nextStep(){
    setStep(prev=>prev+1)
  };
  function prevStep(){
    setStep(prev=>prev-1)
  };
  return(
    <>
      {step===1 && (
        <Personal 
          formData={formData}
          setformData={setformData}
          nextStep={nextStep}
        />
      )}
      {step===2 && (
        <Account
          formData={formData}
          setformData={setformData}
          nextStep={nextStep}
          prevStep={prevStep}
        />  
      )}
      {step===3 && (
        <Review
          formData={formData}
          prevStep={prevStep}
        />
    
      )}
    </>
  )
}

export default App
