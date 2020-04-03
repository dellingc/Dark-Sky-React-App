import React from 'react';
import '../styles/loading.css';

function Loading(props) {
    return(
        <div>
            <h2>Loading...</h2>
            <div class="dots-container">
                <div class="loader1"></div>
                <div class="loader2"></div>
                <div class="loader3"></div>
            </div>
        </div>
    )
}

export default Loading;