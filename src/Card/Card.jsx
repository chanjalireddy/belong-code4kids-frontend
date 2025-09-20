
import { Component } from 'react'
import '../Card/Card.css'


const data=[{id:1,image:"https://media.istockphoto.com/id/2049570535/photo/sing-along-time.webp?a=1&b=1&s=612x612&w=0&k=20&c=mHZGe-wPvV35QjRsd4DXVFSJSwwCcj7K8xu-PLHMFWQ=",
title:"ClassA",
description:"A good way to learn efficiently"
},

{id:2,
image:"https://media.istockphoto.com/id/2049570535/photo/sing-along-time.webp?a=1&b=1&s=612x612&w=0&k=20&c=mHZGe-wPvV35QjRsd4DXVFSJSwwCcj7K8xu-PLHMFWQ=",
title:"ClassA",
description:"A good way to learn efficiently"

},
{
id:3,
image:"https://media.istockphoto.com/id/2049570535/photo/sing-along-time.webp?a=1&b=1&s=612x612&w=0&k=20&c=mHZGe-wPvV35QjRsd4DXVFSJSwwCcj7K8xu-PLHMFWQ=",
title:"ClassA",
description:"A good way to learn efficiently"
},
{
id:4,
image:"https://media.istockphoto.com/id/2049570535/photo/sing-along-time.webp?a=1&b=1&s=612x612&w=0&k=20&c=mHZGe-wPvV35QjRsd4DXVFSJSwwCcj7K8xu-PLHMFWQ="
,title:"ClassA",
description:"A good way to learn efficiently"
},
{
id:4,
image:"https://media.istockphoto.com/id/2049570535/photo/sing-along-time.webp?a=1&b=1&s=612x612&w=0&k=20&c=mHZGe-wPvV35QjRsd4DXVFSJSwwCcj7K8xu-PLHMFWQ="
,title:"ClassA",
description:"A good way to learn efficiently"
}
,{
id:4,
image:"https://media.istockphoto.com/id/2049570535/photo/sing-along-time.webp?a=1&b=1&s=612x612&w=0&k=20&c=mHZGe-wPvV35QjRsd4DXVFSJSwwCcj7K8xu-PLHMFWQ="
,title:"ClassA",
description:"A good way to learn efficiently"
}]



const Card=()=>{
    return(
        <>


        


        <div className='Card-container'>
            {data.map((data)=>
            <div className='Cards' key={data.id}>
                <div>
                    <img src={data.image} alt='children playing'/>
                </div>
                <br/>
                <h4>{data.title}</h4>
                <p>{data.description}</p>
                <button>
                Explore&rarr;
                </button>
            </div>
)}
        </div>



        
        
        
        </>



    )
  
}

export default Card;