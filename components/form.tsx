import React, { KeyboardEvent } from "react";
import {
	useForm,
	FormProvider,
	useFormContext,
	SubmitHandler,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import * as yup from "yup";

import { BiLock as Lock } from "react-icons/bi";

import SummarySection from "./summary-section";
import { Section } from "../components";

import Visa from "public/images/visa.svg";
import MasterCard from "public/images/mastercard.svg";
import Amex from "public/images/amex.svg";
import Jcb from "public/images/jcb.svg";

export default function FormPayment() {
	type Inputs = {
		creditCard: number;
		cvc: number;
		name: string;
		address: string;
		province: string;
		city: string;
		zipCode: number;
		email: string;
		phone: number;
	};

	const schema = yup
		.object()
		.shape({
			creditCard: yup
				.string()
				.required()
				.length(19, "Not valid credit card number")
				.label("Credit card"),
			cvc: yup
				.string()
				.required()
				.length(3, "Not valid CVC number")
				.label("CVC"),
			expiredDate: yup
				.string()
				.required()
				.test(
					"valid-month",
					"Invalid month (MM/YY)",
					(value) => !!(value && Number(value?.slice(0, 2)) <= 12)
				)
				.length(5, "Not valid date")
				.label("Expired date"),
			name: yup.string().required().label("Name"),
		})
		.required();

	const formMethods = useForm<Inputs>({
		resolver: yupResolver(schema),
		mode: "onTouched",
	});

	const onSubmit: SubmitHandler<Inputs> = (data) => alert(JSON.stringify(data));

	// TODO: non number char still show up and then replaced.
	// const formatNumberOnKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
	// 	const target = e.target as HTMLInputElement;
	// 	const val = target.value;
	// 	const len = val.length;

	// 	if (len !== 19) {
	// 		target.value = val.replace(/[^0-9]/g, "").replace(/(.{4})/g, "$1 ");
	// 	}

	// 	if (e.key === "Backspace" && val[len - 1] === " ") {
	// 		target.value = val.slice(0, -1);
	// 	}
	// };

	const formatNumber = (
		e: KeyboardEvent<HTMLInputElement>,
		separator = " ",
		subDigits = 4
	) => {
		const target = e.target as HTMLInputElement;

		const val = target.value;
		const maxLen = target.maxLength;
		const len = val.length;

		if (e.key === "Backspace") {
			if (val[len - 2] === separator) {
				target.value = val.slice(0, -1);
			}
		} else if (
			/[^0-9]/g.test(e.key) &&
			!["Tab", "ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"].includes(
				e.key
			)
		) {
			// TODO: command ie. ctrl+r also prevented
			e.preventDefault();
		} else if (len <= maxLen - 1) {
			const format = new RegExp(`(.{${subDigits}})`, "g");

			target.value = val
				.replace(/[^0-9]/g, "")
				.replace(format, `$1${separator}`);
		} else if (len <= maxLen) {
		}
	};

	return (
		<div className="col-span-full lg:col-span-3">
			<div className="flex flex-col gap-4 px-4 lg:px-12 lg:pb-8 h-full bg-white drop-shadow-[-12px_0px_12px_rgba(0,0,0,0.1)] rounded-l-xl lg:rounded-l-none rounded-r-xl">
				<FormProvider {...formMethods}>
					<form onSubmit={formMethods.handleSubmit(onSubmit)}>
						<Section title="Card details">
							<div className="flex gap-2 items-center text-gray-500 ">
								<Lock />
								<p>Secure Server</p>
							</div>
						</Section>

						<div className="grid grid-cols-6 gap-x-8 gap-y-4 child:w-full">
							<Input
								wrapperClassName="col-span-full lg:col-span-3 order-0"
								name="creditCard"
								label="Credit Card"
								type="text"
								inputMode="numeric"
								maxLength={19}
								required
								placeholder="XXXX XXXX XXXX XXXX "
								// onKeyUp={formatNumberOnKeyUp}
								onKeyDown={formatNumber}
							/>

							<Input
								wrapperClassName="col-span-3 lg:col-span-2 order-2"
								name="expiredDate"
								label="Expired Date"
								type="text"
								placeholder="MM/YY"
								inputMode="numeric"
								maxLength={5}
								required
								onKeyDown={(e) => formatNumber(e, "/", 2)}
							/>
							<Input
								wrapperClassName="col-span-3 lg:col-span-1 order-3"
								name="cvc"
								label="CVC"
								type="text"
								placeholder="***"
								inputMode="numeric"
								maxLength={3}
								required
								onKeyDown={formatNumber}
							/>

							<div className="col-span-full lg:col-span-3 order-1 lg:order-3">
								{/* <label
									htmlFor="paymentMethod"
									className="hidden lg:block lg:invisible"
								>
									Payment methods
								</label> */}
								<div id="payment-methods" className="flex gap-3">
									<PaymentMethodButton>
										<Visa />
									</PaymentMethodButton>
									<PaymentMethodButton>
										<MasterCard />
									</PaymentMethodButton>
									<PaymentMethodButton>
										<Amex />
									</PaymentMethodButton>
									<PaymentMethodButton>
										<Jcb />
									</PaymentMethodButton>
								</div>
							</div>
						</div>

						<Section title="Billing Information" />

						<div className="grid grid-cols-6 gap-x-8 gap-y-4 gutter child:w-full">
							<Input
								wrapperClassName="col-span-full lg:col-span-3"
								name="name"
								label="Card Holder Name"
								type="text"
								placeholder="John Doe"
								required
							/>

							<Input
								wrapperClassName="col-span-full lg:col-span-4"
								name="address"
								label="Address"
								type="text"
								placeholder="Jl. Jenderal Sudirman Kav.10-11"
							/>
							<div className="col-span-3 lg:col-span-2">
								<label htmlFor="country">Country</label>
								<select
									name="country"
									className="w-full h-12 rounded-lg px-2 bg-white border-[1px] outline-sky-300"
								>
									<option>Indonesia</option>
									<option>United States</option>
									<option>United Kingdom</option>
								</select>
							</div>

							<Input
								wrapperClassName="col-span-3 lg:col-span-2"
								name="province"
								label="Province/State"
								placeholder="DKI Jakarta"
							/>
							<Input
								wrapperClassName="col-span-3 lg:col-span-2"
								name="city"
								label="City"
								placeholder="Jakarta"
							/>
							<Input
								wrapperClassName="col-span-3 lg:col-span-2"
								name="zipCode"
								label="ZIP Code"
								placeholder="10202"
								type="number"
							/>

							<Input
								wrapperClassName="col-span-full lg:col-span-3"
								type="email"
								name="email"
								label="Email"
								placeholder="example@email.com"
							/>
							<Input
								wrapperClassName="col-span-full lg:col-span-3"
								type="tel"
								name="phone"
								label="Phone"
								placeholder="0812 3456 6890"
							/>
						</div>

						<SummarySection />
					</form>
				</FormProvider>
			</div>
		</div>
	);
}

function PaymentMethodButton({ children }: { children: React.ReactNode }) {
	return (
		<button className="bg-gray-200 rounded child:h-10 focus:ring ring-offset-2 ring-sky-200">
			{children}
		</button>
	);
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	wrapperClassName?: string;
	name: string;
}

function Input({
	name,
	label,
	required,
	className,
	wrapperClassName,
	...props
}: InputProps) {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	return (
		<div className={wrapperClassName}>
			<label htmlFor={name} className={!label ? "invisible" : ""}>
				{label ?? name}
				{required ? " *" : ""}
			</label>
			<input
				id={name}
				// required={required}
				className={`border rounded-lg h-12 px-4 outline-sky-200 w-full ${
					className ?? ""
				}`}
				{...register(name)}
				{...props}
			/>
			<ErrorMessage
				name={name}
				errors={errors}
				as={<small className="text-red-500" />}
			/>
		</div>
	);
}
