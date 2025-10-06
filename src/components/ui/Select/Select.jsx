// import React, { useState, useRef, useEffect } from "react";
// import styles from "./Select.module.css";
// import PropTypes from "prop-types";

// const Select = ({
//   options = [],
//   value,
//   onChange,
//   placeholder = "Select...",
//   disabled = false,
//   label,
//   className = "",
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hoveredIndex, setHoveredIndex] = useState(-1);
//   const selectRef = useRef(null);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (selectRef.current && !selectRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleOptionClick = (option) => {
//     onChange(option);
//     setIsOpen(false);
//   };

//   const displayValue = () => {
//     if (!value) return placeholder;
//     if (typeof value === "object" && value.label) return value.label;
//     return value;
//   };

//   return (
//     <div className={`${styles.selectContainer} ${className}`} ref={selectRef}>
//       {label && <label className={styles.label}>{label}</label>}
//       <div
//         className={`${styles.selectBox} ${disabled ? styles.disabled : ""}`}
//         onClick={() => !disabled && setIsOpen((prev) => !prev)}
//       >
//         <span>{displayValue()}</span>
//         <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
//       </div>
//       {isOpen && (
//         <ul className={styles.optionsList}>
//           {options.map((option, index) => {
//             const optionLabel = typeof option === "object" ? option.label : option;
//             return (
//               <li
//                 key={index}
//                 className={`${styles.optionItem} ${
//                   hoveredIndex === index ? styles.hovered : ""
//                 }`}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(-1)}
//                 onClick={() => handleOptionClick(option)}
//               >
//                 {optionLabel}
//               </li>
//             );
//           })}
//         </ul>
//       )}
//     </div>
//   );
// };

// Select.propTypes = {
//   options: PropTypes.array.isRequired,
//   value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
//   onChange: PropTypes.func.isRequired,
//   placeholder: PropTypes.string,
//   disabled: PropTypes.bool,
//   label: PropTypes.string,
//   className: PropTypes.string,
// };

// export default Select;






