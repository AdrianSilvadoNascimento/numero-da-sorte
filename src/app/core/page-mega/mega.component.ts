import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    templateUrl: 'mega.component.html',
    styleUrls: ['mega.component.scss'],
})
export class MegaPage {
    numerosSorteados = [
        {
            numeros: [1, 2, 3, 4, 5, 6],
        }
    ]

    constructor() {}

    pegarValores(sortearMega: NgForm): void {
        const jogo  = sortearMega.value.quantosJogos
        let numTemp = {}
        for (let i = 0; i <= jogo; i++) {
            let sortear = this.sortearAleatorio() * 1
            // numTemp.push(sortear)
        }
        console.log(numTemp)
        sortearMega.resetForm()
    }

    sortearAleatorio() {
        return Math.floor(Math.random() * (1 - 61) + 1)
    }
}