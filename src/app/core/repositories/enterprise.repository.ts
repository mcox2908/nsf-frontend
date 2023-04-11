import { EnterpriseModel } from '../models/enterprise.model';
import { ResponseData } from '../models/response.model';

export abstract class EnterpriseRepository {

       abstract getAllEnterprises(): Promise<ResponseData<EnterpriseModel>>

    

}
