import '../components/SearchForm/styles.css';

import React from 'react';

import { ComponentMeta } from '@storybook/react';

import SearchForm from '../components/SearchForm';

const CounterStory: ComponentMeta<typeof SearchForm> = {
    title: "Components/SearchForm",
    component: SearchForm,
}
export default CounterStory;

export const InitialNumber = () => 
    <SearchForm
        initialValue=''
        onSearch={()=>{}}
        />