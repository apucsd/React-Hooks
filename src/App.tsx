import "./App.css";
import Avatar from "./components/Avatar";
import withBorder from "./components/withBorder";
function App() {
  const BorderedAvatar = withBorder(Avatar);
  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <Avatar></Avatar>
        <Avatar></Avatar>
        <Avatar></Avatar>
        <Avatar></Avatar>
        <BorderedAvatar></BorderedAvatar>
      </div>
    </>
  );
}

export default App;
