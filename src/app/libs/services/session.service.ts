import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { CrytoService } from './cryto.service';

import { Menu } from 'src/app/shared/menu-items/menu-items';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private key = environment.sessionStorageKeys.applicationState;

  constructor(private crypto: CrytoService) {}

  get session() {
    const encrypted = sessionStorage.getItem(this.key) ?? '';
    const objSesion = JSON.parse(this.crypto.decrypt(encrypted) as any);
    return objSesion;
  }

  set session(value: any) {
    const encrypted = this.crypto.encrypt(value);
    sessionStorage.setItem(this.key, encrypted);
  }

  get opciones(): Menu[] {
    const { opciones } = this.session as any;
    return opciones as Menu[];
  }

  get fotoProfile(): any {
    const { fotoBase64 } = this.session as any;
    return fotoBase64;
  }

  create(data: string) {
    this.session = data;
  }

  destroy() {
    sessionStorage.removeItem(this.key);
  }
}
