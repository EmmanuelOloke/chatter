import React from 'react';
import { Color } from '@/types/sidebar-icon-types';

const PenSvg = ({ color }: Color) => {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_419_208)">
        <path
          d="M2.66211 22.2499H6.90461L22.4611 6.69343L18.2181 2.45093L2.66211 18.0074V22.2499Z"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M13.9756 6.69336L18.2181 10.9359"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_419_208">
          <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PenSvg;
