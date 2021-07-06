import { Generator } from 'battlecry'
import upFChar from '../../helpers/compName'
export default class RnfstoryGenerator extends Generator {
  config = {
    generate: {
      args: 'name',
      description: 'create a functional rn component with a story'
    }
  };

  generate () {
    this.templates().forEach(file => file.saveAs(`src/components/${upFChar(this.args.name)}/`, this.args.name))
  }
}
