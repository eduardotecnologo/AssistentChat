import { fastifyCors } from '@fastify/cors';
import { sql } from './db/connection.ts';
import {fastify} from 'fastify';
import {
    serializerCompiler,
    validatorCompiler,
    type ZodTypeProvider,
} from 'fastify-type-provider-zod'

import { env } from './env.ts';
import { get } from 'http';
import { getRoomsRoute } from './http/routes/get-rooms.ts';
import { createRoomRoute } from './http/routes/create-room.ts';
import { getRoomQuestions } from './http/routes/get-room-questions.ts';
import { createQuestionRoute } from './http/routes/create-question.ts';

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

app.get('/health', () => {
    return { status: 'ok' };

})

app.register(getRoomsRoute)
app.register(createRoomRoute)
app.register(getRoomQuestions)
app.register(createQuestionRoute)

app.listen({ port: env.PORT }).then(() => {
    console.log('Servidor rodando na porta 3333');
}).catch((err) => {
        console.error('Erro ao iniciar o servidor:', err);
    });


