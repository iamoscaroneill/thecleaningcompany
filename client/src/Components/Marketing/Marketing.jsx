import marketing from './Marketing.module.css'
import { questions } from '../../utils/prompts'

const Header = () => {
    return (
        <div className={marketing.header}>
            <h1 id="mkt_header">{`Let's take it a step further...`}</h1>
        </div>
    )
}



const Question = () => {
    return (
        <>
            { questions && questions.map((q, i) => (
                <div key={i} name={`question_${i}`} className={marketing.question}>
                    <h2>{q.question}</h2>
                    <h3>{q.answer}</h3>
                </div>
            )) }
        </>
    )
}

const Marketing = () => {
  return (
    <div className={marketing.container}>
        <Header/>
        <Question/>
    </div>
  )
}

export default Marketing