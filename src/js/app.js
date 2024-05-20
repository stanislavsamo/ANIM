import Collapse from './Collapse/Collapse';
import Modal from './Callback-Chat/Modal';
import Liker from './Liker/Liker';

const collapse = new Collapse(document.getElementById('collapse-container'));
const modal = new Modal(document.getElementById('chat-container'));
const liker = new Liker(document.getElementById('liker-container'));

collapse.init();
modal.init();
liker.init();
