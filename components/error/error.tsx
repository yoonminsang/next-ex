import type { FC } from 'react';

interface Props {
  resetErrorBoundary: (...args: unknown[]) => void;
}

const Error: FC<Props> = ({ resetErrorBoundary }) => {
  return (
    <div>
      There was an error!
      <button type="button" onClick={() => resetErrorBoundary()}>
        Try again
      </button>
    </div>
  );
};

export default Error;
