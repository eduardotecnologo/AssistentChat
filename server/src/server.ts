import {fastify} from 'fastify';
import {
    serializerCompiler,
    validatorCompiler,
    type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { fastifyCors } from '@fastify/cors';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
    origin: 'http://localhost:5173', // '*' Permite requisições de qualquer origem
    //methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    //allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
    //exposedHeaders: ['Content-Length', 'X-My-Custom-Header'], // Cabeçalhos expostos
    //credentials: true, // Permite cookies e credenciais
    //maxAge: 86400, // Tempo em segundos que a resposta pode ser armazenada
});

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.listen({port: 3333}).then(() => {
    console.log('Servidor rodando na porta 3333');
}).catch((err) => {
        console.error('Erro ao iniciar o servidor:', err);
    });