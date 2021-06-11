
import Blockly from "blockly";
import { createPlayground } from "@blockly/dev-tools";

const languageGen = {

    methods: {
        localCplayground() {
            Blockly.defineBlocksWithJsonArray(this.jsonArray);
      
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
                  return [code, Blockly.JavaScript.ORDER_ATOMIC];
                };

            codelabGenerator['void_setup'] = function(block) {
                const statement_members =
                    codelabGenerator.statementToCode(block, 'MEMBERS');
                const code = 'void setup() {\n' + statement_members + '\n}';
                return [code, Blockly.JavaScript.ORDER_ATOMIC];
                };

        codelabGenerator['serial_begin'] = function(block) {
            // const name = block.getFieldValue('MEMBER_NAME');
            const value = codelabGenerator.valueToCode(block, 'NAME',
                Blockly.JavaScript.ORDER_ATOMIC);
            const code = 'Serial.begin(' + value + ');';
            return code;
            };
        
    codelabGenerator['print_to_serial'] = function(block) {
        // const name = block.getFieldValue('MEMBER_NAME');
        const value = codelabGenerator.valueToCode(block, 'serialVal',
            Blockly.JavaScript.ORDER_ATOMIC);
        const code = 'Serial.print(' + value + ');';
        return code;
        };

    codelabGenerator['bound_rate'] = function(block) {
        const code = Number(block.getFieldValue('BNUM'));
        return [code, Blockly.JavaScript.ORDER_ATOMIC];
        };
      
              codelabGenerator.scrub_ = function(block, code, opt_thisOnly) {
                const nextBlock =
                    block.nextConnection && block.nextConnection.targetBlock();
                let nextCode = '';
                if (nextBlock) {
                    nextCode =
                        opt_thisOnly ? '' : '\n' + codelabGenerator.blockToCode(nextBlock);
                }
                return code +  nextCode;
              };
      
      
              playground.addGenerator("TME Education", codelabGenerator);
            });
          },
    },
}

export default languageGen;