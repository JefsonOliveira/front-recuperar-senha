import React, { useState } from "react";
import axios from "axios";
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import '../../styles.css';

function Login() {
    const [formInputOne, setFormInputOne] = useState("");
    const [formInputTwo, setFormInputTwo] = useState("");
    const [type, setType] = useState('password');
		const [typeConfirm, setTypeConfirm] = useState('password');
	
		const { id } = useParams()
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (formInputOne === "" || formInputTwo === "") {
        alert("Os campos precisam ser preenchidos")
      }
      else if (formInputOne === formInputTwo) {
				const json = {
					password: formInputOne,
					passwordConfirmation: formInputTwo,
					key: id
				}

				await axios.put('http://localhost:3333/user/forgot-password', json)
				.then(response => {
					if (response.data) {
						setFormInputOne("");
						setFormInputTwo("");
						window.location.href = "/confirm"
					} else {
						alert("Não foi possivel mudar a senha!");
					}
				})
				.catch(error => {
					console.warn(error)
					alert('Houve um erro interno.')
				})
      } else {
        alert("As senhas são diferentes.");
      }
    };  
    
    return (
        <div className="body">
        <form className="form" onSubmit={handleSubmit}>
          <h4 className="title">Preencha os campos abaixo para mudar sua senha.</h4>
          <div className="row">
            <input type={type} className="formInputOne"
              placeholder="Digite sua nova senha..."
              value={formInputOne}
              onChange={(e) => setFormInputOne(e.target.value)}
            />
            <span className="minimo">Minimo de 8 caractere com letras e números.</span>
            <button type="button" className="buttonNewPassWord" onClick={() => type === 'password' ? setType('text') : setType('password')}>
              {type === 'password' ? <BsEyeSlash size={25} color="#000" /> : <BsEye size={25} color="#000" />}
            </button>
          </div>
          <div className="row">
            <input type={typeConfirm} className="formInputTwo"
              placeholder="Confirme sua nova senha..."
              value={formInputTwo}
              onChange={(e) => setFormInputTwo(e.target.value)} />
            <button type="button" className="buttonConfirmNewPassWord" onClick={() => typeConfirm === 'password' ? setTypeConfirm('text') : setTypeConfirm('password')}>
              {typeConfirm === 'password' ? <BsEyeSlash size={25} color="#000" /> : <BsEye size={25} color="#000" />}
            </button>
          </div>
          <button type="submit" className="submit">Salvar</button>
        </form>
      </div>
    );
}

export default Login;


















