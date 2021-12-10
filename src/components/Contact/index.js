import React, { useState } from 'react';
import { validateEmail, capitalizeFirstLetter } from '../../assets/utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage('Enter a valid email address.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${capitalizeFirstLetter(e.target.name)} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }

        console.log(formState.name);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section id="contactSection">
            <h2>Feel free to shoot me an email:</h2>
            <div className="email-block">
                <a className="email-address" href="mailto:hello@taylorhakes.dev">hello@</a><br />
                <a className="email-address email-domain" href="mailto:hello@taylorhakes.dev">taylorhakes.dev</a>
            </div>
            <h2>Or, drop in a message here:</h2>
            <form id="contactForm" onSubmit={handleSubmit}>
                <div className="inputWrap">
                    <label htmlFor="name">Name</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div className="inputWrap">
                    <label htmlFor="email">Email address</label>
                    <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                <div className="inputWrap">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;