import React, { FC } from 'react';
import { theme } from '@/theme';

interface LogoProps {
  size?: 'small' | 'large';
}

export const Logo: FC<LogoProps> = ({ size = 'large' }) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 168 18"
      width={size === 'large' ? 180 : 120}
      height="auto"
    >
      <path
        d="M.39 17h3.383v-5.672h2.47L9.272 17h3.735l-3.399-6.219c1.82-.781 2.829-2.367 2.829-4.554C12.438 3.047 10.335 1 6.702 1H.391v16zm3.383-8.39V3.765h2.282c1.953 0 2.898.867 2.898 2.46 0 1.587-.945 2.383-2.883 2.383H3.773zM19.601 17.234c2.969 0 4.969-1.445 5.438-3.672l-3.079-.203c-.335.914-1.195 1.391-2.304 1.391-1.664 0-2.719-1.102-2.719-2.89v-.008h8.172v-.915c0-4.078-2.469-6.093-5.64-6.093-3.532 0-5.821 2.508-5.821 6.21 0 3.805 2.258 6.18 5.953 6.18zM16.937 9.79c.07-1.367 1.11-2.46 2.586-2.46 1.445 0 2.445 1.03 2.453 2.46h-5.039zM31.263 17.195c1.937 0 2.945-1.117 3.406-2.117h.14V17h3.282V1h-3.32v6.016h-.102c-.445-.977-1.406-2.172-3.414-2.172-2.633 0-4.86 2.047-4.86 6.172 0 4.015 2.133 6.18 4.868 6.18zm1.054-2.648c-1.633 0-2.523-1.453-2.523-3.547 0-2.078.875-3.508 2.523-3.508 1.617 0 2.524 1.367 2.524 3.508 0 2.14-.922 3.547-2.524 3.547zM45.856 17.234c2.968 0 4.968-1.445 5.437-3.672l-3.078-.203c-.336.914-1.195 1.391-2.305 1.391-1.664 0-2.718-1.102-2.718-2.89v-.008h8.172v-.915c0-4.078-2.47-6.093-5.641-6.093-3.531 0-5.82 2.508-5.82 6.21 0 3.805 2.258 6.18 5.953 6.18zM43.192 9.79c.07-1.367 1.11-2.46 2.586-2.46 1.445 0 2.445 1.03 2.453 2.46h-5.04zM59.549 5h-2.383v-.805c0-.812.328-1.289 1.305-1.289.398 0 .804.086 1.07.172l.586-2.5A8.765 8.765 0 0057.775.25c-2.258 0-3.937 1.273-3.937 3.883V5h-1.696v2.5h1.696V17h3.328V7.5h2.383V5zM61.142 17h3.328V5h-3.328v12zm1.672-13.547c.992 0 1.804-.758 1.804-1.687 0-.922-.812-1.68-1.804-1.68-.985 0-1.797.758-1.797 1.68 0 .93.812 1.687 1.797 1.687zM70.024 10.063c.008-1.547.93-2.454 2.273-2.454 1.336 0 2.141.875 2.133 2.344V17h3.328V9.36c0-2.797-1.64-4.516-4.14-4.516-1.781 0-3.07.875-3.61 2.273h-.14V5h-3.172v12h3.328v-6.938zM85.41 17.234c2.969 0 4.969-1.445 5.438-3.672l-3.078-.203c-.336.914-1.196 1.391-2.305 1.391-1.664 0-2.719-1.102-2.719-2.89v-.008h8.172v-.915c0-4.078-2.469-6.093-5.64-6.093-3.532 0-5.82 2.508-5.82 6.21 0 3.805 2.257 6.18 5.952 6.18zM82.746 9.79c.07-1.367 1.11-2.46 2.586-2.46 1.445 0 2.445 1.03 2.453 2.46h-5.039zM97.072 17.195c1.937 0 2.945-1.117 3.406-2.117h.141V17h3.281V1h-3.32v6.016h-.102c-.445-.977-1.406-2.172-3.414-2.172-2.633 0-4.86 2.047-4.86 6.172 0 4.015 2.133 6.18 4.868 6.18zm1.054-2.648c-1.632 0-2.523-1.453-2.523-3.547 0-2.078.875-3.508 2.523-3.508 1.618 0 2.524 1.367 2.524 3.508 0 2.14-.922 3.547-2.524 3.547z"
        fill={theme.colors.gray600}
      />
      <path
        d="M108.142 17.203c1 0 1.867-.836 1.875-1.875-.008-1.023-.875-1.86-1.875-1.86-1.032 0-1.883.837-1.875 1.86a1.87 1.87 0 001.875 1.875zM117.731 17.234c3.195 0 5.203-1.875 5.359-4.632h-3.14c-.196 1.28-1.039 2-2.18 2-1.555 0-2.563-1.305-2.563-3.602 0-2.266 1.016-3.563 2.563-3.563 1.219 0 2 .805 2.18 2h3.14c-.14-2.773-2.242-4.593-5.375-4.593-3.64 0-5.89 2.523-5.89 6.203 0 3.648 2.211 6.187 5.906 6.187zM128.109 1h-3.328v16h3.328V1zM135.757 17.234c3.641 0 5.906-2.492 5.906-6.187 0-3.719-2.265-6.203-5.906-6.203-3.641 0-5.906 2.484-5.906 6.203 0 3.695 2.265 6.187 5.906 6.187zm.016-2.578c-1.68 0-2.539-1.539-2.539-3.633 0-2.093.859-3.64 2.539-3.64 1.648 0 2.508 1.547 2.508 3.64 0 2.094-.86 3.633-2.508 3.633zM151.083 11.89c.008 1.61-1.094 2.454-2.289 2.454-1.258 0-2.071-.883-2.078-2.297V5h-3.329v7.64c.008 2.805 1.649 4.516 4.063 4.516 1.805 0 3.101-.93 3.641-2.336h.125V17h3.195V5h-3.328v6.89zM161.055 17.195c1.937 0 2.945-1.117 3.406-2.117h.141V17h3.281V1h-3.32v6.016h-.102c-.445-.977-1.406-2.172-3.414-2.172-2.633 0-4.859 2.047-4.859 6.172 0 4.015 2.132 6.18 4.867 6.18zm1.055-2.648c-1.633 0-2.524-1.453-2.524-3.547 0-2.078.875-3.508 2.524-3.508 1.617 0 2.523 1.367 2.523 3.508 0 2.14-.922 3.547-2.523 3.547z"
        fill={theme.colors.yellow200}
      />
    </svg>
  );
};