import React, { useEffect, useState } from "react";
import StartWords from "./components/StartWords";
import { StoreContext } from "./StoreContext";
import EndWords from "./components/EndWords";
import DoubleWords from "./components/DoubleWords";
import { configure } from "mobx";
import{observer} from 'mobx-react'
import {
  Input,
  Title,
  AppContainer,
  Header,
  GlobalInfo,
  InfoContainer,
  ChartContainer,
  BigContainer,
} from "./emotion/app";
import SumShows from "./components/SumShows";
import PieChart from "./components/PieChart";
import LongestWord from "./components/LongestWord";
import MostCommon from "./components/MostCommon";
import GraphChart from "./components/GraphChart";
import InputValue from "./components/InputValue";
configure({
  useProxies: "always",
});

function App() {
  const store = React.useContext(StoreContext);

   useEffect(() => {
    store.start();
    store.getLongestWord()
    store.getMostCommonLetter()
    store.getTopCommon();
  },[]); 
  return (
    <div>
      <AppContainer>
        <InputValue />
        {store.selectedLetter ? (
          <>
              {" "}
              <GlobalInfo>
                <MostCommon />
                <LongestWord />
              </GlobalInfo>
              <BigContainer>
                <InfoContainer>
                  <StartWords />
                  <EndWords />
                  <DoubleWords />
                  <SumShows />
                </InfoContainer>
                <ChartContainer>
                  <PieChart />
                  <GraphChart />
                </ChartContainer>
              </BigContainer>
          </>
        ) : (
          <h2>Please enter letter</h2>
        )}
      </AppContainer>
    </div>
  );
}

export default observer(App);
