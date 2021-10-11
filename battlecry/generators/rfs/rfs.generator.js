import { Generator } from 'battlecry'
import upFChar from '../../helpers/compName'
export default class ComponentGenerator extends Generator {
  config = {
    generate: {
      args: 'name',
      description: 'func comp with a story'
    }
  }

  generate () {
    this.templates().forEach(file => file.saveAs(`components/${upFChar(this.args.name)}/`, this.args.name))
  }
}
