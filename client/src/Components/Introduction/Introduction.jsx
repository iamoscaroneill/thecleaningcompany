import intro from './Introduction.module.css'

const Message = () => {
    return (
        <div className={intro.message}>
            <div>Refresh, Revitalize, and Relish in Cleanliness</div>
            <h3>
                {`A clean environment is not just about tidiness; it's about creating a space that nurtures comfort, well-being, and peace of mind. Whether you're a busy professional seeking more free time, a parent striving for a healthier living space, or a business owner aiming to impress clients with impeccable premises – we've got you covered. We're committed to transforming your spaces into a haven of cleanliness, allowing you to focus on what matters most to you.`}
            </h3>
        </div>
    )
}

const Picture = () => {
    return (
        <div className={intro.image}></div>
    )
}

const Introduction = () => {
  return (
    <div className={intro.container}>
        <Message/>
        <Picture/>
    </div>
  )
}

export default Introduction