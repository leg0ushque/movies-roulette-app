import React from 'react';

import { action } from '@storybook/addon-actions';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import DialogWrapper, { type IDialogWrapperProps } from './DialogWrapper';

const DIALOG_CONTENT: JSX.Element = (
  <>
  <p>Dialog content 1</p>
  <p>Dialog content 2</p>
  <p>Dialog content 3</p>
  <p>Dialog content 4</p>
  <p>Dialog content 5</p>
  <p>Dialog content 6</p>
  <p>Dialog content 7</p>
  <p>Dialog content 8</p>
  <p>Dialog content 9</p>
  <p>Dialog content 10</p>
  <p>Dialog content 11</p>
  <p>Dialog content 12</p>
  <p>Dialog content 13</p>
  <p>Dialog content 14</p>
  <p>Dialog content 15</p>
  <p>Dialog content 16</p>
  </>
)

const DialogWrapperStory: ComponentMeta<typeof DialogWrapper> = {
  title: 'Components/Dialog',
  component: DialogWrapper,
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
export default DialogWrapperStory;

const Template: ComponentStory<typeof DialogWrapper> = (props: IDialogWrapperProps) => <DialogWrapper {...props} />;

export const Default = {
  ...Template.bind({}),
  args: {
    title: 'Dialog title',
    children: (
      <div>
        {DIALOG_CONTENT}
      </div>
    ),
    logo: null,
    isNotification: false,
    isCentered: false,
    onClose: action('Dialog onclose called')
  }
};

export const DefaultWithLogo = {
  ...Template.bind({}),
  args: {
    title: (<h2>DialogWrapper title</h2>),
    children: (
      <div>
        {DIALOG_CONTENT}
      </div>
    ),
    logo: (
      <span>+</span>
    ),
    isNotification: false,
    isCentered: false,
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
    isCentered: true,
    onClose: action('Dialog onclose called')
  }
};
