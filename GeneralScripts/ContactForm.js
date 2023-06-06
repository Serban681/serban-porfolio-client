export default class ContactForm {
    constructor() {
        this.init()
    }

    init = () => {
        this.email = ''
        this.name = ''
        this.message = ''

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

        this.clientMessage.style.opacity = '0'
    }

    showClientMessage = (msg) => {
        this.clientMessage.innerHTML = msg
        this.clientMessage.style.opacity = '0.9'
        this.clientMessage.style.animation = 'shake 0.35s'

        setTimeout(() => {
            this.clientMessage.style.animation = ''
        }, 350)
    }

    validateInput = () => {
        if(this.name === '') {
            this.showClientMessage('You must provide a name')
            return false
        } 
        else if(this.email === '') {
            this.showClientMessage('You must provide an email address')
            return false
        }
        else if(this.message === '') {
            this.showClientMessage('You must provide a message')
            return false
        }

        return true
    }

    setButton = () => {
        this.formButton = document.querySelector('#bottom-contact-btn')

        this.formButton.addEventListener('click', () => {
            if(!this.validateInput())
                return

            fetch(process.env.SERVER_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.name,
                    email: this.email,
                    message: this.message
                })
            }).then(res => {
                let status = res.status

                console.log(status)

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
            })
        })
    }
}
