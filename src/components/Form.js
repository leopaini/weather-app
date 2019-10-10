import React, { useState } from "react";

const Form = props => {
  const [search, saveSearch] = useState({
    city: "",
    country: ""
  });

  const handleChange = event => {
    saveSearch({
      ...search,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.doSearch(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-field col s12">
        <input type="text" name="city" id="city" onChange={handleChange} />
        <label htmlFor="city">City:</label>
      </div>

      <div className="input-field col s12">
        <select name="country" onChange={handleChange}>
          <option value="">- Select Country -</option>
          <option value="AR">Argentina</option>
          <option value="BR">Brazil</option>
          <option value="CO">Colombia</option>
          <option value="MX">Mexico</option>
          <option value="PE">Peru</option>
          <option value="ES">Spain</option>
          <option value="US">United State</option>
        </select>
      </div>

      <div className="input-field col s12">
        <input
          type="submit"
          className="btn-large custom-button"
          value="Search"
        />
      </div>
    </form>
  );
};

export default Form;
