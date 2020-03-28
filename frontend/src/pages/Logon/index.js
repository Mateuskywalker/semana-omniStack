import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';
import api from '../../services/api';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

function Logon() {
	const [id, setId] = useState('');
	const history = useHistory();

	async function handleLogin(e) {
		e.preventDefault();

		try {
			const result = await api.post('sessions', { id });

			// salvando o id e nome da ONG para a app inteira ver
			localStorage.setItem('ongId', id);
			localStorage.setItem('ongName', result.data.name);

			history.push('/profile');
		}catch(err) {
			alert('Erro ao efetuar login. Por favor, tente novamente.')
		}

	}
	return(
		<div className="logon-container">
			<section className="form">
				<img src={logoImg} alt="Be The Hero"/>

				<form onSubmit={handleLogin}>
					<h1>Faça seu logon</h1>
					<input
						placeholder="Sua Id"
						value={id}
						onChange={e => setId(e.target.value)}/>
					<button className="button" type="submit">Entrar</button>

					<Link className="back-link" to="/register">
						<FiLogIn size={16} color="#E02041"/>
						Não tenho cadastro
					</Link>
				</form>
			</section>
		 	<img src={heroesImg} alt="heroes"/>
		</div>
	);
}

export default Logon;