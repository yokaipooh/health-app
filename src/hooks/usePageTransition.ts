import { flushSync } from 'react-dom';
import type { NavigateOptions, To } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

/**
 * Custom hook to trigger View Transitions when navigating.
 * Wraps react-router-dom's useNavigate.
 */
export const usePageTransition = () => {
  const navigate = useNavigate();

  const transitionNavigate = (to: To, options?: NavigateOptions) => {
    // Check if the browser supports View Transitions
    if (!document.startViewTransition) {
      navigate(to, options);
      return;
    }

    // Trigger the transition
    document.startViewTransition(() => {
      // Ensure the navigation happens synchronously within the transition callback
      flushSync(() => {
        navigate(to, options);
      });
    });
  };

  return transitionNavigate;
};
