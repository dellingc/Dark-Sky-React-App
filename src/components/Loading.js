import React from 'react';
import '../styles/loading.css';

function Loading(props) {
    return(
        <div>
            <h2>Loading...</h2>
            <div class="dots-container">
                <div className="loader1"></div>
                <div className="loader2"></div>
                <div className="loader3"></div>
            </div>
        </div>
    )
}

export default Loading;