import RootLayout from "./components/layout/Rootlayout";
import TodoProvider from "./components/provider/TodoProvider";
import TodoContainer from "./components/todo/TodoContainer";

const App = () => {
  return (
    <TodoProvider>
      <RootLayout>
        <TodoContainer />
      </RootLayout>
    </TodoProvider>
  );
};

export default App;
