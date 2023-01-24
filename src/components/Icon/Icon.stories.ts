import type { Meta, StoryObj } from '@storybook/react'

import Icon from './Icon'
import type { IconNameType } from './Icon.types'

const iconNames = [
  'Bell',
  'Cog',
  'ChartPie',
  'Clock',
  'Calendar',
  'Cash',
  'Sun',
  'Logout',
] as IconNameType[]

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: { type: 'select', options: iconNames },
    },
  },
  parameters: {
    backgrounds: {
      values: [
        { name: 'dark', value: '#333' },
        { name: 'light', value: '#f1f1f1' },
      ],
    },
  },
}

export default meta
type Story = StoryObj<typeof Icon>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Black: Story = {
  args: {
    name: iconNames[0],
    color: 'black',
    size: 20,
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export const White: Story = {
  args: {
    name: iconNames[0],
    color: 'white',
    size: 20,
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}
