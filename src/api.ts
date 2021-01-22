import axios from 'axios'
import {IOptions} from './types'


export const getAllData = async() =>{
  try{
const {data} = await axios.request(getAllOptions())
return data.results.data
  }catch(err){console.log(err.message)}
}
const getAllOptions = (): IOptions => ({
  method: 'GET',
  url: 'https://wordsapiv1.p.rapidapi.com/words/',
  params: {letterPattern: `^.*$`, limit: '330000', page: '1',  lettersMax: '99'},
  headers: {
    'x-rapidapi-key': 'b267c96d4dmshc3c0b438c7f2425p14dd5ajsn6578edd0328a',
    'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
  }
});
// export const getFirstData = async(input:string) =>{
//   try{
// const {data} = await axios.request(getFirstOptions(input))
// return data.results
//   }catch(err){console.log(err.message)}
// }

// export const getLastData = async(input:string) =>{
//   try{
// const {data} = await axios.request(getLastOptions(input))
// return data.results
//   }catch(err){console.log(err.message)}
// }
// export const getDoubleData = async(input:string) =>{
//   try{
// const {data} = await axios.request(getDoubleOptions(input))
// return data.results
//   }catch(err){console.log(err.message)}
// }

//options to get the words that start with the input letter
// const getFirstOptions = (input:string): IOptions => ({
//     method: 'GET',
//     url: 'https://wordsapiv1.p.rapidapi.com/words/',
//     params: {letterPattern: `^${input}.*$`, limit: '330000', page: '1'},
//     headers: {
//       'x-rapidapi-key': 'b267c96d4dmshc3c0b438c7f2425p14dd5ajsn6578edd0328a',
//       'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
//     }
//   });
  //options to get the words that end with the input letter
// const getLastOptions = (input:string): IOptions => ({
//     method: 'GET',
//     url: 'https://wordsapiv1.p.rapidapi.com/words/',
//     params: {letterPattern: `^.*${input}$`, limit: '330000', page: '1'},
//     headers: {
//       'x-rapidapi-key': 'b267c96d4dmshc3c0b438c7f2425p14dd5ajsn6578edd0328a',
//       'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
//     }
//   });
  //options to get the words that contains the double letter
// const getDoubleOptions = (input:string): IOptions => ({
//     method: 'GET',
//     url: 'https://wordsapiv1.p.rapidapi.com/words/',
//     params: {letterPattern: `^.*${input}${input}.*$`, limit: '330000', page: '1'},
//     headers: {
//       'x-rapidapi-key': 'b267c96d4dmshc3c0b438c7f2425p14dd5ajsn6578edd0328a',
//       'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
//     }
//   });



  