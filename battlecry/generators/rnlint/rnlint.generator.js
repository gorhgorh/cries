import { Generator } from 'battlecry'

export default class RnlintGenerator extends Generator {
  config = {
    generate: {
      options: {
        special: { description: 'Special option' }
      }
    }
  }

  generate () {
    this.templates().forEach(file => file.saveAs('./', file.name))
    this.exec('yarn add -D eslint eslint-plugin-react eslint-config-standard eslint eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard babel-eslint eslint-config-standard-react')
  }
}
