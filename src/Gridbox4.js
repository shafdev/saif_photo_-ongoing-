import React from "react";
import images from "./imageData";

function Gridbox4(props){
    const start_id = Math.floor(props.datalen/3)*2
    const end_id = props.datalen+1
    console.log(`third box start id ${start_id+1}`)
    console.log(`third box end id ${end_id}`)
return(
    <>

    <div className="box2">
    {images.map(image=>{
        return(
           
            <>

        
        {image.id>start_id && image.id<end_id &&  <img key={image.id} src={image.img} alt={``}/>
        
        }   

         </>
        )
    })}
    </div>
        
    </>
)

}

export default Gridbox4;