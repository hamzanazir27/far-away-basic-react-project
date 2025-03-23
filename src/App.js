import { useState } from "react";

import './index.css'
export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackgeList />
      <Stats />
    </div>
  );
}
/////////////////////////////////////--Logo--////////////////////////////////////////////
function Logo(){
  return (
   <h1>
    🏝️ Far Away 🧳
   </h1>
  );
}// logo


//////////////////////////////////////--Form--///////////////////////////////////////////

function Form ()
{ 
  const [value,setValue]=useState(1);
  const [discription,setDiscription]=useState("");
  function handleSubmit(e)
  {
    e.preventDefault()
    if(!discription)
      return

    console.log(value);
    console.log(discription);
    setValue(1);
    setDiscription("");
    
    
  }
  return(
    <form className="add-form" onSubmit={handleSubmit}>
    <h3>What do you need for your 😍 trip?
    </h3>
    
    
    
    <select value={value} onChange={(e) => setValue(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>

    <input type="text" placeholder="item..." value={discription} onChange={(e)=>setDiscription(e.target.value)}   />
    <button>Add</button>
    </form>
  
  )
}

 
////////////////////////////////--PackgeList--/////////////////////////////////////////
function PackgeList()
{
  return(
<div className="list">
  <ul>

    <li>
      <input type="checkbox" />
      <span>itemm</span>
      <button>❌</button>
    </li>
  </ul>

<div className="actions">
<select >
  <option>Sort by input order</option>
  <option>Sort by description</option>
  <option>Sort by packed status</option>
</select>
<button>clear list</button>
</div>
</div>
  );
}




/////////////////////////////////////--Stats--///////////////////////////////

function Stats()
{
return(
  <footer className="stats">
  <em> 💼 You have 15 items on your list, and you already packed 11 (73%)</em>
  </footer>
)
}
