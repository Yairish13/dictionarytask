
export type wordType = "start" | "end" | "double" | "sum";

export interface IWordsValue{
data:string[]|{};
total?:number;
}
export interface IWords{
  value:IWordsValue;
  letter?:string;
}
export interface IPieChart{
  value:number[];
}

export interface ISumShows{
  value:number;
  letter?:string
}
export interface ITopCommon{
key?:string;
value:number[];
}

export interface IMobxStore {
  input: string;
  mostCommon:string;
  longestWord:string;
  pieChart :IPieChart;
  sumShows :ISumShows;
  topCommon :ITopCommon ;
  graphChart: ITopCommon;
  startWords :IWords;
  endWords :IWords;
  doubleWords :IWords;
  startWordsCount: number ;
  endWordsCount: number ;
  doubleWordsCount: number ;
  sumShowsCount : number;
  pieChartData: IPieChart;
  graphChartData:ITopCommon[];
  saveTopCommon:(data:any)=>void;
  addWords:(type: wordType, word:IWords|number, letter: string)=>void
  addMostCommon:(mostCommon:string)=>void
  addLongestWord:(longestWord:string)=>void
savePie:()=>void;
saveGraph:(topCommon:ITopCommon)=>void
}

interface IParams{
    letterPattern: string;
     limit: string;
      page: string;
      lettersMax?: string;
}



export interface IOptions {
    method: 'GET';
    url: string;
    params: IParams,
    headers: {
      'x-rapidapi-key': 'b267c96d4dmshc3c0b438c7f2425p14dd5ajsn6578edd0328a',
      'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
    }
}




 