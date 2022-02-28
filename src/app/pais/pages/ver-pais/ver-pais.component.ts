import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais! : Country;
  constructor(
    private activateRoute:ActivatedRoute,
    private servicioPais:PaisService
    
    ) { }

  ngOnInit(): void {

    this.activateRoute.params
    .pipe(
      switchMap(({id})=> this.servicioPais.getPaisPorAlpha(id)),
      tap(console.log)
    ).subscribe(pais=>{this.pais=pais });

    /*this.activateRoute.params
    .subscribe(({id})=>{
      console.log(id);
      this.servicioPais.getPaisPorAlpha(id).
      subscribe(pais=>{ console.log(pais)})
    })
  }*/

}
}
