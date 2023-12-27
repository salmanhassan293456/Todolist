import React, { useState } from "react";

function CheckBox({ checked = false, onClick }) {
  return (
    <div onClick={onClick}>
      {!checked && (
        <div className="checkbox checked">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12" r="11.5" fill="white" stroke="#E3E4F1" />
            <g opacity="0.01">
              <circle cx="12" cy="12" r="12" fill="url(#paint0_linear_0_606)" />
              <path d="M8 12.3041L10.6959 15L16.6959 9" stroke="white" />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_0_606"
                x1="-12"
                y1="12"
                x2="12"
                y2="36"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#55DDFF" />
                <stop offset="1" stop-color="#C058F3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}
      {checked && (
        <div className="checkbox checked">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12" r="11.5" fill="white" stroke="#E3E4F1" />
            <circle cx="12" cy="12" r="12" fill="url(#paint0_linear_0_595)" />
            <path
              d="M8 12.3041L10.6959 15L16.6959 9"
              stroke="white"
              stroke-width="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_595"
                x1="-12"
                y1="12"
                x2="12"
                y2="36"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#55DDFF" />
                <stop offset="1" stop-color="#C058F3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}
    </div>
  );
}

export default CheckBox;
