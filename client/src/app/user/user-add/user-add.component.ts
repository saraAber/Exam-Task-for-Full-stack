import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../service/user.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,
    MatCardModule, MatFormFieldModule, MatInputModule,
    MatButtonModule],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css',
  providers: [UserService]
})
export class UserAddComponent implements OnInit {
  isEdit: boolean = false;
  @Input()
  user: User;
  @Output()
  update: EventEmitter<User> = new EventEmitter<User>()
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private route: Router
  ) {


    this.userForm = this.formBuilder.group({
      name: new FormControl<number | null>(null, Validators.required),
      email: new FormControl<string>('', [Validators.required, Validators.email]),

    });
  }
  ngOnInit(): void {
    if (this.user) {
      this.userForm.patchValue(this.user)
    }
  }

  onSubmit() {
    if (this.user) {
      this.userService.UpdateUser(this.user.id, this.userForm.value)
        .then((x: User) => this.update.emit(x))
    }
    this.userService.AddUser(this.userForm.value)
      .then(() => this.route.navigate(['/user'])).catch(e=>MessageEvent)

  }


}
