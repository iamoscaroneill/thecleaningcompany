/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from 'react'
import contact from './Contact.module.css'
import { findError, sendMessage } from '../../utils/messageHandler'
import emailjs from '@emailjs/browser'
import { useStatsigClient } from "@statsig/react-bindings";

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
    const [error, setError] = useState();
    const [attempt, setAttempt] = useState(false)

    // Upon clicking the submit button, this process will check the form to see if all fields are populated
    // If there are one or more fields left unpopulated, the function will deliver the input left unfilled
    useEffect(() => {
        if (submit) {
            const { empty } = findError(input)
            setData(empty)
            setSubmit(false)
        }
    }, [input, submit])

    // This function will execute the process of sending an email
    useEffect(() => {
        if (data && data.length === 0) {
            sendEmail()
        } else {
            return
        }
    }, [data, submit])

    const handleChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
    }

    // Preventing the page from reloading upon successful email submission
    const webPageReload = () => {
        setTimeout(() => {
            window.location.reload(false);
        }, 3000);
    }

    const sendEmail = () => {
        setAttempt(true)
        try {
            emailjs.sendForm(`${import.meta.env.VITE_SERVICE_ID}`, `${import.meta.env.VITE_TEMPLATE_ID}`, form.current, {
                publicKey: `${import.meta.env.VITE_PUBLIC_KEY}`,
            }).then(() => {
                console.log('Message Sent!');
                setAttempt(false)
                setSuccess(true)
                setInput({ 
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                })
                setSubmit(false)
                webPageReload()
            },
            (error) => {
                console.log('Unsuccessful...', error.text);
                setAttempt(false)
                setError('There was an error sending this message. Please try again.');
                setSubmit(false);
                return
            });
        } catch (error) {
            console.log(error);
            setAttempt(false)
            setSubmit(false);
            return
        }
        
    };

    // Analytics
    const { client } = useStatsigClient();
    const handleClick = () => client.logEvent("email_submit", "Contact");

    return (
        <div className={contact.container} id="contact">
            <h1 id="contact_header">Contact Us</h1>
            <h3 id="feedback">
                {`Your feedback matters! We value your input and want to provide the best service possible. Please use the form below to
                submit any questions, comments, or concerns you may have. Whether it's a suggestion for improvement, a query about our
                services, or simply a compliment you'd like to share, we're here to listen. Your insights help us continually enhance
                our offerings and ensure your satisfaction. We appreciate your taking the time to reach out and look forward to hearing
                from you!`}
            </h3>

            {/* Should there be an exception detected from the 'findError' function, the 'sendMessage' function will send one or all related error messages to the user */}
            {/* Errors within the error state variable are errors coming from email.js */}
            { data && data.map((x, i) => {
                return (
                    <div id="error_input" className={contact.error} key={i}>{sendMessage(x)}</div>
                )
            }) }

            { success ? <div id="success" className={contact.success}>Message Sent Successfully!</div> : '' }
            { error ? <div id="error_emailjs" className={contact.error}>{error}</div> : '' }
            { attempt ? <div id="attempt" className={contact.attempt}>Sending...</div> : '' }

            <div id="form_container" className={contact.formcontainer}>
                <form id="form" ref={form}>
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
                <button id="submit" onClick={() => {setSubmit(true); handleClick()}}>Submit</button>
            </div>


        </div>
    )
}

export default Contact