# Bem vindos ao BarberShop

Visite a página: [BaberShop](https://willaimrodrigo.github.io/barber-shop/).

## Sobre o projeto

Uma página simples, com um Header com o logo e o nome da aplicação e um seja bem vindo.

Na parte principal temos 3 seções. 

A primeira com cards de cortes de cabelos, com o número do corte referente, nome/tipo do corte e valor. 
O card tem a função hover, que se destaca quando passamos o mouse por cima e/ou quando selecionado. Além de ter a função de botão, ao ser clicado, ele armazena os valores do tipo de corte e valor na seção 3, mostrando o corte e valor selecionado. O mesmo card se clicado mais uma vez, remove a opção selecionada, removendo os valores adiocionados a seção 3.

Na segunda seção temos cards de cortes de barbas, com o número referente ao corte, nome/tipo do corte e valor.
O card tem a função hover, que se destaca quando passamos o mouse por cima e/ou quando selecionado. Além de ter a função de botão, ao ser clicado, ele armazena os valores do tipo de corte de barba e valor na seção 3, mostrando o corte e valor selecionado. O mesmo card se clicado mais uma vez, remove a opção selecionada, removendo os valores adiocionados a seção 3.

Na terceira seção temos um pequeno comunicado sobre descontos na promoção e logo a baixo temos a seção de valores, onde há a referência sobre o corte de cabelo, sobre o corte da barba e o valor total.
Aqui só temos a função de visualização, onde os valores dos cards clicados são armazendos e exibidos. 

Há o detalhe de que duas opções, barba e cabelo selecionados acionam o desconto de 20%, subtraindo o valor do valor total e já exibindo com desconto incluso.


No fim temos um Footer com um formulário com campos de nome e email e um botão de enviar.



### `Código`

Usei Html, Scss (module), Javascript e React.
Usei DOM, componentes.


### `Javascript`

Há 9 componentes Header, Page, Footer, Button, FormInput, ListCortes (contendo o componente do Card), Prices  e TabelaCortes. 

HEader e Footer foram incorpados no arquivo App.js, usando a funcionalidade do React de single page. Também rececebendo o Page. O Page recebe componentes onde há as funcionalidades e funções da aplicação como:

`Array`: recebe o array TabelaCortes com dois obejtos dentro `barba` e `corte`, cada um composto objetos de Id, Tipo e Valor, sendo um componente a parte.

`useState`: constantes armazando os valores para manipulação das barbas e cortes, como `setCorteSelect` ,`steBArbaSelect` e `setTotal`, para manipulação nas funções.

`addItem`: A função manipula os array e adiociona os valores quando o clique for acionado. Essa função vem com 3 parametros, `tipo`, `valor` e `categoria`. Dentro dessa função temos duas sessões de condicionais, ambas com as mesmas funções, verifica se a categoria é igual ao corte ou barba (puxando de um ou outro objeto) e aciona a condicional. A primeira verificação identifica se já há item selecionado, se sim, ele subtrai o valor existente e volta para null, a segunda condicional verifica se está null, se estiver, adiona o item e soma o valor ao valor anterior com o setCorteSelect/setBarbaSelect(tipo, valor), (que vem null default).

`useEffect`: Temos o useEffect apenas para trabalhar o desconto, ele chama a condicional, verificando se o setCorteSelect e o setBarbaSelect são diferentes de null, se sim, armazana o valor em uma constante e abaixo aplica o setTotal com a constante - o desconto, exibindo o total.

`Html`: no index do Page temos a `ul`, que  que usa o Dom para renderizar a `li` com o `map` e na mesma há uma função  onClick chamando a função ###addItem com parametros para executar corretamente a função.

Na parte final de prices temos uma sessão com h3 e p apenas renderizando os nomes `Orçamentos`, `Barba`, `Cabelo` e `Total`. Onde usamos o templete literals para renderizar os valores dos elementos e a soma ou subtração do total.

`button` é o componente que cria o botão "enviar" e renderiza recebendo por props as propriedades dele como: type submit.

`footer` componente que abriga outro componente, o `formInput`, renderizando as propriedades passadas pelo usuário e sendo usado para nome e email.

`forminput` componente que recbe por propriedade id, valor, type, placeholder,onchange. Sendo um componente generico de formulário que pode ser reutilizado.

`ListCortes` componente responsável por receber a o array com os objetos de corte e renderizar todos usando o .map, criando cada card.

`cardcortes` componente que recebe por props as propriedades img, additem, tipo e valor, sendo genérico e reutilizável.

`prices` componente que usa o parametro children, para ser renderizado no page quando chamado e utilizando como filhos o que for passado dr=entro de seu escopo, reutilizavel 

`page` componente principal, onde recebe os componentes de listcortes, prices, alem da section de promoção. No escopo, antes do retorno, foi criado a fnção additem, usando usestate e useefect.
 

###`Styles`

Usei Styles module para trabalhar o estilo de cada componente separado, além de haver uma pasta chamada Styles com arquivos genéricos de scss, como reset e global para agrupar tudo em um lugar e não deixar o código solto ou poluído.
Há também o scss module, onde cada componente recebe um componente de css para estilizar o mesmo, tendo assim maior facilidade para manutenção do códico nos estilos.