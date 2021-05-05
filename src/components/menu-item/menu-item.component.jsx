import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.component.scss';

const MenuItem=({title,url,size,history,linkUrl,match})=>{
        return (
                <div className={`${size} menu-item` }  onClick={()=>history.push(`${match.url}${linkUrl}`)}>
                    <div className="background-image"  
                    style={{backgroundImage: 'url(' + url + ')'}} />
            <div className="content">
                    <h2 className="title">{title}</h2>
                    <h2 className="subtitle">Shop Now</h2>
                </div>
            </div>
        )
}
export default withRouter(MenuItem)  ;