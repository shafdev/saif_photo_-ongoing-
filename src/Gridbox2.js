import React from "react";
import images from "./imageData";

function Gridbox2(props){
    const windowSize = props.windowsize
    // console.log(windowSize)
    // console.log(props.datalen)
    const end = []
    const start=[]
    if(windowSize<1100){
        const mid = images.length%2==0?
                     Math.floor(images.length/2):
                     Math.floor(images.length/2)+1
        // console.log(mid)
        const start_id = 0 
        const end_id  = start_id+mid+1
        end.push(end_id)
        // console.log(`second box start id ${start_id}`)
        console.log(`first box end id ${end_id}`)
    }
    if(windowSize>1100){
        const image_end = Math.floor(props.datalen/3)+1
        const end_id = image_end
        end.push(end_id)
        // console.log(`second box start id ${start_id+1}`)
        console.log(`first box end id ${end_id}`)
        console.log(`first total pics ${end_id-1}`)
    }

    // ****
    // const a =images.length/3
    // const image_start = 0
    // const image_end = Math.floor(props.datalen/3)+1
    // ****



return(
    <>
    <div className="box2">
    {images.map(image=>{
        return(
            <>

           {image.id<end[0] && <img key={image.id} src={image.img} alt={``}/>
           }
            
         </>
        )
    })}
    </div>
        
    </>
)

}

export default Gridbox2;