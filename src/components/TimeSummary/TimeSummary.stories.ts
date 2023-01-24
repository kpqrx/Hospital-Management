import type { Meta, StoryObj } from '@storybook/react'

import TimeSummary from './TimeSummary'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof TimeSummary> = {
  title: 'Components/TimeSummary',
  component: TimeSummary,
  args: {
    label: 'Dzisiaj',
    totalTime: {
      hours: 8,
      minutes: 0,
    },
    currentTime: {
      hours: 3,
      minutes: 20,
    },
  },
}

export default meta
type Story = StoryObj<typeof TimeSummary>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Information: Story = {
  args: {
    variant: 'information',
  },
}

export const Correct: Story = {
  args: {
    variant: 'correct',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
}
