import React from "react";
import { StoreContext } from "../StoreContext";
import { WordsDiv } from "../emotion/words";
import { useObserver } from "mobx-react";

const StartWords = () => {
  const store = React.useContext(StoreContext);
  return useObserver(() => (
    <WordsDiv>
      <span>
        {store.longestWord}
      </span>
      <span>The longest word in the dictionary  </span>
    </WordsDiv>
  ));
};

export default StartWords;
