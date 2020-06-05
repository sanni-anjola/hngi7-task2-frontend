import React from 'react';
import './header.styles.scss';

const data = [{
        handle: "@sixpathdev",
        role: "Team Lead"
    },
    {
        handle: "@Glowree",
        role: "Front-End Lead"
    },
    {
        handle: "@David",
        role: "DevOps Lead"
    },
    {
        handle: "@fosajeff",
        role: "Back-End Lead"
    }
]
const Header = () => (
    <div className="header">
    	<div className="hng">HNGi7</div>
    	<div className="team-name">Team<span className="flash">Flash</span></div>
    	<div className="leads">
    	{
    		data.map(({handle, role}) => (
    			<p key={handle}>
	    			<span className="handle">{handle}</span><span className="team-role">{role}</span>
    			</p>
    			))
    	}
    	</div>
    </div>
);

export default Header;