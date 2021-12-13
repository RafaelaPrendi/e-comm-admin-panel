import React from "react";

const Input = (props) => {
  return (
    <React.Fragment>
      <label className={`block text-gray-700 text-sm font-bold mb-2`}>
        {props.label}
      </label>
      <input
        className={`shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 
        leading-tight focus:outline-none focus:shadow-outline ${props.className}`}
        type={props.type}
        placeholder={props.placeholder}
        onClick={props.onClick}
        onChange={props.onChange}
        value={props.value}
      />
      {props.showMessageText && (
        <p className="text-red-500 text-xs italic">{props.messageText}</p>
      )}
    </React.Fragment>
  );
};

export default Input;
