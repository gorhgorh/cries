import React from 'react'
// import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import __NaMe__ from './__NaMe__'

export const actions = {
  act: action('act')
}

const buttons = [
  {
    act: action('act 1'),
    label: 'Bt 1'
  },
  {
    act: action('act 2'),
    label: 'Bt 2'
  },
  {
    act: action('act 3'),
    label: 'Bt 3'
  }
]

storiesOf('BtBar', module)
  // .addDecorator(story => <View style={styles.BtBarCont}>{story()}</View>)
  .add('default', () => <__NaMe__ {...actions} btns={buttons}/>)
