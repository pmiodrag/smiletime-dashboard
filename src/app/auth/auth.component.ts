import {Component, View} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES, CanActivate} from 'angular2/router';
import {Http} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';
import {AuthHttp, tokenNotExpired, JwtHelper} from 'angular2-jwt/angular2-jwt';

declare var Auth0Lock;

@Component({
  directives: [ ROUTER_DIRECTIVES ],
  selector: 'auth-component',
  templateUrl: 'app/auth/auth.component.html',
 
})

export class AuthComponent {

 lock = new Auth0Lock('9NdeCaZbpddcqM34xZ8BKcZcwMfPqFNl', 'twinsoft.eu.auth0.com');
  //lock = new Auth0Lock('AUTH0_CLIENT_ID', 'AUTH0_DOMAIN');
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(public http: Http, public authHttp: AuthHttp) {}

  login() {
    this.lock.show((err: string, profile: string, id_token: string) => {

      if (err) {
        throw new Error(err);
      }

      localStorage.setItem('profile', JSON.stringify(profile));
      localStorage.setItem('id_token', id_token);

    });
  }

  logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
  }

  loggedIn() {
    return tokenNotExpired();
  }

}
