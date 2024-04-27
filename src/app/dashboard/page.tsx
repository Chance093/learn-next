import Link from 'next/link'
import { posts } from '~/data/posts'
import { users } from '~/data/users'

export default function Dashboard() {
  return (
    <section className='flex flex-col items-center'>
      {posts.map((post) => (
        <div
          key={post.id}
          className='m-8 bg-gray-800 max-w-96 flex flex-col gap-4 p-6'
        >
          <div>
            <Link href={`dashboard/${post.id}`}>
              <h2 className='text-2xl hover:underline'>{post.title}</h2>
            </Link>

            <h3 className='text-sm'>{users[post.userId - 1].name}</h3>
          </div>
          <p>{post.body}</p>
        </div>
      ))}
    </section>
  )
}
