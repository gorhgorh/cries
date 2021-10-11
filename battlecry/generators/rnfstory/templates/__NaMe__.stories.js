import React from 'react'
// import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import __NaMe__ from './__NaMe__'

export const actions = {
  act: action('act')
}

storiesOf('__NaMe__', module)
  // .addDecorator(story => <View style={styles.BtBarCont}>{story()}</View>)
  .add('default', () => <__NaMe__ {...actions}/>)
