export const CellSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'string'
        },
        name: {
            type: 'string'
        }
    },
    required: ['name']
};
