import { observable, action, makeObservable, computed } from "mobx";
import { configure } from "mobx";
import{getAllData} from './api';
import {IMobxStore, IWords} from './types'

configure({
  useProxies: "always",
});

 class Store
 implements IMobxStore
  {
  constructor() {
    makeObservable(this);
  }
  @observable.ref allWords:string[]=[''];
  @observable longestWord:string ='';
  @observable selectedLetter :string = '';
  @observable mostCommonLetter:string = '';
  @observable.ref topCommonValues: number[]=[0];
  @observable.ref topCommonKeys:string[] = ['']

  @action start = () =>{
    this._getAllWords()
  }
 @action _getAllWords = async() =>{
  const wordsFromStorage= JSON.parse(localStorage.getItem("allWords")|| '{}');
    if(wordsFromStorage){
      this.allWords = wordsFromStorage
    }
    else{
      const data = await getAllData()
      const words: string[] =  data.join(' ').split(" ");
      this.allWords=words;
     localStorage.setItem("allWords", JSON.stringify(this.allWords));
     }
  }
  @action setSelectedLetter = (input:string) =>{
    this.selectedLetter = input
  }
  @action getLongestWord(){
    this.longestWord= this.allWords.reduce(
      (a, b) => (a.length < b.length ? b : a),
      ""
      );
  }
  @action getMostCommonLetter(){
    const allWordsStr = this.allWords.join('');
    const mostCommonObj = this.counter(allWordsStr)
    if(mostCommonObj){
      this.mostCommonLetter = Object.keys(mostCommonObj).reduce((a, b) =>
      mostCommonObj[a] > mostCommonObj[b] ? a : b
          ,'');
    }
  }
  @action  getTopCommon(){
    const allWordsStr = this.allWords.join('');
    const mostCommonObj:IWords = this.counter(allWordsStr)
    
    const topCommonValues: number[] = Object.values(mostCommonObj).sort(
            (a: number, b: number) => b - a
          ).slice(0,5);
          const topCommonKeys :string[]=[''];
          for(let i =0;i<5;i++){
            const name = Object.keys(mostCommonObj).find(
                  (key) => mostCommonObj[key] === topCommonValues[i]
                );
                if (name) topCommonKeys.push(name) ;
            }
            this.topCommonValues = topCommonValues;
            this.topCommonKeys = topCommonKeys.slice(1,6);
            
  }
  @action  counter(str:string) {
    return str.split("").reduce((total:any, letter:any) => {
      total[letter] ? total[letter]++ : (total[letter] = 1);
      return total;
    }, {});
  };
  @computed get pieChart(){
    return [this.wordsThatStart,this.wordsThatEnd,this.wordsThatDouble]
   }

  @computed get wordsThatStart() {
    return  this.allWords?.reduce((acc:number,word:string)=>{
      if(word[0] === this.selectedLetter) {return acc + 1;}
      else {return acc;}
    },0);
  }
  @computed get wordsThatEnd() {
     return this.allWords?.reduce((acc:number,word:string)=>{
      if(word[word.length-1] === this.selectedLetter) {return acc + 1;}
      else {return acc;}
    },0);
  }
  @computed get wordsThatDouble() {
     return this.allWords?.reduce((acc:number,word:string)=>{
   const regex = new RegExp(this.selectedLetter + this.selectedLetter);
      if((regex).test(word)) {return acc + 1;}
      else {return acc;}
    },0);
  }
  @computed get wordsThatTotal(){
    return  this.allWords?.join("")
    .split("").reduce((acc:number,word:string)=>{
      if(word === this.selectedLetter) {return acc + 1;}
      else {return acc;}
    },0);
  }

}

export const storeInstance = new Store();
