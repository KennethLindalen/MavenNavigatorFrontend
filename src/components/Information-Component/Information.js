import FileReader from "@/components/FileReader-Component/FileReader-Component";
import Axios from "axios";
import {mapGetters} from "vuex";


export default {
    name: "information-component",
    components: {
        FileReader
    },
    data() {
        return {
            file: "",
            conflictCount: this.getConflictCount,
            conflictObj: this.getConflictObj,
            checked: this.getChecked,
            seeConflicts: false,
            seeConflictsLink: "Click here to see your conflicts."
        }
    },
    computed: {
        ...mapGetters([
            'getConflictCount',
            'getConflictObj',
            'getChecked'
        ])
    },
    watch: {
        getConflictObj: function () {
            this.conflictObj = this.getConflictObj;
            this.$mount();
        },
        getConflictCount: function () {
            this.conflictCount = this.getConflictCount;
        },
        getChecked: function () {
            this.checked = this.getChecked;
        },
    },
    methods: {
        sendData: function () {
            let file_data = this.file.split("\n");
            for (let i = 0; i < file_data.length; i++) {
                file_data[i] = file_data[i].replace("\\", "\\\\")
            }

            Axios.post(this.$store.state.apiURL, {
                input: file_data
            })
                .then(response => {
                        this.$store.commit('changeConflictObj', response.data.conflictPOJOS);
                        this.$store.commit('changeDataObj', response.data.jsonTree);
                        this.$store.commit('changeDataObjCopy', response.data.jsonTree);
                        this.$store.commit('changeChecked', true);
                    }
                )
        },
        conflictTreeView: function (content) {
            this.$store.commit('changeDataObj', content);
            this.$store.commit('changeTreeView', true);
        },
        seeConflictsBtn: function () {
            this.seeConflicts = !this.seeConflicts;
        }
    }
}