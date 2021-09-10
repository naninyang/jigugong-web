import styled from '@emotion/styled';
import LinkButton from '../utils/LinkButton';
import { fontWeights, Rem, Em } from '../utils/designSystem';

const Button = styled(LinkButton)({
  display: 'inline-flex',
  backgroundColor: '#0EAA55',
  padding: `${Em(10, 20)} ${Em(22, 20)}`,
  borderRadius: `${Em(15, 20)}`,
  fontWeight: fontWeights.SemiBold,
  fontSize: `${Rem(20)}`,
  color: '#FFFFFF',
});

const ButtonGreen = ({ href, ...rest }) => {
  return <Button href={href} {...rest} />
}

export default ButtonGreen;
