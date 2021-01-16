import { observable, action, makeObservable, computed } from "mobx";
import { configure } from "mobx";
import {
  IMobxStore,
   wordType,
   IWordsValue
} from './types'

configure({
  useProxies: "always",
});

const initialObj ={value:{data:[''],total:0},letter:''}

 class Store
 implements IMobxStore
  {
  constructor() {
    makeObservable(this);
  }
  input='';
  @observable topCommonKeys= {key:'',value:[0]}
  @observable topCommon = {key:'',value:[0]}
  @observable mostCommon= '';
  @observable longestWord = '';
  @observable pieChart= {value:[0]};
  @observable graphChart ={value:[0]}
  @observable startWords = {...initialObj};
  @observable endWords = {...initialObj};
  @observable doubleWords = {...initialObj};
  @observable sumShows={value:0,letter:''};
  @computed get startWordsCount() {
    return this.startWords?.value?.total;
  }
  @computed get endWordsCount() {
    return this.endWords?.value?.total;
  }
  @computed get doubleWordsCount() {
    return this.doubleWords?.value?.total;
  }
  @computed get sumShowsCount() {
    return this.sumShows?.value;
  }
  @computed get pieChartData() {
    return this.pieChart;
  }
  @computed get graphChartData() {
    return this.graphChart;
  }
  @computed get topCommonData() {
    return this?.topCommon;
  }
  @action saveTopCommon(arr:number[]){
    this.topCommon.value = arr
  }
  @action saveTopCommonKeys(arr:number[]){
    this.topCommonKeys.value = arr
  }
  @action addLongestWord(longestWord:string){
    this.longestWord = longestWord
  }
  @action addMostCommon(mostCommon:string){
    this.mostCommon = mostCommon
  }
  @action addWords(type: wordType, word:IWordsValue, letter: string) {
    switch (type) {
      case "start":
        this.startWords.value = word;
        this.startWords.letter = letter;
        break;
      case "end":
        this.endWords.value = word;
        this.endWords.letter = letter;
        break;
      case "double":
        this.doubleWords.value = word;
        this.doubleWords.letter = letter;
        break;
    }
  }
  @action addSumShows(count:number,input:string){
    this.sumShows.value = count;
    this.sumShows.letter = input;
  }
    @action saveGraph(topCommon:number[]){
      this.graphChart.value = topCommon
    }

    @action savePie(){
     this.pieChart.value[0] = this.startWords.value.total
     this.pieChart.value[1] = this.endWords.value.total
     this.pieChart.value[2] = this.endWords.value.total
    }
}

export const storeInstance = new Store();
