import React from 'react';
import photograph from './photograph.jpg';

export default function Profile() {
    return (
        <>
        <img src={photograph} 
            alt="profile"
            height="270" width="260"
            style={{backgroundColor: "inherit", marginTop: -50, marginBotton: -20, paddingLeft: 20}} />
        </>
    )
}

