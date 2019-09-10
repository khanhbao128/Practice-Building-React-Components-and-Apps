import React from 'react';
import "./SeasonDisplay.css";

const seasonConfig = {
    winter: {
        text: 'Burr, it is chilly',
        iconName: 'snowflake icon'
    },
    summer: {
        text: 'Lets hit the beach',
        iconName: 'sun icon'
    }
};

const getSeason = (lat, month) => {
    if (month >2 && month < 9) {
        return lat > 0 ? 'summer': 'winter';
    } else {
        return lat > 0 ? 'winter': 'summer';
    }

};

const SeasonDisplay = (props) => {
    
    // console.log(props.lat);
    const season = getSeason(props.lat, new Date().getMonth());
    
    //destructure text and iconName
    const { text, iconName} = seasonConfig[season]
    
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName}`}></i>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName}`}></i>

        </div>
    );

};

export default SeasonDisplay;