import React, {useState} from "react";




export default function Home() {
  const [val, setVal] = useState('Que te gustaria ver')

  const Enviar = () => {
   alert(val)
  }
  const change = event => {
   setVal(event.target.value)

  }




  return (
    <>
      <div className="header">
        <h1>PARA CUANDO?</h1>

        <input value= {val} className="text-black text-md" onChange={change} /><br/>
        <button onClick={Enviar}  >Enviar</button>



        </div>
    </>
  );
}
