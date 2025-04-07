import { getOtp } from '../../services/authService'
import TextField from '../../ui/TextField'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import Loading from '../../ui/Loading'

function SendOTPForm({ setStep, phoneNumber, onChange }) {
	const { isPending, error, data, mutateAsync } = useMutation({
		mutationFn: getOtp,
	})
	const sendOtpHandler = async e => {
		e.preventDefault()
		try {
			const data = await mutateAsync({ phoneNumber })
			toast.success(data.message)
		} catch (error) {
			toast.error(error?.response?.data?.message)
		}
	}
	return (
		<div>
			<form className="space-y-10" onSubmit={sendOtpHandler}>
				<TextField
					label="شماره موبایل"
					name="phoneNumber"
					value={phoneNumber}
					onChange={onChange}
				/>
				<div>
					{isPending ? (
						<Loading />
					) : (
						<button type="submit" className="btn btn--primary w-full">
							ارسال کد تایید
						</button>
					)}
				</div>
			</form>
		</div>
	)
}
export default SendOTPForm
