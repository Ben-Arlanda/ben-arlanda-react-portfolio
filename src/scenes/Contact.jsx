import { useForm } from "react-hook-form";
import SocialMediaIcons from "../Components/SocialMediaIcons";

const Contact = () => {
	const {
		register,
		trigger,
		formState: { errors },
	} = useForm();

	const onSubmit = async (e) => {
		console.log("~ e", e);
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
		}
	};

	return (
		<>
			<section
				id="contact"
				className="py-48 flex flex-col items-center sm:flex-row mr-10 md:mr-0 ml-4 md:ml-0"
			>
				<form
					target="_blank"
					onSubmit={onSubmit}
					action="https://formsubmit.co/142946c6b3c73778fbfd5b5684a145fc"
					method="POST"
					className="w-full sm:w-1/2 sm:ml-0"
				>
					<h2 className='md:ml-40 mb-5 "font-Poppins text-2xl font-bold whitespace-nowrap text-blue-200'>
						Contact Me<span className="text-green-200">.</span>
					</h2>
					<input
						className="w-full placeholder-grey p-3 mb-5 md:ml-40 bg-deep-blue text-grey-400 border rounded-md border-gray-300 focus:outline-none focus:border-green-200"
						type="text"
						placeholder="Name"
						{...register("name", {
							required: true,
							maxLength: 100,
						})}
					/>
					{errors.name && (
						<p className="text-red mt-1 md:ml-40">
							{errors.name.type === "required" && "This field is required."}
							{errors.name.type === "maxLength" &&
								"Max length is 100 characters."}
						</p>
					)}

					<input
						className="w-full placeholder-grey p-3 mb-5 md:ml-40 bg-deep-blue text-grey-400 border rounded-md border-gray-300 focus:outline-none focus:border-green-200"
						type="text"
						placeholder="Email"
						{...register("email", {
							required: true,
							pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
						})}
					/>
					{errors.email && (
						<p className="text-red mt-1 md:ml-40">
							{errors.email.type === "required" && "This field is required."}
							{errors.email.type === "pattern" && "Invalid email address."}
						</p>
					)}

					<textarea
						className="w-full placeholder-grey p-3 mb-1 md:ml-40 bg-deep-blue text-grey-400 border rounded-md border-gray-300 focus:outline-none focus:border-green-200"
						placeholder="Message"
						rows="4"
						cols="50"
						{...register("message", {
							required: true,
							maxLength: 2000,
						})}
					/>
					{errors.message && (
						<p className="text-red mt-1 md:ml-40">
							{errors.message.type === "required" && "This field is required."}
							{errors.message.type === "maxLength" &&
								"Max length is 2000 characters"}
						</p>
					)}
					<button
						type="submit"
						className="text-grey-300 hover:bg-slate-300 hover:text-black md:ml-40 font-normal rounded-lg bg-slate-300 text-black pr-0.5 pl-0.5 hover:opacity-50 transition duration-500"
					>
						Send Message
					</button>
				</form>
				<div className="w-full sm:w-1/2 sm:mr-10 flex flex-col md:items-center font-Poppins font-medium">
					<div className="text-2xl py-3 md:ml-6 text-blue-200 mt-5 md:mt-0">
						<h2 className="text-xl md:mr-5">Get in touch</h2>
						<p className="text-xl">Lets talk!</p>
					</div>
					<div className="">
						<SocialMediaIcons />
					</div>
				</div>
			</section>
		</>
	);
};
export default Contact;
