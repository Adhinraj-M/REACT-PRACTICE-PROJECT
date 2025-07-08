import { useEffect, useState } from "react";
import WeatherDispay from "./WeatherDispay";

const API_KEY = '9537b89fe9584e27927103111250807'

 function WeatherFetch({city,handleBgVideos}) {
     const [weatherData ,setWeatherData]= useState()
     const [isLoading,setIsLoading] =useState(false)
     const [err,setErr] = useState('')
     
     console.log(handleBgVideos)

     useEffect(()=>{
      async function WeatherDataFetch() {
        try {
            setIsLoading(true)
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
            const data = await response.json()
            setWeatherData(data)
            handleBgVideos(data?.current?.condition?.text)
        } catch (error) {
            console.log('something went wrong',error)
            setErr(error)
        }finally{
            setIsLoading(false)
        }  
     }

     WeatherDataFetch()
    },[city])

  return (
    <div>
         <WeatherDispay weatherData={weatherData} isLoading={isLoading} city={city} error={err}/>
    </div>
  )
}

export default WeatherFetch