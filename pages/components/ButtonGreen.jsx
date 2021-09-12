import styled from '@emotion/styled';
import LinkButton from '../utils/LinkButton';
import { fontWeights, Rem, Em } from '../utils/designSystem';

const Button = styled(LinkButton)({
  display: 'inline-flex',
  backgroundColor: '#0EAA55',
  padding: `${Em(10)} ${Em(22)}`,
  borderRadius: `${Em(15)}`,
  fontWeight: fontWeights.SemiBold,
  fontSize: `${Rem(20)}`,
  color: '#FFFFFF',
});

const ButtonGreen = ({ href, ...rest }) => {
  return <Button href={href} {...rest} />
}

export default ButtonGreen;
