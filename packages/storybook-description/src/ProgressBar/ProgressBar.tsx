import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass/styled-components';
import { variant, MarginProps } from 'styled-system';

export interface ProgressBarProps
  extends MarginProps,
    HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary';
  /**
   * The value property represents how much progress has been made out of 100.
   */
  value?: number;
}

export interface BarProps extends ProgressBarProps {
  progressWidth: string;
}

const Progress = styled(Flex)`
  overflow: hidden;
  border-radius: 0.25rem;
  height: 1rem;
`;

const Bar = styled(Box)<BarProps>`
  width: ${props => props.progressWidth};

  ${variant({
    scale: 'progressBars',
    variants: { primary: {} }
  })}
`;

/**
 * What's up?
 */
export const ProgressBar = ({
  value = 0,
  variant = 'primary',
  ...props
}: ProgressBarProps) => {
  console.log(ProgressBar.__docgenInfo);
  return (
    <Progress bg="gray.0" {...props}>
      <Bar role="progressbar" progressWidth={`${value}%`} variant={variant} />
    </Progress>
  )
};

export default ProgressBar;
