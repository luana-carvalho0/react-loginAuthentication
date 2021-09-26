import React, { useEffect } from 'react';

import './roupas.css';

const Camisa = ()=> {
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
    			<td>Algodão</td>
    			<td>Branca</td>
				<td>$200</td>
  			</tr>
 			 <tr>
    			<td>Milano</td>
    			<td>Algodão</td>
    			<td>Preta</td>
				<td>$150</td>
  			</tr>

			<h2>Descrição</h2>
			<div class="row">
                <div><p class="lead">A camisa social Milano é confeccionada em tecido tricoline, com mangas longas e design liso. Um estilo sofisticado e versátil, ideal para acompanhar as combinações formais e com perfil mais clássico.</p></div>
            </div>
		</table>






	</div>
	


    );

}



export default Camisa;
