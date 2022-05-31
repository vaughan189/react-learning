import React, { useContext, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";
import { TiZoomIn } from "react-icons/ti";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  const [filteredList, setFilteredList] = useState([...expenses]);

  const handleSearch = (e) => {
    if (e.target.value) {
      setFilteredList([
        ...expenses.filter((el) => el.name.includes(e.target.value)),
      ]);
    } else if (!e.target.value) {
      setFilteredList([...expenses]);
    }
  };

  return (
    <>
      <div className="row mt-3">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            <TiZoomIn size="1.5em" style={{ cursor: "pointer" }} />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search Expenses"
            aria-label="Search Expenses"
            aria-describedby="basic-addon1"
            onChange={(e) => handleSearch(e)}
          />
        </div>
      </div>
      <ul className="list-group">
        {filteredList.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpenseList;
