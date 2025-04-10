import { useState } from 'react'
import OTPInput from 'react-otp-input'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { checkOtp } from '../../services/authService'
import { useNavigate } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'

function CheckOTPForm({ phoneNumber, onBack }) {
	const [otp, setOtp] = useState('')
	const navigate = useNavigate()
	const { isPending, error, data, mutateAsync } = useMutation({
		mutationFn: checkOtp,
	})

	const checkOtpHandler = async e => {
		e.preventDefault()
		try {
			const { user, message } = await mutateAsync({
				phoneNumber,
				otp,
			})
			toast.success(message)
			console.log(data)
		} catch (error) {
			toast.error(error?.response?.data?.message)
		}
	}

	return (
		<div>
			<button onClick={onBack}>
				<HiArrowRight className="w-6 h-6 text-secondary-500" />
			</button>
			<form className="space-y-10" onSubmit={checkOtpHandler}>
				<p className="font-bold text-secondary-800">
					کد تایید را وارد کنید
				</p>
				<OTPInput
					value={otp}
					onChange={setOtp}
					numInputs={6}
					renderSeparator={<span>-</span>}
					renderInput={props => <input type="number" {...props} />}
					containerStyle="flex flex-row-reverse gap-x-2  justify-center"
					inputStyle={{
						width: '2.5rem',
						padding: '0.5rem 0.2rem',
						border: '1px solid rgb(var(--color-primary-400))',
						borderRadius: '0.5rem',
					}}
				/>
				<button type="submit" className="btn btn--primary w-full">
					تایید
				</button>
			</form>
		</div>
	)
}

export default CheckOTPForm
