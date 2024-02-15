// firebase.service.ts
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import Users from '../interfaces/interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  // private db: AngularFireDatabase,
  listenToChanges(arg0: string) {
    throw new Error('Method not implemented.');
  }
  constructor(
    // private db: AngularFireDatabase,
    private firestore: Firestore

  ) { }

  // Escuchar cambios en la base de datos en tiempo real
  // listenToChanges(path: string): Observable<any> {
  //   return this.db.object(path).valueChanges();
  // }

  // Agregar un nuevo usuario a Firestore
  addUsuario(users: Users): any {
    const usuariosCollection = collection(this.firestore, 'users');

    // Agregar el nuevo usuario a la colección
    return addDoc(usuariosCollection, users);
  }
}
