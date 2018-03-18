import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from './Footer';

storiesOf('Footer', module)
  .add('with text', () => <Footer>Hello Footer</Footer>)
  .add('with some emoji', () => <Footer>Bar</Footer>);
