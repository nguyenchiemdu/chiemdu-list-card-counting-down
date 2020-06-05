import React from 'react';

function Animal(props){
    console.log('props',props.name)
    return (
        <div>
            animal 1 {props.name}
        </div>
    )
}

export default Animal;