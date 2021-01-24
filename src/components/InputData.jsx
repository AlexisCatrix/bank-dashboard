import { useState } from "react";
import uuid from "react-uuid";
import {
  InputDataContainer,
  Information,
  Label,
  Form,
  Submit,
  InputField,
} from "../styled_components/InputData";

export default function InputData() {
  ////////////////////////////////////////////////////////////////////
  //////Clone Element/////////////////////////////////////////////////

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
    const { id, value } = e.target;
    const newObj = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          text: parseInt(value),
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
  //////Clone Element/////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////

  const [cashInflow, setCashInflow] = useState("");
  const [cashOutflow, setCashOutflow] = useState("");
  const [totalCash, setTotalCash] = useState("");

  const [isSumDisplay, setSumDisplay] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      setSumDisplay(false);
    } else {
      setSumDisplay(true);
    }
  };

  const handleChangeCashInflow = (e) => {
    if (e.target.value === Number) {
      setCashInflow(parseInt(e.target.value));
    } else {
      setCashInflow(e.target.value);
    }
  };

  const handleChangeCashOutflow = (e) => {
    if (e.target.value === Number) {
      setCashOutflow(parseInt(e.target.value));
    } else {
      setCashOutflow(e.target.value);
    }
  };

  const differenceCash = () => {
    setTotalCash(cashInflow - cashOutflow);
  };

  return (
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
            }}
          >
            +
          </button>

          <Submit type="submit" value="Valider"></Submit>
        </Form>
        {isSumDisplay && <p>Le capital restant est de : {totalCash} €/mois </p>}
      </Information>
    </InputDataContainer>
  );
}
