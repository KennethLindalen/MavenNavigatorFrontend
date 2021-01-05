<template>
    <div class="col-lg">
        <JsonTree class="json-tree-root json-tree-value br-0" :data="dataObj"></JsonTree>
        <button class="btn btn-secondary br-0" style="width: 100%; margin-top: 15px"
                @click="fullTreeView" v-if="treeView">
            Show the full tree instead
        </button>
    </div>
</template>

<script src="./JsonTreeView.js">
</script>

<style scoped>

</style>