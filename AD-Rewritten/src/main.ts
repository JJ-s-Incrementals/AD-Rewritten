import './style.css'
import { ADInterface } from './interface.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML  = ADInterface();
