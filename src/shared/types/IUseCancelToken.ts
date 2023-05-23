import { AxiosError, CancelToken, CancelTokenSource } from 'axios';
import { MutableRefObject } from 'react';

export interface IUseCancelToken {
  source: SourceRef
  newCancelToken: () => CancelToken
  cancelPreviousRequest: (message?: string) => void
  isCancel: (error: AxiosError) => boolean
}

export type SourceRef = MutableRefObject<CancelTokenSource | null>;

export type { CancelToken } from 'axios';

export default IUseCancelToken
