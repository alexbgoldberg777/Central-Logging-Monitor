export const sampleEAIDomains = [
  {
    name: 'EAI Domain 1',
    children: [
      {
        name: 'Publishing Business Domain 1 from EAI 1',
        children: [
          {
            name: 'Business Process 1001',
            activities: [
              {
                id: '1',
                severity: 10,
                logEventCreatedDate: Date.parse('2022-01-01T00:00:00.000Z'),
                businessDomain: 'Test Domain 1',
                application: 'Test Application 1',
                activity: 'Just a test activity',
              },
              {
                id: '2',
                severity: 30,
                logEventCreatedDate: Date.parse('2022-02-01T00:00:00.000Z'),
                businessDomain: 'Test Domain 1',
                application: 'Test Application 2',
                activity: 'Another test activity',
              },
              {
                id: '3',
                severity: 0,
                logEventCreatedDate: Date.parse('2022-03-01T00:00:00.000Z'),
                businessDomain: 'Test Domain 2',
                application: 'Test Application 3',
                activity: 'Yet another test activity',
              },
              {
                id: '4',
                severity: 50,
                logEventCreatedDate: Date.parse('2022-04-01T00:00:00.000Z'),
                businessDomain: 'Test Domain 3',
                application: 'Test Application 3',
                activity: 'And another test activity',
              },
            ],
          },
          {
            name: 'Business Process 1002',
            activities: [
              {
                id: '5',
                severity: 50,
                logEventCreatedDate: Date.parse('2022-05-01T00:00:00.000Z'),
                businessDomain: 'Test Domain 3',
                application: 'Test Application 3',
                activity: 'And another test activity',
              },
              {
                id: '6',
                severity: 10,
                logEventCreatedDate: Date.parse('2022-06-01T00:00:00.000Z'),
                businessDomain: 'Test Domain 1',
                application: 'Test Application 1',
                activity: 'Alright, a test activity',
              },
              {
                id: '7',
                severity: 30,
                logEventCreatedDate: Date.parse('2022-07-01T00:00:00.000Z'),
                businessDomain: 'Test Domain 1',
                application: 'Test Application 2',
                activity: 'Another test activity',
              },
            ],
          },
          {
            name: 'Business Process 1003',
            activities: [
              {
                id: '8',
                severity: 0,
                logEventCreatedDate: Date.parse('2022-08-01T00:00:00.000Z'),
                businessDomain: 'Test Domain 2',
                application: 'Test Application 3',
                activity: 'Wow, another test activity',
              },
              {
                id: '9',
                severity: 10,
                logEventCreatedDate: Date.parse('2022-09-01T00:00:00.000Z'),
                businessDomain: 'Test Domain 2',
                application: 'Test Application 3',
                activity: 'Hurrah, another test activity',
              },
            ],
          },
        ],
      },
      {
        name: 'Publishing Business Domain 2 from EAI 1',
        children: [
          {
            name: 'Business Process 1004 (no activity available yet)',
          },
        ],
      },
      {
        name: 'Publishing Business Domain 3 from EAI 1',
        children: [
          {
            name: 'Business Process 1005 (no activity available yet)',
          },
        ],
      },
    ],
  },
  {
    name: 'EAI Domain 2',
    children: [
      {
        name: 'Publishing Business Domain 1 from EAI 2',
        children: [
          {
            name: 'Business Process 2001 (no activity available yet)',
          },
        ],
      },
      {
        name: 'Publishing Business Domain 2 from EAI 2',
        children: [
          {
            name: 'Business Process 2002 (no activity available yet)',
          },
        ],
      },
    ],
  },
  {
    name: 'EAI Domain 3',
    children: [
      {
        name: 'Publishing Business Domain 1 from EAI 3',
        children: [
          {
            name: 'Business Process 3001 (no activity available yet)',
          },
        ],
      },
    ],
  },
];

export const BusinessDomainSample = [
  'Business Domain 1',
  'Business Domain 2',
  'Business Domain 3',
  'Business Domain 4',
  'Business Domain 5',
  'Business Domain 6',
  'Business Domain 7',
  'Business Domain 8',
  'Business Domain 9',
  'Business Domain 10',
  'Business Domain 11',
  'Business Domain 12',
  'Business Domain 13',
  'Business Domain 14',
  'Business Domain 15',
  'Business Domain 16',
  'Business Domain 17',
  'Business Domain 18',
  'Business Domain 19',
  'Business Domain 20',
];
