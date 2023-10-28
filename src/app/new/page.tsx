import { createPostAction } from '@/server/features/post/action/createPostAction';

export default async function Page() {
  const actionResult = await createPostAction();
  if (!actionResult.success) {
    throw new Error('Failed to create post', {
      cause: actionResult.error,
    });
  }
  const {
    data: { post },
  } = actionResult;

  return (
    <main>
      <h1>{post.id}</h1>
      <form></form>
    </main>
  );
}
