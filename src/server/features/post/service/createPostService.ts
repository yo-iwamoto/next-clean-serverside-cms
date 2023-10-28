import type { CreatePostRepo } from '../repo/createPostRepo';

export interface CreatePostService {
  (): Promise<{
    post: {
      id: string;
    };
  }>;
}

export function createPostServiceFnFactory(
  repoFn: CreatePostRepo,
): CreatePostService {
  return async function () {
    const post = await repoFn();

    return {
      post,
    };
  };
}
