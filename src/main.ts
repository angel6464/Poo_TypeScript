import ejercicio1 from './ejercicio1'
import ejercicio2 from './ejercicio2'
import ejercicio3 from './ejercicio3'
import ejercicio4 from './ejercicio4'
import ejercicio5 from './ejercicio5'
import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'

//ANGEL ALVARADO GUIA POO TYPESCRIPT
ejercicio1();
ejercicio2();
ejercicio3();
ejercicio4();
ejercicio5();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

