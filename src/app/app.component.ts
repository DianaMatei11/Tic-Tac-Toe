import { BoardStateService } from '../services/board-state.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe';

  constructor(public boardState: BoardStateService) { }

  changeGrid(x: number, y: number) {
    if(this.boardState.grid[x][y]==null&& this.boardState.joc==false)
    { 
      if (this.boardState.jucator == "x")
      {
        this.boardState.grid[x][y] = "o";
        this.boardState.jucator = "o";
      }
      else 
        {
        this.boardState.grid[x][y] = "x";
        this.boardState.jucator = "x";
        }
    this.boardState.verificareJoc(x, y);
    }
  }


}
