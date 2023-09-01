import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 py-2 px-8 sm:pl-28 lg:p-32 ${className}`}
    >
      {children}
    </div>
  );
};
export default Layout;
