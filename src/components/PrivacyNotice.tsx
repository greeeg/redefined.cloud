import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Portal from '@reach/portal';

import { Stack, Box, Heading, Text, Button } from '@/components/primitives';
import i18n from '@/utils/i18n';

const PRIVACY_NOTICE_KEY = 'redefined-cloud-privacy-notice';

const TextLink = styled.a`
  text-align: center;
  font-family: ${(p) => p.theme.fonts.font100};
  font-size: ${(p) => p.theme.fontSizes.size80}px;
  color: ${(p) => p.theme.colors.white};
  padding: ${(p) => p.theme.space.spacing80}px
    ${(p) => p.theme.space.spacing60}px;

  &:hover {
    text-decoration: underline;
  }
`;

export const PrivacyNotice: FC = () => {
  const [shouldDisplayNotice, setShouldDisplayNotice] = useState(false);
  const { lang } = i18n.useI18n();

  useEffect(() => {
    const hasSeenPrivacyNotice =
      JSON.parse(localStorage.getItem(PRIVACY_NOTICE_KEY)) ?? false;
    setShouldDisplayNotice(!hasSeenPrivacyNotice);
  }, []);

  if (!shouldDisplayNotice) {
    return null;
  }

  const onAccept = () => {
    localStorage.setItem(PRIVACY_NOTICE_KEY, JSON.stringify(true));
    setShouldDisplayNotice(false);
  };

  return (
    <Portal>
      <div
        role="dialog"
        aria-labelledby="privacy-notice-title"
        aria-describedby="privacy-notice-description"
      >
        <Box
          position="fixed"
          bottom={0}
          right={0}
          left={[0, 'inherit']}
          zIndex={10}
          marginBottom="spacing400"
          marginLeft={['spacing200', 'spacing0']}
          marginRight={['spacing200', 'spacing400']}
          backgroundColor="gray800"
          padding="spacing300"
          boxShadow="boxShadow200"
          maxWidth={['inherit', 360]}
        >
          <Stack direction="column" spacing="spacing100">
            <Heading
              as="h4"
              fontSize="size200"
              fontWeight="size80"
              color="white"
              id="privacy-notice-title"
            >
              Cookies Notice
            </Heading>
            <Text
              color="white"
              fontSize={['size80', 'size100']}
              id="privacy-notice-description"
            >
              Redefined.cloud uses cookies to track visits and understand what
              you like more to improve the website. By clicking on or navigating
              the site, you agree to allow us to continue doing so.
            </Text>

            <Box paddingTop="spacing100">
              <Stack
                direction={['column', 'row']}
                spacing={['spacing60', 'spacing100']}
                alignItems="center"
              >
                <Button variation="primary" onClick={onAccept}>
                  Accept & continue
                </Button>
                <Link
                  href="/[lang]/terms-and-privacy"
                  as={`/${lang}/terms-and-privacy`}
                >
                  <TextLink href="">Learn more</TextLink>
                </Link>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </div>
    </Portal>
  );
};
