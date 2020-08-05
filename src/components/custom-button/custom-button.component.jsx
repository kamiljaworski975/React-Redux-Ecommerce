import React from "react";

import "./custom-buttom.styles.scss";

const CustomButton = ({ children, isGoogle,inverted, ...otherProps }) => (
  <button
    className={`${inverted ? "inverted" : ""} ${isGoogle ? "sign-in-google" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
