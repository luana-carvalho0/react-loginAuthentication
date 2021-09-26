import React, { useEffect } from 'react';

import './roupas.css';

const Oculos = ()=> {
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
    			<td>Accessories</td>
    			<td>Hastes em metal</td>
    			<td>Preto</td>
				<td>$160</td>
  			</tr>
 			 <tr>
    			<td>Accessories</td>
    			<td>Hastes em metal</td>
    			<td>Marrom</td>
				<td>$150</td>
  			</tr>

			<h2>Descrição</h2>
			<div class="row">
                <div><p class="lead">Os óculos escuros possuem fator de proteção solar (FPS) proporcionando maior cuidado aos seus olhos. Mas atenção, o uso deles não é indicado para radiações UV produzidas artificialmente tampouco para uso contra impactos mecânicos (exemplo: solda). Os óculos Accessories são fabricados com materiais apropriados que garantem conforto e leveza.</p></div>
            </div>
		</table>






	</div>
	


    );

}



export default Oculos;
