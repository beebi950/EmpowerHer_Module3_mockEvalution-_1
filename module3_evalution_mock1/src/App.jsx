import PostList from "./components/PostList";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./context/ThemContext";

const App = ( ) => {
  const { theme} = useTheme();
  return(
    <div className={`app ${theme}`}>
      <ThemeProvider>
        <ThemeToggle />
        <PostList />
      </ThemeProvider>

    </div>
  );
};

export default App;