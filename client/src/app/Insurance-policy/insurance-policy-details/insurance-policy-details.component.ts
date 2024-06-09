import { Component, Input, OnInit } from '@angular/core';
import { InsurancePolicy } from '../../../models/insurance-policy.model';
import { InsurancePolicyService } from '../../../service/insurance-policy.service';
import { DatePipe, NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { InsurancePolicyFormComponent } from '../insurance-policy-form/insurance-policy-form.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { DialogDeleteComponent } from '../../dialog/dialog-delete/dialog-delete.component';
@Component({
  selector: 'app-insurance-policy-details',
  standalone: true,
  imports: [NgFor, MatDialogModule, DialogDeleteComponent,
    MatCardModule, MatGridListModule, MatButtonModule, DatePipe],
  templateUrl: './insurance-policy-details.component.html',
  styleUrl: './insurance-policy-details.component.css',
  providers: [InsurancePolicyService, InsurancePolicyFormComponent]
})
export class InsurancePolicyDetailsComponent implements OnInit {
  @Input()
  userId: number = -1;
  insurancePolicies: InsurancePolicy[] = [];

  constructor(private insurancePolicyService: InsurancePolicyService,
    private dialog: MatDialog) { }

  ngOnInit(): void {

    this.insurancePolicyService.GetInsurancePolicyForUser(this.userId)
      .subscribe(x => this.insurancePolicies = x);

  }
  deletePolicy(insurancePolicyId: number | any) {
    const ref = this.dialog.open(DialogDeleteComponent, {
      minWidth: '60vh', minHeight: '50wh', disableClose: true,
    })
    ref.afterClosed().subscribe(x => {
      if (x) {
        this.insurancePolicyService.deleteInsurancePolicy(insurancePolicyId)
          .subscribe(() => {
            this.insurancePolicies = this.insurancePolicies.filter(x => x.id != insurancePolicyId)
          })
      }
    })

  }
  editPolicy(insurancePolicy: InsurancePolicy | any) {
    const ref = this.dialog.open(InsurancePolicyFormComponent, {
      data: { type: "Edit", insurancePolicy, userId: this.userId },
      minWidth: '60vh', minHeight: '50wh', disableClose: true,
    });
    ref.afterClosed().subscribe(x => {
      if (x) {
        const findIndex = this.insurancePolicies.findIndex(y => y.id == x.id);
        if (findIndex > -1) {
          this.insurancePolicies[findIndex] = x;
        }
      }
    })

  }

  AddInsurancePolicy() {
    const ref = this.dialog.open(InsurancePolicyFormComponent, {
      data: { type: "Add", userId: this.userId },
      minWidth: '60vh', minHeight: '50wh', disableClose: true,
    });
    ref.afterClosed().subscribe(x => {
      if (x) {
        this.insurancePolicies.push(x)
      }
    })


  }
}
