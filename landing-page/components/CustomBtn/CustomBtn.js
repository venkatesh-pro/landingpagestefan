import React from "react";

const CustomBtn = ({ children }) => {
  return (
    <div class="CustomBtn-container">
      <a href="#" class="CustomBtn-button">
        <div class="CustomBtn-button__content">
          <span class="CustomBtn-button__text">{children}</span>

          <div class="CustomBtn-button__shape-1"></div>
          <div class="CustomBtn-button__shape-2"></div>
          <div class="CustomBtn-button__shape-3"></div>
          <div class="CustomBtn-button__shape-4"></div>
        </div>

        <div class="CustomBtn-button__shadow"></div>
      </a>
    </div>
  );
};

export default CustomBtn;
