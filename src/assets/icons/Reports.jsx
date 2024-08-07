import React from "react";

function Trash({ fill, className }) {
  return (
    <svg
      className={className}
      width="800px"
      height="800px"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={fill} fillRule="evenodd">
        <rect x="15" rx="1" width="3" height="18" />
        <rect x="10" y="5" width="3" height="13" rx="1" />
        <rect x="5" y="9" width="3" height="9" rx="1" />
        <rect y="13" width="3" height="5" rx="1.001" />
      </g>
    </svg>
  );
}

export default Trash;
