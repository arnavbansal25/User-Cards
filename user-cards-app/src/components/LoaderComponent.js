import React from 'react';

const spin = {
    display: "flex",
    justifyContent: "center",
    marginTop: "2%",
    color: "blue"
};


function Loader() {
    return (
        <div style={spin}>
            <span className="fas fa-spinner fa-pulse fa-3x"></span>
        </div>
    );
}

export default Loader;