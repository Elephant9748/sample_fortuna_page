import React from "react";

const tagDaily = ({ tagForm }) => {
  return (
    <form
      className="container-tag-daily"
      onSubmit={tagForm.handleSubmit}
      onReset={tagForm.handleReset}
    >
      <div className="tag-daily">
        <label htmlFor="tagend">Tag End :</label>
        <div className="input-tag">
          <input name="taq" id="taq" values={tagForm.values.tag} type="text" />
        </div>
      </div>
      <div className="daily-button-container">
        <div></div>
        <div className="form-daily-button">
          <button type="submit">Save</button>
          <button type="reset">Clear</button>
        </div>
      </div>
    </form>
  );
};

export default tagDaily;
