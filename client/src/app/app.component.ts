import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { InsurancePolicyFormComponent } from './Insurance-policy/insurance-policy-form/insurance-policy-form.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent, MatToolbarModule,
    
    MatIconModule, MatButtonModule, InsurancePolicyFormComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'client';
}
