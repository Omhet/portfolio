import React, { FunctionComponent } from 'react';
import { Link } from 'react-scroll';
import ArrowIcon from '../images/icons/arrow.svg';

interface Props {
  text: string;
  to: string;
  isArrowOnTheLeft?: boolean;
  className?: string;
}

const LinkWithArrow: FunctionComponent<Props> = ({
  to,
  text,
  className,
  isArrowOnTheLeft = false,
}) => (
  <Link className={`link-with-arrow ${className}`} to={to} smooth duration={1000}>
    {isArrowOnTheLeft && <ArrowIcon />}
    <span className="link-with-arrow__text">{text}</span>
    {!isArrowOnTheLeft && <ArrowIcon />}
  </Link>
);

export default LinkWithArrow;
