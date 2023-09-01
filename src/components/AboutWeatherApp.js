import React from "react";

const AboutWeatherApp = () => {
  return (
    <div className="m-4">
      <h2 className="mb-4 text-center text-lg font-bold uppercase text-dark/75">
        About Project
      </h2>
      <p className="font-medium">
        This is a web application that displays the current weather conditions
        for a specific location.
      </p>
      <p className="font-medium">
        The Weather App includes the following features:
      </p>
      <ul className="font-medium px-4">
        <li className="list-disc">
          Current weather conditions: The app displays the current weather
          conditions for the user's location or for a specific location that the
          user enters.
        </li>
        <li className="list-disc">
          Detailed weather information: The app provides detailed information
          about the current weather conditions, including temperature, humidity,
          wind speed, and more.
        </li>
        <li className="list-disc">
          Responsive design: The app is designed to be responsive and work on a
          range of devices, from desktops to mobile phones.
        </li>
      </ul>
    </div>
  );
};

export default AboutWeatherApp;
