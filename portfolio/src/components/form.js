import React, { Component } from 'react';





class Form extends Component {


    constructor(props) {
        super(props);
        this.state = {
            //in here put the userID you got from emailjs 
            REACT_APP_EMAILJS_USERID: ' user_xa3zAGUXkOUzusVlZP5xw',
            //the template ID of the template you created in the emailjs
            templateId: 'ayalamedia',
            formSubmitted: false,
            feedback: 'Test'
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.sendFeedback = this.sendFeedback.bind(this);
    }


    onSubmit(event) {
    event.preventDefault();
        const { templateId } = this.state;
        //Getting the variables from the forms
        this.sendFeedback(
            templateId,
            this.sender,
            this.refs.email.value,
            this.state.feedback,
            this.refs.lastname.value,
            this.refs.firstname.value,
            this.refs.phone.value,
            this.refs.message.value,
        );
        this.setState({
            formSubmitted: true
        });
    }

    //In here the data is send to the mailgun server with the correct templateID


    sendFeedback(templateId, senderEmail, receiverEmail, feedback, lastname, firstname, phone, message, email) {

        window.emailjs
            .send('mailgun', templateId, {
                senderEmail,
                receiverEmail,
                feedback,
                lastname,
                firstname,
                phone, 
                message,
                email
            })
            .then(res => {
                console.log('MAIL SENT!')
                alert("Mail Sent")
                this.setState({
                    formEmailSent: true
                });
            })
            // Handle errors if the mail didnt passed 
            .catch(err => console.error('Failed to send feedback. Error: ', err));
    }
    render() {


        return (
            <div>
                <div>
                    <form onSubmit={this.onSubmit}>
                        <div className='row1'>
                            <div>
                                <input id="firstname" type="text" className="validate" ref="firstname" required />
                                <p>first name</p>
                            </div>
                            <div>
                                <input id="lastname" type="text" className="validate" ref="lastname" name="lname" required />
                                <p>last name</p>
                            </div>
                        </div>
                        <div className='row1'>
                            <div>
                                <input id="email" type="email" className="validate" ref="email" required />
                                <p>email</p>
                            </div>
                            <div>
                                <input id="phone" type="text" className="validate" ref="phone" />
                                <p>phone number</p>
                            </div>
                        </div>
                            <div className='text'>
                                <textarea id="message" type="text" className="validate" ref="message" />
                                <p>message</p>
                            </div>
                        <div className='btn'>
                            <input id='confirm-btn' type="submit" className="btn green" value="Send" placeholder="Send"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default Form;