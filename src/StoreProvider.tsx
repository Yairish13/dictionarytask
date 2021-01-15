import { observable, action, makeObservable, computed } from "mobx";
import { configure } from "mobx";
import {
  IMobxStore,
   wordType,
   ISumShows,
   IPieChart,
   ITopCommon,
   IWords,
   IWordsValue
  // IWordsInterface
} from './types'

configure({
  useProxies: "always",
});



 class Store
 implements IMobxStore
  {
  constructor() {
    makeObservable(this);
  }
  input='';
  @observable topCommon = {key:'',value:[]}
  @observable mostCommon= '';
  @observable longestWord = '';
  @observable pieChart= {value:[]};
  @observable graphChart ={key:'',value:[]}
  @observable startWords = {value:{data:[],total:0},letter:''};
  @observable endWords = {value:{data:[],total:0},letter:''};
  @observable doubleWords = {value:{data:[],total:0},letter:''};
  @observable sumShows={value:0};
  @computed get startWordsCount() {
    return this.startWords.value?.total;
  }
  @computed get endWordsCount() {
    return this.endWords.value?.total;
  }
  @computed get doubleWordsCount() {
    return this.doubleWords.value?.total;
  }
  @computed get sumShowsCount() {
    return this.sumShows?.value;
  }
  @computed get pieChartData() {
    return this.pieChart;
  }
  @computed get graphChartData() {
    return this.graphChart.value;
  }
  @computed get topCommonData() {
    return this?.topCommon;
  }
  // @ts-ignore
  @action saveTopCommon(data){
    this.topCommon.value = data
  }
  // @ts-ignore
  @action saveGraph(topCommon){
    this.graphChart.value = topCommon
  }
  @action savePie(){
    //@ts-ignore
   this.pieChart.value = [this.startWordsCount,this.endWordsCount, this.doubleWordsCount]
  }
  @action addLongestWord(longestWord:string){
    this.longestWord = longestWord
  }
  @action addMostCommon(mostCommon:string){
    this.mostCommon = mostCommon
  }
  //@ts-ignore
  @action addWords(type: wordType, word, letter: string) {
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
      case "sum":
        this.sumShows.value = word;
        // this.sumShows.letter = letter;
        break;
    }
  }
}

export const storeInstance = new Store();
