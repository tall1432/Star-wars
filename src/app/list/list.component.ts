import { Component, OnInit,Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
   characters = [] ;
   activatedRoutes:ActivatedRoute;
   swService: StarWarsService;


  constructor(activatedRoutes: ActivatedRoute, swService:StarWarsService) {
    this.activatedRoutes = activatedRoutes;
    this.swService= swService;
  }

  ngOnInit(): void {
    this.activatedRoutes.params.subscribe(
      (params)=>{
this.characters = this.swService.getCharacters(params.side)
      }
    )
  }

}
