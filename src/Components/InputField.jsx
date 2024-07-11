import React from "react";

const Input = (props) => {
  const handleChange = (event) => {
    props.onCityChange(event.target.value);
  };

  return (
    <div className="flex flex-wrap justify-start items-center gap-5 ml-8">
      <div className="mt-4  p-3 ">
        <form onSubmit={props.getWeather}>
          <input
            className="p-2  font-bold shadow-lg rounded-sm  placeholder:font-bold focus:outline-none"
            onChange={handleChange}
            type="text"
            value={props.city}
            name="city"
            placeholder="City"
          />
          <button className="px-4 py-2 rounded-sm bg-blue-400 text-white font-semibold shadow-md hover:bg-blue-500 transition duration-200 ease-in-out transform hover:scale-105" type="submit">
            Get Weather
          </button>

        </form>
      </div>
    </div>
  );
};

export default Input;
