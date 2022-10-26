import PasswordGenerator from "./components/PasswordGenerator";
import Container from "./components/Container.jsx";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<div className="App">
			<ToastContainer
				position="bottom-center"
				autoClose={500}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
			<Container>
				<PasswordGenerator />
			</Container>
		</div>
	);
}

export default App;
