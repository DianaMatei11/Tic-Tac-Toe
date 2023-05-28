import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardStateService {

  constructor() {
    this.initializareGrid();
  }

  grid: any = []
  jucator: string = ""
  joc:boolean=false;
  statusJoc:boolean=false;
  restart() {
    this.jucator = "x"
    this.finalJoc=false;
    this.joc=false;
    this.statusJoc=false;
    this.initializareGrid()
  }

  private initializareGrid() {
    this.grid = Array(3).fill(null).map(() => Array(3).fill(null));
  }

  wonBy: [string, number] = ["", 0]
  
  verificare_linie(x: number, y: number)
  {
    for (let i = 0; i < 3; i++) {
      if(this.grid[i][y] !== null)
      {
        if (this.grid[i][0] == this.grid[i][1] && this.grid[i][1] == this.grid[i][2] && this.grid[i][0] == this.jucator) 
        {
          this.wonBy = ["row", i]
          this.jocCatigat(this.jucator);
          this.statusJoc=true;
          return;
        }
      }
    }
  }

  verificare_coloana(x: number, y: number)
  {
    for (let i = 0; i < 3; i++) {
      if(this.grid[x][i] !== null)
      {
        if (this.grid[0][i] == this.grid[1][i] && this.grid[1][i] == this.grid[2][i] && this.grid[0][i] == this.jucator) {
          this.wonBy = ["col", i]
          this.jocCatigat(this.jucator);
          this.statusJoc=true;
          return;
        }
      }
    }
  }

  verificare_diagonala_principala()
  {
    if (this.grid[0][0] !== null) {
      if (this.grid[0][0] == this.grid[1][1] && this.grid[1][1] == this.grid[2][2] && this.grid[0][0] == this.jucator)
        {
          this.wonBy = ["diag", 0]
          this.jocCatigat(this.jucator);
          this.statusJoc=true;
          return ;
        } 
    }
  }
  
  verificare_diagonala_secundara()
  {
    if(this.grid[0][2] !== null)
    {
      if(this.grid[0][2] == this.grid[1][1] && this.grid[1][1] == this.grid[2][0] && this.grid[0][2] == this.jucator)
      { 
        this.wonBy = ["antidiag", 0]
        this.jocCatigat(this.jucator);
        this.statusJoc=true;
        return;
      }
    }
  }


  verificareJoc(x: number, y: number) {
    this.verificare_linie(x,y)
    this.verificare_coloana(x,y)
    this.verificare_diagonala_principala()
    this.verificare_diagonala_secundara()
    this.joc=this.statusJoc;
      
  }

  finalJoc: boolean = false
  jocCatigat(winner:string) {
    this.finalJoc = true
    winner=this.jucator
    console.log(winner)
  }

}
