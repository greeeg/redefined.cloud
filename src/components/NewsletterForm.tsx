import React, { FC, useState } from 'react';
import jsonp from 'jsonp';
import styled from 'styled-components';

import i18n from '@/utils/i18n';
import { Box, Stack, Heading, Text, Button } from '@/components/primitives';

const Input = styled.input`
  background-color: ${(p) => p.theme.colors.gray800};
  border: none;
  font-size: ${(p) => p.theme.fontSizes.size100}px;
  font-family: ${(p) => p.theme.fonts.font100};
  font-weight: ${(p) => p.theme.fontWeights.size80};
  color: ${(p) => p.theme.colors.white};
  padding: ${(p) => p.theme.space.spacing80}px;
  border-radius: ${(p) => p.theme.radii.borderRadius100}px;

  ::placeholder {
    color: ${(p) => p.theme.colors.gray400};
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: ${(p) => p.theme.colors.gray400};
  }

  ::-ms-input-placeholder {
    color: ${(p) => p.theme.colors.gray400};
  }
`;

export const NewsletterForm: FC = () => {
  const t = i18n.useT();
  const [status, setStatus] = useState<
    'idle' | 'success' | 'error' | 'duplicate' | 'loading'
  >('idle');
  const [state, setState] = useState<{
    email: string;
    firstName: string;
  }>({
    email: '',
    firstName: '',
  });

  const onSubmit = () => {
    const { email, firstName } = state;

    if (!email || !firstName) {
      return;
    }

    const url = `${
      process.env.NEXT_PUBLIC_MAILCHIMP_ENDPOINT
    }&EMAIL=${encodeURIComponent(email)}&FNAME=${encodeURIComponent(
      firstName
    )}`;

    setStatus('loading');

    jsonp(url, { param: 'c' }, (err, data) => {
      if (err || !data || data.result !== 'success') {
        setStatus('error');
      } else if (data.msg.includes('already subscribed')) {
        setStatus('duplicate');
      } else {
        setStatus('success');
      }
    });
  };

  return (
    <Box
      backgroundColor="gray900"
      padding={['spacing300', 'spacing400']}
      borderRadius="borderRadius100"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <Stack direction="column" spacing="spacing300">
          <Stack direction="column" spacing="spacing100">
            <Heading
              as="h3"
              fontSize={['size200', 'size300']}
              fontWeight="size80"
              lineHeight="lineHeight100"
              color="white"
            >
              {t('newsletter:title')}
            </Heading>
            <Text color="white" maxWidth={500}>
              {t('newsletter:description')}
            </Text>
          </Stack>

          <Stack direction="column" spacing="spacing100">
            <Stack direction={['column', 'row']} spacing="spacing200">
              <Stack direction={['column', 'row']} spacing="spacing80">
                <Input
                  type="text"
                  required
                  placeholder={t('newsletter:input:firstName')}
                  onChange={(e) => {
                    setState({
                      ...state,
                      firstName: e.target.value,
                    });
                  }}
                />
                <Input
                  type="email"
                  required
                  placeholder={t('newsletter:input:email')}
                  onChange={(e) => {
                    setState({
                      ...state,
                      email: e.target.value,
                    });
                  }}
                />
              </Stack>
              <Button
                variation="primary"
                type="submit"
                loading={status === 'loading'}
              >
                {t('newsletter:cta')}
              </Button>
            </Stack>

            {status === 'idle' && (
              <Text color="white">{t('newsletter:footer')}</Text>
            )}

            {status === 'success' && (
              <Text color="yellow200">{t('newsletter:status:success')}</Text>
            )}

            {status === 'loading' && (
              <Text color="yellow200">{t('newsletter:status:loading')}</Text>
            )}

            {status === 'error' && (
              <Text color="yellow200">{t('newsletter:status:error')}</Text>
            )}

            {status === 'duplicate' && (
              <Text color="yellow200">{t('newsletter:status:duplicate')}</Text>
            )}
          </Stack>
        </Stack>
      </form>
    </Box>
  );
};
