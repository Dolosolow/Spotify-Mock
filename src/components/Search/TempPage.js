import React from 'react';
import convert from 'color-convert';

const TempPage = props => (
    <div style={{
        background: `linear-gradient(to bottom, rgba(${ convert.hex.rgb(props.bg) }, 0.4) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 71%, rgba(0,0,0,1) 91%, rgba(0,0,0,1) 100%)`, 
        width: '100%', 
        height: '100%', 
        paddingTop: '60px',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'flex-start' 
        }} 
    >
        <h1>{ props.title }</h1>
    </div>
)

export default TempPage;