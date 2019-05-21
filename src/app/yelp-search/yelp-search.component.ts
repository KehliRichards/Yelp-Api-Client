import { Component, OnInit } from '@angular/core';
import { YelpService } from '../service/yelp.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-yelp-search',
  templateUrl: './yelp-search.component.html',
  styleUrls: ['./yelp-search.component.css']
})
export class YelpSearchComponent implements OnInit {
  yelpSearch: Object;

  searchForm: FormGroup;

  // prices = [
  //   '$',
  //   '$$',
  //   '$$$',
  //   '$$$$'
  // ];

  constructor(private yelpService: YelpService, private fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      city: new FormControl(),
      state: new FormControl(),
      price: new FormControl()
    })
  }

  onSearch() {
    this.yelpService.fetchYelpApi(this.searchForm.value.city, this.searchForm.value.state, this.searchForm.value.price)
    .subscribe((search => {
      console.log(search);
      const random = search.businesses[Math.floor(Math.random()*search.businesses.length)];
      this.yelpSearch = random;
      console.log(this.yelpSearch);
    }))
  }

}
