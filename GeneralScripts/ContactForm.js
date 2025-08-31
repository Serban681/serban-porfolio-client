import FormData from "form-data";
import Mailgun from "mailgun.js";

export default class ContactForm {
    constructor() {
        this.init()
    }

    init = () => {
        this.email = ""
        this.name = ""
        this.message = ""

        this.setInputs()
        this.setClientMessage()
        this.setButton()
    }

    setInputs = () => {
        this.nameInput = document.querySelector('#name-input')
        this.emailInput = document.querySelector('#email-input')
        this.messageInput = document.querySelector('#message-input')

        this.nameInput.addEventListener('change', (e) => {
            this.name = e.target.value
        })

        this.emailInput.addEventListener('change', (e) => {
            this.email = e.target.value
        })

        this.messageInput.addEventListener('change', (e) => {
            this.message = e.target.value
        })
    }

    setClientMessage = () => {
        this.clientMessage = document.querySelector('#client-msg')
    }

    showClientMessage = (msg) => {
        this.clientMessage.innerHTML = msg
        this.clientMessage.style.opacity = '0.9'
        this.clientMessage.style.animation = 'shake 0.35s'

        setTimeout(() => {
            this.clientMessage.style.animation = ''
        }, 350)
    }

    showSendingMessage = () => {
        this.clientMessage.innerHTML = 'Sending...'
        this.clientMessage.style.opacity = '0.9'
    }

    validateInput = () => {
        if(this.name === "") {
            this.showClientMessage('You must provide a name')
            return false
        } 
        else if(this.email === "") {
            this.showClientMessage('You must provide an email address')
            return false
        }
        else if(this.message === "") {
            this.showClientMessage('You must provide a message')
            return false
        }

        return true
    }

    sendEmail = () => {
        fetch('http://localhost:7000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: this.name, email: this.email, message: this.message })
        }).then(res => {
            let status = res.status

            switch(status) {
                case 200: 
                    this.nameInput.value = ''
                    this.emailInput.value = ''
                    this.messageInput.value = ''
                    this.showClientMessage('Message sent successfully')
                    break;
                case 400:
                    this.showClientMessage('Invalid email address')
                    break;
                default:
                    this.showClientMessage('Internal server error')
            }
        }).catch(err => {
            this.showClientMessage('Internal server error')
        })

    //     const form = new FormData();

    //     form.append('from', this.name + ' ' + `<${this.email}>`);
    //     form.append('to', 'Serban <serbands20@gmail.com>');
    //     form.append('subject', 'Portfolio Message - ' + this.name);
    //     form.append('text', this.message);

    //     fetch('https://api.mailgun.net/v3/sandboxc9816c67075a4f28877185a9f098550d.mailgun.org/messages', {
    //         method: 'POST',
    //         headers: {
    //             'Authorization': 'Basic ' + btoa(`api:${import.meta.env.VITE_MAILGUN_API_KEY}`)
    //         },
    //         body: form
    //     }).then(res => {
    //         let status = res.status

    //         switch(status) {
    //             case 200: 
    //                 this.nameInput.value = ''
    //                 this.emailInput.value = ''
    //                 this.messageInput.value = ''
    //                 this.showClientMessage('Message sent successfully')
    //                 break;
    //             case 400:
    //                 this.showClientMessage('Invalid email address')
    //                 break;
    //             default:
    //                 console.log(res)
    //                 this.showClientMessage('Internal server error')
    //         }
    //     }).catch(err => {
    //         this.showClientMessage('Internal server error')
    //     })
    // }
    }

    setButton = () => {
        this.formButton = document.querySelector('#bottom-contact-btn')

        this.formButton.addEventListener('click', () => {
            console.log(this.name, this.email, this.message)
            if(!this.validateInput())
                return

            this.showSendingMessage()

            this.sendEmail()






            // fetch('sandboxc9816c67075a4f28877185a9f098550d.mailgun.org', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         name: this.name,
            //         email: this.email,
            //         message: this.message
            //     })
            // }, () => {
            //     this.showSendingMessage()
            // }).then(res => {
            //     let status = res.status

            //     switch(status) {
            //         case 200: 
            //             this.nameInput.value = ''
            //             this.emailInput.value = ''
            //             this.messageInput.value = ''
            //             this.showClientMessage('Message sent successfully')
            //             break;
            //         case 400:
            //             this.showClientMessage('Invalid email address')
            //             break;
            //         default:
            //             this.showClientMessage('Internal server error')
            //     }
            // })
        })
    }

    
}

