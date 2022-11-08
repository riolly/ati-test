import Head from "next/head";
import CheckoutCard from "../components/checkout";
import FormPayment from "../components/form";

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
		<>
			<Head>
				<title>Garuda Indonesia - Complete Payment</title>
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<meta
					name="description"
					content="Complete your payment process using preferred payment method."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="container mx-auto w-full py-6 grid grid-cols-9 gap-8">
				<div className="col-span-full lg:col-span-7">
					<div className="w-full grid grid-cols-4">
						<div className="col-span-1 hidden lg:flex flex-col bg-gray-50  px-12 py-6 items-start gap-2 rounded-l-xl">
							{payments.map((method: string, i) => (
								<ButtonSidebar key={i} isActive={i === 0}>
									{method}
								</ButtonSidebar>
							))}
						</div>

						<FormPayment />
					</div>
				</div>

				<div className="hidden lg:block col-span-2">
					<CheckoutCard />
				</div>
			</div>
		</>
	);
}

function ButtonSidebar({
	children,
	isActive = false,
}: {
	children: string;
	isActive?: boolean;
}) {
	return (
		<button
			className={`py-2 px-4 w-full hover:rounded-lg transition-all focus:rounded-lg focus:ring ring-offset-2 ring-sky-200 hover:bg-sky-300 hover:text-white ${
				isActive
					? "text-sky-500 border-b-[3px] border-b-sky-500"
					: "text-sky-900"
			}`}
		>
			<p className="font-medium text-lg text-left">{children}</p>
		</button>
	);
}
