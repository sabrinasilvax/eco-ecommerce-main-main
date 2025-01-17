const products = [
  {
    id: 1,
    title: "Pantalona Verde",
    price: 55.95,
    description:
      "A Calça Pantalona é uma peça versátil e confortável para compor seus looks, oferecendo o equilíbrio perfeito entre estilo e praticidade.A proposta da calça pantalona permite que mulheres de todos os estilos criem diversas possibilidades com a peça.",
    image: "../../../imgs/pantalona-verde.png",
    rating: { rate: 3.9, count: 120 },
    sale: 10,
    category: "clothes",
  },
  {
    id: 2,
    title: "Pantalona Bege",
    price: 22.3,
    description:
      "A Calça Pantalona é uma peça versátil e confortável para compor seus looks, oferecendo o equilíbrio perfeito entre estilo e praticidade.A proposta da calça pantalona permite que mulheres de todos os estilos criem diversas possibilidades com a peça.",
    image: "../../../imgs/pantalona-bege.png",
    rating: { rate: 4.1, count: 259 },
    sale: 30,
    category: "clothes",
  },
  {
    id: 3,
    title: "Camisa Social",
    price: 55.99,
    description:
      "A camisa social é uma peça-chave quando falamos em vestimentas mais formais, principalmente no ambiente profissional. Isso porque ela consegue combinar sofisticação com praticidade em uma única peça, dando um ar de elegância e profissionalismo para quem a veste.",
    category: "men's clothing",
    image: "../../../imgs/camisa-social.png",
    rating: { rate: 4.7, count: 500 },
    sale: 0,
    category: "clothes",
  },
  {
    id: 4,
    title: "Kit 5 Camisas",
    price: 15.99,
    description:
      "A camisa social é uma peça-chave quando falamos em vestimentas mais formais, principalmente no ambiente profissional. Isso porque ela consegue combinar sofisticação com praticidade em uma única peça, dando um ar de elegância e profissionalismo para quem a veste. 5 opções de pura sofisticação.",
    category: "men's clothing",
    image: "../../../imgs/camisa-feminine.png",
    rating: { rate: 2.1, count: 430 },
    sale: 5,
    category: "clothes",
  },
  {
    id: 5,
    title: "Pantalona Verde",
    price: 695,
    description:
      "A Calça Pantalona é uma peça versátil e confortável para compor seus looks, oferecendo o equilíbrio perfeito entre estilo e praticidade.A proposta da calça pantalona permite que mulheres de todos os estilos criem diversas possibilidades com a peça.",
    category: "jewelery",
    image: "../../../imgs/pantalona-verde.png",
    rating: { rate: 4.6, count: 400 },
    sale: 15,
    category: "clothes",
  },
  {
    id: 6,
    title: "Pantalona Bege",
    price: 168,
    description:
      "A Calça Pantalona é uma peça versátil e confortável para compor seus looks, oferecendo o equilíbrio perfeito entre estilo e praticidade.A proposta da calça pantalona permite que mulheres de todos os estilos criem diversas possibilidades com a peça.",
    category: "jewelery",
    image: "../../../imgs/pantalona-bege.png",
    rating: { rate: 2, count: 70 },
    sale: 0,
    category: "clothes",
  },
  {
    id: 7,
    title: "Camisa Social",
    price: 9.99,
    description:
      "A camisa social é uma peça-chave quando falamos em vestimentas mais formais, principalmente no ambiente profissional. Isso porque ela consegue combinar sofisticação com praticidade em uma única peça, dando um ar de elegância e profissionalismo para quem a veste.",
    category: "jewelery",
    image: "../../../imgs/camisa-social.png",
    rating: { rate: 3, count: 400 },
    sale: 0,
    category: "cosmetics",
  },
  {
    id: 8,
    title: "Kit 5 Camisas",
    price: 10.99,
    description:
      "A camisa social é uma peça-chave quando falamos em vestimentas mais formais, principalmente no ambiente profissional. Isso porque ela consegue combinar sofisticação com praticidade em uma única peça, dando um ar de elegância e profissionalismo para quem a veste. 5 opções de pura sofisticação.",
    category: "jewelery",
    image: "../../../imgs/camisa-feminine.png",
    rating: { rate: 1.9, count: 100 },
    sale: 25,
    category: "cosmetics",
  },
  {
    id: 9,
    title: "Pantalona Verde",
    price: 695,
    description:
      "A Calça Pantalona é uma peça versátil e confortável para compor seus looks, oferecendo o equilíbrio perfeito entre estilo e praticidade.A proposta da calça pantalona permite que mulheres de todos os estilos criem diversas possibilidades com a peça.",
    category: "jewelery",
    image: "../../../imgs/pantalona-verde.png",
    rating: { rate: 4.6, count: 400 },
    sale: 0,
    category: "cosmetics",
  },
  {
    id: 10,
    title: "Pantalona Bege",
    price: 168,
    description:
      "A Calça Pantalona é uma peça versátil e confortável para compor seus looks, oferecendo o equilíbrio perfeito entre estilo e praticidade.A proposta da calça pantalona permite que mulheres de todos os estilos criem diversas possibilidades com a peça.",
    category: "jewelery",
    image: "../../../imgs/pantalona-bege.png",
    rating: { rate: 3.9, count: 70 },
    sale: 0,
    category: "cosmetics",
  },
  {
    id: 11,
    title: "Camisa Social",
    price: 9.99,
    description:
      "A camisa social é uma peça-chave quando falamos em vestimentas mais formais, principalmente no ambiente profissional. Isso porque ela consegue combinar sofisticação com praticidade em uma única peça, dando um ar de elegância e profissionalismo para quem a veste.",
    category: "jewelery",
    image: "../../../imgs/camisa-social.png",
    rating: { rate: 3, count: 400 },
    sale: 0,
  },
  {
    id: 12,
    title: "Kit 5 Camisas",
    price: 10.99,
    description:
      "A camisa social é uma peça-chave quando falamos em vestimentas mais formais, principalmente no ambiente profissional. Isso porque ela consegue combinar sofisticação com praticidade em uma única peça, dando um ar de elegância e profissionalismo para quem a veste. 5 opções de pura sofisticação.",
    category: "jewelery",
    image: "../../../imgs/camisa-feminine.png",
    rating: { rate: 1.9, count: 100 },
    sale: 5,
  },
];
