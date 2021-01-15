import React from "react";
import { StoreContext } from "../StoreContext";
import { WordsDiv } from "../emotion/words";
import { useObserver } from "mobx-react";

const MostCommon = () => {
  const store = React.useContext(StoreContext);
  return useObserver(() => (
    <WordsDiv>
      <span>
        {store.mostCommon}
      </span>
      <span>The most common letter in the dictionary  </span>
    </WordsDiv>
  ));
};

export default MostCommon;
