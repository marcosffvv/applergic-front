import React from 'react'
import {AiFillStar, AiOutlineStar} from "react-icons/ai"



const StarsComponent = (props) => {
  return (
    <div>
      {
        [...new Array(5)].map((star,index)=>{
            return index < props.score ? <AiFillStar/> : <AiOutlineStar/>
        })
      }
    </div>
  )
}

export default StarsComponent





// import React, { useState } from "react";
// //import { Rating, RatingChangeEvent } from "primereact/rating";
// import { Rating } from "primereact/rating";

// export default function StarsComponent() {
//     let number = null;
//     const [value, setValue] = useState(number)(null);
   

//     return (
//         <div className="card flex justify-content-center">
//             <Rating value={value} onChange={(e) => setValue(e.value)} cancel={false} />
//             {/* <Rating value={value} onChange={(e : RatingChangeEvent) => setValue(e.value)} cancel={false} /> */}
//         </div>
        
//     );
// }