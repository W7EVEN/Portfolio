import { PiAirplaneBold } from "react-icons/pi";

export interface CardData<T> {
  id: number;
  title: string;
  text: string;
  icon: T;
}

export const items: CardData<typeof PiAirplaneBold>[] = [
  {
    id: 0,
    title: "React",
    text: "React é uma biblioteca JavaScript popular e poderosa para a criação de interfaces de usuário interativas e responsivas. Com React, é possível desenvolver aplicativos web modernos e eficientes, permitindo uma experiência de usuário suave e dinâmica. Ao utilizar os conceitos do React, como componentes reutilizáveis e o virtual DOM, posso criar interfaces ricas e interativas, proporcionando aos usuários uma experiência agradável e envolvente.",
    icon: PiAirplaneBold,
  },
  {
    id: 1,
    title: "TypeScript",
    text: "TypeScript é uma linguagem de programação que estende o JavaScript, adicionando recursos de tipagem estática. Isso significa que podemos declarar e definir os tipos de dados utilizados em nosso código, fornecendo maior segurança e precisão durante o desenvolvimento. Com o TypeScript, é possível detectar erros comuns em tempo de compilação, facilitando a manutenção do código e reduzindo bugs. Além disso, o TypeScript oferece suporte a recursos avançados, como autocompletar e refatoração, melhorando a produtividade e a qualidade do código.",
    icon: PiAirplaneBold,
  },
  {
    id: 2,
    title: "Styled Components",
    text: " Styled Components é uma biblioteca que permite criar estilos CSS de forma mais eficiente e modularizada para componentes React. Em vez de separar o código CSS em arquivos separados, com Styled Components podemos escrever nossos estilos diretamente no código TypeScript, tornando-os mais legíveis e fáceis de manter. Com essa abordagem, cada componente pode ter seu próprio conjunto de estilos encapsulados, evitando conflitos e promovendo a reutilização de estilos. Além disso, StyledComponents oferece recursos avançados, como a capacidade de utilizar propriedades dinâmicas nos estilos, tornando a estilização ainda mais flexível e poderosa.",
    icon: PiAirplaneBold,
  },
  {
    id: 3,
    title: "SASS",
    text: "SASS é uma linguagem de extensão do CSS que adiciona recursos avançados, como variáveis, mixins, aninhamento e imports, para facilitar a escrita e a organização do código CSS. Com o SASS, posso criar estilos mais eficientes, reutilizáveis e flexíveis, permitindo uma estilização mais modularizada e escalável. Ao utilizar o SASS em conjunto com o Styled Components, posso aproveitar o melhor dos dois mundos. Essa combinação permite uma estilização mais flexível, modular e reutilizável, resultando em componentes React com aparência sofisticada e personalizada.",
    icon: PiAirplaneBold,
  },
];
