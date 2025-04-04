import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

export function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === Number(id));

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 block">
        ← Back to Home
      </Link>
      <article className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700">{post.content}</p>
      </article>
    </div>
  );
}