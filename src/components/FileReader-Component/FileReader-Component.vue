<template>
    <label class="text-reader">
        <input type="file" @change="loadTextFromFile" class="custom-file-input" id="inputGroupFile01"
               aria-describedby="inputGroupFileAddon01">
        <label class="custom-file-label" for="inputGroupFile01">{{Uploadtext}}</label>
    </label>
</template>

<script src="./FileReader.js"></script>

<style>

</style>
