
// import './App.css';
// import { useState } from 'react';
// function App() {
//   const bg=document.getElementById('root')
//   const [name,setName]=useState(false)
  
//    const resetBackground=()=>{
//     setName(true)
//    }
//    const res=()=>{
//     if(setName){
//       bg.style.backgroundColor="green"
//     }
//    }
   
//   return (
//     <div>
//       <h1>hey {name}</h1>
//     <button id='btn' onClick={()=>{
//       console.log("clicked");

//     }} style={{margin:20}}>click me</button>
// </div>
  
//   );
// }
import React, { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeSwitch = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeStyles = {
    backgroundColor: isDarkMode ? 'black' : 'white',
    color: isDarkMode ? 'white' : 'black',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={themeStyles}>
      <button onClick={handleThemeSwitch}>Switch Theme</button>
    </div>
  );
}

export default App;


