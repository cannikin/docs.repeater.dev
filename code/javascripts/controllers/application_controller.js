import { Controller } from "stimulus";
import hljs from '../highlight.pack'
import hljsDefineGraphQL from '../highlight.graphql'

export default class extends Controller {
  static get targets() {
    return ['code']
  }

  initialize() {
    hljs.registerLanguage("graphql", hljsDefineGraphQL);
  }

  connect() {
    this.codeTargets.forEach(target => hljs.highlightBlock(target))
  }
}
