import { useState, useEffect } from "react";
import uuid from "react-uuid";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notifyInfoBeforeSubmit } from "../assets/js/notifications/Notifications";

export default function InputData() {
  /*-------------------------------------Clone Element----------*/

  const [items, setItems] = useState([{ id: uuid(), text: "" }]);

  const addListItem = () => {
    const newItem = { id: uuid(), text: "" };
    setItems([...items, newItem]);
  };

  const removeItem = (index) => {
    const newListItem = Object.assign([], items);
    newListItem.splice(index, 1);
    setItems(newListItem);
  };

  const handleChangeNewItem = (e) => {
    const { id, valueAsNumber } = e.target;
    const newObj = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          text: valueAsNumber,
        };
      } else {
        return item;
      }
    });
    setItems(newObj);
  };

  const createList = () => {
    return items.map((item, index) => (
      <div className="input_container" key={item.id}>
        <label className="input_container_label" htmlFor={item.id}>
          Saisissez une nouvelle dépense
        </label>
        <input
          className="input_field"
          id={item.id}
          type="number"
          name="cashOut"
          step="0.01"
          value={item.text}
          onChange={(e) => handleChangeNewItem(e)}
        ></input>
        <i
          className="far fa-minus-square"
          id="removeItem"
          onClick={() => {
            removeItem(index);
          }}
        ></i>
      </div>
    ));
  };
  /*-------------------------------------Clone Element----------*/

  const [cashInflow, setCashInflow] = useState("");
  const [cashOutflow, setCashOutflow] = useState("");
  const [suppCashOutflow, setSuppCashOutflow] = useState("");
  const [totalCash, setTotalCash] = useState("");

  const [isSumDisplay, setSumDisplay] = useState(false);
  const [isButtonClicked, setButtonClicked] = useState([{}]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (cashInflow === "" || cashOutflow === "") &&
      isButtonClicked.type === "info"
    ) {
      setSumDisplay(false);
      notifyInfoBeforeSubmit();
    } else {
      setSumDisplay(true);
    }
  };

  const handleChangeCashInflow = (e) => {
    setCashInflow(e.target.valueAsNumber);
  };

  const handleChangeCashOutflow = (e) => {
    setCashOutflow(e.target.valueAsNumber);
  };

  const differenceCash = () => {
    let sumCashOutflow = 0;
    for (let i = 0; i < items.length; i++) {
      sumCashOutflow += items[i].text;
    }
    setSuppCashOutflow(sumCashOutflow);
    setTotalCash(
      Math.floor((cashInflow - cashOutflow - suppCashOutflow) * 100) / 100
    );
  };

  useEffect(() => {
    if (
      cashInflow !== Number ||
      cashOutflow !== Number ||
      totalCash !== Number
    ) {
      setSumDisplay(false);
    }
  }, [cashInflow, cashOutflow, totalCash]);

  useEffect(() => {
    differenceCash();
  });

  return (
    <div className="main_container">
      <div className="information">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
            differenceCash();
          }}
        >
          <div className="input_container">
            <label className="input_data_container_label" htmlFor="cashInflow">
              Saisissez votre salaire
            </label>
            <input
              className="input_field"
              id="cashInflow"
              type="number"
              name="salary"
              step="0.01"
              value={cashInflow}
              onChange={(e) => handleChangeCashInflow(e)}
            ></input>
          </div>
          <div className="input_container">
            <label className="input_data_container_label" htmlFor="cashOutflow">
              Saisissez vos dépenses
            </label>
            <input
              className="input_field"
              id="cashOutflow"
              type="number"
              name="cashOut"
              step="0.01"
              value={cashOutflow}
              onChange={(e) => handleChangeCashOutflow(e)}
            ></input>
          </div>
          {createList()}
          <button
            id="addItem"
            type="button"
            onClick={() => {
              addListItem();
              // setSumDisplay(false);
            }}
          >
            Ajouter une dépense
            <i className="fas fa-plus"></i>{" "}
          </button>
          <div className="action_buttons">
            <input
              className="submit"
              type="submit"
              value="Valider"
              onClick={() =>
                setButtonClicked({ type: "info", isClicked: true })
              }
            ></input>
            <input
              className="submit"
              type="reset"
              value="Reset"
              onClick={() => {
                setItems([]);
                setCashInflow("");
                setCashOutflow("");
                setTotalCash("");
                setSumDisplay(false);
              }}
            ></input>
          </div>
        </form>
        {isSumDisplay && (
          <p className="remain">
            Le capital restant est de : {totalCash} €/mois{" "}
          </p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}
