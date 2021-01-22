import React from "react";
import { StoreContext } from "../StoreContext";
import {WordsDiv} from "../emotion/words"
import { useObserver } from "mobx-react";

const StartWords = () => {
  const store = React.useContext(StoreContext);
  return useObserver(() => (
    <WordsDiv>
      <span>
        {
          store?.wordsThatStart || 0
        }
      </span>
      <span>
        Words start 
        {store?.selectedLetter
          ? " with the letter " +
            store?.selectedLetter
          : ""}
      </span>
    </WordsDiv>
  ));
};

export default StartWords;
