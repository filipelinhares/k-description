#Descrição

É um simples plugin jQuery para criação de descrições em imagens

###[Exemplos](http://filipelinhares.github.com/examples/exemplodescrisao/)
<hr>
#Compatibilidade de Navegadores
<ul>
<li>Internet Explorer 6+</li>
<li>Mozilla Firefox 3.6+</li>
<li>Google Chrome 4+</li>
<li>Safari 5+</li>
<li>Opera 10.10+</li>
</ul>
<hr>
#Dependências
<ul>
<li>[jQuery 1.7.0](http://www.jquery.com)</li>
<li>[jQuery Easing<i>Opcional</i>](http://gsgd.co.uk/sandbox/jquery/easing/).</li>
</ul>
<hr>
#Como Usar
Para utilizar basta você baixar os arquivos, e colocar no <i>head</i>, após isso em um elemento em bloco utilize o seletor jQuery <span class="italico">$()</span> e então utilize o plugin <span class="italico">descricao</span> com as suas preferências assim:
<code>  
$('seletorjQuery').descricao({<i>preferencias</i>});</code>
<hr>
#Preferências
###-heightDescricao  
Defini o tamanho da janela da descrição.  
-Valor Padrão 100px.  
ATENÇÃO ACONCELHAMOS COLOCAR DO MESMO TAMANHO DO ELEMENTO PAI  
sintaxe:  
<code>$('seletorjQuery').descricao({<i>'heightDescricao' : 'valorEmPx'</i>});</code>
###-widthDescricao
Defini a largura da janela de descrição.  
-Valor Padrão 100%.  
<code>$('seletorjQuery').descricao({<i>'widthDescricao' : 'valorEmPx'</i>});</code>

###-marginTopDescricao  
É a distancia que a descrição vai ficar do topo, em relação ao seu elemento pai assim que a animação estiver "pronta".  
-Valor Padrão 50px.  
<code>$('seletorjQuery').descricao({<i>'marginTopDescricao' : 'valorEmPx'</i>});</code>
###-duracaoDescricao  
O tempo que ira demora a animação da descrição  
-Valor Padrão 1000;  
<code>$('seletorjQuery').descricao({<i>'duracaoDescricao' : 'valorEmMilisegundo'</i>});</code>
###-direcaoEntrada  
A direção de onde ira surgir a descrição.  
-Valor Padrão up  //sem aspas.  
<code>$('seletorjQuery').descricao({<i>'direcaoEntrada' : up ou down</i>});</code>  
###-direcaoSaida  
A direção para onde vai a descrição.  
-Valor Padrão down  //sem aspas.  
<code>$('seletorjQuery').descricao({<i>'direcaoSaida' : up dowm</i>});</code>  
###-opacidadeDescricao  
Opacidade da descrição.  
-Valor Padrao 1. //sem aspas(<i>Os valores vão de 0 a 1 podendo passar por 0.50, 0.40 etc.</i>)  
<code>$('seletorjQuery').descricao({<i>'opacidadeDescricao' : 'valorEmPx'</i>});</code>  
###-textoDescricao  
É o texto que vai dentro da descrição.  
Valor Padrao = 'Plugin Descrição em jQuery - Criado por Filipe Linhares'
<code>$('seletorjQuery').descricao({<i>'textoDescricao : 'textoAqui'</i>});</code>
###-easingDescricao  
Valor Padrao = ''
<code>$('seletorjQuery').descricao({<i>'easingDescricao : 'valorAqui'</i>});</code>  
<hr>
#Estilisação  
###Janela da Descrição  
Para estilizar a janela da descrição basta criar um estilo CSS para o seguinte elemento:  
<i>p.descricao</i>
###Texto da Descrição
Para estilizar o texto basta criar um estilo css para o seguinte elemento:  
<i>span.textoDescricao</i>
<hr>
####Autor: Filipe Linhares  
[Twitter](http://twitter.com/ofilipelinhares)
