import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Teammates from './Components/Teammates';
import Form from './Components/Form';

function App() {
    const [teammates, setTeammates] = useState([
        {
        id: 1,
        name: "Jaxon",
        email: "jaxondavis@yahoo.com",
        role: "Be cute"
        }
    ]);

    const addNewTeammate = teammate => {
        const newTeammate = {
            id: Date.now(),
            name: teammate.name,
            email: teammate.email,
            role: teammate.role
        };
        setTeammates([ ...teammates, newTeammate ]);
    };
    return (
        <div className="App">
            <h1>My Teammates</h1>
            <Form addNewTeammate = {addNewTeammate} />
            <Teammates teammates={teammates} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));