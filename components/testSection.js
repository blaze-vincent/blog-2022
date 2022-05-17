import Section from './section'
import H2 from './h2'
import { useState, useEffect, useMemo } from 'react'

export default function TestSection(){

  const [paraData, setParaData] = useState()
  const [h2Data, setH2Data] = useState()

  useEffect(_ => {
    //OCCASIONALLY RESULTS IN ERROR IF YOU RELOAD TOO FAST BUT IT'S GOOD ENOUGH FOR TESTING PURPOSES
    let isSubscribed = true;
    fetch("https://baconipsum.com/api/?type=meat-and-filler&paras=1").then(async res => {
      if(isSubscribed){
        const dataArr = await res.json()
        const firstFiveWords = dataArr[0].split('.')[0].split(' ').slice(0, 5).join(' ')
        setH2Data(firstFiveWords)
        setParaData(dataArr[0])
      }
    })
    return _ => {isSubscribed = false}
  }, [])
  
  return <Section>
    <H2>{
    h2Data || '...'
    }</H2>
    <p>{
    paraData || '...'  
    }</p>
  </Section>
}