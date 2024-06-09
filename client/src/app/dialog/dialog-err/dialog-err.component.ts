import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-err',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatDialogModule],
  templateUrl: './dialog-err.component.html',
  styleUrl: './dialog-err.component.css'
})
export class DialogErrComponent {
  constructor(
    private ref: MatDialogRef<Component>) { }


  cencel() {
    this.ref.close(false)
  }
  delete() {
    this.ref.close(true)
  }
}
