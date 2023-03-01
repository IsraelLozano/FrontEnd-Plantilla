import { PortalService } from './../../services/portal.service';
import { Component, OnInit } from '@angular/core';
import { OauthService } from 'src/app/authentication/services/oauth.service';
import { SessionService } from 'src/app/libs/services/session.service';

@Component({
  selector: 'app-portal-academico',
  templateUrl: './portal-academico.views.html',
  styleUrls: ['./portal-academico.views.scss'],
})
export class PortalAcademicoViews implements OnInit {
  public isUserAuthenticated: boolean = false;

  constructor(
    private portalService: PortalService,
    private _authService: OauthService,
    private _sesion: SessionService,
  ) {
  }

  ngOnInit(): void {
    this._authService.loginChanged.subscribe((res) => {
      this.isUserAuthenticated = res;
    });

  }
}
