import $ from 'jquery';
import '../styles/index.css';
// export default {store, items, hideCheckedItems, searchTerm}

import {bindEventListeners, render} from './shopping-list'

//'use strict';
/* global shoppingList, cuid */

// eslint-disable-next-line no-unused-vars
export const store = {
  items: [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ],
  hideCheckedItems: false,
  searchTerm: ''
};

function main() {
  bindEventListeners();
  render();
}



$(main);
