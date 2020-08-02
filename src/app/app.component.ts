import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeLetter = false
  includeNumbers = false
  includeSymboles = false
  lenght = 0
  password = ''
  title = 'hey'

  onChangeUseLength(value: string) {
    const parsedValue = parseInt(value)

    if (!isNaN(parsedValue)) {
      this.lenght = parsedValue
    }
  }

  onChangeUseLetter() {
    this.includeLetter = !this.includeLetter
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers
  }

  onChangeUseSymboles() {
    this.includeSymboles = !this.includeSymboles
  }

  onButtonClick() {
    const numbers = '123456789'
    const letters = 'abcdefghijklmnopqrstuvwyz'
    const symboles = '!@#$%^&*()'

    let validCharts = ''

    if (this.includeLetter) {
      validCharts += letters
    }
    if (this.includeNumbers) {
      validCharts += numbers
    }
    if (this.includeSymboles) {
      validCharts += symboles
    }

    let generatedPassword = ""
    for (let i = 0; i < this.lenght; i++) {
      const index = Math.floor(Math.random() * validCharts.length)
      generatedPassword += validCharts[index]
    }
    this.password = generatedPassword
  }

} 
