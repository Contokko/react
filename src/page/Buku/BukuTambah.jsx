import { IconPlus } from "@tabler/icons-react";

export default function BukuTambah() {
	return (
		<>
			<p className="text-center text-5xl mt-20">Tambah Buku</p>

			<div className="flex-col items-center gap-4 p-5">
				<div className="flex-col gap-5">
					<div>
						<label htmlFor="judul">Judul :</label>
						<input
							type="text"
							name="judul"
							className="focus:border-slate-700 border-slate-400"
						/>
					</div>
				</div>
				<button className="w-full bg-blue-500 p-1 rounded-md flex gap-4 justify-center text-white items-center mb-5">
					<IconPlus /> <span>Tambah Buku</span>
				</button>
			</div>
		</>
	);
}
