<template>
  <div id="blocklyDiv" style="height: 480px; width: 100%;"></div>

  <xml id="toolbox" style="display: none">
  <block type="object"/>
<block type="member"></block>
<block type="math_number"><field name="NUM">0</field></block>
<block type="text"><field name="TEXT"/></block>
<block type="logic_boolean"><field name="BOOL">TRUE</field></block>
<block type="logic_null"/>
<block type="lists_create_with"><mutation items="3"/></block>


</xml>


</template>

<script>
import Blockly from 'blockly';
import {createPlayground} from '@blockly/dev-tools';

export default {
  name: 'App',
  components: {
    
  },

  data () {
    return {
          defaultOptions: {
        comments: true,
        
        toolbox: `
              <xml id="toolbox" style="display: none">
              <block type="object"/>
              <block type="member"></block>
              <block type="math_number"><field name="NUM">0</field></block>
              <block type="text"><field name="TEXT"/></block>
              <block type="logic_boolean"><field name="BOOL">TRUE</field></block>
              <block type="logic_null"/>
              <block type="lists_create_with"><mutation items="3"/></block>
              </xml>
              `,
        
  },
  plyg: undefined, 
    }
  },

  mounted () {

    this.localCplayground();

  },

  methods: {


    localCplayground(){

       Blockly.defineBlocksWithJsonArray([{
              "type": "object",
              "message0": "{ %1 %2 }",
              "args0": [
                {
                  "type": "input_dummy"
                },
                {
                  "type": "input_statement",
                  "name": "MEMBERS"
                }
              ],
              "output": null,
              "colour": 230,
            },
            {
              "type": "member",
              "message0": "%1 %2 %3",
              "args0": [
                {
                  "type": "field_input",
                  "name": "MEMBER_NAME",
                  "text": ""
                },
                {
                  "type": "field_label",
                  "name": "COLON",
                  "text": ":"
                },
                {
                  "type": "input_value",
                  "name": "MEMBER_VALUE"
                }
              ],
              "previousStatement": null,
              "nextStatement": null,
              "colour": 230,
            }]);


        // eslint-disable-next-line no-unused-vars
        createPlayground(document.getElementById('blocklyDiv'), (blocklyDiv, options) => {
            return Blockly.inject(blocklyDiv, this.defaultOptions);
          }, this.defaultOptions).then(function(playground) {

              const codelabGenerator = new Blockly.Generator('JSON');
              playground.addGenerator('TME Education', codelabGenerator)


            });


      

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
</style>
