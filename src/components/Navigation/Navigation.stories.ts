import type { Meta, StoryObj } from '@storybook/react'

import Navigation from './Navigation'

const sampleNavigationItems = Array(6).fill({
  icon: 'Bell',
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
