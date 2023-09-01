import React from "react";

const AboutRecipeApp = () => {
  return (
    <div className="m-4">
      <h2 className="mb-4 text-center text-lg font-bold uppercase text-dark/75">
        About Project
      </h2>
      <p className="font-medium">
        A sophisticated web application meticulously crafted using React, Redux,
        Bootstrap, and fortified with JWT (JSON Web Token) authentication.
      </p>
      <p className="font-medium">In our Beauty Salon, you will find:</p>
      <ul className="font-medium px-4">
        <li className="list-disc">
          Service Selection: Explore our range of beauty services, from brow
          tinting to makeup and more, all presented elegantly with detailed
          descriptions.
        </li>
        <li className="list-disc">
          Appointment Booking: Schedule appointments with ease, choosing your
          preferred date, time.
        </li>
        <li className="list-disc">
          Secure Access: Feel confident with our secure login and JWT
          authentication. Your personal information is protected, ensuring a
          safe and worry-free experience.
        </li>
      </ul>
    </div>
  );
};

export default AboutRecipeApp;
