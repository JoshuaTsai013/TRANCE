import React, { useState } from 'react';
import './styles/Form.css'
function Form() {
  const [mail, setMail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Gmail: ${mail},Name: ${name}, Phone: ${phone}`);
  }

  return (
    <div className="formFrame">
      <form onSubmit={handleSubmit}>
        <label className="formLong">
          Gmail:
          <input type="text" value={mail}  size="35" onChange={e => setMail(e.target.value)} />
        </label>


        <label className="formShort">
          Name:
          <input type="text" value={name} size="16" onChange={e => setName(e.target.value)} />
        </label>

        <label className="formShort">
          Phone:
          <input type="tel" value={phone} size="17" onChange={e => setPhone(e.target.value)} />
        </label>

        <label for="formMessage"></label>
          Message:
          <textarea id="formMessage" name="w3review" rows="4" cols="40">
            write us something
          </textarea>        
          

        {/* <input type="submit" value="Submit" className="" /> */}
      </form>
    </div>
  );
}

export default Form;