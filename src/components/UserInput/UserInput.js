import React from 'react';

const userInput = ( props ) => {
    return (
        <div>
            <input 
                type="text" 
                onChange={props.changed2}
                value={props.currentValue} />
        </div>
    )
};

export default userInput;