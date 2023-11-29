import React from 'react';
import { useState } from 'react';
function TodoList()
{
    const[activity,setactivity]=useState("");
    const[listdata,setlistdata]=useState([]);
    function drop(index){
      const updatedlist=listdata.filter(
        (data,index1)=>{
        return index!==index1;
        }
      )
      setlistdata(updatedlist);
    };
    const addActivity=()=>{
        
        const update=()=>{
            const deep=[...listdata,activity];
           setactivity('');
          
           return deep;
        }
        setlistdata(update);
        
        console.log(listdata)
       
    
    }
    return( <>
    <div className='container'>
      <div className='header'><p className='head'>ToDo List</p>
      <input type="text" placeholder='Add Items' className='box' value={activity} onChange={(e)=>setactivity(e.target.value)}/>
       <span><button className='but' onClick={addActivity}>Add</button></span>
       {listdata.map((data,index)=><>
       <div key={index} >
        <input type="text" value={data} className='box1'/>
        <span><button className='but2' onClick={()=>drop(index)}>Remove</button></span>
        </div>
       
        </>
        )}
      </div>
    </div>
        </>);
   
}
export default TodoList;