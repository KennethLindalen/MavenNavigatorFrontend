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
                        <pre class="m-0 alert alert-light mt-2 mb-2">mvn dependency:tree -Doutput=/path/to/file.txt</pre>
                        <p class="m-0">Example:</p>
                        <pre class="m-0 alert alert-light mt-2 mb-2">mvn dependency:tree -DoutputFile=temp/mvn_dependency_tree.txt</pre>
                        <p>this will create a temp folder in your project directory with the file you need to upload
                            here.
                            <br>
                            <span style="font-weight: bold">Required to be a .txt file!</span></p></div>
                    <div class="input-group mb-2">
                        <div class="custom-file">
                            <file-reader @load="file = $event"></file-reader>
                        </div>
                    </div>
                    <div class="alert alert-danger" v-if="errorMsg !== ''">
                        <p>{{errorMsg}}</p>
                    </div>
                    <button type="button" class="btn btn-secondary" style="width: 100%" @click="sendData">Find
                        conflicts
                    </button>

                </div>
                <div class="alert alert-primary mt-3">
                    <h4>Version conflicts and compilation orders to fix them</h4>
                    <p v-if="conflictCount >= 1">We found {{conflictCount}} conflict set<span
                            v-if="conflictCount > 1">s</span> in your build.</p>
                    <hr>
                    <div class="alert alert-info" v-for="(conflict, index) in conflictObj" :key="index">
                        <div class="row">
                            <div class="col">
                                <h5>This maven dependency has {{conflict.conflicts.length}} conflict<span
                                        v-if="conflict.conflicts.length > 1">s</span></h5>
                                <hr>
                                <p>Package information: </p>
                                <hr>
                                <div>
                                    <p>Group ID: {{conflict.firstOccurance.GroupId}}</p>
                                    <p>Artifact ID: {{conflict.firstOccurance.ArtifactId}}</p>
                                </div>
                            </div>
                            <div class="col" v-for="(obj, index) in conflict.conflicts" :key="index">
                                <div class="alert alert-light row">
                                    <div class="col m-0">
                                        <p class="m-1 bolder">Group ID: <br> <span style="font-weight: normal">{{conflict.firstOccurance.GroupId}}</span></p>
                                        <p class="m-1 bolder">Artifact ID: <br><span style="font-weight: normal">{{conflict.firstOccurance.ArtifactId}}</span></p>
                                        <p class="bolder">Version: <br><span style="font-weight: normal">{{conflict.firstOccurance.Version}}</span></p>
                                    </div>
                                    <div class="col  m-0 p-0">
                                        <button class="btn btn-outline-info" style="width: 85%; float: right"
                                                @click="notImpl">
                                            See the project structure containing this dependency
                                        </button>
                                    </div>
                                </div>
                                <div class="alert alert-light row">
                                    <div class="col m-0">
                                        <p class="m-1 bolder">Group ID: <br><span style="font-weight: normal">{{obj.GroupId}}</span></p>
                                        <p class="m-1 bolder">Artifact ID: <br><span style="font-weight: normal">{{obj.ArtifactId}}</span></p>
                                        <p class="bolder">Version: <br> <span style="font-weight: normal">{{obj.Version}}</span></p>
                                    </div>
                                    <div class="col m-0 p-0">
                                        <button class="btn btn-outline-info" style="width: 85%; float: right"
                                                @click="notImpl">
                                            See the project structure containing this dependency
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm">
                <JsonTree class="json-tree-root" :data="dataObj"></JsonTree>
            </div>
        </div>
        <div class="footer pt-5 pb-4" style="text-align: center">
            Developed by Kenneth Lindalen <br>
            <p>Contact me</p>
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
                dataObj: {
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
                },
                conflictObj: [],
                conflictCount: 0,
                errorMsg: ""
            }
        },
        methods: {
            sendData: function () {
                let file_data = []
                let response_tree;
                let response_conflicts;
                file_data = this.file.split("\n");
                for (let i = 0; i < file_data.length; i++) {
                    file_data[i] = file_data[i].replace("\\", "\\\\")
                }
                Axios.post("http://192.168.10.131:8080/", {
                    input: file_data
                })
                    .then(response => {
                            response_tree = response.data.jsonTree;
                            response_conflicts = response.data.conflictMasterPOJOS;
                            this.dataObj = response_tree;
                            this.conflictObj = response_conflicts;
                            this.conflictCount = response_conflicts.length;
                        }
                    )

            },
            notImpl: function () {
                alert("Not yet implemented. Will be ready in the next update.")
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

    ul {
        list-style-type: none;
    }
    .bolder {
        font-weight: bold;
    }

</style>
