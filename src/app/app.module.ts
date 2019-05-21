import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatCardModule, MatIconModule, MatSelectModule, MatButtonModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { YelpService } from './service/yelp.service';
import { YelpSearchComponent } from './yelp-search/yelp-search.component';

@NgModule({
  declarations: [
    AppComponent,
    YelpSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [HttpClient, YelpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
