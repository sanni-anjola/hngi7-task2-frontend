import React from 'react';
import './card.styles.scss';
const Card = ({ serial, name, message, status }) => (
    <div className="card">
		<span>{serial}</span>
		<span>{name}</span>
		<span>{message}</span>
		<span className={(status === "pass") ? "pass" : "fail"}>{status.slice(0,1).toUpperCase() + status.slice(1, status.length)}</span>
	</div>
);

export default Card;