import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route component={Home} path="/" exact />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
