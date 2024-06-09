import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { InsurancePolicy } from '../../../models/insurance-policy.model';
import { InsurancePolicyDetailsComponent } from '../../Insurance-policy/insurance-policy-details/insurance-policy-details.component';
import { User } from '../../../models/user.model';
import { LocationStrategy } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../../service/user.service';
import { UserAddComponent } from '../user-add/user-add.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [RouterOutlet, UserAddComponent, InsurancePolicyDetailsComponent, MatButtonModule, MatCardModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
  providers: [UserService]
})
export class UserDetailsComponent implements OnInit {
  polices: InsurancePolicy[] = [];
  @Input()
  userId: number;
  user: User;
  isEdit: boolean = false;
  constructor(private activatedRoute: ActivatedRoute,
    private location: LocationStrategy,
    private userService: UserService,
    private route: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(x => {
        this.userId = x['id'];
        this.user = this.location.getState() as User;
      })
  }

  Delete() {
    this.userService.deleteUser(this.userId)
      .then(() => this.route.navigate(['/user']));
  }
  Edit() {
    this.isEdit = true;
  }

  updateUser(user: User) {
    this.user = user;
    this.isEdit = false;
  }



}
