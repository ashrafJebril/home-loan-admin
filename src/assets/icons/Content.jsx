import React from 'react';

function Trash({ fill, className }) {
  return (
    <svg
      className={className}
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={fill}
        d="M7.52 15H1V1h16v4.52l-1 1V2H2v7.2l1.4-1.4a.377.377 0 0 1 .533 0 .377.377 0 0 0 .534 0l2.69-2.69a.377.377 0 0 1 .508-.023l2.706 2.256a.377.377 0 0 0 .468.012l1.633-1.225a.377.377 0 0 1 .493.035L14.66 7.86l-.707.707-1.313-1.313-1.2.9a1.375 1.375 0 0 1-1.71-.044L7.461 6.22 5.173 8.509a1.37 1.37 0 0 1-.973.402 1.387 1.387 0 0 1-.429-.068L2 10.614V14h6.52zM10.5 3.479v.043a.981.981 0 0 0 .979.978h.043a.979.979 0 0 0 .978-.979A1.021 1.021 0 0 0 11.479 2.5a.979.979 0 0 0-.979.979zM21.536 4.52a.965.965 0 0 0-1.385-.03L6.998 17.644 5.242 21.74a.371.371 0 0 0 .488.487l4.096-1.756L22.979 7.32a.965.965 0 0 0-.03-1.385zM6.78 20.688l.962-2.24 1.28 1.28zm3.015-1.6l-1.413-1.414L18.679 7.376l1.414 1.414zM21.952 6.932L20.8 8.083l-1.414-1.414L20.555 5.5a.42.42 0 0 1 .599.007l.804.838a.42.42 0 0 1-.006.587z"
      />
      <path fill="none" d="M0 0h24v24H0z" />
    </svg>
  );
}

export default Trash;
