import { Injectable } from '@angular/core';
import { UseCasePromise } from 'src/app/core/base/use-case-promise';
import { ClientModel } from 'src/app/core/models/client.model';
import { ResponseData } from 'src/app/core/models/response.model';
import { ClientRepository } from 'src/app/core/repositories/client.repository';

@Injectable({
    providedIn: 'root'
})

export class RegisterClientUsecase implements UseCasePromise<ClientModel, ClientModel> {

    constructor(
        private _clientRepository: ClientRepository
    ) { }

    execute(client: ClientModel): Promise<ResponseData<ClientModel>> {

        return this._clientRepository.registerClient(client)
    }
}
