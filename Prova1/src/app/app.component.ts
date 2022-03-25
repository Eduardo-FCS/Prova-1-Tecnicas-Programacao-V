import { Time } from './time';
import { Component, resolveForwardRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTeam = {} as Time
  teamList : Time[] = []
  index = 0
  save(form: NgForm) {
      this.newTeam.posicao = this.teamList.length + 1
      this.teamList.push(this.newTeam)
      this.newTeam = {} as Time
      this.reOrder()
      form.resetForm()
  }

  reOrder() {
    for (let i = 0; i < this.teamList.length; i++) {
      for (let j = 0; j < this.teamList.length-1; j++) {
        if (this.teamList[j].pontuacao < this.teamList[j + 1].pontuacao) {
          let x = this.teamList[j];
          this.teamList[j] = this.teamList[j + 1];
          this.teamList[j + 1] = x;
        }
      }
    }
  }
  
}
