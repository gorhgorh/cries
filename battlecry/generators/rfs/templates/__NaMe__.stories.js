import React from 'react'
import { storiesOf } from '@storybook/react'
// import { withKnobs, boolean } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
import __Name__ from './index'

// const actions = {
//   onSelect: action('onSelect')
// }

storiesOf('__Name__', module)
  // .addDecorator(withKnobs)
  // eslint-disable-next-line react/jsx-pascal-case
  .add('base', () => <__Name__ />)
