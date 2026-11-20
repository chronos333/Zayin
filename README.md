### Nome do software
    Nome da IA:               Nome do Software:
        - Hanna                 - Zayin
    




**DESENVOLVEDORES**
*Vinicius Eduardo*
Vai ficar responsável em procurar ou `fazer` um chat-bot que consiga receber as informações de utilidade e/ou treina-lo 

*Predro Bosso*
Vai ficar responsável em fazer a ligação entre as informações recolhidas no ChatBot, produzir um prompt (com IA) para a formulação adequada de um promt de qualidade, que consiga implementar todas as informações recolhidas e repassa-las para o Antigravity e para o Stich, para que assim consigamos fazer o projeto com poucos prompts.

*Lucas Gato*
Posso ficar responsável por fazer a estruturação, documentação e revisão do README, do projeto e das perguntas norteadoras para o Chat-Bot.

**PROGRESSÃO**
| DATA | RESUMO | PROGRESSÃO | DESCRIÇÃO |
| - | - | - | - |
| 03/09/2026 | Estruturação inicial das ideias | Marca, objetivo, resolução, RFs e RNFs, métodos | Estruturação das ideias iniciais, tipos de soluções aplicadas, levantamento de problemas e escopo de custos, e escopo de  |


**ESTRUTURA DO PLANO DE NEGÓCIOS** 

**Objetivo:** Criar um projeto que sirva como base para fazer uma rápida criação de um sistema completo, convertendo a linguagem leiga do usuário, e traduzi-lá para termos técnicos para que a IA compreenda todas as necessidades de busque ser a mais objetivo e acertiva na estruturação e realização do software.



**1. REQUISITOS**
**2. ARQUITETURA**
**3. BANCO DE DADOS**
**4. API**
**5. TELAS**
**6. CONTROLLERS**
**7. MODELS**
**8. TESTES**
**9. README**

POSSÍVEIS PERGUNTAS NORTEADORAS PARA O CHAT-BOT
Este levantamento de requisitos em formato de questionário foi estruturado para extrair todas as informações essenciais do usuário e traduzi-las em dados técnicos e objetivos para a IA.

**1. REQUISITOS**

* **Objetivo do Sistema:** Qual problema principal o software deve resolver e quem são os usuários finais?
* **Funcionalidades Principais:** Liste as 3 a 5 funcionalidades sem as quais o sistema não pode funcionar.
* **Regras de Negócio:** Quais são as restrições ou validações obrigatórias? *(Ex.: "Apenas usuários maiores de 18 anos podem se cadastrar", "O cupom de desconto só é válido em compras acima de R$100")*.
* **Requisitos Não-Funcionais:** Há exigências específicas quanto ao tempo de resposta, volume de acessos simultâneos ou conformidade com leis (como a LGPD)?

**2. ARQUITETURA**

* **Estilo Arquitetural:** Qual estrutura deve ser adotada? *(Opções: Monolito, Microserviços, Serverless ou Clean Architecture)*.
* **Stack Tecnológica:** Há linguagens, frameworks ou bibliotecas obrigatórias para o backend e frontend? *(Ex.: Node.js + React, Python + Django)*.
* **Hospedagem e Infraestrutura:** Em qual provedor de nuvem ou ambiente o sistema será implantado? *(Ex.: AWS, Vercel, Docker local, Firebase)*.

**3. BANCO DE DADOS**

* **Modelo de Dados:** O sistema lidará com dados altamente estruturados e relacionais ou com dados flexíveis/não-estruturados? *(Opções: SQL / NoSQL)*.
* **SGBD de Preferência:** Qual banco de dados deve ser utilizado? *(Ex.: PostgreSQL, MySQL, MongoDB, SQLite)*.
* **Persistência de Dados:** É necessário armazenar arquivos de mídia (imagens, PDFs) ou apenas dados de texto e números?

**4. API**

* **Padrão de Comunicação:** Qual formato de API deve ser construído? *(Opções: REST, GraphQL, gRPC)*.
* **Autenticação e Segurança:** Como a API protegerá as rotas privadas? *(Ex.: JWT, OAuth2, API Keys)*.
* **Integrações Externas:** O sistema precisará se comunicar com serviços de terceiros? *(Ex.: Gateways de pagamento como Stripe, envio de e-mails, mapas)*.

**5. TELAS**

* **Mapeamento de Páginas:** Quais páginas ou telas principais o usuário precisará visualizar? *(Ex.: Dashboard, Tela de Login, Listagem de Produtos)*.
* **Fluxo de Navegação:** Qual é a jornada do usuário desde a entrada no sistema até a conclusão de uma ação principal?
* **Design e UI/UX:** Há algum guia de estilo, sistema de design (como Tailwind ou Material UI) ou layout de referência a ser seguido?

**6. CONTROLLERS**

* **Lógica de Entrada e Saída:** Quais ações do usuário devem disparar cada endpoint e quais dados devem ser retornados?
* **Tratamento de Erros:** Como o sistema deve responder quando uma operação falha? *(Ex.: Códigos HTTP específicos com mensagens amigáveis em JSON)*.
* **Validação de Payload:** Quais dados recebidos nas requisições devem ser validados antes de processados?

**7. MODELS**

* **Entidades Principais:** Quais são os objetos/conceitos centrais do domínio? *(Ex.: Usuário, Produto, Pedido)*.
* **Atributos:** Quais campos cada entidade deve possuir e quais seus tipos de dados? *(Ex.: Usuário: id (int), nome (string), email (string))* .
* **Relacionamentos:** Como as entidades se conectam? *(Ex.: Um Usuário possui muitos Pedidos; Um Pedido possui vários Produtos)*.

**8. TEXTES**

* **Tipos de Testes Necessários:** O projeto exige cobertura de testes unitários, de integração ou end-to-end (E2E)?
* **Framework de Testes:** Qual biblioteca de testes deve ser configurada? *(Ex.: Jest, PyTest, Cypress)*.
* **Cenários Críticos:** Quais fluxos são vitais e não podem falhar sob nenhuma hipótese?

**9. README**

* **Guia de Instalação:** Quais comandos e dependências preliminares são necessários para rodar o projeto localmente?
* **Variáveis de Ambiente:** Quais chaves ou configurações sensíveis precisam ser especificadas no arquivo `.env`?
* **Documentação Extra:** É necessário incluir badges de status, diagrama de arquitetura ou guia para novos contribuidores? Just video
