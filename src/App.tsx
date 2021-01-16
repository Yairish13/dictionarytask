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
import { ITopCommon, ITotal, IWords, IWordsValue } from "./types";
// import {IMobxStore} from "./types";

configure({
  useProxies: "always",
});

function App() {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const store = React.useContext(StoreContext);
  let counter = (str: string) => {
    return str.split("").reduce((total: ITotal, letter: string) => {
      total[letter] ? total[letter]++ : (total[letter] = 1);
      return total;
    }, {});
  };

  let input = "";
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    input = e.target.value;
    if (input.length < 2) {
      setInputValue(input);
    }
    if (input === "") {
      setLoading(false);
      return;
    }
    if (!isAlpha(input)) {
      setInputValue("");
      alert("type only letters");
      return;
    } else {
      (async () => {
        try {
          setLoading(true);
          const allInfo = await getAllData();
          const allDataStr = await allInfo.data.join(" ");
          const words: string[] = await allDataStr.split(" ");
          for (var i = 0; i < words.length - 1; i++) {
            words[i] += "";
          }
          // const allWords = [new Set(words)];
          const allWords: string[] = Array.from(new Set(words));
          input = input.toLowerCase();
          const sumShowsInfo: string[] = allWords
            .join("")
            .split("")
            .filter((i: string) => i.toLowerCase() === input);
          const sumShows: number = sumShowsInfo.length;

          //object with key and value of whole the letters in the dictionary
          const commonObj: ITotal = counter(allWords.join(""));

          //find the most common letter in the dictionary
          const mostCommon: string = Object.keys(commonObj).reduce((a, b) =>
            commonObj[a] > commonObj[b] ? a : b
          );

          //made to sort the letters from most common and down
          const topCommonArr: number[] = Object.values(commonObj).sort(
            (a: number, b: number) => b - a
          );
          const data:ITotal = {};
          for (let j = 0; j < 5; j++) {
            const name:string|undefined = Object.keys(commonObj).find(
              (key) => commonObj[key] === topCommonArr[j]
            );
            if (name) data[name] = topCommonArr[j];
          }
          const longestWord:string = allWords.reduce(
            (a, b) => (a.length < b.length ? b : a),
            ""
          );
            const topCommon:ITopCommon = {
              value:topCommonArr.slice(0,5)
            }

            
          

          store.saveGraph(topCommon.value);

          const topCommons:number[] = store.topCommon.value
          const topCommoKeys= Object.keys(data).sort((a:any,b:any)=>  topCommons[b]-topCommons[a])
  
          
          const startWords:IWordsValue = await getFirstData(input);
          const endWords:IWordsValue = await getLastData(input);
          const doubleWords:IWordsValue = await getDoubleData(input);
          input = input.toUpperCase();
          store.addLongestWord(longestWord);
          store.addMostCommon(mostCommon);
          store.addWords("end", endWords, input);
          store.addWords("start", startWords, input);
          store.addWords("double", doubleWords, input);
          store.addSumShows(sumShows,input);
          store.savePie();
          store.saveTopCommonKeys(topCommoKeys);
          store.saveTopCommon(topCommon)
          console.log(store)
        } catch {
        } finally {
          setLoading(false);
        }
      })();
    }
  };
  const isAlpha = (inputValue: string) => /^[A-Z]$/i.test(inputValue);

  return (
    <div>
      <AppContainer>
        <Header>
          <Title>Dictionary Groove</Title>
          <Input
            type="text"
            onChange={handleChange}
            value={inputValue}
            placeholder="Letter Input"
            placeholder-color="black"
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
