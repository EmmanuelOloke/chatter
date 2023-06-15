import React from 'react';
import { Color } from '@/types/sidebar-icon-types';

const DraftsSvg = ({ color }: Color) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 0L19.05 5.4C19.35 5.58333 19.5833 5.83333 19.75 6.15C19.9167 6.46667 20 6.8 20 7.15V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H2C1.45 20 0.979002 19.804 0.587002 19.412C0.195002 19.02 -0.000664969 18.5493 1.69779e-06 18V7.15C1.69779e-06 6.8 0.083335 6.46667 0.250002 6.15C0.416668 5.83333 0.650002 5.58333 0.950002 5.4L10 0ZM10 11.65L17.8 7L10 2.35L2.2 7L10 11.65ZM10 14L2 9.2V18H18V9.2L10 14ZM10 18H18H2H10Z"
        fill={color}
      />
    </svg>
  );
};

export default DraftsSvg;
