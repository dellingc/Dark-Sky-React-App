import React from 'react';
import '../styles/loading.css';

function Loading(props) {
    return(
        <div>
            <h2>Loading...</h2>
            <div className='loader'></div>
        </div>
    )
}

export default Loading;