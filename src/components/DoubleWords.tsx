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
              store.wordsThatDouble || 0
            }{" "}
          </span>
          <span>
            Words have letter repetition  
            {store.selectedLetter
              ? " with the letter " +
                store.selectedLetter
              : ""}{" "}
          </span>
        </WordsDiv>
      ));
    };

export default DoubleWords
