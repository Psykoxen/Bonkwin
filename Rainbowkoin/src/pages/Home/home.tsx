import "./home.css";
function Home() {
  const mySessionVar = sessionStorage.getItem("email");
  const userId = sessionStorage.getItem("userid");
  console.log(userId);
  console.log(mySessionVar);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
