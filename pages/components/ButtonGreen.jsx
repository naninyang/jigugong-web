import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { fontWeights, Rem, Em } from '../utils/designSystem';

const domainRegex = /http[s]*:\/\/[www.]*jigugong\.com[/]?/

const Button = styled.a({
  display: 'inline-flex',
  backgroundColor: '#0EAA55',
  padding: `${Em(10, 20)} ${Em(22, 20)}`,
  borderRadius: `${Em(15, 20)}`,
  fontWeight: fontWeights.SemiBold,
  fontSize: `${Rem(20)}`,
  color: '#FFFFFF',
});

const ButtonGreen = ({ href, ...rest }) => {
  const sameDomain = domainRegex.test(href)

  if (sameDomain) href = href.replace(domainRegex, '/')

  if (href.startsWith('/')) {
    return (
      <Link href={href}>
        <Button {...rest} />
      </Link>
    )
  }

  if (!href.startsWith('http')) {
    return <Button href={href} {...rest} />
  }

  return (
    <Button
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      {...rest}
    />
  )
}

ButtonGreen.propTypes = {
  href: PropTypes.string.isRequired,
}

export default ButtonGreen;
