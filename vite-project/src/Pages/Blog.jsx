import BlogList from '../Components/BlogList';
import BlogPost from '../Components/BlogPost';

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      <BlogList />
      <BlogPost id={1} />
    </div>
  );
};
export default Blog;
