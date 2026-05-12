
import { NgModule } from "@angular/core";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';




let javascript=[
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
]

@NgModule({
   imports:[...javascript],
   exports:[...javascript]
})




export class materialmodule{

}