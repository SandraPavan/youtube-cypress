# youtube-cypress

Baixe o projeto no Github:
- `https://github.com/SandraPavan/youtube-cypress.git

Passo a passo para executar os testes:

1.Acessar o diretório backend, instalar as dependências e iniciar a api:
  - `cd backend` 
  - depois `npm install`
  - depois `npm start`

2.Acessar o diretório frontend, instalar as dependências e iniciar o site:
  - `cd frontend`
  - depois `npm install`
  - depois `npm start`
  
3.Acessar o diretório root do projeto (que tem a pasta Cypress), instalar as dependências e abrir o Cypress Runner:
  - `npm install`
  - `./node_modules/.bin/cypress open`

4. Realizado Page Objects para melhorar a qualidade do código, realizando no processo abaixo: 
   `página-> ações + elementos
     - Ações
        acessar login
        preencher login
      - Elementos
        id
        button`
  
Observação:
Estudos realizados a partir dos vídeos do canal Agilizei (https://www.youtube.com/channel/UCI_m5uwJjfD7trqcwAB8E3w)
