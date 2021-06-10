<template>
  <div id="blocklyDiv" style="height: 480px; width: 100%"></div>
</template>

<script>
import Blockly from "blockly";
import { createPlayground } from "@blockly/dev-tools";
import maintoolbox from "./constants/toolbox.js";
export default {
  name: "App",
  components: {},

  data() {
    return {
      defaultOptions: {
        comments: true,
        toolbox: `
              <xml id="toolbox" style="display: none">
              <category name="Initialize" colour="210" toolboxitemid="categoryId">
                <block type="setup"></block>
                <block type="loop"></block>
                <block type="serial_begin">
              </block>

                <block type="bound_rate" > <field name="BNUM">9600</field></block>
                <block type="string_input" />
                <block type="print_to_serial" />
              <block type="text"><field name="TEXT"/></block>
              <block type="logic_boolean"><field name="BOOL">TRUE</field></block>
              </category>

              <category name="LED" colour="20">
                <block type="turn_led">
                </block>
                
              </category>

              <category name="Sensors" colour="65">
                <block type="read_analog_pin">
                </block>
                <block type="analog_pins" />
                <block type="mapping_value" />

              </category>

              <category name="LCD" colour="120">
                <block type="turn_led">
                </block>

                <block type="object"/>
                <block type="member"></block>
                <block type="math_number"><field name="NUM">0</field></block>
                <block type="text"><field name="TEXT"/></block>
                <block type="logic_boolean"><field name="BOOL">TRUE</field></block>
                <block type="logic_null"/>
                <block type="lists_create_with"><mutation items="3"/></block>


              </category>

              <category name="Buttons" colour="230">
                <block type="check_button_status" />
                <block type="buttons" />
                <block type="buttons_states" />
              </category>

              <category name="Statements" colour="330">
                <block type="delay" />
                <block type="pin_mode" />
              </category>

              <category name="Constants" colour="290">
                <block type="input_output" />
                <block type="bound_rates" />
                <block type="led_state" />
                <block type="math_number" />
                
              </category>

              </xml>
              `,
      },
      plyg: undefined,
    };
  },

  mounted() {
    this.localCplayground();
    console.log(maintoolbox);
  },

  methods: {
    localCplayground() {
      Blockly.defineBlocksWithJsonArray([

        {
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
          },
        {
          type: "turn_led",
          message0: "Turn LED %1",
          args0: [
            {
              type: "input_value",
              name: "NAME",
            },
          ],
          previousStatement: null,
          nextStatement: null,
          colour: 20,
          tooltip: "",
          helpUrl: "",
        },

          {
            type: "read_analog_pin",
            message0: "Read Analog Pin %1 %2",
            args0: [
              {
                "type": "input_dummy"
              },
              {
                "type": "input_value",
                "name": "NAME"
              }
            ],
            inputsInline: true,
            output: null,
            colour: 230,
            tooltip: "Check Button Status",
            helpUrl: ""
          },

          {
            type: "mapping_value",
            message0: "Map value %1 from %2 to %3",
            args0: [
              {
                "type": "input_value",
                 "name": "value"
              },
              {
                "type": "input_value",
                "name": "from"
              },
              {
                "type": "input_value",
                "name": "to"
              }
            ],
            inputsInline: true,
            output: null,
            colour: 230,
            tooltip: "Check Button Status",
            helpUrl: ""
          },

        {
        type: "check_button_status",
        message0: "Check if Button # %1 %2 IS %3 %4",
        args0: [
          {
            type: "input_dummy"
          },
          {
            type: "input_value",
            name: "NAME"
          },
          {
            type: "input_dummy"
          },
          {
            type: "input_value",
            name: "check_button_status"
          }
        ],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        colour: 230,
        tooltip: "Check Button Status",
        helpUrl: ""
      },

        {
          type: "delay",
          message0: " Delay %1",
          args0: [
            {
              type: "input_value",
              name: "NAME",
            },
          ],
          previousStatement: null,
          nextStatement: null,
          colour: 330,
          tooltip: "",
          helpUrl: "",
        },

        {
          type: "serial_begin",
          message0: "Serial.begin %1",
          args0: [
            {
              type: "input_value",
              name: "NAME",
            },
          ],
          previousStatement: null,
          nextStatement: null,
          colour: 230,
          tooltip: "",
          helpUrl: "",
        },

        {
          type: "pin_mode",
          message0: "Set Pin %1 %2",
          args0: [
            {
              type: "field_dropdown",
              name: "NAME",
              options: [
                ["D4", "D4"],
                ["D5", "D5"],
                ["D6", "D6"],
                ["D7", "D7"],
                ["D8", "D8"],
                ["D9", "D9"],
                ["D10", "D10"],
                ["D11", "D11"],
                ["D13", "D13"],
              ],
            },
            {
              type: "input_value",
              name: "NAME",
            },
          ],
          inputsInline: false,
          previousStatement: null,
          nextStatement: null,
          colour: 230,
          tooltip: "",
          helpUrl: "",
        },

        {
          type: "bound_rates",
          message0: "%1",
          args0: [
            {
              type: "field_dropdown",
              name: "NAME",
              options: [
                ["9600", "9600"],
                ["112500", "112500"],
              ],
            },
          ],
          output: null,
          colour: 290,
          tooltip: "",
          helpUrl: "",
        },
        {
  "type": "bound_rate",
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "BNUM",
      "options": [
        [
          "9600",
          "9600"
        ],
        [
          "112500",
          "112500"
        ]
      ]
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "string_input",
  "message0": "%1",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "default"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "print_to_serial",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_label_serializable",
      "name": "NAME",
      "text": "Print to Serial"
    },
    {
      "type": "input_value",
      "name": "serialVal"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
        {
          type: "led_state",
          message0: "%1",
          args0: [
            {
              type: "field_dropdown",
              name: "NAME",
              options: [
                ["ON", "ON"],
                ["OFF", "OFF"],
              ],
            },
          ],
          output: null,
          colour: 290,
          tooltip: "",
          helpUrl: "",
        },

        {
          type: "input_output",
          message0: "%1",
          args0: [
            {
              type: "field_dropdown",
              name: "NAME",
              options: [
                ["INPUT", "INPUT"],
                ["OUTPUT", "OUTPUT"],
              ],
            },
          ],
          output: null,
          colour: 290,
          tooltip: "",
          helpUrl: "",
        },
          {
          type: "analog_pins",
          message0: "%1",
          args0: [
            {
              type: "field_dropdown",
              name: "NAME",
              options: [
                ["A0", "A0"],
                ["A1", "A1"],
                ["A2", "A2"],
                ["A3", "A3"],
                ["A4", "A4"],
                ["A5", "A5"],
              ],
            },
          ],
          output: null,
          colour: 290,
          tooltip: "Check Button Status",
          helpUrl: "",
        },
        {
          type: "buttons",
          message0: "%1",
          args0: [
            {
              type: "field_dropdown",
              name: "NAME",
              options: [
                ["D4", "D4"],
                ["D5", "D5"],
                ["D6", "D6"],
                ["D7", "D7"],
                ["D8", "D8"],
              ],
            },
          ],
          output: null,
          colour: 290,
          tooltip: "Check Button Status",
          helpUrl: "",
        },
        {
          type: "buttons_states",
          message0: "%1",
          args0: [
            {
              type: "field_dropdown",
              name: "NAME",
              options: [
                ["ON", "ON"],
                ["OFF", "OFF"],
               
              ],
            },
          ],
          output: null,
          colour: 290,
          tooltip: "Check Button Status",
          helpUrl: "",
        },
        {
          type: "setup",
          message0: "Setup %1",
          args0: [
            {
              type: "input_statement",
              name: "NAME",
            },
          ],
          colour: 160,
          tooltip: "",
          helpUrl: "",
        },

        {
          type: "loop",
          message0: "Main %1",
          args0: [
            {
              type: "input_statement",
              name: "NAME",
            },
          ],
          colour: 160,
          tooltip: "",
          helpUrl: "",
        },

      ]);

      // eslint-disable-next-line no-unused-vars
      createPlayground(
        document.getElementById("blocklyDiv"),
        // eslint-disable-next-line no-unused-vars
        (blocklyDiv, options) => {
          return Blockly.inject(blocklyDiv, this.defaultOptions);
        },
        this.defaultOptions
      ).then(function (playground) {
        const codelabGenerator = new Blockly.Generator("JSON");

        // // eslint-disable-next-line no-unused-vars
        // codelabGenerator['string_input'] = function(block) {
        //   const code = block.getFieldValue('serialVal');
        //   return [code, codelabGenerator.PRECEDENCE];
        // };

        

        // eslint-disable-next-line no-unused-vars
        codelabGenerator['logic_null'] = function(block) {
          return ['null', codelabGenerator.PRECEDENCE];
        };

        codelabGenerator['text'] = function(block) {
            var textValue = block.getFieldValue('TEXT');
            var code = '"' + textValue + '"';
            return [code, Blockly.JavaScript.ORDER_ATOMIC];
          };

        codelabGenerator['math_number'] = function(block) {
          const code = Number(block.getFieldValue('NUM'));
          return [code, Blockly.JavaScript.ORDER_ATOMIC];
        };

        codelabGenerator['logic_boolean'] = function(block) {
          const code = (block.getFieldValue('BOOL') == 'TRUE') ? 'true' : 'false';
          return [code, Blockly.JavaScript.ORDER_ATOMIC];
        };

        codelabGenerator['member'] = function(block) {
            const name = block.getFieldValue('MEMBER_NAME');
            const value = codelabGenerator.valueToCode(block, 'MEMBER_VALUE',
                Blockly.JavaScript.ORDER_ATOMIC);
            const code = '"' + name + '": ' + value;
            return code;
          };

        codelabGenerator['object'] = function(block) {
            const statement_members =
                codelabGenerator.statementToCode(block, 'MEMBERS');
            const code = '{\n' + statement_members + '\n}';
            return [code, codelabGenerator.PRECEDENCE];
          };

        codelabGenerator.scrub_ = function(block, code, opt_thisOnly) {
          const nextBlock =
              block.nextConnection && block.nextConnection.targetBlock();
          let nextCode = '';
          if (nextBlock) {
              nextCode =
                  opt_thisOnly ? '' : ',\n' + codelabGenerator.blockToCode(nextBlock);
          }
          return code +  nextCode;
        };


        playground.addGenerator("TME Education", codelabGenerator);
      });
    },
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
