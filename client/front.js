import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

new Vue({
    el: '#app',
    data() {
        return {
            form: {
                name: '',
                value: ''
            },
            contacts: [{
                id: 1,
                name: "User",
                value: "8-921-100-20-30",
                marked: false
            }]
        }
    },
    computed: {
        canCreate() {
            return this.form.name.trim() && this.form.value.trim();
        }
    },
    methods: {
        createContact() {
            const {
                ...contact
            } = this.form;

            this.contacts.push({
                ...contact,
                id: Date.now(),
                marked: false
            });

            this.form.name = this.form.value = '';
        },
        markContact(id) {
            const contact = this.contacts.find(t => t.id === id);
            contact.marked = true;
        }
    }
})
