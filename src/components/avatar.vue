<template>
    <div class="avatar_form">

        <AvatarSelector @persoSelect="selectionHandler"></AvatarSelector>
        <form>
            <div class="input_group">
                <label>Nom d'utilisateur</label>
                <input type="text">
            </div>
            <div class="input_group">
                <label>Nom du monstre</label>
                <input type="text">
            </div>

            <button onclick="validateSelection">Valider</button>
        </form>
    </div>
</template>

<script>
    import AvatarSelector from "./avatarSelector";

    export default {
        name: 'avatar',
        components: {AvatarSelector},
        data() {
            return {
                avatar_url: null
            }
        },
        methods: {
            selectionHandler(img_url) {
                this.avatar_url = img_url;
            }
        }

    }
</script>

<style scoped lang="scss">
    .avatar_form {
        width: 100vw;
        display: grid;
        grid-gap: 16px;
        grid-template-columns: 1fr;
        grid-template-rows: 100vw 1fr;
        box-sizing: border-box;

        form {
            display: grid;
            grid-gap: 16px;
            padding: 16px;
            .input_group {
                display: grid;
                grid-gap: 4px;
                input {
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
            }
        }
    }
</style>
