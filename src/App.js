import Routes from "./router";
import store from "./store";
import { Provider } from "react-redux";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

function App() {
    return (
        <Provider store={store}>
            <Routes />
            <NotificationContainer />
        </Provider>
    );
}

export default App;
