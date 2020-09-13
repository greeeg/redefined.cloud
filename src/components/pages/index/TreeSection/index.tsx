import React, { FC, useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';

import trees from '../../../../../content/trees.json';
import i18n from '@/utils/i18n';
import { Heading, Box, Stack } from '@/components/primitives';
import { Tree } from '@/components/Tree';
import { Select } from './Select';

const TranslatedBox = styled(Box)`
  ${(p) => css`
    transform: translateY(-${p.theme.space.spacing600}px);
  `}
`;

export const TreeSection: FC = () => {
  const t = i18n.useT();
  const [selectedTree, setSelectedTree] = useState(trees[0].tree);
  const treeRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const containerWidth = treeRef.current.offsetWidth;

    // Center Tree when larger than window
    treeRef.current.parentElement.scrollTo({
      left: containerWidth * 0.5 - window.innerWidth * 0.5,
      top: 0,
    });
  }, [selectedTree]);

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
                  {t('home:tree:subtitle')}
                </Heading>

                <Select
                  options={trees.map(({ label, value }) => ({
                    label,
                    value,
                  }))}
                  onSelect={(selectedIndex) => {
                    setSelectedTree(trees[selectedIndex].tree);
                  }}
                />
              </Stack>
            </Box>

            <Box
              width="100%"
              maxWidth="100vw"
              display={['block', 'flex']}
              alignItems="center"
              justifyContent="center"
              paddingX={['spacing200', 'spacing400', 'spacing600']}
              paddingBottom={['spacing100', 'spacing400', 'spacing600']}
              paddingTop={'spacing100'}
              overflowX="scroll"
            >
              <div ref={treeRef} style={{ display: 'inline-block' }}>
                <Tree tree={selectedTree} />
              </div>
            </Box>
          </Stack>
        </TranslatedBox>
      </Box>
    </Box>
  );
};
