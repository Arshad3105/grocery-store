import React from 'react';

function Hello(props) {
    return (
        <div>
            <h2>{props.name} belongs to {props.department}</h2>
            <p>{props.children}</p>
        </div>
    );
}

export default Hello;