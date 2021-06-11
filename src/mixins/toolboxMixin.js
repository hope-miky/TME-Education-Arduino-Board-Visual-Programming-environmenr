


const toolBoxMixin = {
    data() {
        return {
            defaultOptions: {
                comments: true,
                plyg: undefined,
                toolbox: `
              <xml id="toolbox" style="display: none">
              <category name="Initialize" colour="210" toolboxitemid="categoryId">
                <block type="void_setup"></block>
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
              `
            },

        }
    }
}


export default toolBoxMixin;
