/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import internal from "stream";
import { NOMEM } from "dns";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const Ubuntu = require('./entities/Ubuntu')
const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);

	console.log('Desafio 2 ')
	
const dev = (isDev: boolean) => {
	return isDev ? 'Sim':'Não'
} 

	let ubuntus: Ubuntu[] = [
    {nome:'Cíntia Silva', idade:29, peso:80, altura:1.6, isDev: false},
		{nome:'Adrian Lopes', idade:24, peso:90, altura:1.9, isDev: true},
		{nome:'Bianca Oliveira', idade:25, peso:60, altura:1.6, isDev: false},
		{nome:'Britivaldo Neto', idade:25, peso:70, altura:1.6, isDev: true},
		{nome:'Eliel Silva', idade:34, peso:80, altura:1.7, isDev: true}
	];

	let quantidadeDev = 0 

	ubuntus.forEach(ubuntu => { 
		console.log('Nome: ' + ubuntu.nome);
		console.log('idade: ' + ubuntu.idade);
		console.log('peso: ' + ubuntu.peso);
		console.log('altura: ' + ubuntu.altura);
		console.log('É desenvolvedor? ' + dev(ubuntu.isDev));
  if(ubuntu.isDev){
	quantidadeDev += 1
}
  let nomeCompleto = ubuntu.nome.split(" ")
	if(nomeCompleto.includes('Silva')){
		console.log(ubuntu.nome)
	}
	});

	let idadetotal = ubuntus.map((ubuntu)=>ubuntu.idade).reduce((acumulador, valoratual)=>{
		return acumulador + valoratual
	})
 
	console.log('Soma das idades:' + idadetotal)

	let nomesAgrupados = ubuntus.map((ubuntu)=>ubuntu.nome).reduce((acumulador, valoratual)=>{
		return acumulador + ' ' + valoratual
	})

	console.log('Nomes agrupados: ' + nomesAgrupados)

	let ImcUbuntus = ubuntus.map(ubuntu =>{
		return ubuntu.peso / (ubuntu.altura * ubuntu.altura)
	}).reduce((acumulador, valorAtual) =>{
		return acumulador + valorAtual
	})

	console.log('Média IMC: ' + (ImcUbuntus / ubuntus.length))
  console.log( 'Quantos são Devs?: ' + quantidadeDev)

	console.log ('Ubuntus com Silva:')
  ubuntus.forEach(ubuntu => {
  let nomeCompleto = ubuntu.nome.split(" ")
	if(nomeCompleto.includes('Silva')){
		console.log(ubuntu.nome)
	}
	})

})