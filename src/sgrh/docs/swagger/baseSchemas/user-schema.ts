export const UserSchema = {
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
        residenceDistance: {
            $ref: '#/schemas/ResidenceDistance'
        },
        cell: {
            $ref: '#/schemas/Cell'
        },
        role: {
            $ref: '#/schemas/Role'
        }
    },
    required: [
        'name',
        'email',
        'password',
        'numProjects',
        'registration',
        'meters',
        'activeMember',
        'residenceDistance',
        'cell',
        'role'
    ]
};
