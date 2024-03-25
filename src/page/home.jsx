import { IconPlus } from "@tabler/icons-react";

export default function Home() {
	return (
		<>
			<p className="text-center text-5xl mt-20">Home</p>
			<p className="text-center text-2xl mt-2">CRUD Buku</p>

			<div className="flex-col items-center gap-4">
			<button className="w-full bg-blue-500 p-1 rounded-md flex gap-4 justify-center text-white items-center mb-5">
					<IconPlus /> <span>Tambah Buku</span>
				</button>
				<table class="table-auto w-full ">
					<thead>
						<tr className="*:border *:border-slate-500">
							<th>Song</th>
							<th>Artist</th>
							<th>Year</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								The Sliding Mr. Bones (Next Stop, Pottersville)
							</td>
							<td>Malcolm Lockyer</td>
							<td>1961</td>
						</tr>
						<tr>
							<td>Witchy Woman</td>
							<td>The Eagles</td>
							<td>1972</td>
						</tr>
						<tr>
							<td>Shining Star</td>
							<td>Earth, Wind, and Fire</td>
							<td>1975</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
}
