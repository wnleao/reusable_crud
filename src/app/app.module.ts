import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule,
  Compiler,
  COMPILER_OPTIONS,
  CompilerFactory,
} from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {
  STUDENTS_CRUD,
  COURSES_CRUD,
  STUDENTS_PATH,
  COURSES_PATH,
} from './cruds.service';
import { SharedModule } from './shared/shared.module';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';

// https://github.com/angular/angular/blob/master/integration/dynamic-compiler/src/app.module.ts
export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    SharedModule,
  ],
  // https://stackoverflow.com/questions/41471164/angular-2-get-service-by-string-name
  // https://angular.io/guide/dependency-injection-providers
  providers: [
    { provide: COMPILER_OPTIONS, useValue: {}, multi: true },
    {
      provide: CompilerFactory,
      useClass: JitCompilerFactory,
      deps: [COMPILER_OPTIONS],
    },
    { provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory] },
    { provide: STUDENTS_PATH, useValue: STUDENTS_CRUD },
    { provide: COURSES_PATH, useValue: COURSES_CRUD },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
