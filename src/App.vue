<template>
    <div class="container mt-3" id="app">
        <div class="jumbotron alert-info mt-0">
            <h1>Maven Navigator</h1>
        </div>
        <div class="row">
            <div class="col-sm mt-1">
                <div class="alert alert-info mb-3 mt-0">
                    <h3>Upload the dependency tree here</h3>
                    <hr>
                    <p class="m-0">Open up your preferred commandline tool and type</p>
                    <pre class="m-0">mvn dependency:tree -Doutput=/path/to/file.txt</pre>
                    <p>this is the file to upload here. It has to be a .txt file.</p>
                    <div class="input-group mb-3">
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile01"
                                   aria-describedby="inputGroupFileAddon01">
                            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                        </div>
                    </div>
                </div>
                <div class="alert alert-info">
                    <h3>Paste your dependecy tree here</h3>
                    <hr>
                    <textarea/>
                </div>
            </div>
            <div class="col-sm ">
                <JsonTree id="treeview" class="alert alert-info" :data="dataObj"></JsonTree>
                <div class="alert alert-info mt-3">
                    <h4>Version conflicts and compilation orders to fix them</h4>
                    <hr>
                </div>
            </div>
        </div>
        <div class="footer pt-5 pb-4">
            Developed by Kenneth Lindalen <br>
            <a href="https://www.linkedin.com/in/kenneth-lindalen-1ba35a187/"><img src="./assets/icons/linkedin-brands.svg.png" alt=""></a>
            <a href="https://github.com/KennethLindalen"><img src="./assets/icons/github-brands.svg.png" alt=""></a>

        </div>
    </div>
</template>

<script>
    import JsonTree from 'vue-json-tree'

    export default {
        name: 'App',
        components: {
            JsonTree
        },
        data() {
            return {
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
                }

            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    textarea {
        width: 100%;
        height: 75vh;
        overflow: auto;
    }

    #treeview {
        height: 75vh;
        overflow-y: auto;

    }

    .keep-spaces {
        white-space: pre-wrap;
    }

</style>
