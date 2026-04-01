import React from "react";
import "./Button.css";

/**
 * 
 * @param {"square"| "pill"} shape - La forme du bouton
 * @param {"gray"| "red"| "yellow"| "blue"| "green"| "indigo"|"purple"|"pink"} color - La couleur du bouton
 */

export default function Button({ children, onClick, color = "gray", shape = "square" }) {
  return (
    <button className={`btn-badge ${color} ${shape}`} onClick={() => onClick(shape, color)}>
      {children}
    </button>
  );
}   

