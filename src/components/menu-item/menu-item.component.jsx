import React from 'react';
import './menu-item.component.scss';

const MenuItem=({title,url,size})=>{
        return (
                <div className={`${size} menu-item` } >
                    <div className="background-image"  style={{backgroundImage: 'url(' + url + ')'}} />
            <div className="content">
                    <h2 className="title">{title}</h2>
                    <h2 className="subtitle">Shop Now</h2>
                </div>
            </div>
        )
}
export default MenuItem ;