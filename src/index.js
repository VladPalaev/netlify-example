import { sum } from './modules/sum';

const root = document.getElementById('root');
const element = document.createElement('div');

element.textContent = sum(45, 45).toString();

root.appendChild(element);