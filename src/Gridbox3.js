import React from "react";
import images from "./imageData";

// SECOND GRID
function Gridbox3(props){
    const windowSize = props.windowsize
    // console.log(windowSize)
    // console.log(props.datalen)
    const end = []
    const start=[]
    if(windowSize<1100){
        const mid = images.length%2==0?
                     Math.floor(images.length/2):
                     Math.floor(images.length/2)+1

        const start_id = mid
        const end_id  = images.length + 1
        end.push(end_id)
        start.push(start_id)

        console.log(`second box start id ${start_id+1}`)
        console.log(`second box end id ${end_id}`)
    }
    if(windowSize>1100){
        const start_id = Math.floor(props.datalen/3)
        start.push(start_id)
        const end_id = start_id*2 + 1
        end.push(end_id)

        console.log(`second box start id ${start_id+1}`)
        console.log(`second box end id ${end_id}`)
        console.log(`second total pics ${end_id-start_id+1}`)
    }

    const start_id = Math.floor(props.datalen/3)
    const end_id = start_id*2 +1

return(
    <>
    <div className="box2">
    {images.map(image=>{
        return(
           
            <>


          {image.id>start[0] && image.id<end[0] &&   <img key={image.id} src={image.img} alt={``}/>
            
          }
            
         </>
        )
    })}
    </div>
        
    </>
)

}

export default Gridbox3;