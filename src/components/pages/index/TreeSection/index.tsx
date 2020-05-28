import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import Router from 'next/router';

import i18n from '@/utils/i18n';
import { Heading, Box, Stack } from '@/components/primitives';
import { Tree } from '@/components/Tree';
import threes from './trees.json';
import { Select } from './Select';

const TranslatedBox = styled(Box)`
  ${(p) => css`
    transform: translateY(-${p.theme.space.spacing600}px);
  `}
`;

export const TreeSection: FC = () => {
  const options = [
    {
      label: 'Containarized architecture',
      value: 'containarized',
    },
    {
      label: 'Microservice architecture',
      value: 'microservices',
    },
  ];

  const { lang } = i18n.useI18n();
  const [selectedTree, setSelectedTree] = useState(options[0].value);

  return (
    <Box as="section" backgroundColor="yellow200" marginTop="spacing600">
      <Box margin="0 auto" width="100%" maxWidth="size200">
        <TranslatedBox
          backgroundColor="gray900"
          paddingY={['spacing600', 'spacing600']}
          borderRadius="borderRadius100"
        >
          <Stack direction="column" spacing="spacing200">
            <Box paddingX={['spacing200', 'spacing400', 'spacing600']}>
              <Stack direction="column" spacing="spacing40">
                <Heading
                  as="p"
                  fontSize={['size100', 'size300']}
                  color="white"
                  fontWeight="size80"
                >
                  Let&apos;s figure out
                </Heading>

                <Select
                  options={[
                    {
                      label: 'Containarized architecture',
                      value: 'containarized',
                    },
                    {
                      label: 'Microservice architecture',
                      value: 'microservices',
                    },
                  ]}
                  onSelect={(value) => {
                    setSelectedTree(value);
                  }}
                />
              </Stack>
            </Box>

            <Box
              width="100%"
              maxWidth="100vw"
              overflowX="scroll"
              paddingX={['spacing200', 'spacing400', 'spacing600']}
              paddingBottom={['spacing100', 'spacing400', 'spacing600']}
              paddingTop={'spacing100'}
            >
              <Tree
                tree={threes[selectedTree]}
                onSelect={(value) => {
                  if (!value) {
                    // Empty value for non-clickable nodes
                    return;
                  }

                  Router.push('/[lang]/[term]', `/${lang}/${value}`);
                }}
              />
            </Box>
          </Stack>
        </TranslatedBox>
      </Box>
    </Box>
  );
};
