import React, { useState } from 'react';
import './styles/Form.css';

function Form() {
  const [mail, setMail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');



  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Gmail: ${mail}, Name: ${name}, Phone: ${phone}, Message: ${message}`);
    alert("傳送成功！");
    setMail('');
    setName('');
    setPhone('');
    setMessage('');
  }

  return (
    <div className="formFrame">
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="mail" className="formLabel">
            Gmail:
            <input type="text" id="mail" value={mail} onChange={(e) => setMail(e.target.value)} />
          </label>

          <label htmlFor="name" className="formLabel">
            Name:
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </label>

          <label htmlFor="phone" className="formLabel">
            Phone:
            <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>

          <label htmlFor="message" className="formLabel">
            Message:
            <textarea id="message" name="message" rows="4" cols="40" value={message} onChange={(e) => setMessage(e.target.value)} />
          </label>
          <form onSubmit={handleSubmit}>
          
            <input type="submit" value="submit" id="formButton" />
          </form>
        </div>


      </form>
    </div>
  );
}

export default Form;
