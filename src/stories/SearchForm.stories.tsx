import '../components/SearchForm/styles.css';

import React from 'react';

import { action } from '@storybook/addon-actions';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import SearchForm, { type ISearchFormProps } from '../components/SearchForm';

const SearchFormStory: ComponentMeta<typeof SearchForm> = {
  title: 'Components/SearchForm',
  component: SearchForm
}
export default SearchFormStory;

const Template: ComponentStory<typeof SearchForm> = (props: ISearchFormProps) => <SearchForm {...props} />;

export const Default = {
  ...Template.bind({}),
  args: {
    initialValue: '',
    onSearch: action('Search initiated in Search form with value')
  }
};
