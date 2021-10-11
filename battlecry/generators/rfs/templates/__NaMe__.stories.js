/* eslint-disable camelcase */
import React from 'react'
import __NaMe__ from './index.js'

export default {
  title: 'Atoms/OpenClosed',
  component: __NaMe__
}

const __NaMe__St = (args) => <__NaMe__ {...args} />

export const Closed = __NaMe__St.bind({})
Closed.args = { open: false }

export const Open = __NaMe__St.bind({})
Open.args = { open: true }
