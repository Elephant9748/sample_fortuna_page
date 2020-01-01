import React from "react";

const FormAddDaily = ({ dailyform }) => {
  return (
      <form
        className="form-daily-container"
        onReset={dailyform.handleReset}
        onSubmit={dailyform.handleSubmit}
      >
        <div className="form-daily">
          <label htmlFor="amount">Amount :</label>
          <div className="input-daily">
            <input
              type="text"
              name="amount"
              id="amount"
              onChange={dailyform.handleChange}
              value={dailyform.values.amount}
            />
          </div>
        </div>
        <div className="form-daily">
          <label htmlFor="kg">Kg :</label>
          <div className="input-daily">
            <input
              type="text"
              id="kg"
              name="kg"
              onChange={dailyform.handleChange}
              value={dailyform.values.kg}
            />
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

export default FormAddDaily;
