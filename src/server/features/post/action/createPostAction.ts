import {
  ACTION_RESULT_META_SUCCESS,
  type ActionResultMeta,
} from './ActionResultMeta';
import { createPostRepoFnFactory } from '../repo/createPostRepo';
import { createPostServiceFnFactory } from '../service/createPostService';
import { db } from '@/server/database/client';

const repoFn = createPostRepoFnFactory(db);
const serviceFn = createPostServiceFnFactory(repoFn);

export async function createPostAction(): Promise<
  ActionResultMeta<{
    post: {
      id: string;
    };
  }>
> {
  try {
    const serviceResult = await serviceFn();

    return {
      success: ACTION_RESULT_META_SUCCESS.success,
      data: serviceResult,
    };
  } catch (err) {
    console.error(err);

    return {
      success: ACTION_RESULT_META_SUCCESS.failure,
      displayMessage: 'An error occurred while creating the post.',
      code: 'internal',
      error: err,
    };
  }
}
