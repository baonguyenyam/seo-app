"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

import { title } from "@/components/primitives";

export default function Contact() {
	const router = useRouter();

	async function handleSubscribe(event: any) {
		event.preventDefault();
		const formData = new FormData(event.target);

		try {
			// Send Email
			await axios.post("/api/resend", {
				email: "admin@nguyenpham.pro",
				from: "<bot@nguyenpham.pro> Nguyen Pham Bot",
				subject: "New contact from web!",
				content: `First Name: ${formData.get("firstName")}\n\n
				  Last Name: ${formData.get("lastName")}\n\n
				  Email: ${formData.get("Email")}\n\n
				  Phone: ${formData.get("Phone")}\n\n
				  Description: ${formData.get("Description")}`,
			});
			router.push("/");
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div>
			<h1 className={title()}>Contact</h1>
			<form className="w-full mx-auto mt-10 text-left" onSubmit={handleSubscribe}>
				<div className="mb-5 grid sm:grid-cols-2 gap-10">
					<div className="itm">
						<label className="block mb-2 font-medium text-sm" htmlFor="First_Name">
							First Name
						</label>
						<input className="appearance-none border border-gray-400 py-1 px-2 text-sm font-light w-[100%] rounded-none outline-none focus:outline-none focus:ring-2" id="First_Name" name="firstName" type="text" />
					</div>
					<div className="itm">
						<label className="block mb-2 font-medium text-sm" htmlFor="Last_Name">
							Last Name
						</label>
						<input className="appearance-none border border-gray-400 py-1 px-2 text-sm font-light w-[100%] rounded-none outline-none focus:outline-none focus:ring-2" id="Last_Name" name="lastName" type="text" />
					</div>
				</div>

				<div className="mb-5 grid sm:grid-cols-2 gap-10">
					<div className="itm">
						<label className="block mb-2 font-medium text-sm" htmlFor="Email">
							Email
						</label>
						<div
							dangerouslySetInnerHTML={{
								__html: `<input type="text" ftype="email" id="Email" name="Email" class="appearance-none border border-gray-400 py-1 px-2 text-sm font-light w-[100%] rounded-none outline-none focus:outline-none focus:ring-2"></input>`,
							}}
						/>
					</div>
					<div className="itm">
						<label className="block mb-2 font-medium text-sm" htmlFor="Phone">
							Phone
						</label>
						<input className="appearance-none border border-gray-400 py-1 px-2 text-sm font-light w-[100%] rounded-none outline-none focus:outline-none focus:ring-2" id="Phone" name="Phone" type="text" />
					</div>
				</div>

				<div className="mb-5">
					<label className="block mb-2 font-medium text-sm" htmlFor="Description">
						Description
					</label>
					<textarea className="appearance-none border border-gray-400 py-1 px-2 text-sm font-light w-[100%] rounded-none outline-none focus:outline-none focus:ring-2" id="Description" name="Description" rows={5} />
				</div>

				<div className="row mb-10">
					<button className="inline-block text-md bg-black text-white py-2 px-5 font-medium dark:bg-white dark:text-black dark:border-black border-2 border-black rounded-none hover:bg-white hover:text-black hover:border-black hover:shadow-lg transition-all duration-300 ease-in-out" id="formsubmit" type="submit">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}
