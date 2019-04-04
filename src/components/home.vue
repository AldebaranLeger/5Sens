<template>
    <main>
        <div class="login-card ">
            <h1><img alt="" height="" src="../assets/images/monstre_login.PNG" width="">
            </h1><br>
            <form
                    @submit="checkForm"
                    action="https://vuejs.org/"
                    id="app"
                    method="post"
                    novalidate="true"
            >

                <p v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>

                <p>
                    <label for="name">Name</label>
                    <input
                            id="name"
                            name="name"
                            type="text"
                            v-model="name"
                    >
                </p>

                <p>
                    <label for="email">Email</label>
                    <input
                            id="email"
                            name="email"
                            type="email"
                            v-model="email"
                    >
                </p>

                <p>
                    <input
                            type="submit"
                            value="Submit"
                    >
                </p>

            </form>

            <div class="login-help">
                <a href="#">Créer un compte</a> • <a href="#">Mot de passe oublié</a>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        name: "home",
        data() {
            return {
                errors: [],
                name: null,
                email: null
            };
        },
        methods: {
            checkForm: function (e) {
                this.errors = [];

                if (!this.name) {
                    this.errors.push("Name required.");
                }
                if (!this.email) {
                    this.errors.push('Email required.');
                } else if (!this.validEmail(this.email)) {
                    this.errors.push('Valid email required.');
                }

                if (!this.errors.length) {
                    return true;
                }

                e.preventDefault();
            },
            validEmail: function (email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }
        }
    };
</script>

<style scoped>
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
        Cantarell, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    .login-card {
        padding: 40px;
        background-color: #a1dddf;
        margin: 0 auto 10px;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        overflow: hidden;
    }

    .login-card h1 {
        text-align: center;
        font-size: 2.3em;
    }

    .login-card input[type=submit] {
        width: 100%;
        display: block;
        margin-bottom: 10px;
        position: relative;
    }

    /* Textes à l'intérieur des Input */
    .login-card input[type=text],
    input[type=password] {
        font-weight: bold;
        color: white;
        height: 44px;
        font-size: 16px;
        width: 100%;
        margin-bottom: 20px;
        background: #a1dddf;
        border: none;
        border-bottom: 2px solid white;
        padding: 0 8px;
        box-sizing: border-box;
        text-align: center;
    }

    /*.login {*/
    /*    border: none;*/
    /*    text-align: center;*/
    /*    font-size: 14px;*/
    /*    font-family: 'Arial', sans-serif;*/
    /*    height: 36px;*/
    /*    padding: 0 8px;*/
    /*}*/

    /*.login-submit {*/
    /*    font-weight: bold;*/
    /*    margin-top: 20px;*/
    /*    margin-bottom: 10px;*/
    /*    border: 2px solid white;*/
    /*    border-radius: 30px;*/
    /*    color: #fff;*/
    /*    text-shadow: 0 1px rgba(0, 0, 0, 0.1);*/
    /*    background-color: #a1dddf;*/
    /*}*/

    /* Les liens vers mots de passe oublié et créer un compte */
    .login-card a {
        text-decoration: none;
        color: #666;
        text-align: center;
        display: inline-block;
        opacity: 0.6;
        transition: opacity ease 0.5s;
    }

    /* le "footer" de la carte de login */
    .login-help {
        width: 100%;
        text-align: center;
        font-size: 12px;
    }

</style>
