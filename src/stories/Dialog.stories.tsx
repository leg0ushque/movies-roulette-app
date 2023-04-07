import React from 'react';

import { action } from '@storybook/addon-actions';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import Dialog, { type IDialogProps } from '../components/Dialog';

const DialogStory: ComponentMeta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  decorators: [
    (Story) => (
      <>
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti possimus numquam harum adipisci quasi commodi minus voluptas accusantium illum excepturi, soluta facilis maxime sint quia perspiciatis. Optio labore laudantium quibusdam.
        </div>
        <Story />
      </>
    )
  ]
}
export default DialogStory;

const Template: ComponentStory<typeof Dialog> = (props: IDialogProps) => <Dialog {...props} />;

const content: JSX.Element = (
  <>
  <p>Dialog content</p>
  <p>Dialog content</p>
  <p>Dialog content</p>
  <p>Dialog content</p>
  <p>Dialog content</p>
  <p>Dialog content</p>
  <p>Dialog content</p>
  <p>Dialog content</p>
  <p>Dialog content</p>
  </>
)

export const Default = {
  ...Template.bind({}),
  args: {
    title: 'Dialog title',
    children: (
      <div>
        {content}
      </div>
    ),
    logo: null,
    isNotification: false,
    onClose: action('Dialog onclose called')
  }
};

export const DefaultWithLogo = {
  ...Template.bind({}),
  args: {
    title: (<h2>Dialog title</h2>),
    children: (
      <div>
        {content}
      </div>
    ),
    logo: (
      <span>+</span>
    ),
    isNotification: false,
    onClose: action('Dialog onclose called')
  }
};

export const DefaultNotificationWithLogo = {
  ...Template.bind({}),
  args: {
    title: 'Congratulations!',
    children: (
      <div>
        <p>The movie has been added to database successfully</p>
      </div>
    ),
    logo: (
      <span>&#10003;</span>
    ),
    isNotification: true,
    onClose: action('Dialog onclose called')
  }
};
