class Ubuntu {
		nome: string;
		idade: number;
		peso: number;
		altura: number;
		isDev: boolean;
		constructor(name: string, age:number, weight:number, height:number, isDev: boolean) {
			this.nome = name; 
			this.idade = age; 
			this.peso = weight; 
			this.altura = height;
			this.isDev = isDev;
		}
	}
  
  module.exports = Ubuntu;