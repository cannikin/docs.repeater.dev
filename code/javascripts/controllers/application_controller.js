import { Controller } from "stimulus";
import hljs from 'highlight.js'
import hljsDefineGraphQL from '../highlight.graphql'

export default class extends Controller {
  static get targets() {
    return ['code']
  }

  connect() {
    hljs.registerLanguage("graphql",hljsDefineGraphQL);
    this.codeTargets.forEach((target) => {
      hljs.highlightBlock(target)
    })
  }
}
