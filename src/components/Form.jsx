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


// function ContactForm() {
//   const [name, setName] = React.useState('');
//   const [email, setEmail] = React.useState('');
//   const [message, setMessage] = React.useState('');

//   function handleSubmit(event) {
//  event.preventDefault();
//  console.log('name:', name);

//   }

//   return (
//  <form onSubmit={handleSubmit}>
//  <div>
//  <label htmlFor="name">Name</label>
//  <input
//  id="name"
//  type="text"
//  value={name}
//  onChange={(e) => setName(e.target.value)}
//  />
//  </div>
//  <div>
//  <label htmlFor="email">Email</label>
//  <input
//  id="email"
//  type="email"
//  value={email}
//  onChange={(e) => setEmail(e.target.value)}
//  />
//  </div>
//  <div>
//  <label htmlFor="message">Message</label>
//  <textarea
//  id="message"
//  value={message}
//  onChange={(e) => setMessage(e.target.value)}
//  />
//  </div>
//  <button type="submit">Submit</button>
//  </form>
//   );
// }
