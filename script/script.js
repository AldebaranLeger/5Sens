const app = new Vue({
    el: '#app',
    data: {
        errors: [],
        name: null,
        email: null,
        movie: null
    },
    methods: {
        checkForm: function (e) {
            if (this.name && this.email) {
                return true;
            }

            this.errors = [];

            if (!this.name) {
                this.errors.push('Name required.');
            }
            if (!this.age) {
                this.errors.push('Age required.');
            }

            e.preventDefault();
        }
    }
})
