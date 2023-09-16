import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute, NavigationExtras, } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page  {

  pokemon1: any;
  pokemon2: any;
  pokemon3: any;
  pokemon4: any;
  pokemon5: any;
  pokemon6: any;
  pokemon7: any;
  pokemon8: any;
  pokemon9: any;
  pokemon10: any;
  mostrarPokemon1: boolean = false;
  mostrarPokemon2: boolean = false;
  mostrarPokemon3: boolean = false;
  mostrarPokemon4: boolean = false;
  mostrarPokemon5: boolean = false;
  mostrarPokemon6: boolean = false;
  mostrarPokemon7: boolean = false;
  mostrarPokemon8: boolean = false;
  mostrarPokemon9: boolean = false;
  mostrarPokemon10: boolean = false;

  constructor(
    private navCtrl: NavController,
     private router: Router,
     private route: ActivatedRoute,
     private http: HttpClient
  ) { }

  ngOnInit() {
  }

  logout() {
    // Agrega aquí la lógica para cerrar sesión (por ejemplo, limpiar tokens, variables, etc.)

    // Redirige a la página de inicio de sesión
    this.router.navigate(['/login']);
  }

  goToTab1() {
    // Redirige al Tab1
    this.router.navigate(['/tabs/tab1']);
  }

  cargarDatosPokemon(nombrePokemon: string, index: number) {
    const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;

    this.http.get(url).subscribe((data: any) => {
      const pokemon = {
        nombre: data.name,
        peso: data.weight,
        fuerza: data.stats.find((stat: any) => stat.stat.name === 'attack').base_stat,
        habilidades: data.abilities.map((ability: any) => ability.ability.name),
        imagen: data.sprites.front_default,
      };

      switch (index) {
        case 1:
          this.pokemon1 = pokemon;
          this.mostrarPokemon1 = !this.mostrarPokemon1;
          break;
        case 2:
          this.pokemon2 = pokemon;
          this.mostrarPokemon2 = !this.mostrarPokemon2;
          break;
        case 3:
          this.pokemon3 = pokemon;
          this.mostrarPokemon3 = !this.mostrarPokemon3;
          break;
        case 4:
          this.pokemon4 = pokemon;
          this.mostrarPokemon4 = !this.mostrarPokemon4;
          break;
        case 5:
          this.pokemon5 = pokemon;
          this.mostrarPokemon5 = !this.mostrarPokemon5;
          break;
        case 6:
          this.pokemon6 = pokemon;
          this.mostrarPokemon6 = !this.mostrarPokemon6;
          break;
        case 7:
          this.pokemon7 = pokemon;
          this.mostrarPokemon7 = !this.mostrarPokemon7;
          break;
        case 8:
          this.pokemon8 = pokemon;
          this.mostrarPokemon8 = !this.mostrarPokemon8;
          break;
        case 9:
          this.pokemon9 = pokemon;
          this.mostrarPokemon9 = !this.mostrarPokemon9;
          break;
        case 10:
          this.pokemon10 = pokemon;
          this.mostrarPokemon10 = !this.mostrarPokemon10;
          break;
        
      }
    });
  }
}