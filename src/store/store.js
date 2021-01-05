import Vuex from 'vuex';
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        apiURL: "https://mvnnavigatorbackend.herokuapp.com/",
        dataObj: {
            "Hello": "On this website you can upload your maven dependency tree to see whether you have " +
                "conflicts in your builds.",
        },
        conflictObj: [],
        conflictCount: -1,
        errorMsg: "",
        dataObjCopy: {},
        treeview: false,
        checked: false,
        currentConflict: {}
    },
    getters: {
        getDataObj: state => {
            return state.dataObj;
        },
        getConflictObj: state => {
            return state.conflictObj;
        },
        getConflictCount: state => {
            return state.conflictObj.length;
        },
        getErrorMsg: state => {
            return state.errorMsg;
        },
        getDataObjCopy: state => {
            return state.dataObjCopy;
        },
        getCurrentConflict: state => {
            return state.currentConflict;
        },
        getTreeView: state => {
            return state.treeview;
        },
        getApiURL: state => {
            return state.apiURL;
        },
        getChecked: state => {
            return state.checked;
        }
    },
    mutations: {
        changeDataObj(state, dataObj){
            state.dataObj = dataObj;
        },
        changeConflictObj(state, conflictObj){
            state.conflictObj = conflictObj;
        },
        changeConflictCount(state, conflictCount){
            state.conflictCount = conflictCount;
        },
        changeDataObjCopy(state, dataObjCopy){
            state.dataObjCopy = dataObjCopy;
        },
        changeErrorMsg(state, errorMsg){
            state.errorMsg = errorMsg;
        },
        toggleTreeView(state, treeView){
            state.treeview = treeView;
        },
        toggleChecked(state, checked){
            state.checked = checked;
        },
        changeCurrentConflict(state, currentConflict){
            state.currentConflict = currentConflict;
        }
    },
})