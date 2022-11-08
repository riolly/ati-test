import {
	AiFillQuestionCircle as QuestionCircle,
	AiOutlineExclamationCircle as ExclamationCircle,
} from "react-icons/ai";
import { Spacer } from "../components";
import { Section } from "./page";

export default function SummarySection() {
	return (
		<>
			<Section />
			<div className="flex flex-col gap-4">
				<div className="grid grid-cols-2 gap-x-8 gap-y-4">
					<div className="col-span-full lg:col-span-1 flex flex-col gap-2">
						<span className="flex justify-between items-center text-gray-500">
							<p>Redeem point</p>
							<QuestionCircle />
						</span>
						<span className="flex items-center gap-4 text-sky-500">
							<input id="redeem-point" type="checkbox" className="ml-2" />
							<label htmlFor="redeem-point" className="text-sm lg:text-base">
								I&apos;d like to redeem points from this credit card
							</label>
						</span>
					</div>

					<div className="col-span-full lg:col-span-1">
						<span className="flex justify-between items-center text-gray-500">
							<label htmlFor="installment">Installment Plan</label>
							<QuestionCircle />
						</span>
						<select
							id="installment"
							className="w-full h-12 rounded-lg px-2 bg-white border-[1px] outline-sky-300 "
						>
							<option>No installment</option>
							<option>Installment</option>
						</select>
					</div>
				</div>

				<div className="flex flex-col gap-2 px-8 py-6 bg-gray-100 rounded-lg">
					<p className="uppercase font-medium text-sky-900">Price Details</p>
					<div className="flex justify-between text-gray-700">
						<p>Air Transportation Charges</p>
						<p>IDR 2.167.000</p>
					</div>
					<div className="flex justify-between text-gray-700">
						<p>Baggage</p>
						<p className="uppercase font-medium text-sky-500">Free</p>
					</div>
					<div className="flex justify-between text-gray-700">
						<p>Flight Insurance</p>
						<p>IDR 60.000</p>
					</div>
					<div className="flex justify-between text-gray-700">
						<p>Service Fee</p>
						<p>IDR 11.000</p>
					</div>
					<Spacer />
					<div className="flex justify-between text-gray-700">
						<p>Total Price</p>
						<span className="flex gap-2 items-center h-fit">
							<ExclamationCircle className="text-red-500" />
							<p className="font-bold text-center pt-2">
								{/* TODO: fix vertical align */}
								IDR 2.238.000
							</p>
						</span>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-y-6 mb-6 lg:mb-0">
					<button className="col-span-full h-12 text-sky-500 hover:border-solid transition-all hover:text-sky-700 border-2 rounded border-dashed border-sky-500 font-medium focus:ring ring-offset-2 ring-sky-200">
						Use Promo Code
					</button>
					<button className="col-span-full lg:col-span-1 h-12 lg:col-start-2 w-full bg-sky-900 text-white rounded-lg font-semibold focus:ring ring-offset-2 ring-sky-200 hover:bg-sky-500 transition-colors hover:text-white">
						Pay Now
					</button>
				</div>
			</div>
		</>
	);
}
