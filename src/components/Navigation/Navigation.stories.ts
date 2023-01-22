import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import Navigation from './Navigation'

const SampleIcon = () =>
  React.createElement(
    'svg',
    { viewBox: '0 0 20 20', width: '20', height: '20' },
    React.createElement('path', {
      fill: '#000',
      stroke: '#000',
      d: 'M 0.47300000000000003 20.021 L 20.007 0.021 M 19.541 20 L 0.007 0',
    })
  )

const sampleNavigationItems = Array(6).fill({
  icon: SampleIcon,
  label: 'Lorem ipsum',
  href: '#',
})

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
  argTypes: {
    items: sampleNavigationItems,
  },
}

export default meta
type Story = StoryObj<typeof Navigation>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    items: sampleNavigationItems,
  },
}
