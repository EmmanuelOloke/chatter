import React from 'react';
import { Color } from '@/types/sidebar-icon-types';

const TrendingSvg = ({ color }: Color) => {
  return (
    <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.9998 1.5C19.0093 1.43032 19.0093 1.35968 18.9998 1.29C18.9911 1.23129 18.9743 1.17407 18.9498 1.12C18.9234 1.07113 18.8933 1.02433 18.8598 0.98C18.8218 0.916753 18.7746 0.859469 18.7198 0.81L18.5998 0.74C18.5421 0.696956 18.478 0.663215 18.4098 0.64H18.2098C18.1489 0.580995 18.0777 0.533558 17.9998 0.5H12.9998C12.7346 0.5 12.4802 0.605357 12.2927 0.792893C12.1052 0.98043 11.9998 1.23478 11.9998 1.5C11.9998 1.76522 12.1052 2.01957 12.2927 2.20711C12.4802 2.39464 12.7346 2.5 12.9998 2.5H15.8298L11.8298 7.21L7.50981 4.64C7.30519 4.5183 7.06387 4.47359 6.82923 4.51392C6.5946 4.55425 6.38205 4.67696 6.22981 4.86L1.22981 10.86C1.14561 10.961 1.08217 11.0777 1.04312 11.2033C1.00408 11.3289 0.990194 11.461 1.00227 11.592C1.01435 11.7229 1.05214 11.8503 1.11349 11.9666C1.17485 12.0829 1.25855 12.1861 1.35981 12.27C1.53972 12.4191 1.76616 12.5005 1.99981 12.5C2.14672 12.5002 2.29188 12.4681 2.42496 12.4059C2.55804 12.3437 2.67578 12.2529 2.76981 12.14L7.21981 6.8L11.4898 9.36C11.6923 9.48013 11.9308 9.52493 12.1631 9.48651C12.3954 9.4481 12.6067 9.32893 12.7598 9.15L16.9998 4.2V6.5C16.9998 6.76522 17.1052 7.01957 17.2927 7.20711C17.4802 7.39464 17.7346 7.5 17.9998 7.5C18.265 7.5 18.5194 7.39464 18.7069 7.20711C18.8945 7.01957 18.9998 6.76522 18.9998 6.5V1.5Z"
        fill={color}
      />
    </svg>
  );
};

export default TrendingSvg;