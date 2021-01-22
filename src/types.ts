export interface IWords {
  [key: string]: number;

}
interface IParams {
  letterPattern: string;
  limit: string;
  page: string;
  lettersMax?: string;
}

export interface IOptions {
  method: "GET";
  url: string;
  params: IParams;
  headers: {
    "x-rapidapi-key": "b267c96d4dmshc3c0b438c7f2425p14dd5ajsn6578edd0328a";
    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com";
  };
}

export interface IMobxStore {
  allWords: string[];
  longestWord: string;
  selectedLetter: string;
  mostCommonLetter: string;
  topCommonValues: number[];
  topCommonKeys: string[];

  start: () => void;
  _getAllWords: () => void;
  setSelectedLetter:(input: string)=>void;
  getLongestWord: () => void;
  getMostCommonLetter: () => void;
  getTopCommon: () => void;
  counter(str: string):IWords;
  pieChart:number[];
  wordsThatStart:number;
  wordsThatEnd:number;
  wordsThatDouble:number;
  wordsThatTotal:number;
}
