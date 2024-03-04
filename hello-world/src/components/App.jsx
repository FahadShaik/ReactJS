import CardClass from "./CardClass";
import Footer from "./Footer";
import Header from "./Header";
import Message from "./Message";

const App = () => {
  return (
    <div>
      <Header />
      <h1>App component</h1>
      <Message />
      <CardClass />
      <Footer />
    </div>
  );
};

export default App;
