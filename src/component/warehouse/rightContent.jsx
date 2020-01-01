import React from "react";

const RightContent = () => {
  return (
    <div className="container-rightcontent">
      <div className="header-right-content">
        <div className="daily-icon"></div>
        <div className="title-right-content">Daily</div>
      </div>
      <div className="rightcontent-1 right-content-width-size">
        <div className="daily-table">
          <div className="daily-table-head">
            <div className="daily-table-head-row">
              <div className="daily-table-head-cell">Amount</div>
              <div className="daily-table-head-cell">Kg</div>
              <div className="daily-table-head-cell daily-table-width">
                Delete
              </div>
            </div>
          </div>
          <div className="daily-table-body">
            {[1, 2, 3, 4, 5, 6].map(number => {
              return (
                <div key={number} className="daily-table-body-row">
                  <div className="daily-table-body-cell">200</div>
                  <div className="daily-table-body-cell">15</div>
                  <div className="daily-table-body-cell daily-table-width">
                    <form>
                      <input type="checkbox" name="checklist" />
                    </form>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="rightcontent-2 right-content-width-size">TagEndTable</div>
    </div>
  );
};

export default RightContent;
