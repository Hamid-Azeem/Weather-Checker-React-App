import React from "react";
import Header from "./Components/Header";
import Weather from "./Components/Weather";
import LowBackground from "./Assets/LowBack.mp4"


function App() {

   return (
      
      <div className="relative w-full h-screen overflow-hidden">
          <video  className="absolute top-0 left-0 w-full h-full object-cover -z-10" autoPlay loop muted >
            <source src={LowBackground} type="video/mp4" />
            Your browser does not support the video tag.
            
         </video>
         <Header />

         <Weather />
        
      </div>
   );
}


export default App;