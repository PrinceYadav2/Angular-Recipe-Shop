import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-shop';

  selectedFeature : string = 'recipe';

  onFeatureSelect(feature: string) {
    this.selectedFeature = feature;
  }
}
