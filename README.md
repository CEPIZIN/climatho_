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

[![App Preview](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8rgNdqo-YSNihoR-gQcBC7N8CvU6cszGjkA&usqp=CAU)](https://www.youtube.com/watch?v=Wlj4-a21C8c)

| Método | Rota               | Controlador       | Descrição                                         |
|--------|--------------------|-------------------|---------------------------------------------------|
| POST   | `/user`            | `UserController` | Cria um novo usuário                              |
| POST   | `/auth`            | `UserController` | Realiza o login do usuário                        |
| GET    | `/Map`             | `MapController`   | Obtém pontos do mapa                              |
| GET    | `/Market`          | `ProductManager`  | Obtém produtos do mercado                         |
| GET    | `/Market/search`   | `ProductManager`  | Obtém produtos do mercado por categoria           |




- ###### *Sensor para falta de estoque*
	- [![Preview Sensor](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAB5lBMVEX///8xbpnd3d3b29vg4ODZ2dnI5cjQ0NDM58w8QELj4+PU1NS1tbX7+/vj5ubZzc0zMzNvwHC/v7/V4OlZh6uZmZksLCzDw8PMzMzPqqri6O7WwcE1PD5tlJ2kpKSbsscVYpIjaJV6xnrY4+Wtra2hoaEAUmQxZIiDnKSLi4tJfaMmJiYwUGgAVWYwa3khTm0ARlkpRlyFhYU5T18mPEwaGhpPT0+mr7dMNzn+8fHpfn7g8OBfX19ycnIzXHk9OjdMVFuvwc/p9Ol6AACo1qiIobRVhZBDaHtgj7A8RU1VeolOco1xmLR/Hx8YGBjAydCZmYiLzIt1dS643rif1KBbha9Ao1nn5torSWs3mEIvJSgydCw/hjo7YjQvPigmLB4hEho8NCy6h33CnJQ6UEtAaFE/d1A6h0s5j0Y3WTdARFStaFmcOBwxeY9Ej4Mzj3VEn22jVkSfPSRAiYhbsG1WqHRvrJOkcmcufX42lGiAqK2Wu7R4uIfMmpqAFhYJCQlfbHaYT09duF2xw7GdvJ2Os48ALDaAgEmMjDt1dVSZmSqammxdXUmammVnZzfKvarPqmLKsYX3UzJPTz+GZjukfES1l3LCJSLbX13APjuxNkTKW2VeYXWkPlNJtUtrhowwYmAaBBdNDLWNAAASIklEQVR4nO2cj2Max5XH2d0Zr9hZMNoAu44lYNUFBAisYAvuKhCSImQsbyxzInbiJL30ck3ctE581/QuTX1NajmJLOfHXXt3vaSXuvef3nuz/JQASba4tuf5gGdXj8E2X7158+bNSD6fQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCASCvySWzzwVU4E/9QeYINOtqadiZ3r5T/0RJkbr6T/a9Cn8N/48OYVPJsSZ7F/xZ4oQZwxCnDEIccYgxBnDMyfO89lwH9mBrw7w8o3DtpOmvH9h4iRsO8uxJdt2bs5feGEE9iuvHjZKJ1SnX5zAKXOqunCeT0hrRCZEVuK2dNnnu3nlWi0XDS3VcrVbr73+2hs/+Nvam6Fbt8CQvvR6bSkUzdWWarzJRWtLP7SfP9k/1yeOpsiUnRqyIp+uMAiIs03Y371FZBAnfdOnv7B65coqPK74r6z+/Y/efuf27duvv/b2j1ffTbzw7rveK6u9y1OIQ6hFjX7MEffHsTJTnpA4wZ/89KdvaVlJktJbttQmvcAvtm1L2TvvvX/3xo27v3jvzh20SFLW65OVnkYcRSVWUsvIhkMyxDHkjJa01IgWYWZMyxBDB4NjQhNRoVuEmo6W0XRDyWgxi2I3tCqGDlbHINbExPmHf2yL08GuS1cXpEa4UZdcyW1k63Y9nMjO/uz9n9/94MbP/+lns1KjIbmJePhpxJEBRhhRKDYKNFSWqYwNN8CLFK0MDW0rxbdQ733cqrSt8qTE0Yyf/DPDYdUTJ57l4oRBGincsMMdL3o5EbbTH3p+dO/Dj+48pTjMJKaiWrIhW6oM94xCIzNLNmXPyhQw0E43E7opRrsbWo2OdYLiaASeA+LUs1cverdhKdw195wrYUubv3zv3t0b082dMyeoZAzEnLOEOVqMWAY0hqnFNJ0xJxh567wO96ZJwGDBnUOZDo2lB2OaYcmxoK7KjubIKnRT8M1BwyJnJyRO4iqnTxsQJ9yOOT1fisfXGvF42F2DG7jYYTdRfznxvG/5zMbcdLPZOrO8fiJxtPPn6PnDnH3pxRfPDbGP5+y/0ImIY2OKc5j0QnYAGGONbAOAPLERzsLFzbrZ7rBaXz+z0WpOz23sjK2FDgwropw9zPlfvfTiuSH28VByMs8hlFItENB8ciCoBRSKXw4Tx9W0MGSCtn1QHCl7NIdizvLUTnOu2WzuTC0PE2lgthqGfBbEOQ9plwzPTtN/P8IKnEAb8+OlpWtRvz9XyvlrodIS8HGlv0MQAo2mydswGbBtoD6gTjZd3S5nbbuxvdZI2PXtNcygXbfBcbvBZ0RADqwv72yAH7U2zqwPaHQgICs4OVFsvDu4oDhvQVS2MCAzi1oQlVVGDGpZig6hl+rEYAqEYUYhNMsmdoNIBH/XsaUJVKOhQ0QHxeHzn8xnVEKINihOOP1JvA5yBN16sL627caDqI2UdWEUgkRHiNNhfflMC9youTHVDkj9MQf+XZUpBrNMohMTPzXMQI7861+9dE6Ge1NBGVRD1pmla0lqWsyhpgkpjm6qMdkxLYc4imFQXdENcrzZChcZgQC91hGkRyhatcwuHXE6kEFxYFjBQLOfc8MNKbhtb2fX4lI9nA3HXde1IQHqethxljSB9TM73I927vccieD3hac1Sv/4IDqogQmMgo4kew3vwQ3YUKWdDnU8DqxHxxyYkPWQv6qE/F2/ObY42iFx0DGegzFkB7cTaxKIA9lgOJ6Nu4kwGDuukz1+prO+vHy/1YSpbWdqHddWBibExU6GTIpaBA1JZsW0oqY7cobEDLmIGXJEyzADrY4OGXLSpBktQzG9proD1pjBYGSN/bdJDqIMrAyjS/CnJ05uKdcVp29xclAc2hYnjeD1YjjbGVbb7WEVrruNRD0LoScsZcMYeK5uJeLHFsfXHlbrUzut6bnmvdbuTUXGHEuGB+EN6TQyOWAdMBy2HuU51RyI4Y9C2y9OLpeLes/x4iieOOma31/zS414uhi0QB0ekBNeQJaw4JOFVDCctV1GyvX61k1f7OTieMjq7oN7t+fuNz99sJskukmSmmOpMfQchyRlWFtFwKokSUy10GrqBLoZSgS6sRiJ8W7U4FaTHrW2GiVOFKXpE0c/Shy/vzOsIADX3XrDhUhTP5AHZXE5seXzqQPilGfnD7E9XBxNUWViaaa8+6A1N/3BB61Pd3eprGqWrFjEJIzJFoFpyiTcYMlUhXuVW6mMPShaGbdSqh4hjuYHCVCY6MCwikaXcrmjh9WgOA3Xm8rdtTXIh+tr6DrSYWz95taAOIXt4PxiKrXoATcfbc7ODhcHcxmFyQymclxdquxB694cRu1d5lmhYbxRvG59VmXQynjUHisOzM7BoOH3V7Va6eQBmQyIE27gVJ7FtaaHZA/RBtRJ2APigBABkOST+XK5/Difyqc2Cx+NEEdjMaomtQgMIJKRdUPLaDGVJac+3Zh7APdYsiCOSTI4zpJYyOiVLHA+jygw2CLUK1mYqnOCYhf5eLg4XY4Qpz2VH4NBcTaDPvWzisGYpcKf+VSqUBjtOSNCb9s6KvR2GrnfSsB2bHECkfZsDpJ4l5FJIOE5YDcJ7M5WC2M1GSFOobCZKzI1Wa1Uiw5j5VRh5LDSFF2HmdsrdsmODpO2V+xSzaRWJLruTeWZ/qmcODpFz2EwlTMTp3J4cxG6UUgFji2Oz8euQQSqlUqhSrRU8ld4TB4QR7NUwCqb4Ea6rhvD8pyTi5PKVZlRqXy+t/d5pWqxMsSdkZ6jYm7XTQIx8YO1qIxrSGwUMFDiWaHB72HX2n0Dt+L3WD1ZDRkCUBDS5aAPW/5VMNj/uleyfy4RpjSbSCRwENk9nlScxZBpVR7u7z16tLf/RZWxzZHiaPDJYAY2FaZibYvJMC8xnIEUr9ilyrisQivts+JsZfFil8JnK7X95hOuyo9Hf8nCdo12tDYa9hOKA4Mq88X+owjw5X4tpm6PFkcFXSCmEi+BMQkkMCoYMIHRIpphyGC15AgYVEeLUVNHqyljOqQkYbEF1qTCrTp4/4SKXV2yjHRg2ScUZ8lhlb0vI5y9r6oqy48UB7/bmNqSXoPh72uFHLYOMwxYJ1Um7X5MF8axRnjkl90nFcc0KvvXPXEe/U3FooXFUTFnaD1H+fpf/234C0cxac+xup5jPbHnDIizOkYcqg4FxBn+wlGwyYojhcsdwk8akJd0q7L3qDOsKiorjBpWijp06/L7v/nNE256TlicvoT4ScXJZVjxoec61/d/GxkTkIk8DHL2368Pf+VIJi2OxJNA7/pk4lwqqUbl8/1H169/uf9VyWLzY8TpiaD0PuLX//GfxxdH6TYTmso7itjeh71Sq6U9cdIrKxdWVrrNgXt+tzIkCcwwp/Jwb39/7+GqAY6Tz4/Mcxxm8WJXjBS9DDliWREQx4xghuzIRZI8UOzCDBkS6XaGDN2oDhmyBhlykk1IHNuu1WoNty2OvyPOpWIGKEZKkUqm2L4rRbgRWrzPlNKHxEnlHKpXVyuVStFUrUJq7KrcWxn1GpwpYSofVtYiQ5dgXSudkOfYdTXqD61te65z8cqVtjgXZzz88Dh4176vHRInnwffUZmlmxBvjXwKF1fDxdGYCXkcwTyOJGUdsjviWJjYYRUL1uo8CfSKXZgEYrErQgw09IpdmBoSrIkxazKbepK9HQRx6ofWVhf9R3JYnMfVQmpxNaPDgq0MS4f8GHFkg2JZS2YWr2JhWYt6ZS1e7FK5geBCob8bX0/gvrrsWb0SmKJPKM+x11CceLkrjle8uYjizORmRugSzQ0RR1nMFzYLwOZifr4A8Saf2hwlDgZkXq/iDVO6TacEdsDKDf1WBQ9gdKyTCsh2fTsEntMTpzwznwXXCcHgCUVDM8OJRvHlhYWFTxxOTIOFbXUpGgM1NvMwvD4CxwFGF7uorvaVLHD3oX0+x+qWLPrO5+CpnWK32NXefYhQA3cfHJPqExpWXkB2e8OqXlvh0ccLLeMIraTT9fbhNVz8R/yl2U2gsJnfLEMw3pzfHFPsIsOKXYQH2aA8fE+iG7cPGCY5lcOk3Ff3q3PPkXoBeWbmr0YA4sT/2iPgC/gy13Kbs3xY5Tc/gtx43iyM8xxe/8QyKcRUA4JwbHf309Y93GzwTnah50S0ZNtzHN6New7jDuaVSXHTy2QT8JxA8EASyJNjm2fK0qUikKlmSpnK7/7r+8g38OjA77/59ttvf982UE0LFnMzOoyqxVQhX5gtgEC0sDWyEkgthTANHrs7D1rT9+HRbLY2dnfx3JZKII6ohClwx/hBLohEPSvvwWOOQrEHFntOXZyZ6Mylix1QGxeWVaBNo1x27ZUFfCxcXrj8zX9f5ixcXrzcYeHyCjQHksDIjL8wC4NqcxaGFIgzW75TGJoEBtbXpx607jXn7r96f/rexqe7u940hDMQ7RS7TO9kFy92md0SmNkpdjFu9brJR23NPAElvz/UmX5KKxCaFUJYw3axPNmOQXhs+7tGA4/nNLK4r4c38KWLlyx4GIiz3Jybm4P3aNWlkIMBebGQmi/PpwqcAXGmdnaa4CNzzda9jQe7u5DAaJahJfFkV5Kf7MLalg73plfsIniyixe78DSBV+zSLSWmxWS04skuNFDn9IcViNOdqkvgOiqWkLYTJl5UGzfu8Mxb+rtGHY9zrbWPD6zF4/G6G4+7a+HHyXTcNzW3DJ6AJwSS/srjWR6QF8vbuPewmYKAvL48tdNqNuemp+f+sHNmqn1KTuO1kb7aldwuWuFeFEzQ6A3tWZ7C2EGDhTtUuKmn8M0rFTf10DqZMukBcbxSoAXiYDHQltyw5HJxvHNMA9GJf3XZ5zPi/YHE85V8/jKEGkiP86ugz3utjZ2pdU+9A6tyVVUgKht4BAW++cRAH3FgepbBpCsRiLSqThxIjrUk1U0aUXSDYUC2YnLMNPEIiq7TmBI77hGUpxHHTpZKpcp8Ai+lJIjTkOpSI5z+zubHbbkoYdQFHlkpbIe3fD4z7pvrE+fxJ4XFmYzJJ/dyIf94dIYstwt4/ae1lF5z6PiWArke5We48AyKQuGBTw5khAqdgDih/mF1NVKtJleklWS1GrkKQqA44Ub697ablVybH+hCQ9aF2CPVE/XsvA7Dai6wvLOx0YJh0/xjKvVZyWRmMhOBFRCbTY1beHobZqfCJOo5IE53fYCek7iwtXUBZivvggqgDFycLIiDnhOXXFeKJyAe//LDB+/fvXH7g+YfWhtTy97RrUL+Us1SM5UvHj78YjWpgjowl48QR6FMPy1gvjp1cXLRaK59eidaW5DmnaudUldaWumy8C2v4rzyygXpTqHw4fvv/+KdV1999fY7b//oj1JizTcwrBZzulqs7O3vwbOUUWlhdLGLmjhQTgcIUqcujj/nv9Ql/RjCay9PnrmGPxqzVLtWu/W70LVa7nUQ5O7d1197440f/yB3639uvflm6M0f8iynX5yZCotV9vewSrq35zfU8uLoSiAl3WIXcfTOyS6viqXxYhc/2ZUZPNlV7Jzsahe7+MkuMoF6DlONC13wtI3TE+cKjLlSyGtqJXhCdErY7/YZ4MEPTPaLs5Rklc/3vAL7/ldV1Rq5b8VjzuiDBMdcW3XePKEach9b8+lEp8SeGMZh6yFxDLOy3959+HL8vhXkJqpDYgqkezEZsrsYgWU6TM/M0kkMi10xLHbFwIDd2laTgtVinW7U9LqRiSw8fc8/9zTw05L94lwz9QP7ViN3PM+fI7IVNDWmQqOyoBmEBRIYZAWaIGPE1CyKVoIGmaIVa2JBLIHBW6ilmYSq2IPKEznefxoc9Jy9nueoo8Uh9OzZc6fF2Yn8YMhpMCBOhFW7MeeL4piYE9Q0LXha4GH8/7PPeyL6xfnMm62u457e+NnqGaFfnFTOYRnIc4DP/UncDRbidCjkF2smi1QqDx9WKg5kyIuLo2arZ4QBzwF1DGrGIkkd11aLs9ujFp7PCIPi5FOfFQ08QWGVC4sFny8gxGnD96pwn7OwBSMMrgFfUIjTprB4gM1yQYjTJvi9w/T/RNYzLc5RCHHG8OyJM33s384SePbEWb+/I37D5EgCU+J3kwoEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFA8P+L/wV0I4axJN01bgAAAABJRU5ErkJggg==)](https://www.youtube.com/watch?v=1Lbwt2STaqo)
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
