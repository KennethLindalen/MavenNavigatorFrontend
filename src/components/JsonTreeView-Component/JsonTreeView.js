import JsonTree from 'vue-json-tree'
import {mapGetters} from 'vuex'

export default {
    name: 'JsonTreeView',
    components: {
        JsonTree
    },
    data() {
        return {
            dataObj: {},
            treeView: false
        }
    },
    computed: {
        ...mapGetters([
            'getDataObj',
            'getTreeView',
        ])
    },
    methods: {
        fullTreeView: function () {
            this.$store.commit("toggleTreeView", false);
            this.$store.commit("changeDataObj", this.getDataObjCopy);
        }
    },
    watch: {
        getDataObj: function () {
            this.dataObj = this.getDataObj;
        },
        getTreeView: function () {
            this.treeView = this.getTreeView;
        },
    },
    beforeMount() {
            this.dataObj = this.getDataObj;
    }
}