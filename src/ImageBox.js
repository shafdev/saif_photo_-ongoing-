import React from "react";
import images from "./imageData";


function ImageBox(){


    return(<>
            <div className="picture-box">
            
                {images.map(image=><img src={image.img}/>)}

            </div>
            
            
        </>)
}

export default ImageBox;