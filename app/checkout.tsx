import { AiOutlineExclamationCircle as ExclamationCircle } from "react-icons/ai";
import { BsCalendar4Week as Calendar } from "react-icons/bs";
import { MdOutlineFlight as Flight } from "react-icons/md";

export default function CheckoutCard() {
	const data = {
		name: "Mr. John Doe",
		maturity: "Adult",
		origin: "Jakarta (CGK)",
		destination: "Denpasar (DPS)",
		date: "23 Nov 2020",
		price: "Rp 2.238.000",
	};

	return (
		<div className="flex flex-col bg-white px-5 pt-4 pb-2 rounded-lg h-fit">
			<div className="flex justify-between items-end py-4">
				<p className="text-sky-900 font-medium">YOUR BOOKING</p>
				<a className="text-sm text-sky-500 hover:cursor-pointer">Details</a>
			</div>
			<Spacer className="border-dashed" />

			<div className="flex flex-col py-4 gap-2">
				<p className="font-medium">LIST OF PASSENGER(S)</p>
				<div className="flex justify-between">
					<p>{data.name}</p>
					<p>{data.maturity}</p>
				</div>
			</div>
			<Spacer />

			<div className="py-4 flex flex-col gap-2">
				<p className="font-medium">FLIGHT</p>
				<span className="flex gap-2 items-center">
					<Flight />
					<p>
						{data.origin}
						&nbsp;&rarr;&nbsp;
						{data.destination}
					</p>
				</span>

				<span className="flex gap-2 items-center">
					<Calendar />
					<p>{data.date}</p>
				</span>
			</div>
			<Spacer />

			<div className="py-4 flex flex-col">
				<p className="font-medium">PRICE</p>
				<div className="flex justify-between items-end">
					<p>Total</p>
					<span className="flex gap-2 items-center">
						<ExclamationCircle className="text-red-500" />
						<p className="text-2xl font-bold">{data.price}</p>
					</span>
				</div>
			</div>
		</div>
	);
}

export function Spacer({ className }: { className?: string }) {
	return <div className={`border-b-2 w-full h-0.5 ${className ?? ""}`} />;
}
