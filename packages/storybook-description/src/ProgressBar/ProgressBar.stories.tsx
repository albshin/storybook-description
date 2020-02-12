import React from 'react';
import { ProgressBar } from './ProgressBar';

export default { title: 'Components|ProgressBar', component: ProgressBar };

export const Default = () => (
  <>
    <ProgressBar mb={2} />
    <ProgressBar value={25} />
  </>
);

export const Variants = () => (
  <>
    <ProgressBar variant="primary" value={25} mb={2} />
    <ProgressBar variant="secondary" value={25} />
  </>
);
