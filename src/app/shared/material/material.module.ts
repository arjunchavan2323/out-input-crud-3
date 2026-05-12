
import { NgModule } from "@angular/core";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';





let javascript=[
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
]

@NgModule({
   imports:[...javascript],
   exports:[...javascript]
})




export class materialmodule{

}