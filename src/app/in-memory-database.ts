import { InMemoryDbService } from 'angular-in-memory-web-api'

export class InMemoryDatabse implements InMemoryDbService {

    createDb(){

        const categories = [
            {id: 1, name: "Lazer", description: "Ciname, shopping e etc"},
            {id: 2, name: "Compras", description: "Feira, variedades e etc"},
            {id: 3, name: "Financiamento", description: "Apartamento, carro e etc"},
            {id: 4, name: "Cartões", description: "Credcard, Mastercard, Hipercard"},
            {id: 5, name: "Educação", description: "Escola, Faculdade, Idiomas e etc"}
        ]
        return { categories }
    }
}