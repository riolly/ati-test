import CheckoutCard from "./checkout";

export default function Home() {
	const payments = [
		"Credit/Debit Card",
		"LinkAja",
		"KlikBCA",
		"e-Pay BRI",
		"CIMB Clicks",
		"GoPay",
		"ATM",
		"BNI Mobile",
		"ShoopePay",
		"Bank Transfer",
		"Alfamart",
		"Indomaret",
	];

	return (
		<div className="container mx-auto w-full py-6 grid grid-cols-9 gap-8">
			<div className="col-span-7 rounded-xl">
				{/* TODO: rounded is not working */}
				<div className="bg-white w-full grid grid-cols-4">
					<div className="col-span-1 bg-gray-50 flex flex-col px-12 py-6 items-start gap-2">
						{payments.map((method: string, i) => (
							<Button key={i} isActive={i === 0}>
								{method}
							</Button>
						))}
					</div>

					<div className="col-span-3 bg-white drop-shadow-[-12px_0px_12px_rgba(0,0,0,0.1)]"></div>
				</div>
			</div>

			<div className="col-span-2">
				<CheckoutCard />
			</div>
		</div>
	);
}

function Button({
	children,
	isActive = false,
}: {
	children: string;
	isActive?: boolean;
}) {
	return (
		<button
			className={`py-2 px-4 w-full hover:rounded-lg hover:bg-sky-300 hover:text-white ${
				isActive
					? "text-sky-500 border-b-[3px] border-b-sky-500"
					: "text-sky-900"
			}`}
		>
			<p className="font-medium text-lg text-left">{children}</p>
		</button>
	);
}
