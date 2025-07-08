import { WiDegrees } from "react-icons/wi";
import { FaWind } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";

function WeatherDispay({ weatherData, isLoading, city, error }) {
// console.log(weatherData?.current?.condition?.text)
  return (
    <div>
      {isLoading == true ? (
        <div className="relative">loading...</div>
      ) : (
        <div className="relative flex-col justify-center place-items-center -mt-36 text-gray-950">
          <img
            src={weatherData?.current?.condition?.icon}
            alt="Weather-Image"
          />
          <h2 className=" text-5xl font-bold  flex m-0">
            {weatherData?.current?.temp_c}
            <WiDegrees className="-ml-6 -mt-2 text-6xl" />
            <span className="-ml-6 -mt-1 text-4xl">c</span>
          </h2>
          <p className="text-xl font-semibold text-gray-950">
            {weatherData?.current?.condition?.text}
          </p>
          <div className="flex relative mt-2">
            <div className="ml-96">
              <p className="ml-96 text-xl font-bold ">Wind Speed</p>
              <span className="ml-96 text-xl font-normal flex">
                <FaWind className="mr-2" />
                {weatherData?.current?.wind_kph} kph
              </span>
            </div>

            <div className="mr-96 absolute">
              <p className="mr-96 text-xl font-bold">Humidity</p>
              <span className="mr-96 text-xl font-normal flex">
                <WiHumidity className="text-2xl" />
                {weatherData?.current?.humidity}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* {
        err
       } */}
    </div>
  );
}

export default WeatherDispay;
