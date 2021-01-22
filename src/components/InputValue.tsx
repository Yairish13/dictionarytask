import React from "react";
import { Header, Input, Title } from "../emotion/app";
import { StoreContext } from "../StoreContext";
import { useObserver } from "mobx-react";

const InputValue = () => {
  const store = React.useContext(StoreContext);

  const isAlpha = (inputValue: string) => /^[A-Z]$/i.test(inputValue);
  
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {      
   let input = e.target.value;
    if (input.length < 2) {
       store.setSelectedLetter((e.target.value).toLowerCase());
    }
    if (input === "") {
      return null;
    }
    if (!isAlpha(input)) {
      alert("type only letters");
      store.setSelectedLetter("");
      return null;
    }
  };

  return useObserver(()=>
    <Header>
      <Title>Dictionary Groove</Title>
      <Input
        type="text"
        value={store.selectedLetter}
        placeholder-color="black"
        onChange={handleChange}
      ></Input>
    </Header>
  )
};
export default InputValue;
