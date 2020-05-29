import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { md } from '@/theme';

type Node = {
  label: string;
  value: string;
  children?: Node[];
};

interface TreeMasterProps {
  tree: Node;
  className?: string;
  onSelect: (value: string) => void;
}

interface TreeNodeProps {
  node: Node;
  onSelect: (value: string) => void;
}

const TreeNode: FC<TreeNodeProps> = ({ node, onSelect }) => (
  <li>
    <button
      aria-label={node.label}
      onClick={() => onSelect(node.value)}
      disabled={node.value === ''}
    >
      {node.label}
    </button>

    {node.children && node.children.length > 0 && (
      <ul>
        {node.children.map((child, index) => (
          <TreeNode
            node={child}
            onSelect={onSelect}
            key={`${node.label}-${index}`}
          />
        ))}
      </ul>
    )}
  </li>
);

const TreeMaster: FC<TreeMasterProps> = ({ tree, className, onSelect }) => {
  return (
    <div className={className}>
      <ul>
        <TreeNode node={tree} onSelect={onSelect} />
      </ul>
    </div>
  );
};

// Inspired by https://codepen.io/philippkuehn/pen/QbrOaN
export const Tree = styled(TreeMaster)`
  ${(p) => css`
    ul {
      position: relative;
      padding: 1em 0 0 0;
      white-space: nowrap;
      margin: 0 auto;
      text-align: center;

      &::after {
        content: '';
        display: table;
        clear: both;
      }

      ul::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        border-left: 2px solid ${p.theme.colors.yellow200};
        width: 0;
        height: 1em;
      }
    }

    li {
      display: inline-block;
      vertical-align: top;
      text-align: center;
      list-style-type: none;
      position: relative;
      padding: 1em 0em 0 0em;

      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 50%;
        border-top: 2px solid ${p.theme.colors.yellow200};
        width: 50%;
        height: 1em;
      }

      &::after {
        right: auto;
        left: 50%;
        border-left: 2px solid ${p.theme.colors.yellow200};
      }

      &:only-child::after,
      &:only-child::before {
        display: none;
      }

      &:only-child {
        padding-top: 0;
      }

      &:first-child::before,
      &:last-child::after {
        border: 0 none;
      }

      &:last-child::before {
        border-right: 2px solid ${p.theme.colors.yellow200};
        border-radius: 0 5px 0 0;
      }

      &:first-child::after {
        border-radius: 5px 0 0 0;
      }

      button {
        position: relative;
        display: inline-block;
        padding: 0.5em 0.75em;
        background-color: ${(p) => p.theme.colors.gray900};
        color: ${p.theme.colors.white};
        font-family: ${p.theme.fonts.font100};
        font-size: ${p.theme.fontSizes.size100}px;
        font-weight: ${p.theme.fontWeights.size80};
        text-decoration: none;
        border: 1px solid ${p.theme.colors.white};
        border-radius: ${p.theme.radii.borderRadius100}px;
        transition: all ${p.theme.transitions.transition100};

        &:hover:not(:disabled) {
          cursor: pointer;
          border-color: ${p.theme.colors.yellow200};
        }

        &:disabled {
          background-color: ${(p) => p.theme.colors.gray800};
          border-color: ${p.theme.colors.gray800};
        }

        ${md(css`
          font-size: ${p.theme.fontSizes.size200}px;
        `)}
      }
    }
  `}
`;
