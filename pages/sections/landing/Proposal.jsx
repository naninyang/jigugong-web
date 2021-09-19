import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { images } from '../../assets';
import styled from '@emotion/styled';
import { mq, fontWeights, Rem, Em } from '../../utils/designSystem';
import AgreementDocument from '../../components/AgreementDocument';

const Container = styled.div({
  backgroundColor: '#ffffff',
});

const Contents = styled.div({
  margin: '0 auto',
  padding: `${Em(40)} ${Em(25)} ${Em(50)}`,
  maxWidth: Rem(516),
  width: '100%',
  [mq.minTablet]: {
    padding: `${Em(80)} ${Em(25)} ${Em(100)}`,
  },
});

const Heading = styled.h2({
  marginBottom: Em(44),
  fontSize: Rem(20),
  fontWeight: fontWeights.SemiBold,
  [mq.minTablet]: {
    fontSize: Rem(24),
  },
});

const FormGroup = styled.form();

const FormFieldset = styled.fieldset({
  display: 'flex',
  flexWrap: 'wrap',
});

const FieldGroup = styled.div({
  marginTop: Em(30),
  width: '100%',
  maxWidth: '100%',
  flex: '0 0 auto',
});

const FormLabel = styled.label({
  display: 'inline-block',
  marginBottom: Em(16),
  fontSize: Rem(16),
  fontWeight: fontWeights.Regular,
  [mq.minTablet]: {
    fontSize: Rem(20),
  },
});

const InputControl = styled.input({
  display: 'block',
  padding: `${Em(1)} ${Em(12)}`,
  width: '100%',
  height: Rem(50),
  border: 0,
  borderRadius: Em(5),
  backgroundColor: '#f6f6f6',
  appearance: 'none',
  fontSize: Rem(12),
  fontWeight: fontWeights.Regular,
  lineHeight: 1.5,
  color: ' #212529',
  [mq.minTablet]: {
    fontSize: Rem(14),
  },
});

const TextAreaControl = styled.textarea({
  display: 'block',
  padding: `${Em(15)} ${Em(20)}`,
  width: '100%',
  height: Rem(166),
  border: 0,
  borderRadius: Em(5),
  backgroundColor: '#f6f6f6',
  resize: 'none',
  appearance: 'none',
  fontSize: Rem(14),
  fontWeight: fontWeights.Regular,
  lineHeight: 1.5,
  color: ' #212529',
  [mq.minTablet]: {
    fontSize: Rem(18),
  },
});

const AgreementLabel = styled.div({
  display: 'inline-block',
  marginBottom: Em(16),
  fontSize: Rem(16),
  fontWeight: fontWeights.Regular,
  [mq.minTablet]: {
    fontSize: Rem(20),
  },
});

const CheckBoxGroup = styled.div({
  position: 'relative',
  marginTop: Em(20),
});

const CheckBoxControl = styled.input({
  position: 'absolute',
  width: Rem(30),
  height: Rem(30),
  opacity: 0,
  cursor: 'pointer',
});

const CheckBoxControlDesign = styled.span(({ isChecked }) => ({
  display: 'inline-block',
  padding: Em(5),
  width: Rem(30),
  height: Rem(30),
  border: 0,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50% 50%',
  backgroundSize: `${Rem(25)} ${Rem(25)}`,
  backgroundImage: isChecked ? `url(${images.icons.checkBoxTrue})` : `url(${images.icons.checkBoxFalse})`,
}));

const CheckBoxLabel = styled.label({
  display: 'inline-block',
  paddingLeft: Em(12),
  lineHeight: Rem(30),
  verticalAlign: 'super',
  fontSize: Rem(16),
  fontWeight: fontWeights.Light,
  [mq.minTablet]: {
    fontSize: Rem(20),
  },
});

const ButtonGroup = styled.div({
  marginTop: Em(30),
  width: '100%',
  maxWidth: '100%',
  textAlign: 'center',
});

const SubmitButton = styled.button({
  border: 0,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#0EAA55',
  padding: `${Em(10)} 0`,
  width: Rem(188),
  height: Rem(52),
  borderRadius: Em(15),
  fontWeight: fontWeights.SemiBold,
  fontSize: Rem(16),
  textAlign: 'center',
  color: '#FFFFFF',
  [mq.minTablet]: {
    fontSize: Rem(20),
  },
});

const Error = styled.div({
  marginTop: Em(12),
  paddingLeft: Em(10),
  fontSize: Rem(12),
  fontWeight: fontWeights.Regular,
  color: '#de463e',
  [mq.minTablet]: {
    fontSize: Rem(14),
  }
});

const Proposal = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const handleChecked = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Container>
      <Contents>
        <Heading>협업제안 및 문의</Heading>
        <FormGroup onSubmit={handleSubmit(onSubmit)}>
          <FormFieldset>
            <legend>협업제안 및 문의 양식</legend>
            <FieldGroup>
              <FormLabel htmlFor='organization'>단체/기업명</FormLabel>
              <InputControl id={'organization'}
                placeholder={'단체/기업명'}
                type={'text'}
                {...register
                  ('organization', {
                    required: true,
                    minLength: 2,
                  })
                }
              />
              {errors.organization && <Error>단체/기업명을 정확하게 입력해 주세요</Error>}
            </FieldGroup>
            <FieldGroup>
              <FormLabel htmlFor='officer'>담당자명</FormLabel>
              <InputControl id={'officer'}
                placeholder={'홍길동'}
                type={'text'}
                {...register
                  ('officer', {
                    required: true,
                    minLength: 2,
                  })
                }
              />
              {errors.officer && <Error>담당자명을 정확하게 입력해 주세요</Error>}
            </FieldGroup>
            <FieldGroup>
              <FormLabel htmlFor='contact'>연락처</FormLabel>
              <InputControl id={'contact'}
                placeholder={'숫자만 입력 가능'}
                type={'tel'}
                {...register
                  ('contact', {
                    required: true,
                    maxLength: 11,
                    minLength: 8
                  })
                }
              />
              {errors.contact && <Error>연락처를 정확하게 입력해 주세요</Error>}
            </FieldGroup>
            <FieldGroup>
              <FormLabel htmlFor='email'>이메일</FormLabel>
              <InputControl id={'email'}
                placeholder={'example@example.com'}
                type={'email'}
                {...register
                  ('email', {
                    required: true,
                    minLength: 7,
                    maxLength: 320,
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  })
                }
              />
              {errors.email && <Error>이메일을 정확하게 입력해 주세요</Error>}
            </FieldGroup>
            <FieldGroup>
              <FormLabel htmlFor='context'>내용</FormLabel>
              <TextAreaControl id={'context'}
                placeholder={''}
                {...register('context', { required: true })}
              />
              {errors.context && <Error>내용을 입력해 주세요</Error>}
            </FieldGroup>
            <FieldGroup>
              <AgreementLabel id='agreement-document'>개인정보 수집 및 이용 동의</AgreementLabel>
              <AgreementDocument label='agreement-document' />
            </FieldGroup>
            <CheckBoxGroup>
              <CheckBoxControl
                {...register('agreement', { required: true })}
                id={'agreement'}
                type={'checkbox'}
                checked={isChecked}
                onChange={handleChecked}
              />
              <CheckBoxControlDesign isChecked={isChecked} />
              <CheckBoxLabel htmlFor='agreement'>개인정보 수집 및 이용에 동의합니다</CheckBoxLabel>
              {errors.agreement && <Error>동의하지 않으면 제출이 불가합니다</Error>}
            </CheckBoxGroup>
            <ButtonGroup>
              <SubmitButton type="submit">제출</SubmitButton>
            </ButtonGroup>
          </FormFieldset>
        </FormGroup>
      </Contents>
    </Container>
  )
}

export default Proposal;
