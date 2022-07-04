import './App.css';
import Name from './components/Name';
import Gender from './components/Gender';
import Weight from './components/Weight';
import { useEffect, useState } from 'react';

function App() {

  const [step, setStep] = useState(0);



  return (

    
    <div className = "App">
      <Name/>
      <Gender />
      <Weight />

    </div >
  );

  
}

export default App;
