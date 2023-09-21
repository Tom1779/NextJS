'use client'
// Common ancestor component
import { useState } from 'react';
import NameForm from './submitButton';
import NameList from './nameList';

export default function CreateNames() {
    const [names, setNames] = useState<string[]>([]);

    // Function to update the names state
    const updateNames = (newName: string[]) => {
        setNames(names.concat(newName));
    };

    return (
        <div>
            <NameForm updateNames={updateNames} />
            <NameList names={names} updateNames={updateNames}/>
        </div>
    );
}