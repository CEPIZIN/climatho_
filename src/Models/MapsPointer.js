import mongoose, { Schema } from "mongoose";

let MapPointer = new Schema({
    Adress: string
})
const pointRefil = mongoose.Model(MapPointer);

// pensando em fazer um getDistance e pegar a distancia de vc e dos pontos 

// mocando alguns dados (Não levar em consideração ) :
const addresses = [
    "Rua dos Pinheiros, 123, Pinheiros, São Paulo",
    "Avenida Rebouças, 456, Pinheiros, São Paulo",
    "Rua João Ramalho, 789, Pinheiros, São Paulo",
    "Rua Domingos de Morais, 101, Vila Mariana, São Paulo",
    "Avenida Lins de Vasconcelos, 202, Vila Mariana, São Paulo",
    "Rua Vergueiro, 303, Vila Mariana, São Paulo",
    "Rua Clodomiro Amazonas, 404, Vila Olímpia, São Paulo",
    "Avenida Brigadeiro Faria Lima, 505, Vila Olímpia, São Paulo",
    "Rua Gomes de Carvalho, 606, Vila Olímpia, São Paulo"
];
