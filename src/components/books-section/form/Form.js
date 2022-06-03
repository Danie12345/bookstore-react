import React from 'react';

const Form = () => (
  <div>
    <form className="formBookAdd">
      <h3>ADD NEW BOOK</h3>
      <label className="inputTitle" htmlFor="text">
        <input id="title" name="title" type="text" placeholder="Title" />
      </label>
      <select className="categorySelect" defaultValue="">
        <option value="" disabled hidden>Category</option>
        <option value="adventure">adventure</option>
        <option value="maths">maths</option>
        <option value="violence">violence</option>
        <option value="time travel">time travel</option>
      </select>
      <button className="addBookBtn" type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default Form;
