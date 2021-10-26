import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi'
import api from '../../services/api';
import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './style';
const [repositories, setRepositories] = useState ([]);

function handleAddRepository(){
    //adicao de um novo repositorio
    //Consumir api do git hub
    //Salvar novo repositorio no estado
}

const Dashboard: React.FC = () => {

    return(
        <>
        <img src={logo} alt="Github Explorer" />
        <Title> EXPLORE REPOSITÓRIOS NO GITHUB 🚀</Title>;

         <Form>
             <input placeholder="Digite o nome do repositorio" />
             <button type="submit">Pesquisar </button>
         </Form>
         <Repositories>
           <a href="Alex Santos">
            <img
               src="https://avatars.githubusercontent.com/u/83323289?v=4"
               alt="Alex Santos"
               />
               <div>
                   <strong>Rocketeseat/unform</strong>
                   <p>Performance-focused API for React forms </p>
               </div>
               <FiChevronRight size={20}/>
               </a>
         </Repositories>



        </>
    );

};
export default Dashboard;
