import React from "react";

import "./custom-buttom.styles.scss";

const CustomButton = ({ children, isGoogle, ...otherProps }) => (
  <button
    className={`${isGoogle ? "sign-in-google" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
