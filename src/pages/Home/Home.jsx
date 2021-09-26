import React, { useContext, useEffect, useState } from 'react';
import StoreContext from 'components/Store/Context';
import Modal from '../modal'
import './Home.css';
import camisa from 'assets/img/camisa.jpeg';
import terno from 'assets/img/terno.jpeg';
import oculos from 'assets/img/oculos.jpeg';
import { useAuth } from '../../context/index';

const PagesHome = () => {
  const { setToken } = useContext(StoreContext);



  const[screen,setScrean] = useState(1) 


const [modal,setModal] = useState(false) 

  function clicar(inteiro){ 
	setModal(!modal) 
	setScrean(inteiro) 
	  
  }
  const{user}=useAuth()  
  useEffect(()=> {
	  console.log(
		  user
	  )
  },[])
  
return (
 <div>
	 <h3 >
	 { typeof(user) !==  'object'? user: <> </>}  {} 
	 </h3>
 
	 

<div class="social-box">
    <div class="container">
     	<div class="row">
			 
			    <div class="col-lg-4 col-xs-12 text-center">
					
					<div class="box">
                       
						<div class="box-title">
							<h3>Camisa </h3>
						</div>
						<img class="img-fluid rounded mb-5" src={camisa } alt="..." />
						<div class="box-btn">
								
						    <a href="#" onClick={()=> {clicar(1)}}>Ver Detalhes</a> {}
						</div>
					 </div>
				</div>	 
				
				 <div class="col-lg-4 col-xs-12  text-center">
					<div class="box">
					   
						<div class="box-title">
							<h3>Terno</h3>
						</div>
						<img class="img-fluid rounded mb-5" src={terno } alt="..." />
						<div class="box-btn">
						    <a href="#" onClick={()=> {clicar(2)}}>Ver Detalhes</a>
						</div>
					 </div>
				</div>	 
				
				 <div class="col-lg-4 col-xs-12 text-center">
					<div class="box">
                       
						<div class="box-title">
							<h3>Óculos Aviador</h3>
						</div>
						<img class="img-fluid rounded mb-5" src={oculos } alt="..." />
						<div class="box-btn">
						    <a href="#" onClick={()=> {clicar(3)}}>Ver Detalhes</a>
						</div>
					 </div>
				</div>	 
		
		</div>		
    </div>
	

	<Modal modal={modal} screen={screen} />  { }
	
</div>
</div>

  );
};

export default PagesHome;
