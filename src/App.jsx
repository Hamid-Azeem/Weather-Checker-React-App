import React from "react";
import Header from "./Components/Header";
import Weather from "./Components/Weather";
import Background from "./Assets/Background.mp4"

function App() {

   return (
      
      <div className="relative w-full h-screen overflow-hidden">
          <video  className="absolute top-0 left-0 w-full h-full object-cover -z-10" autoPlay loop muted >
            <source src={Background} type="video/mp4" />
            Your browser does not support the video tag.
            
         </video>
         <Header />

         <Weather />
        
      </div>
   );
}


export default App;