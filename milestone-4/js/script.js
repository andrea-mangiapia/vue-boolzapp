var app = new Vue({
    el: '#app',
    data: {
        contactsFilterText: '',
        currentUserActive: 0,
        newMessageText: '',
		contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ]
		  
	},

    methods: {
        // Funzione per selezionare l'indice dell'utente cliccato
		selectUser(index){
			this.currentUserActive = index;
		},

        addNewMessage() {
            const trimMessageText = this.newMessageText.trim();
            console.log(trimMessageText);
            if(trimMessageText.length > 0) {
                // Pushare nell'array dei messaggi del contatto orrentemente attivo in un nuovo oggetto
                const newMessage = {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: trimMessageText,
                    status: 'sent',
                };

                // Pusho nell'array del messaggio
                this.contacts[this.currentUserActive].messages.push(newMessage);
                // Pulisco input
                this.newMessageText = '';

                // Risposta del contatto a cui ho inviato il messaggio un secondo dopo
                setTimeout(() => {
                    const newReply = {
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        text: 'Ok',
                        status: 'received',
                    };

                    // Pusho nell'array del messaggio
                    this.contacts[this.currentUserActive].messages.push(newReply);

                }, 1000);
            }
        },
        filterContacts() {
            const filterTextLower = this.contactsFilterText.toLowerCase();
            console.log(filterTextLower);

            // Per ogni elemento di contacts
            // vedere SE il nome del contact
            // contiene il testo dato dall'utente
            this.contacts.forEach((element) => {
                const contactNameLower = element.name.toLowerCase();
                
                // SE lo contiene il contatto sarà visibile
                // altrimenti no
                if(contactNameLower.includes(filterTextLower)) {
                    element.visible = true;
                } else {
                    element.visible = false;
                }
            });
        } 
	}

});
  