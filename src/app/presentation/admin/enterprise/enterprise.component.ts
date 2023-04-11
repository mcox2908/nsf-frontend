import { Component, OnInit } from '@angular/core';
import { EnterpriseModel } from 'src/app/core/models/enterprise.model';
import { FormControl } from '@angular/forms';
import { GetAllEnterprisesUsecase } from 'src/app/core/usecase/enterprise/get-all-enterprises.usecase';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.scss']
})
export class EnterpriseComponent implements OnInit {

  lEnterprises: EnterpriseModel[] = []
  lEnterprisesChunk: EnterpriseModel[] = []
  mensaje: string
  //filtro = new FormControl()


  constructor(
    private _getAllEnterprises: GetAllEnterprisesUsecase,

  ) { 


  }

  ngOnInit(): void {


    this.getAllEnterprises()
alert('x') ;   
  }

  
  async getAllEnterprises() {
    try {

      /*  const data: any = await this._getAllEnterprises.execute()
        console.log(data)
         
        this.lEnterprises = data.data
        this.lEnterprisesChunk = this.lEnterprises.slice(0, 4);
        this.mensaje = data.message
        */
       
    }
    catch (error) {
        console.log("Error: ", error)
        alert(error);
    }
}

}
