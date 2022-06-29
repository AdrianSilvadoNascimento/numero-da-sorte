import { Component, OnInit } from "@angular/core"
import { NgForm } from "@angular/forms"

@Component({
    templateUrl: 'mega.component.html',
    styleUrls: ['mega.component.scss'],
})
export class MegaPage implements OnInit {
    constructor() {}
    
    isSorting: boolean
    podeSortear: boolean
    numerosSorteados = []

    ngOnInit(): void {
        this.sorteioInicial()
    }

    sorteioInicial(): void {
        let numerosDaSorte
        for (let jogos = 0; jogos < 1; jogos++) {
            numerosDaSorte = this.sortearJogo(6)
            this.numerosSorteados.push(numerosDaSorte)
        }
    }

    pegarValores(sortearMega: NgForm): void {
        const jogo  = sortearMega.value.quantosJogos
        const numeros = sortearMega.value.quantosNumeros
        this.podeSortear = numeros > 5 && numeros < 16 && jogo > 0 || jogo < 9 ? true : false
        if (this.podeSortear) {
            let numerosDaSorte
            for (let jogos = 0; jogos < jogo; jogos++) {
                numerosDaSorte = this.sortearJogo(numeros)
                this.numerosSorteados.push(numerosDaSorte)
            }
            sortearMega.resetForm()
        }
    }

    sortearJogo(numeros: number): object {
        let valores = []
        let numTemp = {}
        for (let valor = 0; valor < numeros; valor++) {
            let sortear = this.sortearAleatorio() * 1
            valores.push(sortear)
        }
        numTemp = { numeros: valores }
        console.log('jogo:', numTemp)
        return numTemp
    }

    sortearAleatorio(): number {
        return Math.floor(Math.random() * (1 + 61) + 1)
    }
}