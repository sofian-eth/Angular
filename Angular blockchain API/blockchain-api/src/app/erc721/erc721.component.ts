import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';

@Component({
  selector: 'app-erc721',
  templateUrl: './erc721.component.html',
  styleUrls: ['./erc721.component.css']
})
export class Erc721Component {
  dataForm: FormGroup = new FormGroup({});
  response : string ='';
  constructor(private formBuilder:FormBuilder,private apiService : ApiService,
    private toastr: ToastrService,
    private ngxLoader: NgxUiLoaderService
    ) {
  }

  ngOnInit(): void {
    this.formInit();  
  }

  formInit(){
    this.dataForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      symbol: ['', [Validators.required]],
      uri: ['', [Validators.required]],
      supply: [0, [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    if(this.dataForm.valid) {
      this.ngxLoader.start();
      const formData = this.dataForm.value;

      this.apiService.deployERC721(formData).subscribe((response : any)=>{
        this.ngxLoader.stop();
        if(response.success){
          this.response = response.ProjectContractAddress;
          this.showSuccess(response.ProjectContractAddress);
        }
        else{
          this.showError();
        }
      })
    }
  }

  showSuccess(resp:any) {
    this.toastr.success(resp,'ERC-721 Token Deployed to: ', {closeButton: true}).onTap.pipe(take(1))
    .subscribe(() =>  window.open('https://mumbai.polygonscan.com/token/'+resp ));
  }

  showError(){
    this.toastr.error('Error','Please try again', {closeButton:true});
    // this.toastr.success('','',{
    //   disableTimeOut:true
    // })
  }
}