import React from 'react';

import { action } from '@storybook/addon-actions';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import ConfirmDialogWrapper, { type IConfirmDialogWrapperProps } from './ConfirmDialogWrapper';

const ConfirmDialogDialogStory: ComponentMeta<typeof ConfirmDialogWrapper> = {
  title: 'Components/ConfirmDialog',
  component: ConfirmDialogWrapper,
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
export default ConfirmDialogDialogStory;

const Template: ComponentStory<typeof ConfirmDialogWrapper> = (props: IConfirmDialogWrapperProps) => <ConfirmDialogWrapper {...props} />;

export const DeleteMovie = {
  ...Template.bind({}),
  args: {
    title: ('DELETE MOVIE'),
    text: 'Are you sure you want to delete this movie?',
    logo: null,
    isNotification: true,
    isCentered: true,
    onConfirm: action('ConfirmDialog onConfirm called'),
    onClose: action('Dialog onclose called')
  }
};
