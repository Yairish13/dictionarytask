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
          store.startWordsCount || 0
        }
      </span>
      <span>
        Words start 
        {store.startWords?.letter
          ? " with the letter " +
            store.startWords?.letter
          : ""}
      </span>
    </WordsDiv>
  ));
};

export default StartWords;
