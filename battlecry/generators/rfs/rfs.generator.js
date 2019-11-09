import { Generator } from 'battlecry'
import upFChar from '../../helpers/compName'
export default class ComponentGenerator extends Generator {
  config = {
    generate: {
      args: 'name',
      description: 'func comp with styled and a story'
    }
  }

  generate () {
    this.templates().forEach(file => file.saveAs(`src/components/${upFChar(this.args.name)}/`, this.args.name))
  }
}
