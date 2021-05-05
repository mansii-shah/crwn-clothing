import React from 'react';
import CollectionItems from '../collection-items/collection-items.component';
import './collection-preview.component.scss';
const CollectionPreview=({title,items})=>{
    return (
            <div className="collection-preview">
               <h5 className="title">
                   {title}
               </h5>
               <div className="preview">
                {
                    items.slice(0,4).map(({id,...otherItems})=>(
                        <CollectionItems key={id} {...otherItems} ></CollectionItems>
                      
                    ))
                }
               </div>
            </div>
    ) 
}
export default CollectionPreview;
