import CheckoutCard from "./checkout";

export default function Home() {
	return (
		<div className="container mx-auto w-full py-6 grid grid-cols-9 gap-8">
			<div className="col-span-7"></div>

			<div className="col-span-2">
				<CheckoutCard />
			</div>
		</div>
	);
}
