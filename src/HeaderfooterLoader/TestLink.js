import React from 'react';
import { useEffect } from 'react';

const TestLink = () => {
     useEffect(() => {
        console.log('test is okay');
    }, []);

    return (
        <div>
            3333
        </div>
    )
}

export default TestLink
