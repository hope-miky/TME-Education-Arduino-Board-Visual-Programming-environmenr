


const jsonArrayMixin = {

    data() {
        return {
            jsonArray: [
    
                {
                    "type": "object",
                    "message0": "{ %1 }",
                    "args0": [
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
                  type: "void_setup",
                  message0: "Void Setup %1",
                  args0: [
                    {
                      type: "input_statement",
                      name: "MEMBERS",
                    },
                  ],
                  output: null,
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
        
              ]
        }
    },
}

export default jsonArrayMixin;