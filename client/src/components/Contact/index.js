import React, { useState } from 'react';
import { validateEmail } from '../../assets/utils/helpers';
import { useForm } from '@formspree/react';
import Logo from '../Logo';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    const [readyForSubmit, setReadyForSubmit] = useState(false);

    // formspree
    const [submissionState, handleSubmit] = useForm("mgedobwk");

    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value });

        if (formState.name.length > 0 && formState.message.length > 0) {
            setReadyForSubmit(true);
        } else {
            setReadyForSubmit(false);
        }

        console.log(formState);
    }

    function validateSubmission(e) {
        e.preventDefault();

        const isValid = validateEmail(formState.email);

        if (!formState.name.length) {
            setErrorMessage(`Please enter your name.`);
        } else if (!isValid) {
            setErrorMessage(`Please enter a valid email address.`);
        } else if (!formState.message.length) {
            setErrorMessage(`Please enter a message.`);
        } else {
            handleSubmit(formState);
        }
    }

    if (submissionState.succeeded) {
        return (
            <section id="contactSection">
                <h2>Feel free to shoot me an email:</h2>
                <div className="email-block">
                    <a className="email-address" href="mailto:hello@taylorhakes.dev">hello@</a><br />
                    <a className="email-address email-domain" href="mailto:hello@taylorhakes.dev">taylorhakes.dev</a>
                </div>
                <h2>Or, drop in a message here:</h2>
                <h3>Thanks for reaching out! I'll email you shortly.</h3>
                <div className='contactLogo'>
                    <Logo color={'--Palette4'} />
                </div>
            </section>
        )
    }

    return (
        <section id="contactSection">
            <h2>Feel free to shoot me an email:</h2>
            <div className="email-block">
                <a className="email-address" href="mailto:hello@taylorhakes.dev">hello@</a><br />
                <a className="email-address email-domain" href="mailto:hello@taylorhakes.dev">taylorhakes.dev</a>
            </div>
            <h2>Or, drop in a message here:</h2>
            <form id="contactForm">
                <div className="inputWrap">
                    <label htmlFor="name">
                        Name
                    </label>
                    <input
                        id='name'
                        type="text"
                        defaultValue={name}
                        onChange={handleChange}
                        name="name"
                    />
                </div>
                <div className="inputWrap">
                    <label htmlFor="email">
                        Email address
                    </label>
                    <input
                        id='email'
                        type="email"
                        defaultValue={email}
                        onChange={handleChange}
                        name="email"
                    />
                </div>
                <div className="inputWrap">
                    <label htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id='message'
                        name="message"
                        defaultValue={message}
                        onChange={handleChange}
                        rows="5"
                    />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                {readyForSubmit &&
                <button
                    type="submit"
                    onClick={validateSubmission}
                >
                    Send
                </button>
                }
            </form>
        </section>
    )
}

export default ContactForm;