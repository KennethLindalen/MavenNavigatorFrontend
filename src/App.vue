<template>
    <div class="container mt-3 " id="app">
        <div class="jumbotron mb-2 br-0">
            <div class="container-fluid ">
                <h1 class="display-4">Maven Conflicts - Found the easy way</h1>
                <p class="lead">The simple way to get a good overview of your dependency tree and find version conflicts
                    in your maven builds.</p>
            </div>
        </div>
        <div class="row">
            <information-component class="pr-1 infoComp"></information-component>
            <JsonTreeView class="pl-1 jsonComp"></JsonTreeView>
        </div>

        <div class="footer pt-5 pb-4" style="text-align: center">
            Developed by Kenneth Lindalen <br>
            <a href="https://www.linkedin.com/in/kenneth-lindalen-1ba35a187/">
                <img src="./assets/icons/linkedin-brands.svg" alt="" class="social-icons"></a>
            <a href="https://github.com/KennethLindalen">
                <img src="./assets/icons/github-brands.svg" alt="" class="social-icons"></a>
            <a class="ml-1" href="https://www.buymeacoffee.com/kennethlindalen">
                <img src="./assets/icons/buymeacoffe.svg" alt=""></a>
        </div>
    </div>
</template>

<script>
import informationComponent from '@/components/Information-Component/Information-Component';
import JsonTreeView from '@/components/JsonTreeView-Component/JsonTreeView-Component';

export default {
    name: 'App',
    components: {
        informationComponent,
        JsonTreeView
    }
}
</script>

<style src="./stylesheet/Style.css" lang="css"></style>
<style scoped>
    .row {
        grid-gap: 0;
    }
</style>
