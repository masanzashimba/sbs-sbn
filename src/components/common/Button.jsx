import React from "react";

export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className={`px-4 py-2 bg-cyan-700 text-white rounded hover:bg-cyan-950 ${props.className}`}
    >
      {children}
    </button>
  );
}
