import { useForm, } from "react-hook-form"

type RegistrationFormData = {
    email: string,
    password: string,
}

const Registration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<RegistrationFormData>();
    const onSubmit = (data: RegistrationFormData) => {
        console.log(data)
    }
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 px-4">

            {/* Modern glass-accentuated form card with subtle background blur */}
            <div className="w-full max-w-md bg-white/95 backdrop-blur-md shadow-2xl rounded-3xl p-8 sm:p-10 transition-all duration-300">

                {/* Header Section */}
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-black text-slate-800 tracking-tight">Welcome Back</h2>
                    <p className="text-sm text-slate-500 mt-1">Please enter your details to sign in</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        {/* email */}
                        <label>
                            Email address
                        </label>
                        <input
                            {...register("email", {
                                required: "Email is required"
                            })}
                        />
                        {errors?.email && <p>{errors.email.message}</p>}
                    </div>
                    <div>
                        <label>
                            Password
                        </label>
                        <input
                            {...register("password", {
                                required: "Password is required"
                            })}
                            type="password"
                        />
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Registration;