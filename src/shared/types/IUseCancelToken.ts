import { type CancelToken, type CancelTokenSource } from 'axios';
import { type MutableRefObject } from 'react';

export interface IUseCancelToken {
  source: SourceRef
  newCancelToken: () => CancelToken
  cancelPreviousRequest: (message?: string) => void
  isCancel: (error: any) => boolean
};

export type SourceRef = MutableRefObject<CancelTokenSource | null>;

export type { CancelToken } from 'axios';

export default IUseCancelToken
