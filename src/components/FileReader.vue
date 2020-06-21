<template>
    <label class="text-reader">
        <input type="file" @change="loadTextFromFile" class="custom-file-input" id="inputGroupFile01"
               aria-describedby="inputGroupFileAddon01">
        <label class="custom-file-label" for="inputGroupFile01">{{Uploadtext}}</label>
    </label>
</template>

<script>
    export default {
        data(){
            return{
                Uploadtext: "Upload file..."
            }
        },
        methods: {
            loadTextFromFile(ev) {
                const file = ev.target.files[0];
                const reader = new FileReader();

                reader.onload = e => this.$emit("load", e.target.result);
                reader.readAsText(file);
                this.Uploadtext = file.name;
            }
        }
    };
</script>

<style>

</style>
