import React from 'react'
import {StoreContext} from '../StoreContext'
import { useObserver } from "mobx-react";
import {WordsDiv} from '../emotion/words'

function EndWords() {
  const store = React.useContext(StoreContext);
    return useObserver(() => (
    <WordsDiv>
      <span>
        {
          store?.wordsThatEnd || 0
        }
      </span>
      <span>
        Words end 
        {store?.selectedLetter
          ? " with the letter " +
            store?.selectedLetter
          : ""}
      </span>
    </WordsDiv>
  ));
};
export default EndWords
