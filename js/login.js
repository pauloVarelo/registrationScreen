'use strict'

const loginContainer = document.getElementById('login-container');
const moveOverlay = () => loginContainer.classList.toggle('toggle');

document.getElementById('open-register').addEventListener('click', moveOverlay);
document.getElementById('open-login').addEventListener('click', moveOverlay);