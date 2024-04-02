// Descrizione:
// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// MILESTONE 1
// Stampare all'interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, 
// il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": 
// cliccando sul pulsante, il testo digitato viene letto e utilizzato per
// creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

const { createApp } = Vue;

createApp({
    data() {
        return {
            tasks:[
                {
                    text: 'task 1',
                    done: false,
                },
                {
                    text: 'task 2',
                    done: false,
                },
                {
                    text: 'task 3',
                    done: false,
                }
            ],
        };
        

    },
    methods: {
        deleteItems (indexToDelete) {
            this.tasks.splice(indexToDelete, 1);
        },
        textWrap(index) {
            // this.tasks[index].done = true;

            if (this.tasks[index]){
                if(this.tasks[index].done == false)
                    this.tasks[index].done = true; 
                else{
                    this.tasks[index].done = false; 
            }

            }
        },
        addTask() {
            const NewString = this.newTask.trim();
            if (NewString.length >=5) {
                this.tasks.push({
                    text: NewString,
                    done: false,
                });
                this.newTask = '';
            }
        }
    }
}).mount('#app');

