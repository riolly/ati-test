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
	};

	const schema = yup
		.object()
		.shape({
			creditCard: yup
				.string()
				.required()
				.matches(/^[0-9]+$/, "Must be only digits")
				.min(16, "Not valid credit card number")
				.max(16, "Not valid credit card number")
				.label("Credit card"),
			cvc: yup
				.string()
				.required()
				.matches(/^[0-9]+$/, "Must be only digits")
				.min(3, "Not valid cvc number")
				.max(3, "Not valid cvc number")
				.label("CVC"),
			name: yup.string().required().label("Name"),
			expiredMonth: yup
				.date()
				.transform((ori, formattedDate) => {
					if (formattedDate === "") return null;
					return ori;
				})
				.nullable()
				.required()
				.label("Expired month"),
			expiredYear: yup
				.date()
				.transform((ori, formattedDate) => {
					if (formattedDate === "") return null;
					return ori;
				})
				.nullable()
				.required()
				.label("Expired year"),
		})
		.required();

	const methods = useForm<Inputs>({
		resolver: yupResolver(schema),
		mode: "onTouched",
	});

	const { handleSubmit } = methods;

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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

	const formatNumber = (e: KeyboardEvent<HTMLInputElement>) => {
		const target = e.target as HTMLInputElement;
		const val = target.value;
		const len = val.length;

		if (e.key === "Backspace") {
			if (val[len - 2] === " ") {
				target.value = val.slice(0, -1);
			}
		} else if (/[^0-9]/g.test(e.key) && e.key !== "Tab") {
			// TODO: command ie. ctrl+r also prevented
			e.preventDefault();
		} else if (len <= 18) {
			target.value = val.replace(/[^0-9]/g, "").replace(/(.{4})/g, "$1 ");
		}
	};

	return (
		<div className="col-span-full lg:col-span-3">
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
								placeholder="XXXX XXXX XXXX XXXX"
								// onKeyUp={formatNumberOnKeyUp}
								onKeyDown={formatNumber}
							/>

							<Input
								wrapperClassName="col-span-3 lg:col-span-2 order-2"
								name="expiredDate"
								label="Expiration Date"
								type="month"
								placeholder="month/Year"
								required
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
		<button className="bg-gray-200 rounded child:h-12 focus:ring ring-offset-2 ring-sky-200">
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