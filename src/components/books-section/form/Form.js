import React from 'react';

import './Form.css';

const Form = () => (
  <div>
    <form className="formBookAdd">
      <h3>ADD NEW BOOK</h3>
      <div className="inputs">
        <input className="titleInput" id="title" name="title" type="text" placeholder="Book title" />
        <select className="categorySelect" defaultValue="">
          <option value="" disabled hidden>Category</option>
          <option value="adventure">adventure</option>
          <option value="maths">maths</option>
          <option value="violence">violence</option>
          <option value="time travel">time travel</option>
        </select>
        <button className="addBookBtn" type="submit">ADD BOOK</button>
      </div>
    </form>
  </div>
);

export default Form;
