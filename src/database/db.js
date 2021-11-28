export const employees = [
  {
    name: 'Adriano Baptista de Oliveira',
    company: 'Baptista Alimentos SA',
    location: {
      state: 'SP',
      city: 'Ribeirão Preto',
    },
    sessions: [
      {
        lawyer: 'Ronaldo Araújo Benevides',
        status: 'scheduled',
        date: '29/11/2021',
      },
      {
        lawyer: 'Marcos Carvalho Santos',
        status: 'complete',
        date: '16/11/2021',
      },
    ],
  },
  {
    name: 'Melissa Silva Almeida',
    company: 'American Wholesale Club',
    location: {
      state: 'MS',
      city: 'Campo Grande',
    },
    sessions: [
      {
        lawyer: 'Nicole Martins Santos',
        status: 'scheduled',
        date: '16/01/2022',
      },
      {
        lawyer: 'Júlio Correia Cavalcanti',
        status: 'complete',
        date: '27/08/2021',
      },
    ],
  },
];

export const lawyers = [
  {
    name: 'Cauã Rocha Pereira',
    location: {
      State: 'SP',
      city: 'São Paulo',
    },
    score: '4.8',
    sessions: [
      {
        employee: 'Adriano Baptista de Oliveira',
        company: 'Baptista Alimentos SA',
        status: 'complete',
        date: '21/03/2021',
        cost: 4200,
      },
    ],
  },
  {
    name: 'Leila Azevedo Cardoso',
    location: {
      State: 'PE',
      city: 'Camaragibe',
    },
    score: '5',
    sessions: [
      {
        employee: 'Julia Azevedo Gomes',
        company: 'Baptista Alimentos SA',
        status: 'in progress',
        date: '26/11/2021',
        cost: 4600,
      },
    ],
  },
];
