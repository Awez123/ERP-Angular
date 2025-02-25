import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ware-houses',
  templateUrl: './ware-houses.component.html',
  styleUrls: ['./ware-houses.component.scss']
})
export class WareHousesComponent implements OnInit {

  data = [
    { title: 'Warehouse 1', location: 'Vijaywada , Hyd' },
    { title: 'Warehouse 2', location: 'Kurnul , Himachal ' },
    { title: 'Warehouse 3', location: 'Mehdipatnam , Nagpur' },
    { title: 'Warehouse 4', location: 'Subedari , Warangal ' }
    // Add more as needed
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
