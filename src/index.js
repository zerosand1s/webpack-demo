import _ from 'lodash';
import './style.css';
import Octocat from './octocat.png';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'World'], ' ');
  element.classList.add('hello');

  const myImage = new Image();
  myImage.src = Octocat;

  element.appendChild(myImage);

  return element;
}

document.body.appendChild(component());