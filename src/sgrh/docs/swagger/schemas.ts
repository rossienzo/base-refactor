import { CellSchema } from './baseSchemas/cell-schema';
import { ErrorSchema } from './baseSchemas/error-schema';
import { ResidenceDistanceSchema } from './baseSchemas/residence-distance-schema';
import { UserSchema } from './baseSchemas/user-schema';
import { UserParamSchema } from './paramSchemas/user-param-schema';

export default {
    User: UserSchema,
    UserParam: UserParamSchema,
    Cell: CellSchema,
    ResidenceDistance: ResidenceDistanceSchema,
    Error: ErrorSchema
};
