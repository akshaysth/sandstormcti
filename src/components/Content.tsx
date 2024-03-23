import Post from "./Post";

function Content() {
  return (
    <div className="sm:container sm:mx-auto sm:px-4">
      <h1 className="text-2xl">Content</h1>
      <div className="post">
        <Post />
      </div>
    </div>
  );
}

export default Content;
