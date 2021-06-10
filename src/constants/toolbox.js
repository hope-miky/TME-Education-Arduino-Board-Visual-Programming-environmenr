


var maintoolbox = `
<xml id="toolbox" style="display: none">
<category name="Initialize" colour="210" toolboxitemid="categoryId">
  <block type="setup"></block>
  <block type="loop"></block>

  <block type="serial_begin">
  <value name="NAME">
    <block type="bound_rates">
      <field name="NAME">9600</field>
    </block>
  </value>
</block>


<block type="text"><field name="TEXT"/></block>
<block type="logic_boolean"><field name="BOOL">TRUE</field></block>
</category>

<category name="LED" colour="20">
  <block type="turn_led">

  </block>
</category>

<category name="Sensors" colour="65">
  <block type="turn_led">
  </block>
</category>

<category name="LCD" colour="120">
  <block type="turn_led">
  </block>
</category>

<category name="OLED" colour="160">
  <block type="turn_led">
  </block>
</category>

<category name="7SEG" colour="210">
  <block type="turn_led">
  </block>
</category>

<category name="Buttons" colour="230">
  <block type="turn_led">
  </block>
</category>

<category name="IR" colour="260">
  <block type="turn_led">
  </block>
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
export default{
    maintoolbox
}