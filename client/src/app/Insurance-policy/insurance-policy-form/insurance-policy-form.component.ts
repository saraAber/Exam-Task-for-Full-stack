import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule, FormControl, Validators } from '@angular/forms'
import { InsurancePolicyService } from '../../../service/insurance-policy.service';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InsurancePolicy } from '../../../models/insurance-policy.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-insurance-policy-form',
  standalone: true,
  imports: [FormsModule, MatDatepickerModule,
    NgIf,
    ReactiveFormsModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './insurance-policy-form.component.html',
  styleUrl: './insurance-policy-form.component.css',
  providers: [InsurancePolicyService, provideNativeDateAdapter()]
})
export class InsurancePolicyFormComponent implements OnInit {

  userId: string | any = '';
  isEdit: boolean = false;
  insurancePolicy: number = -1;
  policyForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private insurancePolicyService: InsurancePolicyService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<Component>
  ) {


    this.policyForm = this.formBuilder.group({
      insuranceAmount: new FormControl<number | null>(null, Validators.required),
      policyNumber: new FormControl<string>('', Validators.required),
      endDate: new FormControl<Date | any>(new Date(), Validators.required),
      startDate: new FormControl<Date | any>(new Date(), Validators.required)
    });
  }

  ngOnInit(): void {
    this.isEdit = this.data['type'] == 'Edit';
    this.userId = this.data['userId'];
    if (this.isEdit) {
      const insurancePolicy = this.userId = this.data['insurancePolicy'] as InsurancePolicy;
      if (insurancePolicy) {
        this.insurancePolicy = insurancePolicy.id || -1;
        this.policyForm.controls['endDate'].setValue(new Date(insurancePolicy['endDate']))
        this.policyForm.patchValue(insurancePolicy)
      }
    }
    else {
      this.policyForm.reset()
    }

  }



  onSubmit() {
    if (this.isEdit && this.insurancePolicy > -1) {
      this.insurancePolicyService
        .UpdateInsurancePolicy(this.insurancePolicy, this.policyForm.value)
        .subscribe(x => this.ref.close(x));
    }
    else {

      this.insurancePolicyService
        .AddInsurancePolicy({ ...this.policyForm.value, userId: this.userId })
        .subscribe(x => this.ref.close(x));
    }
  }

  cancel() {
    this.ref.close()
  }

}
