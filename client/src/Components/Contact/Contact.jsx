import contact from './Contact.module.css'

const Contact = () => {
    return (
        <div className={contact.container} id="contact">
            <h1>Contact Us</h1>
            <h3>
                {`Your feedback matters! We value your input and want to provide the best service possible. Please use the form below to
                submit any questions, comments, or concerns you may have. Whether it's a suggestion for improvement, a query about our
                services, or simply a compliment you'd like to share, we're here to listen. Your insights help us continually enhance
                our offerings and ensure your satisfaction. We appreciate your taking the time to reach out and look forward to hearing
                from you!`}
            </h3>

            <div className={contact.formcontainer}>
                <form method="post" action="https://webdevbasics.net/scripts/pacific.php">
                    <input type="text" id="name" name="name" placeholder="First & Last Name*" required/>
                    <input type="email" id="email" name="email" placeholder="Email*" required/>
                    <input type="text" id="subject" name="subject" placeholder="Subject*" maxLength="50" required/>
                    <textarea id="myComments" name="myComments" placeholder="Comments*" rows="5" cols="40" required></textarea>
                    <button type="submit" disabled={true}>Submit</button>
                </form>
        </div>


        </div>
    )
}

export default Contact