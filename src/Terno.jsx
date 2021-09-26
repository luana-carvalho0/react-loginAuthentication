import React, { useEffect } from 'react';

import './roupas.css';

const Terno = ()=> {
    return(

        <div class="container">
		<h2>Detalhes</h2>

		<table>
  			<tr>
    			<th>Marca</th>
    			<th>Material</th>
				<th>Cor</th>
    			<th>Preço</th>
  			</tr>
  			<tr>
    			<td>Milano</td>
    			<td>Lã e Poliéster</td>
    			<td>Azul Marinho</td>
				<td>$2000</td>
  			</tr>
 			 <tr>
    			<td>Milano</td>
    			<td>Lã e Poliéster</td>
    			<td>Preto</td>
				<td>$2050</td>
  			</tr>

			<h2>Descrição</h2>
			<div class="row">
                <div><p class="lead">Produzido em tecido misto de lã de alta torção com poliéster, conta com paletó, calça e cinto do mesmo tecido. Com uma construção moderna em tecido especial, as peças podem ser lavadas na máquina de lavar convencional e secas naturalmente, sem perder a silhueta Aramis. Prático, proporciona uma manutenção fácil para o homem que não tem tempo de cuidar de cada detalhe e precisa estar impecável no trabalho, nas viagens ou nos eventos sociais. O costume acompanha uma bolsa de lavagem, com instruções.</p></div>
            </div>
		</table>






	</div>
	


    );

}



export default Terno;
