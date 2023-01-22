import type { Meta, StoryObj } from '@storybook/react'

import WelcomeBlock from './WelcomeBlock'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof WelcomeBlock> = {
  title: 'Components/WelcomeBlock',
  component: WelcomeBlock,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
}

export default meta
type Story = StoryObj<typeof WelcomeBlock>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default :Story = {
  args: {
    primary: true,
    label: 'WelcomeBlock',
  },
}
