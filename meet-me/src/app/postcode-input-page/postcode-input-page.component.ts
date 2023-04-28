import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
  keyframes,
} from '@angular/animations';
import {ActivityService} from "../activity.service";
import {log} from "util";


@Component({
  selector: 'app-postcode-input-page',
  templateUrl: './postcode-input-page.component.html',
  styleUrls: ['./postcode-input-page.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(
          ':enter',
          style({ opacity: 0, transform: 'translateY(-15px)' }),
          { optional: true }
        ),
        query(
          ':enter',
          stagger('100ms', [
            animate(
              '0.5s ease-out',
              keyframes([
                style({ opacity: 0, transform: 'translateY(-15px)', offset: 0 }),
                style({ opacity: 1, transform: 'none', offset: 1 }),
              ])
            ),
          ]),
          { optional: true }
        ),
      ]),
    ])]

})
export class PostcodeInputPageComponent implements OnInit {
  postcode1: any;
  postcode2: any;
  results: any;

  constructor(private router: Router, private activityService: ActivityService) { }

  postcodes = [{ value: '',
    isAdded: true
  }, { value: '', isAdded: true }];


  activityType = '';

  ngOnInit(): void {
  }

  addPostcode() {
    const newPostcode = { value: '', isAdded: true };
    this.postcodes.push(newPostcode);
    setTimeout(() => {
      newPostcode.isAdded = false;
    }, 0);
  }

  processPostcodes(): { postcodes: string[]; activityType: string } {
    const processedPostcodes = this.postcodes.map((postcode) => postcode.value.trim().toUpperCase());
    return { postcodes: processedPostcodes, activityType: this.activityType };
  }

  onSubmit() {
    const requestData = this.processPostcodes();
    console.log("requestData: ",requestData)
    this.activityService.getActivities(requestData.activityType, requestData.postcodes).then(r => {
      console.log(r)
      this.results = r.results.slice(0,5);
    });
  }

  startNewSearch() {
    // Clear the results and reset the form
    this.results = null;
    // this.postcodeForm.reset();
  }
}
