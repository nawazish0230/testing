import React from 'react';
import { GreetProps } from './greet.types';

const Greet = ({ name }: GreetProps) => {
  return <div>Hello {name ? name : 'guest'}</div>;
};

export default Greet;
