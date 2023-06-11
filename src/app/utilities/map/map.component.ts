import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LeafletMouseEvent, Marker, latLng, marker, tileLayer } from 'leaflet';
import { coordinatesMap } from './coordinate';

@Component({
  selector: 'app-map-leaf',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.layers = this.initialCoordinates.map(value => marker([value.latitude, value.longitude]));
  }

  @Output()
  onSelectedLocation = new EventEmitter<coordinatesMap>;

  @Input()
  initialCoordinates: coordinatesMap[] = [];

    options = {
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Angular Movies' })
      ],
      zoom: 13,
      center: latLng(42.51116926623046, -84.64315652847291)
    };

    layers: Marker<any>[] = [];

    handleMapClick(event: LeafletMouseEvent) {
      const latitude = event.latlng.lat;
      const longitude = event.latlng.lng;
      console.log({latitude, longitude});
      this.layers = [];
      this.layers.push(marker([latitude, longitude]));
      this.onSelectedLocation.emit({latitude, longitude});
    }
}
