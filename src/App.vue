<template>
  <div id="blocklyDiv" style="height: 480px; width: 100%"></div>
</template>

<script>
// import Blockly from "blockly";
// import { createPlayground } from "@blockly/dev-tools";
import maintoolbox from "./constants/toolbox.js";
import jsonArrayMixin from "./mixins/jsonArrayMixins.js"
import languageGen from "./mixins/languageGeneratorMixin.js"
import toolBoxMixin from "./mixins/toolboxMixin.js"
export default {
  name: "App",
  components: {},
  mixins: [jsonArrayMixin, languageGen, toolBoxMixin],
  data() {
    return {
      
    };
  },

  mounted() {
    this.localCplayground();
    console.log(maintoolbox);
  },

  methods: {
    
  },
};
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
</style>
