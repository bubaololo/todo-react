import React, { useState } from 'react';
import Input from "../components/Input";
import Button from "../components/Button";

function Form() {
  const [name, setName] = React.useState('');


  function handleSubmit(event) {
 event.preventDefault();
 console.log('name:', name);
  }

  return (
    <form onSubmit={handleSubmit} className="text__input">

<input className="text__input" type="text"  value={name}
 onChange={(e) => setName(e.target.value)} />
<button type="submit" className="submit__button">добавить задачу</button>


      {/* <Input />
      <Button /> */}
    </form>
  );
}
export default Form;

