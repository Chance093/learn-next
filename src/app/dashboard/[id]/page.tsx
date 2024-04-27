import { posts } from '~/data/posts'
import { users } from '~/data/users'

export default function Post({ params }: { params: { id: string } }) {
  const post = posts.find((post) => post.id === Number(params.id))
  if (!post) {
    throw new Error(`Post not found: ${params.id}`)
  }

  return (
    <section className='flex items-center justify-center'>
      <div
        key={post.id}
        className='m-8 bg-gray-800 max-w-96 flex flex-col gap-4 p-6'
      >
        <div>
          <h2 className='text-2xl'>{post.title}</h2>
          <h3 className='text-sm'>{users[post.userId - 1].name}</h3>
        </div>
        <p>{post.body}</p>
      </div>
    </section>
  )
}
