import { useState, useEffect } from "react";
import uuid from "react-uuid";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notifyInfoBeforeSubmit } from "../assets/notifications/Notifications";
import {
  InputDataContainer,
  Information,
  Label,
  Form,
  Submit,
  InputField,
  ActionButtons,
  MainContainer,
  Header,
  NavItem,
} from "../styled_components/InputData";

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
      <div key={item.id}>
        <Label>Saisie une nouvelle dépense</Label>
        <InputField
          id={item.id}
          type="number"
          name="cashOut"
          value={item.text}
          onChange={(e) => handleChangeNewItem(e)}
        ></InputField>
        <button
          id="removeItem"
          onClick={() => {
            removeItem(index);
          }}
        >
          -
        </button>
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
    setTotalCash(cashInflow - cashOutflow - suppCashOutflow);
  };

  useEffect(() => {
    if (cashInflow === "" || cashOutflow === "") {
      setSumDisplay(false);
    }
  }, [cashInflow, cashOutflow]);

  useEffect(() => {
    differenceCash();
  });

  return (
    <MainContainer>
      <Header>
        <NavItem Link to="/DashBoard">
          DashBoard
        </NavItem>
        <NavItem Link to="/Data">
          Mes données
        </NavItem>
      </Header>
      <InputDataContainer>
        <Information>
          <Form
            onSubmit={(e) => {
              handleSubmit(e);
              differenceCash();
            }}
          >
            <Label>Saisie ton salaire</Label>
            <InputField
              id="cashInflow"
              type="number"
              name="salary"
              value={cashInflow}
              onChange={(e) => handleChangeCashInflow(e)}
            ></InputField>
            <Label>Saisie tes dépenses</Label>
            <InputField
              id="cashOutflow"
              type="number"
              name="cashOut"
              value={cashOutflow}
              onChange={(e) => handleChangeCashOutflow(e)}
            ></InputField>
            {createList()}
            <button
              id="addItem"
              onClick={() => {
                addListItem();
                setSumDisplay(false);
              }}
            >
              +
            </button>
            <ActionButtons>
              <Submit
                type="submit"
                value="Valider"
                onClick={() =>
                  setButtonClicked({ type: "info", isClicked: true })
                }
              ></Submit>
              <Submit
                type="reset"
                value="Reset"
                onClick={() => {
                  setItems([]);
                  setCashInflow("");
                  setCashOutflow("");
                  setTotalCash("");
                  setSumDisplay(false);
                }}
              ></Submit>
            </ActionButtons>
          </Form>
          {isSumDisplay && (
            <p>Le capital restant est de : {totalCash} €/mois </p>
          )}
        </Information>
        <ToastContainer />
      </InputDataContainer>
    </MainContainer>
  );
}
