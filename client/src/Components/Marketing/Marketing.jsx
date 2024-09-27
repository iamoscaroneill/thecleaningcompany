import React from 'react'
import marketing from './Marketing.module.css'

const Header = () => {
    return (
        <div className={marketing.header}>
            <h1>{`Let's take it a step further...`}</h1>
        </div>
    )
}

const Question = ({ question, answer }) => {
    return (
        <div className={marketing.question}>
            <h2>{question}</h2>
            <h3>{answer}</h3>
        </div>
    )
}

const Marketing = () => {
  return (
    <div className={marketing.container}>
        <Header/>
        <Question question={'Who you are.'} answer={`A hardworking and busy professional who wants their space to be spotless clean but just doesn't have the time to do it.`}/>
        <Question question={'What you want.'} answer={'A clean, nuturing enviroment for your peace of mind, for your guests, or for your parents who stop by unannounced.'}/>
        <Question question={'How we can help you with what you want.'} answer={`We'll help transform your space into a haven of cleanliness, allowing you to focus on what matters most to you.`}/>
        <Question question={`So...what's next, exactly?`} answer={`You give us a ring, and we'll step-in, literally, to help you clean things up.`}/>
    </div>
  )
}

export default Marketing