import React from 'react'
import {StoreContext} from '../StoreContext'
import { useObserver } from "mobx-react";
import {WordsDiv} from '../emotion/words'

function SumShows() {
    const store = React.useContext(StoreContext);
    return useObserver(() => (
      store.sumShows &&
        <WordsDiv>
          <span>
            {
              store.sumShowsCount || 0
            }
          </span>
          <span>
            Appearences in the dictionary
            {store.sumShows?.letter
              ? " of the letter " +
                store.sumShows?.letter
              : ""}
          </span>
        </WordsDiv>
      ));
    };

export default SumShows
