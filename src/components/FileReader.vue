<template>
    <label class="text-reader">
        <input type="file" @change="loadTextFromFile" class="custom-file-input" id="inputGroupFile01"
               aria-describedby="inputGroupFileAddon01">
        <label class="custom-file-label" for="inputGroupFile01">Upload file...</label>
    </label>
</template>

<script>
    export default {
        methods: {
            loadTextFromFile(ev) {
                const file = ev.target.files[0];
                const reader = new FileReader();

                reader.onload = e => this.$emit("load", e.target.result);
                reader.readAsText(file);
            }
        }
    };
</script>

<style>

</style>
