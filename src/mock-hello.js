
var mock_hello_classes = [
  {
    name: "Ltest/Hello;",
    parent: "Ljava/lang/Object;",
    accessFlags: 0,
    interfaces: [],
    staticFields: [],
    instanceFields: [],

    directMethods: [
      {
        name: "main",
        returnType: "V"
        params: ["[Ljava/lang/String;"],
        icode: [
          {op: "static-get", dest: 0, field:"Ljava/lang/System;.out:Ljava/io/PrintStream;"},
          {op: "move-const", dest: 1, value: 45},
          {op: "invoke", kind: "virtual", argumentRegisters: [0, 1], method: "Ljava/io/Printstream;.println"}
          {op: "return"}
        ],
      },
      {
        name: "<init>",
        returnType: "V"
        params: ["[Ljava/lang/String;"],
        icode: [
          {op: "invoke", kind: "direct", argumentRegisters: [0], method: "Ljava/lang/Object;.<init>"}
          {op: "return"}
        ],
      }
    ]

  },
]

