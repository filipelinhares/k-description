#Descrição

É um simples plugin jQuery para criação de descrições em imagens

###[Exemplos](http://filipelinhares.github.com/examples/exemplodescrisao/)
---
#Compatibilidade de Navegadores

- Internet Explorer 6+
- Mozilla Firefox 3.6+
- Google Chrome 4+
- Safari 5+
- Opera 10.10+

---
#Dependências

- jQuery 1.8.3 http://www.jquery.com
- Query Easing [*Opcional*] http://gsgd.co.uk/sandbox/jquery/easing

---

##Como Usar
Para utilizar basta você baixar os arquivos, e colocar no *head*, após isso em um elemento em bloco utilize o seletor jQuery *$()* e então utilize o plugin *descricao* com as suas preferências assim:

`
$('seletorjQuery').descricao({<i>preferencias</i>});`
---
#Preferências
###-heightDescricao
Defini o tamanho da janela da descrição.
-Valor Padrão 100px.
ATENÇÃO ACONCELHAMOS COLOCAR DO MESMO TAMANHO DO ELEMENTO PAI
sintaxe:

`$('seletorjQuery').descricao({<i>'heightDescricao' : 'valorEmPx'</i>});`
###-widthDescricao
Defini a largura da janela de descrição.
-Valor Padrão 100%.

`$('seletorjQuery').descricao({"widthDescricao': 'valorEmPx'*});`

###-marginTopDescricao
É a distancia que a descrição vai ficar do topo, em relação ao seu elemento pai assim que a animação estiver "pronta".
-Valor Padrão 50px.

`$('seletorjQuery').descricao({<i>'marginTopDescricao' : 'valorEmPx'</i>});`
###-duracaoDescricao
O tempo que ira demora a animação da descrição
-Valor Padrão 1000;

`$('seletorjQuery').descricao({'duracaoDescricao' : 'valorEmMilisegundo'});`
###-direcaoEntrada
A direção de onde ira surgir a descrição.
-Valor Padrão up  //sem aspas.

`$('seletorjQuery').descricao({<i>'direcaoEntrada' : up ou down</i>});`
###-direcaoSaida
A direção para onde vai a descrição.
-Valor Padrão down  //sem aspas.

`$('seletorjQuery').descricao({'direcaoSaida' : up dowm});`
###-opacidadeDescricao
Opacidade da descrição.
-Valor Padrao 1. //sem aspas(Os valores vão de 0 a 1 podendo passar por 0.50, 0.40 etc.)

`$('seletorjQuery').descricao({'opacidadeDescricao' : 'valorEmPx'});`
###-textoDescricao
É o texto que vai dentro da descrição.
Valor Padrao = 'Plugin Descrição em jQuery - Criado por Filipe Linhares'

`$('seletorjQuery').descricao({'textoDescricao : 'textoAqui'});`
###-easingDescricao
Valor Padrao

`$('seletorjQuery').descricao({'easingDescricao : 'valorAqui'});`

---
#Estilização
###Janela da Descrição
Para estilizar a janela da descrição basta criar um estilo CSS para o seguinte elemento:
*p.descricao*
###Texto da Descrição
Para estilizar o texto basta criar um estilo css para o seguinte elemento:
*span.textoDescricao*
---
####Autor: Filipe Linhares
[Twitter](http://twitter.com/ofilipelinhares)
