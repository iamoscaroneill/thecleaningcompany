/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import intro from './Introduction.module.css'
import { prompts } from '../../utils/prompts'

const Picture = () => {
    return (
        <div className={intro.image}></div>
    )
}

const Main = ({ message }) => {
    return (
        <div className={intro.main}>
            <h1>{message}</h1>
        </div>
    )
}

const Secondary = () => {
    return (
        <div className={intro.secondary}>
            <h1>{`Keeping things clean and organized is good for you. People with clean houses are healthier than people with messy houses. Simple.`}</h1>
        </div>
    )
}

const Introduction = () => {
    useEffect(() => {
        const random = Math.floor(Math.random() * prompts.length);
        setMessage(prompts[random])
    },[])

    const [message, setMessage] = useState('')

    return (
        <div className={intro.container}>
            <Main message={message}/>
            <Picture/>
            <Secondary/>
        </div>
    )
}

export default Introduction