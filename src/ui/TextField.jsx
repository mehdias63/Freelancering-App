function TextField({ label, name, value, onChange }) {
	return (
		<div>
			<label className="mb-2 block text-secondary-700" htmlFor={name}>
				{label}
			</label>
			<input
				id={name}
				className="textField__input"
				onChange={onChange}
				value={value}
				type="text"
			/>
		</div>
	)
}
export default TextField
