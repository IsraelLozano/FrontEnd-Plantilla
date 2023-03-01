import { SessionService } from 'src/app/libs/services/session.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-institucion',
  templateUrl: './home-institucion.views.html',
  styles: [],
})
export class HomeInstitucionViews implements OnInit {

  constructor(private _sesion: SessionService) {}

  ngOnInit(): void {
  }
}
