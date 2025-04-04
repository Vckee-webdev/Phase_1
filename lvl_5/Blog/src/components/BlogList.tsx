import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

export function BlogList() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">My Blog</h1>
      <div className="space-y-6">
        {blogPosts.map(post => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              <Link to={`/post/${post.id}`} className="text-blue-600 hover:text-blue-800">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600">{post.shortDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}