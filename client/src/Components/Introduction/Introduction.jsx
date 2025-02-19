/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import intro from './Introduction.module.css'
import { prompts, data } from '../../utils/prompts'
import { hero } from '../../utils/photos'

const Main = ({ message }) => {
    return (
        <div className={intro.main}>
            <h1 id="main_message">{message}</h1>
        </div>
    )
}

const Picture = ({ photo }) => {
    return (
        <img id="main_photo" alt="living spaces" className={intro.image} src={photo}/>
    )
}

const Secondary = ({ fact }) => {
    return (
        <div className={intro.secondary}>
            <h1 id="main_fact">{fact}</h1>
        </div>
    )
}

const Introduction = () => {
    useEffect(() => {
        const random = Math.floor(Math.random() * prompts.length);
        setMessage(prompts[random])
    },[])

    useEffect(() => {
        const random = Math.floor(Math.random() * hero.length);
        setPhoto(hero[random])
    },[])

    useEffect(() => {
        const random = Math.floor(Math.random() * data.length);
        setFact(data[random])
    },[])

    const [message, setMessage] = useState('')
    const [photo, setPhoto] = useState('')
    const [fact, setFact] = useState('')

    return (
        <div id="introduction" className={intro.container}>
            <Main message={message}/>
            <Picture photo={photo}/>
            <Secondary fact={fact}/>
        </div>
    )
}

export default Introduction