import { useState } from "react";
import heavyRaing from "../assets/heavyRain.mp4";
import foggy from "../assets/foggy.mp4";
import patchyRain from "../assets/patchyRain.mp4";
import snow from "../assets/Snow.mp4";
import sunny from "../assets/sunny.mp4";
import WeatherFetch from "./WeatherFetch";
import overcast from '../assets/Time Lapse of Overcast weather.mp4'

function City() {

  const [city, setCity] = useState("Sulthan Bathery");
  const [bgVideos,setBgVideos] = useState(overcast)

  const handleChange = (e) => {
    setCity(e.target.value);
  };


  function handleBgVideos(weather){
    console.log(weather)
    switch(weather){
      case 'Patchy rain nearby' :
        setBgVideos(patchyRain);
        break;
      case 'Mist' || 'partly cloudy':setBgVideos(foggy)
        break;
      case 'Moderate or heavy rain with thundar' :setBgVideos(snow)
        break;
      case 'Overcast':setBgVideos(overcast)
            
    }
    
  }  

  return (
    <div
      className=" text-black h-dvh flex justify-center items-center bg-no-repeat bg-center relative"
    >
      <video autoPlay loop muted  className="object-cover absolute h-dvh">
        <source src={bgVideos} type="video/mp4" />
      </video>
      <h1 className="absolute top-32 text-6xl text-blue-950 font-bold">
        Weather App
      </h1>
      <input
        type="text"
        placeholder="Search for cities..."
        className="w-2xs h-12 absolute border-2 border-white rounded pl-3 focus:border-2 top-64 text-xl bg-gray-200 backdrop-blur-3"
        onChange={handleChange}
        value={city}
      />
      <WeatherFetch city={city} handleBgVideos={handleBgVideos}/>
    </div>
  );
}
export default City;

// poiupoiuopiupoiupoiupoiupoiupoiuopiupoiuopui