import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
  <div>
  <h1>Upcoming Angular Events</h1>
  <hr>
     <event-thumbnail [event] = "event1"></event-thumbnail>
</div>`
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '9/29/2019',
    time: '10:30 pm',
    price: 5399.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '102385 DT',
      city: 'London',
      country: 'England'
    }
  };
}
