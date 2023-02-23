import { footBallTeams } from '@my-org/library-scope.api.accordion/accordion';
import React from 'react';
import { Accordion } from './accordion';

export const BasicAccordion = () => {
  return (
    <Accordion elementList={footBallTeams}/>
  );
}
