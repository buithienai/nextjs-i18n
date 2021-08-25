import React from 'react';
import '../styles/loading.scss';

const Loading = (props) => {
    return (
        <div className={props.classes}>
            <div className="la-ball-scale-pulse"
                style={{
                    color: props.color || "#ffe552"
                }}
            >
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Loading;