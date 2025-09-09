import React, { useState } from 'react';

const PhoneVerification = () => {
	const [phoneNumber, setPhoneNumber] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const handleVerify = () => {
		if (!phoneNumber || phoneNumber.length < 9) {
			setError(true);
			setTimeout(() => setError(false), 2000);
			return;
		}

		setLoading(true);

		// Simulate API call
		setTimeout(() => {
			window.location.hash = 'otp';
		}, 1500);
	};

	const buttonBaseStyle = {
		width: '100%',
		padding: '0.75rem 0',
		borderRadius: '0.5rem',
		fontWeight: 600,
		transition: 'all 300ms',
		border: 'none',
		cursor: 'pointer',
	};

	const buttonStyle = error
		? { ...buttonBaseStyle, backgroundColor: '#ef4444', color: 'white' }
		: {
			...buttonBaseStyle,
			background: 'linear-gradient(to right, #1f2937, #111827)',
			color: 'white',
			transform: loading ? 'none' : 'translateY(0)',
		};

	return (
		<div
			style={{
				minHeight: '100vh',
				background: 'linear-gradient(to bottom right, #f3f4f6, #d1d5db)',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '1rem',
			}}
		>
			<div
				style={{
					width: '100%',
					maxWidth: '28rem',
					background: 'white',
					borderRadius: '1rem',
					boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
					overflow: 'hidden',
				}}
			>
				<div
					style={{
						background: 'linear-gradient(to right, #1f2937, #111827)',
						color: 'white',
						textAlign: 'center',
						paddingTop: '2rem',
						paddingBottom: '2rem',
					}}
				>
					<h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>
						<i className="fas fa-mobile-alt" style={{ marginRight: '0.5rem' }}></i> Enter your phone
					</h2>
				</div>

				<div style={{ padding: '2rem' }}>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							border: '1px solid #d1d5db',
							borderRadius: '0.5rem',
							overflow: 'hidden',
							marginBottom: '1.5rem',
						}}
					>
						<span
							style={{
								padding: '0.75rem 1rem',
								background: '#f3f4f6',
								color: '#374151',
								display: 'flex',
								alignItems: 'center',
								fontWeight: 500,
							}}
						>
							<i className="fas fa-globe" style={{ marginRight: '0.5rem' }}></i> +250
						</span>
						<input
							type="tel"
							placeholder="788867890"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
							style={{ flex: 1, padding: '0.75rem 1rem', outline: 'none', border: 'none' }}
						/>
					</div>

					<button onClick={handleVerify} style={{ ...buttonStyle, opacity: loading ? 0.75 : 1 }} disabled={loading}>
						{loading ? (
							<span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
						) : error ? (
							<>
								Please enter a valid number <i className="fas fa-exclamation-circle" style={{ marginLeft: '0.5rem' }}></i>
							</>
						) : (
							<>
								Verify Phone <i className="fas fa-arrow-right" style={{ marginLeft: '0.5rem' }}></i>
							</>
						)}
					</button>
				</div>
			</div>
		</div>
	);
};

export default PhoneVerification;