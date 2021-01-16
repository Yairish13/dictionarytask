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
              store.endWordsCount || 0
            }{" "}
          </span>
          <span>
            Words end 
            {store.endWords?.letter
              ? " with the letter " +
                store.endWords?.letter
              : ""}{" "}
          </span>
        </WordsDiv>
      ));
    };

export default EndWords
