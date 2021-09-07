import PropTypes from 'prop-types';
import Link from 'next/link';

const domainRegex = /http[s]*:\/\/[www.]*jigugong\.com[/]?/

const LinkButton = ({ href, ...rest }) => {
  const sameDomain = domainRegex.test(href)

  if (sameDomain) {
    href = href.replace(domainRegex, '/')
  }

  if (href.startsWith('/')) {
    return (
      <Link href={href}>
        <a {...rest} />
      </Link>
    )
  }

  if (!href.startsWith('http')) {
    return <a href={href} {...rest} />
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      {...rest}
    />
  )
}

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
}

export default LinkButton;
