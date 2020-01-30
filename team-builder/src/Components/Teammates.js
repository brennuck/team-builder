import React from 'react';

const Teammates = props => {
    console.log( "this is props",  props);
    return (
        <div>
            {props.teammates.map(teammate => (
                <div key = {teammate.id}>
                    <h2>Name: {teammate.name} </h2>
                    <h4>Email: {teammate.email} </h4>
                    <h4>Role: {teammate.role} </h4>
                </div>
            ))}
        </div>
    )
}

export default Teammates;