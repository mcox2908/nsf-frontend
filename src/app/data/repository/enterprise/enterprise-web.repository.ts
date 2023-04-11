import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { EnterpriseModel } from 'src/app/core/models/enterprise.model';
import { EnterpriseRepository } from 'src/app/core/repositories/enterprise.repository';
import { CLIENT_URL } from 'src/app/common/helpers/constants/url.constants';
import { ResponseData } from 'src/app/core/models/response.model';


@Injectable({
    providedIn: 'root'
})

export class EnterpriseWebRepository extends EnterpriseRepository {

    constructor(
        private http: HttpClient
    ) {
        super();
    }

    // Listado general de Empresas
    getAllEnterprises(): Promise<ResponseData<EnterpriseModel>> {

        let returnValue;
        try         {  
       // const url = `${CLIENT_URL}`
       // returnValue =  lastValueFrom(this.http.get<ResponseData<EnterpriseModel>>(url))
        }catch(ex){
            alert(ex);
        }
        return returnValue;
    } 
}
