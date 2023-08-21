import postData from "./data/posts.json";
import NavBar from "./Components/NavBar";
import PostsTable from "./Components/PostsTable";
import PostsList from "./Components/PostsList";
import { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("")

  console.log(postData);
  return (
    <main>
      <NavBar />
      <PostsTable postData={postData}/>
      <PostsList postData={postData} searchInput={searchInput} setSearchInput={setSearchInput} />
    </main>
  );
}
export default App;
