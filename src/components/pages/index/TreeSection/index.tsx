import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import Router from 'next/router';
import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button';

import i18n from '@/utils/i18n';
import { Heading, Box, Stack } from '@/components/primitives';
import { Tree } from '@/components/Tree';
import threes from '../../../../../content/trees.json';
import { Select } from './Select';

const TranslatedBox = styled(Box)`
  ${(p) => css`
    transform: translateY(-${p.theme.space.spacing600}px);
  `}
`;

export const TreeSection: FC = () => {
  const { lang } = i18n.useI18n();

  return (
    <Box as="section" backgroundColor="yellow200" marginTop="spacing600">
      <Box margin="0 auto" width="100%" maxWidth="size200">
        <TranslatedBox
          backgroundColor="gray900"
          paddingY={['spacing600', 'spacing600']}
          borderRadius="borderRadius100"
        >
          <Stack vertical spacing="spacing200">
            <Box paddingX={['spacing200', 'spacing400', 'spacing600']}>
              <Stack vertical spacing="spacing40">
                <Heading
                  as="p"
                  size={['size100', 'size300']}
                  color="white"
                  variation="secondary"
                >
                  Let&apos;s figure out
                </Heading>

                <Select
                  options={[
                    {
                      label: 'Microservice architecture',
                      value: 'microservices',
                    },
                    {
                      label: 'Serverless architecture',
                      value: 'serverless',
                    },
                  ]}
                  onSelect={() => {}}
                />
              </Stack>
            </Box>

            <Box
              width="100%"
              maxWidth="100vw"
              overflowX="scroll"
              paddingX={['spacing200', 'spacing400', 'spacing600']}
            >
              <Tree
                tree={threes.microservices}
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
