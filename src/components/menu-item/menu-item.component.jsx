import React from 'react';
import './menu-item.component.scss';

const MenuItem=({title,url})=>{
        return (
                <div className="menu-item"  style={{backgroundImage: 'url(' + url + ')',backgroundSize: 'cover',overflow: 'hidden'}}>
                
            <div className="content">
                    <h2 className="title">{title}</h2>
                    <h2 className="subtitle">Shop Now</h2>
                </div>
            </div>
        )
}
export default MenuItem ;