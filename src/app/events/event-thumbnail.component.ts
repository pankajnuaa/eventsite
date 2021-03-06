import { Input, Component, Output, EventEmitter } from '@angular/core';





@Component({
  selector: 'event-thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
  <h2>{{event.name}}</h2>
  <div>Date:{{event.time}}</div>
  <div>Price:\${{ event.price }}</div>
  <div>
    <span>Location: {{event.location.address}}</span>

    <span>{{event.location.city}}, {{event.location.country}}</span>

  `,
  styles: [
    `
.pad-left { margin-left: 10px;}
.well div {color: #bbb;}
    `
  ]
})
export class EventThumbnailComponent {
  @Input() event: any;
}


