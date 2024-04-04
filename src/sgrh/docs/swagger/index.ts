import type swaggerJSDoc from 'swagger-jsdoc';
import components from './components';
import schemas from './schemas';

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API do Sistema de Gestão de Recursos Humanos - SGRH',
            description: 'Essa API tem como objetivo o gerenciamento de membros e ocorrências de uma empresa.',
            version: '1.0.0',
            contact: {
                name: 'Focus Consultoria'
            }
        },
        servers: [
            {
                url: '/api',
                description: 'Servidor Principal'
            }
        ],
        components,
        schemas
    },
    apis: ['./src/main/routes/**/*.ts']
};

export default options;
