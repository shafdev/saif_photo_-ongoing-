import React, { useEffect, useState } from "react";
import Gridbox2 from "./Gridbox2";
import Gridbox3 from "./Gridbox3";
import Gridbox4 from "./Gridbox4";
import ImageBox from "./ImageBox";
import images from "./imageData";
function PictureBox(){
    const [windowsize,setWindowsize] = useState(window.innerWidth)

const browserResize =()=>{
    setWindowsize(window.innerWidth)
}
    useEffect(()=>{
    window.addEventListener('resize',browserResize)
    return()=> window.removeEventListener('resize',browserResize)
})
console.log(images.length)


return(<>
<div className="picture-box">

    
    <Gridbox2 datalen={images.length} windowsize={windowsize}/>
    <Gridbox3 datalen={images.length} windowsize={windowsize}/>
    {/* <Gridbox4 datalen={images.length}/> */}
    {windowsize>1100 && <Gridbox4 datalen={images.length}/>}

    {/* {windowsize<576 && windowsize >1186 && <Gridbox4 datalen={images.length}/>} */}
</div>
{/* <ImageBox/> */}

</>)

}

export default PictureBox;