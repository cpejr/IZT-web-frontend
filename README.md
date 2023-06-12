# IZT-web-frontend

Frontend do projeto

### Estrutura de Diretórios

    -> src
      -> assets
        -> components
      -> hooks
      -> layouts
      -> pages
      -> services
        -> api
      -> stores
      -> styles
      -> utils

**-> src**

- Pasta onde ficará código criado por nós, sendo ele dividido da seguinte forma:

  **-> assets**

  - Pasta em que ficarão imagens e dados utilizados durante o processo de desenvolvimento, como imagens de teste ou arquivos, ou para o produto final, como a logo e outras imagens que não precisarão ser armazenadas em outro lugar (backend).

  **-> components**

  - Pasta em que ficarão os components da aplicação frontend, ou seja, tudo aquilo que a gente definiu como conteúdos das nossas páginas que de alguma forma possam ser reaproveitadas e consigam nos ajudar quanto à produtividade e organização. Exemplo de componentes são botões e caixas de texto que são usadas em mais de uma página, ajudando-nos assim a gerar um padrão.
    **-> features**
    - Pasta que ficam os componentes mais específicos e complexos como o footer e o header.
    **-> common**
    - Pasta que ficam os componentes mais comuns como inputs, botões e selects que usaremos muitas vezes em muitas páginas.

  **-> hooks**

  - Pasta em que ficam funções simples que podemos reutilizar várias vezes.
    **-> query**
    - Pasta em que guardamos funções de comunicação com o backend

  **-> pages**

  - Pasta onde ficam todas as páginas do nossos sistema, sendo que cada pasta corresponde a uma página. Normalmente, dentro de cada pasta desta, encontram-se o código JavaScript da página e o arquivo de estilização específico deste primeiro.

  **-> services**

  - Pasta em contém arquivos de interação com serviços externos:

    **-> api**

    - Configuração dos endpoints da aplicação com a biblioteca Axios

  **-> utils**

  - Pasta onde ficam arquivos utilitários dentro do sistema, como por exemplo códigos que contém de forma componentizada.

### Ferramentas utilizadas

- [ReactJS](https://pt-br.reactjs.org/ 'ReactJS') -> Biblioteca JavaScript de código aberto que usamos para criação de interfaces de usuário em páginas web.

- [Vite](https://vitejs.dev/ 'Vite') -> O Vite é uma ferramenta para o frontend JavaScript com a qual você pode gerar estrutura de código de vários frameworks como React, Vanilla, Vue, Svelte e outros.

- [ESLint](https://eslint.org/docs/user-guide/getting-started 'ESLint') -> Ferramenta utilizada para padronização do código e do estilo aplicados.

- [Prettier](https://prettier.io/docs/en/index.html 'Prettier') -> O prettier é um formatador de código que ajuda a padronizar o jeito que escrevemos o código.

- [Husky](https://typicode.github.io/husky/#/ 'Husky') -> O husky serve para o usuário poder configurar hooks. Os hooks são scripts automatizados que executam comando quando é chamado algum comando no git.

- [Zod](https://zod.dev/ 'Zod') -> Zod é uma biblioteca de validação e declaração de esquema TypeScript-first. O zod é usado para criar validações dos dados passados pelo usuário.

- [TanStack Query](https://tanstack.com/query/latest/docs/react/overview 'TanStack Query') -> O TanStack Query (FKA React Query) facilita a busca, o armazenamento em cache, a sincronização e a atualização do estado do servidor em seus aplicativos Web.

- [React Hook Form](https://react-hook-form.com/ 'React Hook Form') -> React Hook Form é uma biblioteca que auxilia na criação e validação dos formulários além de reduzir a quantidade de código desenvolvido, fazendo com que a captura de ações do formulário também seja mais objetiva.

- [React-toastify](https://fkhadra.github.io/react-toastify/introduction 'React-toastify') -> React Toastify é uma biblioteca open-source desenvolvida e mantida pela comunidade Javascript! Ela serve para padronizar as mensagens de sucesso ou de erro que chegará ao usuário

- [Axios](https://axios-http.com/ 'Axios') -> O Axios é um cliente HTTP simples baseado em promessas para o navegador e node.js nó. Axios fornece uma biblioteca simples de usar em um pequeno pacote com um muito interface extensível.

