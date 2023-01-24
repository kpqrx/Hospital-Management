import type { Meta, StoryObj } from '@storybook/react'

import Widget from './WidgetContainer'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Widget> = {
  title: 'Components/Widget',
  component: Widget,
}

export default meta
type Story = StoryObj<typeof Widget>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    label: 'Widget label',
  },
}
