// I'm used on the built-in CameronJS welcome page code/html/index.html
// Feel free to delete me once you start changing that page.

import { Controller } from "stimulus";

export default class extends Controller {

  static get targets() {
    return ['nav']
  }

  toggleNav() {
    this.navTarget.classList.toggle('hidden')
  }
}
