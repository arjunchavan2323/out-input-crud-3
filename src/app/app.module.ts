import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoDashbordComponent } from './shared/component/todo-dashbord/todo-dashbord.component';
import { TodoFormComponent } from './shared/component/todo-form/todo-form.component';
import { TodoListComponent } from './shared/component/todo-list/todo-list.component';
import { materialmodule } from './shared/material/material.module';
import { GetconformComponent } from './shared/component/getconform/getconform.component';
import { StudentDashbordComponent } from './student-dashbord/student-dashbord.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentTableComponent } from './student-table/student-table.component';
import { StudentFormComponent } from './student-form/student-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoDashbordComponent,
    TodoFormComponent,
    TodoListComponent,
    GetconformComponent,
    StudentDashbordComponent,
    StudentListComponent,
    StudentTableComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    materialmodule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
