<template>
    <button @click="popupClicked">Click Me!</button>
</template>

<script>
    export default {
        name: 'PopupContent',
        methods: {
            popupClicked() {
                alert('Popup Clicked!');
            }
        }
    }
</script>