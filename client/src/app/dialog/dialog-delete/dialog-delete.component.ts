import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-user-delete',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatDialogModule],
  templateUrl: './dialog-delete.component.html',
  styleUrl: './dialog-delete.component.css',

})
export class DialogDeleteComponent {

  constructor(
    private ref: MatDialogRef<Component>) { }


  cencel() {
    this.ref.close(false)
  }
  delete() {
    this.ref.close(true)
  }
}
