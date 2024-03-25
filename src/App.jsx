import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import BukuTambah from "./page/Buku/BukuTambah";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route
						path="*"
						element={
							<p className="text-center text-2xl">
								Halaman Tidak Ditemukan
							</p>
						}
					/>

					<Route path="/" element={<Home />} />
					<Route path="/buku/tambah" element={<BukuTambah />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
