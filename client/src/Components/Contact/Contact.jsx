/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from 'react'
import contact from './Contact.module.css'
import { findError, sendMessage } from '../../utils/messageHandler'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef();

    const [input, setInput] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [data, setData] = useState()
    const [submit, setSubmit] = useState(false)
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        if (submit) {
            const { empty } = findError(input)
            setData(empty)
            setSubmit(false)
        }
    }, [input, submit])

    useEffect(() => {
        if (data && data.length === 0) {
            setSuccess(true)
            sendEmail()
        } else {
            return
        }
    }, [data, submit])

    const handleChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
    }

    const sendEmail = () => {
        try {
            emailjs.sendForm(`${import.meta.env.VITE_SERVICE_ID}`, `${import.meta.env.VITE_TEMPLATE_ID}`, form.current, {
                publicKey: `${import.meta.env.VITE_PUBLIC_KEY}`,
            }).then(() => {
                setSuccess(true)
                console.log('Message Sent!');
                setInput({ 
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                })
                setSubmit(false)
            },
            (error) => {
                console.log('FAILED...', error.text);
                setSubmit(false);
                return
            });
        } catch (error) {
            console.log(error);
            setSubmit(false);
            return
        }
        
    };

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

            { data && data.map((x, i) => {
                return (
                    <div className={contact.error} key={i}>{sendMessage(x)}</div>
                )
            }) }

            { success ? <div className={contact.success}>Message Sent Successfully!</div> : '' }

            <div className={contact.formcontainer}>
                <form ref={form}>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="First & Last Name*"
                        value={input.name}
                        onChange={(e) => handleChange(e)} 
                        required
                    />
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Email*"
                        value={input.email}
                        onChange={(e) => handleChange(e)}
                        required/>
                    <input 
                        type="text" 
                        id="subject" 
                        name="subject" 
                        placeholder="Subject*" 
                        value={input.subject}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                    <textarea 
                        id="message" 
                        name="message" 
                        placeholder="Message*" 
                        rows="5" 
                        cols="40" 
                        value={input.message}
                        onChange={(e) => handleChange(e)}
                        required>
                    </textarea>
                </form>
                <button onClick={() => {setSubmit(true)}}>Submit</button>
            </div>


        </div>
    )
}

export default Contact