import TextField from '../../ui/TextField'

function CompleteProfileFrom() {
	return (
		<div className="flex flex-col gap-y-6 items-center pt-10">
			<h1 className="font-bold text-3xl text-secondary-700">
				تکمیل اطلاعات
			</h1>
			<div className="w-full sm:max-w-sm">
				<form className="space-y-8">
					<TextField label="نام و نام خانوادگی" name="name" />
					<TextField label="ایمیل" name="email" />
					<div>
						<button type="submit" className="btn btn--primary w-full">
							تایید
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default CompleteProfileFrom
