import React from 'react';

export default function (props: { left: React.ReactNode; center: React.ReactNode;top: React.ReactNode; }) {
    return (

        <div style={{ display: 'flex', height: 'inherit' }}>
            <div style={{ flex: '60px' }}>
                {props.left}
            </div>
            <div style={{ flex: 'calc(100% - 60px)', width: 'calc(100% - 60px)' }}>
                <div>
                {props.top}
                </div>
                <div style={{background: "#f0f2f6", height: "calc(100vh - 50px)"}}>
                {props.center}
                </div>
            </div>
        </div>

    );
}


