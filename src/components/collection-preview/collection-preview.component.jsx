import React from 'react';
const CollectionPreview=({title,items})=>{
    return (
            <div className="collection-preview">
               <h5 className="title">
                   {title}
               </h5>
               <div className="collection-items">
                {
                    items.map(item=>(
                        <div key={item.id}>
                            {item.name}
                        </div>
                    ))
                }
               </div>
            </div>
    ) 
}
export default CollectionPreview;
