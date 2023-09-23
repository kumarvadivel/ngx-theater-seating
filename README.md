# Ngx-theater-seating

Ngx-theater-seating Component is a customizable Angular component that allows users to select seats in a theater . This component simplifies the process of seat selection and can be easily integrated into your Angular application.

## Features

<ul>
  <li>Interactive seat selection: Users can click on available seats to select or deselect them.</li>
  <li>Customizable seat types: Define different seat types based on the classes they configure (e.g., standard, VIP, wheelchair-accessible)</li>
  <li>Seat availability: Display available, selected, and unavailable seats with different visual cues.</li>
  <li>Easy integration: Quickly integrate the component into your Angular application.</li>
</ul>

## Installation
<strong>To use the ngx-theater-seating  Component in your Angular project, follow these steps:</strong>

1.Install the component via npm:
```bash
    npm install theater-seat-selector
```

2. Import the module in your Angular application:
```js
// Import the TheaterSeatSelectorModule in your app.module.ts
import { TheaterSeatingModule } from 'theater-seating';

@NgModule({
  imports: [
    // ...
    TheaterSeatingModule,
  ],
  // ...
})
export class AppModule {}
```

3. Use the component in your template:
```js
<ngx-theater-seating [config]="seatsObj" (onSelect)="selected($event)"></ngx-theater-seating>
```


**Sample Config**
```json
[
    {
    group:"Class A",
    "rows":[
        {
        "name":"A",
        "seats":[[
            {
                "number":1,
                "isBooked":true
            },
            {
                "number":2,
                "isBooked":true

            },
            {
                "number":3,
                "isBooked":false

            },
            {
                "number":4,
                "isBooked":false
            },{
                "number":5,
                "isBooked":false
            },
            {
                "number":6
            },
            {
                "number":7,
                "isBooked":true
            },
            {
                "number":8,
                "isBooked":true
            },{
                "number":9,
                "isBooked":true
            },
            {
                "number":10,
                "isBooked":true
            }]]
    },
    {
        "name":"B",
        "seats":[[
            {
                "number":1,
                "isBooked":true
            },
            {
                "number":2
            },
            {
                "number":3,
                "isBooked":true
            },
            {
                "number":4
            }],[{
                "number":5
            },
            {
                "number":6
            },
            {
                "number":7,
                "isBooked":true
            },
            {
                "number":8
            }]]
    }
    
]
},
{
    group:"Class B",
    "rows":[
        {
        "name":"F",
        "seats":[[
            {
                "number":1,
                "isBooked":true
            },
            {
                "number":2
            },
            {
                "number":3
            },
            {
                "number":4
            }],[{
                "number":5
            },
            {
                "number":6
            },
            {
                "number":7
            },
            {
                "number":8
            }]]
    }
 
]
}]
```

## License
This project is licensed under the MIT License



## Customization
You can customize the appearance and behavior of the Theater Seat Selector Component by adjusting the input properties and styles in your application.

## Support
If you encounter any issues or have questions, please feel free to create an issue on the GitHub repository.
