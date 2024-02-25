## Visão Geral
  
Nosso projeto é composto por um ecossistema destinado a reinventar a cadeia produtiva de embalagens descartáveis, envolvendo todos os stakeholders relevantes. Este ecossistema inclui um aplicativo voltado para o lado do cliente, além de tokens que serão utilizados nos mercados.

## Maquinas inteligentes

Nossas máquinas inteligentes representam uma peça fundamental do nosso ecossistema, proporcionando uma experiência conveniente e sustentável para os clientes. Cada máquina é equipada com tecnologia avançada para monitorar e gerenciar o estoque de produtos (RLT) , garantindo que nunca falte suprimentos essenciais. Além disso, integramos um sistema de alerta para notificar os operadores quando os insumos estiverem acabando, garantindo uma reposição oportuna e evitando interrupções no serviço.

#### Principais Características:

- **Monitoramento de Estoque:** Sensores inteligentes são incorporados às máquinas para monitorar continuamente o nível de estoque de cada produto. Isso permite uma gestão proativa do inventário e uma reposição precisa dos itens.
    
- **Alerta de Reposição:** Quando os níveis de estoque atingem um ponto crítico, um sistema de alerta é acionado automaticamente. Isso notifica os operadores sobre a necessidade de reposição de insumos, evitando a falta de produtos e mantendo a máquina operacional.
    
- **Integração IoT:** As máquinas estão conectadas à Internet das Coisas (IoT), permitindo monitoramento remoto e controle centralizado. Isso facilita o gerenciamento eficiente de várias máquinas e garante uma resposta rápida a qualquer problema ou necessidade de manutenção.
    
- **Interface do Operador:** Os operadores têm acesso a uma interface intuitiva, que fornece informações em tempo real sobre o status do estoque e alertas de reposição. Isso permite uma intervenção rápida e eficaz sempre que necessário.
    

### Protótipo de Alerta de Reposição:

Incorporamos um protótipo de alerta de reposição em nossas máquinas, que consiste em um sistema de sensores avançados e uma interface de usuário simplificada. Quando os níveis de estoque atingem um limite pré-definido, o sistema emite um alerta visível na máquina e também pode enviar notificações para os dispositivos dos operadores, garantindo uma resposta imediata e garantindo a continuidade do fornecimento de produtos aos clientes.

Essas características tornam nossas máquinas não apenas convenientes para os clientes, mas também eficientes e confiáveis para os operadores, garantindo uma operação suave e sem problemas em todos os momento


## Aplicativo 

Este  aplicativo tem como objetivo fornecer uma solução integrada a solução para o usuário, que abrange o cadastro de usuários em um sistema e a funcionalidade de um marketplace associado a um mapa interativo.

![[video-app-haka.mp4]]


| Método | Rota               | Controlador       | Descrição                                         |
|--------|--------------------|-------------------|---------------------------------------------------|
| POST   | `/user`            | `UserController` | Cria um novo usuário                              |
| POST   | `/auth`            | `UserController` | Realiza o login do usuário                        |
| GET    | `/Map`             | `MapController`   | Obtém pontos do mapa                              |
| GET    | `/Market`          | `ProductManager`  | Obtém produtos do mercado                         |
| GET    | `/Market/search`   | `ProductManager`  | Obtém produtos do mercado por categoria           |




- ###### *Sensor para falta de estoque*
	- ![[Circuit design Smashing Wolt _ Tinkercad - Google Chrome 2024-02-25 02-30-47.mp4]]
- 
# FAQ
- ###### *Como é feito o abastecimento das máquinas?*
	- Fica de responsabilidade para o estabelecimento fazer o reabastecimento da máquina
- ###### *Como podemos evitar a formação de filas e perder clientes?*
	- Sistemas de bomba de alta capacidade, junto com um sistema RLT (Registro de Log de Transações) e IOT (Internet Of Things), para envolver transações e monitoramento remoto. 
- ###### *Cada máquina vai precisar de um Tablet*? 
	- Utilizaremos telas de LCD para baratear o custo de máquina e conectar várias máquinas no mesmo servidor, a fim de obter qualquer produto em um só lugar.
- ###### *As embalagens de refil serão descartadas (Tonéis de recarga)*?
	- Não, os mesmos irão retornar para a indústria serem recarregados. Formando uma cadeia cíclica.
- ###### *Se o cliente esquecer a embalagem*?
	- Ele poderá comprar uma embalagem cheia com produto e quando retornar novamente, ele poderá devolver ela, vazia, e ser reembolsado.
- ###### *Como será feita a logística de abastecimento e armazenamento*?
	- Os mercados comprarão os tonéis de abastecimento que serão guardados em armazéns, dentro do próprio estabelecimento. Que por sua vez, quando esvaziarem, serão trocadas por tonéis cheios.
- ###### *Cada produto será armazenado em uma máquina*?
	- As máquinas comportarão vários produtos que terão vários compartimentos de armazenagem, o produto será armazenado dentro dos COMPARTIMENTOS.


# Roadmap

- Implementar funcionalidades adicionais no aplicativo, como histórico de compras e notificações.
- Desenvolver parcerias com estabelecimentos para implementação das máquinas.
- Expandir o alcance das maquinas para mercadinhos de condominios
- Realizar testes piloto para validar o sistema de abastecimento e logística.
- Expandir a rede de estabelecimentos e usuários.
- Continuar refinando e otimizando o sistema com base no feedback dos usuários e stakeholders.
