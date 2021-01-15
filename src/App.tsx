import React, { useState } from "react";
import { getDoubleData, getFirstData, getLastData, getAllData } from "./api";
import StartWords from "./components/StartWords";
import { StoreContext } from "./StoreContext";
import EndWords from "./components/EndWords";
import DoubleWords from "./components/DoubleWords";
import { configure } from "mobx";
import { Loading } from "react-loading-wrapper";
import "react-loading-wrapper/dist/index.css";
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
// import {IMobxStore} from "./types";

configure({
  useProxies: "always",
});

function App() {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const store = React.useContext(StoreContext);
  console.log(store);
  let counter = (str: any) => {
    return str.split("").reduce((total: any, letter: any) => {
      total[letter] ? total[letter]++ : (total[letter] = 1);
      return total;
    }, {});
  };

  let input = "";
  const handleChange = (e: any) => {
    if ((input = "")) {
      setLoading(false);
    }
    input = e.target.value;
    if (!isAlpha(input) && input != "") {
      alert("type only letters");
    } else {
      (async () => {
        try {
          setInputValue(input);
          setLoading(true);
          const allInfo = await getAllData();
          const allDataStr = await allInfo.data.join(" ");
          var words = await allDataStr.split(" ");
          for (var i = 0; i < words.length - 1; i++) {
            words[i] += "";
          }
          //@ts-ignore
          const allWords = [...new Set(words)];
          for (let i = 0; i < allWords.length; i++) {
            let count;
          }
          input = input.toLowerCase();
          const sumShowsInfo = allWords
            .join("")
            .split("")
            .filter((i:string) => i.toLowerCase() == input);
          const sumShows = sumShowsInfo.length;

          //object with key and value of whole the letters in the dictionary
          const commonObj = counter(allWords.join(""));

          //find the most common letter in the dictionary
          const mostCommon = Object.keys(commonObj).reduce((a, b) =>
            commonObj[a] > commonObj[b] ? a : b
          );

          //made to sort the letters from most common and down
          const topCommon = Object.values(commonObj).sort((a:any, b:any) => b - a);
          console.log(topCommon)
          const data = {};
          for (let j = 0; j < 5; j++) {
            const name = Object.keys(commonObj).find(
              (key) => commonObj[key] === topCommon[j]
            );
            //@ts-ignore
            data[name] = topCommon[j];
          }
          console.log();
          const longestWord = await allWords.reduce(
            (a, b) => (a.length < b.length ? b : a),
            ""
          );

          const startWords = await getFirstData(input);
          const endWords = await getLastData(input);
          const doubleWords = await getDoubleData(input);
          input = input.toUpperCase();
          store.addLongestWord(longestWord);
          store.addMostCommon(mostCommon);
          store.addWords("end", endWords, input);
          store.addWords("start", startWords, input);
          store.addWords("double", doubleWords, input);
          store.addWords("sum", sumShows, input);
          store.savePie();
          //@ts-ignore
          store.saveGraph(topCommon.slice(0, 5));
          store.saveTopCommon(data);
        } catch {
        } finally {
          setLoading(false);
        }
      })();
    }
  };
  const isAlpha = (inputValue:string)=> 
     /^[A-Z]$/i.test(inputValue);

  return (
    <div>
      <AppContainer>
        <Header>
          <Title>Dictionary Groove</Title>
            <Input
              type="text"
              onChange={(e) => handleChange(e)}
              value={inputValue}
              placeholder="Please enter a letter"
            ></Input>
        </Header>
        {inputValue ? (
          <>
            <Loading
              loading={loading}
              color="black"
              size={100}
              speed="slow"
              loadingComponent="threeDots"
            >
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
            </Loading>
          </>
        ) : (
          <h2>Please enter letter</h2>
        )}
      </AppContainer>
    </div>
  );
}

export default App;
