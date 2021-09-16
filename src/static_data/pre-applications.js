export const staticPreApplication = {
  id: '1b791472-1294-4743-91e3-be1518abe75f',
  questionnaire: {
    version: 8,
    layout: [
      {
        ui: {
          title: 'Your business',
        },
        meta: {
          composition: 'section',
        },
        items: [
          'BusinessName',
          'LinkEmail',
          'RequestedTypesOfInsurance',
          'NumberOfLocations',
          {
            ui: {
              title: 'Where is your business located?',
            },
            meta: {
              composition: 'group',
            },
            items: ['Location1Address', 'Location2Address', 'Location3Address', 'Location4Address', 'Location5Address'],
          },
          {
            ui: {
              title: 'What does your business do?',
              description:
                'Be as specific as possible. You may type to search or scroll through our options to make a selection.',
            },
            meta: {
              composition: 'section',
            },
            items: [
              {
                ui: {
                  title: '{{Location1Address:Primary Location}}',
                },
                meta: {
                  composition: 'section',
                },
                items: [
                  'Location1ClassOfBusiness',
                  'Location1BusinessDescription',
                  {
                    ui: {
                      title: 'Work Comp Classes',
                    },
                    meta: {
                      composition: 'group',
                    },
                    items: [
                      'Location1Wc1Code',
                      'Location1Wc2Code',
                      'Location1Wc3Code',
                      'Location1Wc4Code',
                      'Location1Wc5Code',
                    ],
                  },
                ],
              },
              {
                ui: {
                  title: '{{Location2Address:Location 2}}',
                },
                meta: {
                  composition: 'section',
                },
                items: [
                  'Location2ClassOfBusiness',
                  'Location2BusinessDescription',
                  {
                    ui: {
                      title: 'Work Comp Classes',
                    },
                    meta: {
                      composition: 'group',
                    },
                    items: [
                      'Location2Wc1Code',
                      'Location2Wc2Code',
                      'Location2Wc3Code',
                      'Location2Wc4Code',
                      'Location2Wc5Code',
                    ],
                  },
                ],
              },
              {
                ui: {
                  title: '{{Location3Address:Location 3}}',
                },
                meta: {
                  composition: 'section',
                },
                items: [
                  'Location3ClassOfBusiness',
                  'Location3BusinessDescription',
                  {
                    ui: {
                      title: 'Work Comp Classes',
                    },
                    meta: {
                      composition: 'group',
                    },
                    items: [
                      'Location3Wc1Code',
                      'Location3Wc2Code',
                      'Location3Wc3Code',
                      'Location3Wc4Code',
                      'Location3Wc5Code',
                    ],
                  },
                ],
              },
              {
                ui: {
                  title: '{{Location4Address:Location 4}}',
                },
                meta: {
                  composition: 'section',
                },
                items: [
                  'Location4ClassOfBusiness',
                  'Location4BusinessDescription',
                  {
                    ui: {
                      title: 'Work Comp Classes',
                    },
                    meta: {
                      composition: 'group',
                    },
                    items: [
                      'Location4Wc1Code',
                      'Location4Wc2Code',
                      'Location4Wc3Code',
                      'Location4Wc4Code',
                      'Location4Wc5Code',
                    ],
                  },
                ],
              },
              {
                ui: {
                  title: '{{Location5Address:Location 5}}',
                },
                meta: {
                  composition: 'section',
                },
                items: [
                  'Location5ClassOfBusiness',
                  'Location5BusinessDescription',
                  {
                    ui: {
                      title: 'Work Comp Classes',
                    },
                    meta: {
                      composition: 'group',
                    },
                    items: [
                      'Location5Wc1Code',
                      'Location5Wc2Code',
                      'Location5Wc3Code',
                      'Location5Wc4Code',
                      'Location5Wc5Code',
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    questions: [
      {
        id: 'BusinessName',
        question: 'What is your __business’s name__?',
        type: 'SingleLine',
        ui: {
          description:
            'This name will appear on your policy documents. If you’re a sole proprietor please enter your personal name, or your trading name.',
          label: 'Business name',
        },
        validation: [],
        required: true,
      },
      {
        id: 'LinkEmail',
        question: 'What is your __email__ address?',
        type: 'SingleLine',
        required: true,
        ui: {
          validation: {
            pattern: 'Enter a valid email address, for example: myname@example.com',
          },
          description:
            'This will help us get in touch with you should you need our assistance or need to save this application for later.',
          label: 'Email',
        },
        validation: [
          {
            type: 'pattern',
            pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z0-9]{2,}',
          },
        ],
      },
      {
        id: 'RequestedTypesOfInsurance',
        question: 'What __type of insurance__ does your business need?',
        type: 'ProductType',
        required: true,
        ui: {
          hint: [
            'Types of insurance',
            '**Professional Liability** (or Errors & Omissions) insurance protects your business if you are sued for negligently performing your services, even if you haven’t made a mistake.',
            '**General Liability** (or commercial liability) insurance, provides coverage for your business against claims made by others including bodily injury, damage to property, or personal injury.',
            '**Property Insurance** protects your business’s physical assets like furniture and equipment.',
            '**Business Owner’s Policy** combines general liability insurance and property insurance.',
          ],
        },
        validation: [],
        options: [
          {
            key: 'eo',
            label: 'Professional Liability',
          },
          {
            key: 'gl',
            label: 'General Liability',
          },
          {
            key: 'bop',
            label: 'Business Owner’s Policy',
          },
          {
            key: 'wc',
            label: 'Workers Compensation',
          },
        ],
      },
      {
        id: 'NumberOfLocations',
        question: '__How many locations__ does your business occupy?',
        type: 'Select',
        ui: {
          label: 'Number of locations',
        },
        validation: [],
        options: [
          {
            key: 1,
            label: '1',
          },
          {
            key: 2,
            label: '2',
          },
          {
            key: 3,
            label: '3',
          },
          {
            key: 4,
            label: '4',
          },
          {
            key: 5,
            label: '5',
          },
        ],
        required: true,
        default: 1,
      },
      {
        id: 'Location1Address',
        question: 'Where is your business located (primary location)?',
        questionWithinGroup: 'Primary Location',
        condition: ['>=', '$NumberOfLocations', 1],
        type: 'Address',
        ui: {},
        validation: [],
        required: true,
      },
      {
        id: 'Location1ClassOfBusiness',
        question: 'What does your business do at {{Location1Address:Location #1}}?',
        questionWithinGroup: '{{Location1Address:Location #1}}',
        condition: ['>=', '$NumberOfLocations', 1],
        type: 'ClassOfBusiness',
        ui: {
          hint: [
            'Describing your business',
            '**Retail** – Your Business primarily sells products/services to the public at this location.',
            '**Shop** –  Your Business primarily does work (usually with tools) at this location. Customers are rarely at this location.',
            '**Office** – Your Business primarily does work (usually without tools) and/or meets with customers at this location.',
            '**Condominium office** – Your Business primarily does work (usually without tools) and/or meets with customers at this condominium office unit that your business owns.',
            '**Lessor’s risk only** – Your Business owns this space but does not operate a business at this location.',
          ],
        },
        validation: [],
        required: true,
      },
      {
        id: 'Location1BusinessDescription',
        question: 'What is the nature of your business?',
        questionWithinGroup: 'Please describe the nature of your business.',
        condition: ['AND', ['==', '$Location1ClassOfBusiness', '000000'], ['>=', '$NumberOfLocations', 1]],
        type: 'MultiLine',
        required: true,
        ui: {},
        validation: [
          {
            type: 'length',
            min: 1,
            max: 255,
          },
        ],
      },
      {
        id: 'Location1Wc1Code',
        question: '{{Location1Address:Location 1}} Workers Comp Class Code 1',
        questionWithinGroup: 'Workers Comp Class Code',
        condition: ['AND', ['>=', '$NumberOfLocations', 1], ['IN', '$RequestedTypesOfInsurance', 'wc']],
        type: 'WcClassCode',
        ui: {
          hint: [
            'Workers Compensation Class Code',
            'This classification code is also sometimes referred to as your National Council on Compensation Insurance or NCO Class Code. If you are looking at the rating page of your current workers compensation policy (usually one of the first 5-10 pages of your policy that will have a ton of math on it), you should see one or more class codes (4 digit numbers) that each correspond to a specific state and amount of payroll. This info is usually displayed as a few separate line items (one for each bucket of State, Class Code, and payroll).',
          ],
        },
        validation: [],
        required: true,
      },
      {
        id: 'Location1Wc2Code',
        question: '{{Location1Address:Location 1}} Workers Comp Class Code 2',
        questionWithinGroup: 'Workers Comp Class Code',
        condition: [
          'AND',
          ['>=', '$NumberOfLocations', 1],
          ['PRESENT', '$Location1Wc1Code'],
          ['IN', '$RequestedTypesOfInsurance', 'wc'],
        ],
        type: 'WcClassCode',
        ui: {
          hint: [
            'Workers Compensation Class Code',
            'This classification code is also sometimes referred to as your National Council on Compensation Insurance or NCO Class Code. If you are looking at the rating page of your current workers compensation policy (usually one of the first 5-10 pages of your policy that will have a ton of math on it), you should see one or more class codes (4 digit numbers) that each correspond to a specific state and amount of payroll. This info is usually displayed as a few separate line items (one for each bucket of State, Class Code, and payroll).',
          ],
        },
        validation: [],
        required: false,
      },
      {
        id: 'Location1Wc3Code',
        question: '{{Location1Address:Location 1}} Workers Comp Class Code 3',
        questionWithinGroup: 'Workers Comp Class Code',
        condition: [
          'AND',
          ['>=', '$NumberOfLocations', 1],
          ['PRESENT', '$Location1Wc2Code'],
          ['IN', '$RequestedTypesOfInsurance', 'wc'],
        ],
        type: 'WcClassCode',
        ui: {
          hint: [
            'Workers Compensation Class Code',
            'This classification code is also sometimes referred to as your National Council on Compensation Insurance or NCO Class Code. If you are looking at the rating page of your current workers compensation policy (usually one of the first 5-10 pages of your policy that will have a ton of math on it), you should see one or more class codes (4 digit numbers) that each correspond to a specific state and amount of payroll. This info is usually displayed as a few separate line items (one for each bucket of State, Class Code, and payroll).',
          ],
        },
        validation: [],
        required: false,
      },
      {
        id: 'Location1Wc4Code',
        question: '{{Location1Address:Location 1}} Workers Comp Class Code 4',
        questionWithinGroup: 'Workers Comp Class Code',
        condition: [
          'AND',
          ['>=', '$NumberOfLocations', 1],
          ['PRESENT', '$Location1Wc3Code'],
          ['IN', '$RequestedTypesOfInsurance', 'wc'],
        ],
        type: 'WcClassCode',
        ui: {
          hint: [
            'Workers Compensation Class Code',
            'This classification code is also sometimes referred to as your National Council on Compensation Insurance or NCO Class Code. If you are looking at the rating page of your current workers compensation policy (usually one of the first 5-10 pages of your policy that will have a ton of math on it), you should see one or more class codes (4 digit numbers) that each correspond to a specific state and amount of payroll. This info is usually displayed as a few separate line items (one for each bucket of State, Class Code, and payroll).',
          ],
        },
        validation: [],
        required: false,
      },
      {
        id: 'Location1Wc5Code',
        question: '{{Location1Address:Location 1}} Workers Comp Class Code 5',
        questionWithinGroup: 'Workers Comp Class Code',
        condition: [
          'AND',
          ['>=', '$NumberOfLocations', 1],
          ['PRESENT', '$Location1Wc4Code'],
          ['IN', '$RequestedTypesOfInsurance', 'wc'],
        ],
        type: 'WcClassCode',
        ui: {
          hint: [
            'Workers Compensation Class Code',
            'This classification code is also sometimes referred to as your National Council on Compensation Insurance or NCO Class Code. If you are looking at the rating page of your current workers compensation policy (usually one of the first 5-10 pages of your policy that will have a ton of math on it), you should see one or more class codes (4 digit numbers) that each correspond to a specific state and amount of payroll. This info is usually displayed as a few separate line items (one for each bucket of State, Class Code, and payroll).',
          ],
        },
        validation: [],
        required: false,
      },
      {
        id: 'Location2Address',
        question: 'Where is your business located (location #2)?',
        questionWithinGroup: 'Location #2',
        condition: ['>=', '$NumberOfLocations', 2],
        type: 'Address',
        ui: {},
        validation: [],
        required: true,
      },
      {
        id: 'Location2ClassOfBusiness',
        question: 'What does your business do at {{Location2Address:Location #2}}?',
        questionWithinGroup: '{{Location2Address:Location #2}}',
        condition: ['>=', '$NumberOfLocations', 2],
        type: 'ClassOfBusiness',
        ui: {
          hint: [
            'Describing your business',
            '**Retail** – Your Business primarily sells products/services to the public at this location.',
            '**Shop** –  Your Business primarily does work (usually with tools) at this location. Customers are rarely at this location.',
            '**Office** – Your Business primarily does work (usually without tools) and/or meets with customers at this location.',
            '**Condominium office** – Your Business primarily does work (usually without tools) and/or meets with customers at this condominium office unit that your business owns.',
            '**Lessor’s risk only** – Your Business owns this space but does not operate a business at this location.',
          ],
        },
        validation: [],
        required: true,
      },
      {
        id: 'Location2BusinessDescription',
        question: 'What is the nature of your business?',
        questionWithinGroup: 'Please describe the nature of your business.',
        condition: ['AND', ['==', '$Location2ClassOfBusiness', '000000'], ['>=', '$NumberOfLocations', 2]],
        type: 'MultiLine',
        required: true,
        ui: {},
        validation: [
          {
            type: 'length',
            min: 1,
            max: 255,
          },
        ],
      },
      {
        id: 'Location2Wc1Code',
        question: '{{Location2Address:Location 2}} Workers Comp Class Code 1',
        questionWithinGroup: 'Workers Comp Class Code',
        condition: ['AND', ['>=', '$NumberOfLocations', 2], ['IN', '$RequestedTypesOfInsurance', 'wc']],
        type: 'WcClassCode',
        ui: {
          hint: [
            'Workers Compensation Class Code',
            'This classification code is also sometimes referred to as your National Council on Compensation Insurance or NCO Class Code. If you are looking at the rating page of your current workers compensation policy (usually one of the first 5-10 pages of your policy that will have a ton of math on it), you should see one or more class codes (4 digit numbers) that each correspond to a specific state and amount of payroll. This info is usually displayed as a few separate line items (one for each bucket of State, Class Code, and payroll).',
          ],
        },
        validation: [],
        required: true,
      },
      {
        id: 'Location2Wc2Code',
        question: '{{Location2Address:Location 2}} Workers Comp Class Code 2',
        questionWithinGroup: 'Workers Comp Class Code',
        condition: [
          'AND',
          ['>=', '$NumberOfLocations', 2],
          ['PRESENT', '$Location2Wc1Code'],
          ['IN', '$RequestedTypesOfInsurance', 'wc'],
        ],
        type: 'WcClassCode',
        ui: {
          hint: [
            'Workers Compensation Class Code',
            'This classification code is also sometimes referred to as your National Council on Compensation Insurance or NCO Class Code. If you are looking at the rating page of your current workers compensation policy (usually one of the first 5-10 pages of your policy that will have a ton of math on it), you should see one or more class codes (4 digit numbers) that each correspond to a specific state and amount of payroll. This info is usually displayed as a few separate line items (one for each bucket of State, Class Code, and payroll).',
          ],
        },
        validation: [],
        required: false,
      },
      {
        id: 'Location2Wc3Code',
        question: '{{Location2Address:Location 2}} Workers Comp Class Code 3',
        questionWithinGroup: 'Workers Comp Class Code',
        condition: [
          'AND',
          ['>=', '$NumberOfLocations', 2],
          ['PRESENT', '$Location2Wc2Code'],
          ['IN', '$RequestedTypesOfInsurance', 'wc'],
        ],
        type: 'WcClassCode',
        ui: {
          hint: [
            'Workers Compensation Class Code',
            'This classification code is also sometimes referred to as your National Council on Compensation Insurance or NCO Class Code. If you are looking at the rating page of your current workers compensation policy (usually one of the first 5-10 pages of your policy that will have a ton of math on it), you should see one or more class codes (4 digit numbers) that each correspond to a specific state and amount of payroll. This info is usually displayed as a few separate line items (one for each bucket of State, Class Code, and payroll).',
          ],
        },
        validation: [],
        required: false,
      },
      {
        id: 'Location2Wc4Code',
        question: '{{Location2Address:Location 2}} Workers Comp Class Code 4',
        questionWithinGroup: 'Workers Comp Class Code',
        condition: [
          'AND',
          ['>=', '$NumberOfLocations', 2],
          ['PRESENT', '$Location2Wc3Code'],
          ['IN', '$RequestedTypesOfInsurance', 'wc'],
        ],
        type: 'WcClassCode',
        ui: {
          hint: [
            'Workers Compensation Class Code',
            'This classification code is also sometimes referred to as your National Council on Compensation Insurance or NCO Class Code. If you are looking at the rating page of your current workers compensation policy (usually one of the first 5-10 pages of your policy that will have a ton of math on it), you should see one or more class codes (4 digit numbers) that each correspond to a specific state and amount of payroll. This info is usually displayed as a few separate line items (one for each bucket of State, Class Code, and payroll).',
          ],
        },
        validation: [],
        required: false,
      },
      {
        id: 'Location2Wc5Code',
        question: '{{Location2Address:Location 2}} Workers Comp Class Code 5',
        questionWithinGroup: 'Workers Comp Class Code',
        condition: [
          'AND',
          ['>=', '$NumberOfLocations', 2],
          ['PRESENT', '$Location2Wc4Code'],
          ['IN', '$RequestedTypesOfInsurance', 'wc'],
        ],
        type: 'WcClassCode',
        ui: {
          hint: [
            'Workers Compensation Class Code',
            'This classification code is also sometimes referred to as your National Council on Compensation Insurance or NCO Class Code. If you are looking at the rating page of your current workers compensation policy (usually one of the first 5-10 pages of your policy that will have a ton of math on it), you should see one or more class codes (4 digit numbers) that each correspond to a specific state and amount of payroll. This info is usually displayed as a few separate line items (one for each bucket of State, Class Code, and payroll).',
          ],
        },
        validation: [],
        required: false,
      },
      {
        id: 'Location3Address',
        question: 'Where is your business located (location #3)?',
        questionWithinGroup: 'Location #3',
        condition: ['>=', '$NumberOfLocations', 3],
        type: 'Address',
        ui: {},
        validation: [],
        required: true,
      },
      {
        id: 'Location3ClassOfBusiness',
        question: 'What does your business do at {{Location3Address:Location #3}}?',
        questionWithinGroup: '{{Location3Address:Location #3}}',
        condition: ['>=', '$NumberOfLocations', 3],
        type: 'ClassOfBusiness',
        ui: {
          hint: [
            'Describing your business',
            '**Retail** – Your Business primarily sells products/services to the public at this location.',
            '**Shop** –  Your Business primarily does work (usually with tools) at this location. Customers are rarely at this location.',
            '**Office** – Your Business primarily does work (usually without tools) and/or meets with customers at this location.',
            '**Condominium office** – Your Business primarily does work (usually without tools) and/or meets with customers at this condominium office unit that your business owns.',
            '**Lessor’s risk only** – Your Business owns this space but does not operate a business at this location.',
          ],
        },
        validation: [],
        required: true,
      },
      {
        id: 'Location3BusinessDescription',
        question: 'What is the nature of your business?',
        questionWithinGroup: 'Please describe the nature of your business.',
        condition: ['AND', ['==', '$Location3ClassOfBusiness', '000000'], ['>=', '$NumberOfLocations', 3]],
        type: 'MultiLine',
        required: true,
        ui: {},
        validation: [
          {
            type: 'length',
            min: 1,
            max: 255,
          },
        ],
      },
      {
        id: 'Location3Wc1Code',
        question: '{{Location3Address:Location 3}} Workers Comp Class Code 1',
        questionWithinGroup: 'Workers Comp Class Code',
        condition: ['AND', ['>=', '$NumberOfLocations', 3], ['IN', '$RequestedTypesOfInsurance', 'wc']],
        type: 'WcClassCode',
        ui: {
          hint: [
            'Workers Compensation Class Code',
            'This classification code is also sometimes referred to as your National Council on Compensation Insurance or NCO Class Code. If you are looking at the rating page of your current workers compensation policy (usually one of the first 5-10 pages of your policy that will have a ton of math on it), you should see one or more class codes (4 digit numbers) that each correspond to a specific state and amount of payroll. This info is usually displayed as a few separate line items (one for each bucket of State, Class Code, and payroll).',
          ],
        },
        validation: [],
        required: true,
      },
      {
        id: 'Location3Wc2Code',
        question: '{{Location3Address:Location 3}} Workers Comp Class Code 2',
        questionWithinGroup: 'Workers Comp Class Code',
        condition: [
          'AND',
          ['>=', '$NumberOfLocations', 3],
          ['PRESENT', '$Location3Wc1Code'],
          ['IN', '$RequestedTypesOfInsurance', 'wc'],
        ],
        type: 'WcClassCode',
        ui: {
          hint: [
            'Workers Compensation Class Code',
            'This classification code is also sometimes referred to as your National Council on Compensation Insurance or NCO Class Code. If you are looking at the rating page of your current workers compensation policy (usually one of the first 5-10 pages of your policy that will have a ton of math on it), you should see one or more class codes (4 digit numbers) that each correspond to a specific state and amount of payroll. This info is usually displayed as a few separate line items (one for each bucket of State, Class Code, and payroll).',
          ],
        },
        validation: [],
        required: false,
      },
      {
        id: 'Location3Wc3Code',
        question: '{{Location3Address:Location 3}} Workers Comp Class Code 3',
        questionWithinGroup: 'Workers Comp Class Code',
        condition: [
          'AND',
          ['>=', '$NumberOfLocations', 3],
          ['PRESENT', '$Location3Wc2Code'],
          ['IN', '$RequestedTypesOfInsurance', 'wc'],
        ],
        type: 'WcClassCode',
        ui: {
          hint: [
            'Workers Compensation Class Code',
            'This classification code is also sometimes referred to as your National Council on Compensation Insurance or NCO Class Code. If you are looking at the rating page of your current workers compensation policy (usually one of the first 5-10 pages of your policy that will have a ton of math on it), you should see one or more class codes (4 digit numbers) that each correspond to a specific state and amount of payroll. This info is usually displayed as a few separate line items (one for each bucket of State, Class Code, and payroll).',
          ],
        },
        validation: [],
        required: false,
      },
      {
        id: 'Location3Wc4Code',
        question: '{{Location3Address:Location 3}} Workers Comp Class Code 4',
        questionWithinGroup: 'Workers Comp Class Code',
        condition: [
          'AND',
          ['>=', '$NumberOfLocations', 3],
          ['PRESENT', '$Location3Wc3Code'],
          ['IN', '$RequestedTypesOfInsurance', 'wc'],
        ],
        type: 'WcClassCode',
        ui: {
          hint: [
            'Workers Compensation Class Code',
            'This classification code is also sometimes referred to as your National Council on Compensation Insurance or NCO Class Code. If you are looking at the rating page of your current workers compensation policy (usually one of the first 5-10 pages of your policy that will have a ton of math on it), you should see one or more class codes (4 digit numbers) that each correspond to a specific state and amount of payroll. This info is usually displayed as a few separate line items (one for each bucket of State, Class Code, and payroll).',
          ],
        },
        validation: [],
        required: false,
      },
      {
        id: 'Location3Wc5Code',
        question: '{{Location3Address:Location 3}} Workers Comp Class Code 5',
        questionWithinGroup: 'Workers Comp Class Code',
        condition: [
          'AND',
          ['>=', '$NumberOfLocations', 3],
          ['PRESENT', '$Location3Wc4Code'],
          ['IN', '$RequestedTypesOfInsurance', 'wc'],
        ],
        type: 'WcClassCode',
        ui: {
          hint: [
            'Workers Compensation Class Code',
            'This classification code is also sometimes referred to as your National Council on Compensation Insurance or NCO Class Code. If you are looking at the rating page of your current workers compensation policy (usually one of the first 5-10 pages of your policy that will have a ton of math on it), you should see one or more class codes (4 digit numbers) that each correspond to a specific state and amount of payroll. This info is usually displayed as a few separate line items (one for each bucket of State, Class Code, and payroll).',
          ],
        },
        validation: [],
        required: false,
      },
      {
        id: 'Location4Address',
        question: 'Where is your business located (location #4)?',
        questionWithinGroup: 'Location #4',
        condition: ['>=', '$NumberOfLocations', 4],
        type: 'Address',
        ui: {},
        validation: [],
        required: true,
      },
      {
        id: 'Location4ClassOfBusiness',
        question: 'What does your business do at {{Location4Address:Location #4}}?',
        questionWithinGroup: '{{Location4Address:Location #4}}',
        condition: ['>=', '$NumberOfLocations', 4],
        type: 'ClassOfBusiness',
        ui: {
          hint: [
            'Describing your business',
            '**Retail** – Your Business primarily sells products/services to the public at this location.',
            '**Shop** –  Your Business primarily does work (usually with tools) at this location. Customers are rarely at this location.',
            '**Office** – Your Business primarily does work (usually without tools) and/or meets with customers at this location.',
            '**Condominium office** – Your Business primarily does work (usually without tools) and/or meets with customers at this condominium office unit that your business owns.',
            '**Lessor’s risk only** – Your Business owns this space but does not operate a business at this location.',
          ],
        },
        validation: [],
        required: true,
      },
      {
        id: 'Location4BusinessDescription',
        question: 'What is the nature of your business?',
        questionWithinGroup: 'Please describe the nature of your business.',
        condition: ['AND', ['==', '$Location4ClassOfBusiness', '000000'], ['>=', '$NumberOfLocations', 4]],
        type: 'MultiLine',
        required: true,
        ui: {},
        validation: [
          {
            type: 'length',
            min: 1,
            max: 255,
          },
        ],
      },
      {
        id: 'Location4Wc1Code',
        question: '{{Location4Address:Location 4}} Workers Comp Class Code 1',
        questionWithinGroup: 'Workers Comp Class Code',
        condition: ['AND', ['>=', '$NumberOfLocations', 4], ['IN', '$RequestedTypesOfInsurance', 'wc']],
        type: 'WcClassCode',
        ui: {
          hint: [
            'Workers Compensation Class Code',
            'This classification code is also sometimes referred to as your National Council on Compensation Insurance or NCO Class Code. If you are looking at the rating page of your current workers compensation policy (usually one of the first 5-10 pages of your policy that will have a ton of math on it), you should see one or more class codes (4 digit numbers) that each correspond to a specific state and amount of payroll. This info is usually displayed as a few separate line items (one for each bucket of State, Class Code, and payroll).',
          ],
        },
        validation: [],
        required: true,
      },
      {
        id: 'Location4Wc2Code',
        question: '{{Location4Address:Location 4}} Workers Comp Class Code 2',
        questionWithinGroup: 'Workers Comp Class Code',
        condition: [
          'AND',
          ['>=', '$NumberOfLocations', 4],
          ['PRESENT', '$Location4Wc1Code'],
          ['IN', '$RequestedTypesOfInsurance', 'wc'],
        ],
        type: 'WcClassCode',
        ui: {
          hint: [
            'Workers Compensation Class Code',
            'This classification code is also sometimes referred to as your National Council on Compensation Insurance or NCO Class Code. If you are looking at the rating page of your current workers compensation policy (usually one of the first 5-10 pages of your policy that will have a ton of math on it), you should see one or more class codes (4 digit numbers) that each correspond to a specific state and amount of payroll. This info is usually displayed as a few separate line items (one for each bucket of State, Class Code, and payroll).',
          ],
        },
        validation: [],
        required: false,
      },
      {
        id: 'Location4Wc3Code',
        question: '{{Location4Address:Location 4}} Workers Comp Class Code 3',
        questionWithinGroup: 'Workers Comp Class Code',
        condition: [
          'AND',
          ['>=', '$NumberOfLocations', 4],
          ['PRESENT', '$Location4Wc2Code'],
          ['IN', '$RequestedTypesOfInsurance', 'wc'],
        ],
        type: 'WcClassCode',
        ui: {
          hint: [
            'Workers Compensation Class Code',
            'This classification code is also sometimes referred to as your National Council on Compensation Insurance or NCO Class Code. If you are looking at the rating page of your current workers compensation policy (usually one of the first 5-10 pages of your policy that will have a ton of math on it), you should see one or more class codes (4 digit numbers) that each correspond to a specific state and amount of payroll. This info is usually displayed as a few separate line items (one for each bucket of State, Class Code, and payroll).',
          ],
        },
        validation: [],
        required: false,
      },
      {
        id: 'Location4Wc4Code',
        question: '{{Location4Address:Location 4}} Workers Comp Class Code 4',
        questionWithinGroup: 'Workers Comp Class Code',
        condition: [
          'AND',
          ['>=', '$NumberOfLocations', 4],
          ['PRESENT', '$Location4Wc3Code'],
          ['IN', '$RequestedTypesOfInsurance', 'wc'],
        ],
        type: 'WcClassCode',
        ui: {
          hint: [
            'Workers Compensation Class Code',
            'This classification code is also sometimes referred to as your National Council on Compensation Insurance or NCO Class Code. If you are looking at the rating page of your current workers compensation policy (usually one of the first 5-10 pages of your policy that will have a ton of math on it), you should see one or more class codes (4 digit numbers) that each correspond to a specific state and amount of payroll. This info is usually displayed as a few separate line items (one for each bucket of State, Class Code, and payroll).',
          ],
        },
        validation: [],
        required: false,
      },
      {
        id: 'Location4Wc5Code',
        question: '{{Location4Address:Location 4}} Workers Comp Class Code 5',
        questionWithinGroup: 'Workers Comp Class Code',
        condition: [
          'AND',
          ['>=', '$NumberOfLocations', 4],
          ['PRESENT', '$Location4Wc4Code'],
          ['IN', '$RequestedTypesOfInsurance', 'wc'],
        ],
        type: 'WcClassCode',
        ui: {
          hint: [
            'Workers Compensation Class Code',
            'This classification code is also sometimes referred to as your National Council on Compensation Insurance or NCO Class Code. If you are looking at the rating page of your current workers compensation policy (usually one of the first 5-10 pages of your policy that will have a ton of math on it), you should see one or more class codes (4 digit numbers) that each correspond to a specific state and amount of payroll. This info is usually displayed as a few separate line items (one for each bucket of State, Class Code, and payroll).',
          ],
        },
        validation: [],
        required: false,
      },
      {
        id: 'Location5Address',
        question: 'Where is your business located (location #5)?',
        questionWithinGroup: 'Location #5',
        condition: ['>=', '$NumberOfLocations', 5],
        type: 'Address',
        ui: {},
        validation: [],
        required: true,
      },
      {
        id: 'Location5ClassOfBusiness',
        question: 'What does your business do at {{Location5Address:Location #5}}?',
        questionWithinGroup: '{{Location5Address:Location #5}}',
        condition: ['>=', '$NumberOfLocations', 5],
        type: 'ClassOfBusiness',
        ui: {
          hint: [
            'Describing your business',
            '**Retail** – Your Business primarily sells products/services to the public at this location.',
            '**Shop** –  Your Business primarily does work (usually with tools) at this location. Customers are rarely at this location.',
            '**Office** – Your Business primarily does work (usually without tools) and/or meets with customers at this location.',
            '**Condominium office** – Your Business primarily does work (usually without tools) and/or meets with customers at this condominium office unit that your business owns.',
            '**Lessor’s risk only** – Your Business owns this space but does not operate a business at this location.',
          ],
        },
        validation: [],
        required: true,
      },
      {
        id: 'Location5BusinessDescription',
        question: 'What is the nature of your business?',
        questionWithinGroup: 'Please describe the nature of your business.',
        condition: ['AND', ['==', '$Location5ClassOfBusiness', '000000'], ['>=', '$NumberOfLocations', 5]],
        type: 'MultiLine',
        required: true,
        ui: {},
        validation: [
          {
            type: 'length',
            min: 1,
            max: 255,
          },
        ],
      },
      {
        id: 'Location5Wc1Code',
        question: '{{Location5Address:Location 5}} Workers Comp Class Code 1',
        questionWithinGroup: 'Workers Comp Class Code',
        condition: ['AND', ['>=', '$NumberOfLocations', 5], ['IN', '$RequestedTypesOfInsurance', 'wc']],
        type: 'WcClassCode',
        ui: {
          hint: [
            'Workers Compensation Class Code',
            'This classification code is also sometimes referred to as your National Council on Compensation Insurance or NCO Class Code. If you are looking at the rating page of your current workers compensation policy (usually one of the first 5-10 pages of your policy that will have a ton of math on it), you should see one or more class codes (4 digit numbers) that each correspond to a specific state and amount of payroll. This info is usually displayed as a few separate line items (one for each bucket of State, Class Code, and payroll).',
          ],
        },
        validation: [],
        required: true,
      },
      {
        id: 'Location5Wc2Code',
        question: '{{Location5Address:Location 5}} Workers Comp Class Code 2',
        questionWithinGroup: 'Workers Comp Class Code',
        condition: [
          'AND',
          ['>=', '$NumberOfLocations', 5],
          ['PRESENT', '$Location5Wc1Code'],
          ['IN', '$RequestedTypesOfInsurance', 'wc'],
        ],
        type: 'WcClassCode',
        ui: {
          hint: [
            'Workers Compensation Class Code',
            'This classification code is also sometimes referred to as your National Council on Compensation Insurance or NCO Class Code. If you are looking at the rating page of your current workers compensation policy (usually one of the first 5-10 pages of your policy that will have a ton of math on it), you should see one or more class codes (4 digit numbers) that each correspond to a specific state and amount of payroll. This info is usually displayed as a few separate line items (one for each bucket of State, Class Code, and payroll).',
          ],
        },
        validation: [],
        required: false,
      },
      {
        id: 'Location5Wc3Code',
        question: '{{Location5Address:Location 5}} Workers Comp Class Code 3',
        questionWithinGroup: 'Workers Comp Class Code',
        condition: [
          'AND',
          ['>=', '$NumberOfLocations', 5],
          ['PRESENT', '$Location5Wc2Code'],
          ['IN', '$RequestedTypesOfInsurance', 'wc'],
        ],
        type: 'WcClassCode',
        ui: {
          hint: [
            'Workers Compensation Class Code',
            'This classification code is also sometimes referred to as your National Council on Compensation Insurance or NCO Class Code. If you are looking at the rating page of your current workers compensation policy (usually one of the first 5-10 pages of your policy that will have a ton of math on it), you should see one or more class codes (4 digit numbers) that each correspond to a specific state and amount of payroll. This info is usually displayed as a few separate line items (one for each bucket of State, Class Code, and payroll).',
          ],
        },
        validation: [],
        required: false,
      },
      {
        id: 'Location5Wc4Code',
        question: '{{Location5Address:Location 5}} Workers Comp Class Code 4',
        questionWithinGroup: 'Workers Comp Class Code',
        condition: [
          'AND',
          ['>=', '$NumberOfLocations', 5],
          ['PRESENT', '$Location5Wc3Code'],
          ['IN', '$RequestedTypesOfInsurance', 'wc'],
        ],
        type: 'WcClassCode',
        ui: {
          hint: [
            'Workers Compensation Class Code',
            'This classification code is also sometimes referred to as your National Council on Compensation Insurance or NCO Class Code. If you are looking at the rating page of your current workers compensation policy (usually one of the first 5-10 pages of your policy that will have a ton of math on it), you should see one or more class codes (4 digit numbers) that each correspond to a specific state and amount of payroll. This info is usually displayed as a few separate line items (one for each bucket of State, Class Code, and payroll).',
          ],
        },
        validation: [],
        required: false,
      },
      {
        id: 'Location5Wc5Code',
        question: '{{Location5Address:Location 5}} Workers Comp Class Code 5',
        questionWithinGroup: 'Workers Comp Class Code',
        condition: [
          'AND',
          ['>=', '$NumberOfLocations', 5],
          ['PRESENT', '$Location5Wc4Code'],
          ['IN', '$RequestedTypesOfInsurance', 'wc'],
        ],
        type: 'WcClassCode',
        ui: {
          hint: [
            'Workers Compensation Class Code',
            'This classification code is also sometimes referred to as your National Council on Compensation Insurance or NCO Class Code. If you are looking at the rating page of your current workers compensation policy (usually one of the first 5-10 pages of your policy that will have a ton of math on it), you should see one or more class codes (4 digit numbers) that each correspond to a specific state and amount of payroll. This info is usually displayed as a few separate line items (one for each bucket of State, Class Code, and payroll).',
          ],
        },
        validation: [],
        required: false,
      },
    ],
  },
  answers: {},
  status: 'created',
  timeZone: 'Etc/UTC',
  createdAt: '2021-09-16T13:14:26.201Z',
  updatedAt: '2021-09-16T13:14:26.201Z',
  links: [],
  potentialAppetite: null,
};
