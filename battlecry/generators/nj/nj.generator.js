import { Generator } from 'battlecry'
import upFChar from '../../helpers/compName'
export default class ComponentGenerator extends Generator {
  config = {
    generate: {
      args: 'name',
      description: 'create a nodejs as the exported module, and adds a jest test that requires it'
    }
  }

  generate () {
    this.templates().forEach(file => file.saveAs(`./`, this.args.name))
  }
}
