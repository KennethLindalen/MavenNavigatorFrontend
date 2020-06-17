<template>
    <div class="container-fluid mt-3" id="app" style="padding-left: 5%;padding-right: 5%">
        <div class="jumbotron mt-0">
            <div class="container-fluid">
                <h1 class="display-4">Visualized Maven Conflicts</h1>
                <p class="lead">The simple way to get a good overview of your dependency tree and find version conflicts
                    in your maven builds.</p>

            </div>
        </div>
        <div class="row">
            <div class="col-sm mt-1">
                <div class="alert alert-secondary mb-3 mt-0" style="text-align: center">
                    <h3>Upload your dependency tree here</h3>
                    <hr>
                    <div class="m-0">
                        <p class="m-0">Open up your preferred commandline tool and type</p>
                        <pre class="m-0">mvn dependency:tree -Doutput=/path/to/file.txt</pre>
                        <p class="m-0">Example:</p>
                        <pre class="m-0">mvn dependency:tree -DoutputFile=temp/mvn_dependency_tree.txt</pre>
                        <p>this is the file to upload here. Required to be a .txt file.</p></div>
                    <div class="input-group mb-2">
                        <div class="custom-file">
                            <file-reader @load="file = $event"></file-reader>
                        </div>
                    </div>
                    <button type="button" class="btn btn-secondary" style="width: 100%" @click="sendData">Find conflicts</button>

                </div>
                <div class="alert alert-secondary mt-3">
                    <h4>Version conflicts and compilation orders to fix them</h4>
                    <hr>
                </div>
            </div>
            <div class="col-sm">
                <JsonTree class="json-tree-root" :data="dataObj"></JsonTree>
            </div>
        </div>
        <div class="footer pt-5 pb-4" style="text-align: center">
            Developed by Kenneth Lindalen <br>
            <a href="https://www.linkedin.com/in/kenneth-lindalen-1ba35a187/"><img
                    src="./assets/icons/linkedin-brands.svg.png" alt=""></a>
            <a href="https://github.com/KennethLindalen"><img src="./assets/icons/github-brands.svg.png" alt=""></a>
            <a class="ml-1" href="https://www.buymeacoffee.com/kennethlindalen"><img
                    src="./assets/icons/buymeacoffe.svg.png" alt=""></a>

        </div>
    </div>
</template>

<script>
    import JsonTree from 'vue-json-tree'
    import FileReader from "@/components/FileReader";
    import Axios from 'axios'

    export default {
        name: 'App',
        components: {
            JsonTree,
            FileReader
        },
        data() {
            return {
                file: "",
                test: [],
                dataObj:{
                    "Name": "Zero",
                    "Level": 0,
                    "Sub": [{
                        "Name": "One",
                        "Level": 1,
                        "Sub": [{"Name": "Two", "Level": 2, "Sub": [{"Name": "Three", "Level": 3, "Sub": []}]}]
                    }, {
                        "Name": "One",
                        "Level": 1,
                        "Sub": [{"Name": "Two", "Level": 2, "Sub": [{"Name": "Three", "Level": 3, "Sub": []}]}]
                    }, {
                        "Name": "Two",
                        "Level": 2,
                        "Sub": [{"Name": "Three", "Level": 3, "Sub": []}, {"Name": "Three", "Level": 3, "Sub": []}]
                    }, {"Name": "One", "Level": 1, "Sub": [{"Name": "Two", "Level": 2, "Sub": []}]}]
                }

            }
        },
        methods: {
            sendData:function () {
                let file_data = []
                file_data = this.file.split("\n");
                for (let i = 0; i < file_data.length; i++){
                    file_data[i] = file_data[i].replace("\\", "\\\\")
                }
                Axios.post("http://192.168.10.131:8080/",{
                    input: file_data
                })
                .then(response =>

                    this.dataObj = response.data.jsonTree
                )
            }
        },
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }

    textarea {
        width: 100%;
        height: 75vh;
        overflow: auto;
    }

    .json-tree-root {
        min-width: 0;
        height: 75vh;
        overflow: auto;
    }

</style>
