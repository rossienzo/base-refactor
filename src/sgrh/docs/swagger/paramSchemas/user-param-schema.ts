export const UserParamSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'string'
        },
        name: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        personalEmail: {
            type: 'string'
        },
        cpf: {
            type: 'string'
        },
        phone: {
            type: 'string'
        },
        password: {
            type: 'string'
        },
        passwordConfirmation: {
            type: 'string'
        },
        registration: {
            type: 'string'
        },
        numProjects: {
            type: 'number'
        },
        meters: {
            type: 'number'
        },
        activeMember: {
            type: 'boolean'
        },
        idResidenceDistance: {
            type: 'number'
        },
        idCell: {
            type: 'number'
        },
        idRole: {
            type: 'number'
        }
    },
    required: ['name', 'email', 'password', 'registration', 'idResidenceDistance', 'idCell']
};
