import React from 'react'
import SendOTPForm from '../features/authentication/SendOTPForm'
import CheckOTPForm from '../features/authentication/CheckOTPForm'

function Auth() {
	return (
		<div className="w-full sm:max-w-sm">
			<SendOTPForm />
			<CheckOTPForm />
		</div>
	)
}

export default Auth
