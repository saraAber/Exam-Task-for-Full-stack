import { Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { InsurancePolicyFormComponent } from './Insurance-policy/insurance-policy-form/insurance-policy-form.component';
import { UserAddComponent } from './user/user-add/user-add.component';

export const routes: Routes = [
    {
        path: 'user', component: UserListComponent,
    },
    {
        path: "user-details/:id", component: UserDetailsComponent,
        children: [{
            path: "add-policy", component: InsurancePolicyFormComponent,
        }, {
            path: "edit-policy/:insurancePolicyId", component: InsurancePolicyFormComponent

        }]
    },
    { path: 'add-user', component: UserAddComponent }
]
