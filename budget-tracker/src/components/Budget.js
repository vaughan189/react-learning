import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);

  const handleBudgetUpdate = (e) => {
    dispatch({
      type: "UPDATE_BUDGET",
      payload: e.target.value,
    });
  };

  return (
    <div className="alert alert-secondary">
      <div className="input-group mb-3" style={{ height: "20px" }}>
        <span className="input-group-text">Budget ₹</span>
        <input
          type="text"
          className="form-control"
          aria-label="Amount (to the nearest rupee)"
          value={budget}
          onChange={(e) => handleBudgetUpdate(e)}
        />
        <span className="input-group-text">.00</span>
      </div>
    </div>
  );
};

export default Budget;
