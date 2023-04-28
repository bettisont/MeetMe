import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private router: Router, private http: HttpClient) { }

  async getActivities(activityType: string, postcodes: string[]) {

    const postcodeResponses = await Promise.all(postcodes.map(postcode =>
      this.http.get(`https://api.postcodes.io/postcodes/${postcode}`).toPromise()
    ));

    console.log("postcodeResponses: ",postcodeResponses)

    const latLngs = postcodeResponses.map(response => {
      let r = response as any;
      if (r.status === 200) {
        const result = r.result;
        return {
          latitude: result.latitude,
          longitude: result.longitude,
        };
      } else {
        throw new Error(`Failed to retrieve postcode data for \${r.url}`);
      }
    });

    const latitudeCenter = latLngs.reduce((sum, latLng) => sum + latLng.latitude, 0) / latLngs.length;
    const longitudeCenter = latLngs.reduce((sum, latLng) => sum + latLng.longitude, 0) / latLngs.length;

    try {
      const searchParams = new URLSearchParams({
        query: 'coffee',
        ll: `${latitudeCenter},${longitudeCenter}`,
        open_now: 'true',
        sort: 'DISTANCE'
      });
      const results = await fetch(
        `https://api.foursquare.com/v3/places/search?${searchParams}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: 'fsq3HAO22uWlZEA3Tpqut4Lo9ajz/2WQ9nvc/a2kiJQktbc=',
            'Access-Control-Allow-Origin': 'http://localhost:4200'
          },
          mode: 'cors'
        }
      );
      return(await results.json());
    } catch (err) {
      console.error(err);
    }

  }








}
