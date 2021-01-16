import React from 'react'
import {StoreContext} from '../StoreContext'
import { useObserver } from "mobx-react";
import {WordsDiv} from "../emotion/words"

function DoubleWords() {
    const store = React.useContext(StoreContext);
    return useObserver(() => (
        <WordsDiv>
          <span>
            {
              store.doubleWordsCount || 0
            }{" "}
          </span>
          <span>
            Words have letter repetition  
            {store.doubleWords?.letter
              ? " with the letter " +
                store.doubleWords?.letter
              : ""}{" "}
          </span>
        </WordsDiv>
      ));
    };

export default DoubleWords
