import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { AppState } from 'src/app/store/app.reducer';
import { cargarUsuarios } from '../../store/actions/usuarios.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  usuarios!: Array<Usuario>;
  loading: boolean = false;
  error: any;

  constructor(
   private store: Store<AppState>
  ) { }

  ngOnInit(): void {

    this.store.dispatch( cargarUsuarios() );
    
    this.store.select('usuarios').subscribe(
      ({users, loading, error}) => {
       this.usuarios = users;
       this.loading = loading;
       this.error = error;
      }
    )
    // this.usuarioService.getUsers()
    // .subscribe(
    //   users => {
    //     console.log(users);
    //     this.usuarios = users;
    //   }
    // );

  }

}
