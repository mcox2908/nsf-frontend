import { Injectable } from '@angular/core';
import { UseCasePromise } from 'src/app/core/base/use-case-promise';
import { EnterpriseModel } from 'src/app/core/models/enterprise.model';
import { ResponseData } from 'src/app/core/models/response.model';
import { EnterpriseRepository } from 'src/app/core/repositories/enterprise.repository';

@Injectable({
    providedIn: 'root'
})

export class GetAllEnterprisesUsecase implements UseCasePromise<void, EnterpriseModel> {

    constructor(
        private _EnterpriseRepository: EnterpriseRepository
    ) { }

    execute(): Promise<ResponseData<EnterpriseModel>> {

        return this._EnterpriseRepository.getAllEnterprises()
    }
}
