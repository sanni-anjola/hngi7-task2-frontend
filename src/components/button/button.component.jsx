import React from 'react';
import './button.styles.scss';
const Button = ({ children, ...otherProps }) => (
    <button className={
    	`custom-button
    	${otherProps.status ? (otherProps.status === "pass"? "pass" : "fail") : ""}
    `}>{children} <span>{otherProps.count}</span></button>
);


export default Button;