import React from 'react'
import {StoreContext} from '../StoreContext'
import { useObserver } from "mobx-react";
import {WordsDiv} from '../emotion/words'

function SumShows() {
    const store = React.useContext(StoreContext);
    return useObserver(() => (
        <WordsDiv>
          <span>
            {
              store.wordsThatTotal || 0
            }
          </span>
          <span>
            Appearences in the dictionary
            {store.selectedLetter
              ? " of the letter " +
                store.selectedLetter
              : ""}
          </span>
        </WordsDiv>
      ));
    };

export default SumShows
