import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import api from "../axios";
import { useNavigate } from "react-router-dom";

const schema = z.object({
	email: z.string().email(),
	password: z.string().min(6),
});

const Register = () => {
	const nav = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
	});
	const onSubmit = async (data) => {
		try {
			await api.post(`/register`, data);
			if (confirm("Successfully, redirect to login?")) {
				nav("/login");
			}
		} catch (error) {
			alert(error.response.data);
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1>Register</h1>
				<div className="form-group mb-3">
					<label className="form-label" htmlFor="email">
						email
					</label>
					<input className="form-control" type="email" id="email" {...register("email", { required: true })} />
					{errors.email?.message && <p className="text-danger">{errors.email?.message}</p>}
				</div>

				<div className="form-group mb-3">
					<label className="form-label" htmlFor="password">
						password
					</label>
					<input className="form-control" type="password" id="password" {...register("password")} />
					{errors.password?.message && <p className="text-danger">{errors.password?.message}</p>}
				</div>

				<div className="form-group mb-3">
					<button className="btn btn-primary w-100" type="submit">
						Register
					</button>
				</div>
			</form>
		</div>
	);
};

export default Register;