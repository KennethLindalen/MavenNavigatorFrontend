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