<template>
    <main>
        <div class="login-card ">
            <h1><img alt="" height="" src="../assets/images/monstre_login.PNG" width="">
            </h1><br>

                    <form
                            @submit="checkForm">
                        <input
                                id="email"
                                v-model="email"
                                type="email"
                                name="email"
                                placeholder="Email">
                        <input
                                type="password"
                                name="password"
                                v-model="password"
                                placeholder="Mot de passe">
                        <input
                                type="submit"
                                name="login"
                                class="login login-submit"
                                value="se connecter">
                    </form>

                    <div class="login-help">
                        <a>Créer un compte</a> • <a href="#">Mot de passe oublié</a>
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
                password: null,
                email: null
            };
        },
        methods: {
            checkForm: function (e) {
                e.preventDefault();
                this.errors = [];

                if (!this.password) {
                    this.errors.push("Mot de passe requis.");
                }
                if (!this.email) {
                    this.errors.push('Email requis.');
                } else if (!this.validEmail(this.email)) {
                    this.errors.push('Email non valide.');
                }

                if (!this.errors.length) {
                    this.$router.push("/choice");
                }
            },
            validEmail: function (email) {
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }
        }
    };
</script>

<style scoped>

    .login-card {
        padding: 40px;
        background-color: #a1dddf;
        margin: 0 auto 10px;
        height: 100vh;
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
    .login-card

    .login {
        border: none;
        text-align: center;
        font-size: 14px;
        font-family: 'Arial', sans-serif;
        height: 36px;
        padding: 0 8px;
    }

    .login-submit {
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 10px;
        border: 2px solid white;
        border-radius: 30px;
        color: #fff;
        text-shadow: 0 1px rgba(0, 0, 0, 0.1);
        background-color: #a1dddf;
    }

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
