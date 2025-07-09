import { useEffect, useState } from "react";
import WeatherDispay from "./WeatherDispay";
import NoLocation from "./NoLocation";

const API_KEY = '9537b89fe9584e27927103111250807'

 function WeatherFetch({city,handleBgVideos}) {
     const [weatherData ,setWeatherData]= useState()
     const [isLoading,setIsLoading] =useState(false)
     const [err,setErr] = useState('')
     const [nodata,setNoData] = useState(false)
     

     useEffect(()=>{
      async function WeatherDataFetch() {
        try {
            setIsLoading(true)
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
            const data = await response.json()

          console.log(data)
          
                 if(data.location){
                  setWeatherData(data)
                 handleBgVideos(data?.current?.condition?.text)
                 setNoData(false)
                 }

                 if(data.error){
                   setNoData(true)
                 }

           
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
         { nodata ? (<NoLocation nodata={nodata}/>) : (<WeatherDispay weatherData={weatherData} isLoading={isLoading} city={city} error={err}/>)}
    </div>
  )
}

export default WeatherFetch