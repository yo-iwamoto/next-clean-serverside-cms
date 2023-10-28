import type { DBClient } from '@/server/database/client';

export interface CreatePostRepo {
  (): Promise<{
    id: string;
  }>;
}

export function createPostRepoFnFactory(db: DBClient): CreatePostRepo {
  return async function () {
    const post = await db.post.create({
      data: {},
      select: {
        id: true,
      },
    });
    return post;
  };
}
