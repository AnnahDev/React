import React, { useState } from 'react';

const PayPinVerification = () => {
	const [pin, setPin] = useState(['', '', '', '']);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const handlePinChange = (index, value) => {
		if (!/^\d*$/.test(value)) return;

		const newPin = [...pin];
		newPin[index] = value;
		setPin(newPin);
		setError('');

		if (value && index < 3) {
			document.getElementById(`pin-${index + 1}`).focus();
		}
	};

	const handleKeyDown = (index, e) => {
		if (e.key === 'Backspace' && !pin[index] && index > 0) {
			document.getElementById(`pin-${index - 1}`).focus();
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (pin.join('').length !== 4) {
			setError('Please enter a valid 4-digit PIN');
			return;
		}

		setLoading(true);

		// Simulate payment processing
		setTimeout(() => {
			window.location.hash = 'success';
		}, 1500);
	};

	const inputStyle = {
		width: '4rem',
		height: '4rem',
		textAlign: 'center',
		fontSize: '1.5rem',
		border: '2px solid #d1d5db',
		borderRadius: '0.75rem',
		outline: 'none',
	};

	const buttonStyle = {
		width: '100%',
		background: '#f59e0b',
		color: 'white',
		padding: '0.75rem 0',
		borderRadius: '0.5rem',
		fontWeight: 600,
		transition: 'all 300ms',
		border: 'none',
		cursor: 'pointer',
	};

	return (
		<div style={{ minHeight: '100vh', background: '#f3f4f6', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<div style={{ width: '100%', maxWidth: '28rem', background: 'white', boxShadow: '0 10px 15px rgba(0,0,0,0.1)', minHeight: '100vh' }}>
				{/* Header */}
				<div style={{ background: '#1f2937', color: 'white', textAlign: 'center', padding: '1rem 0' }}>
					<h4 style={{ fontSize: '1.25rem', fontWeight: 600 }}>DocRecovery</h4>
				</div>
				
				{/* Content */}
				<div style={{ padding: '1.25rem' }}>
					<form onSubmit={handleSubmit}>
						<h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1f2937', marginBottom: '1.5rem', textAlign: 'center' }}>Confirm payment using your pin</h2>
						<p style={{ color: '#4b5563', textAlign: 'center', marginBottom: '1.5rem' }}>Enter your 4-digit payment pin to complete the transaction</p>

						{error && <div style={{ color: '#ef4444', textAlign: 'center', marginBottom: '1rem', height: '1.25rem' }}>{error}</div>}

						<div style={{ marginBottom: '1.5rem' }}>
							<div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem' }}>
								{pin.map((digit, index) => (
									<input
										key={index}
										id={`pin-${index}`}
										type="password"
										maxLength="1"
										value={digit}
										onChange={(e) => handlePinChange(index, e.target.value)}
										onKeyDown={(e) => handleKeyDown(index, e)}
										style={inputStyle}
									/>
								))}
							</div>
						</div>

						<button type="submit" disabled={loading || pin.join('').length !== 4} style={{ ...buttonStyle, opacity: loading || pin.join('').length !== 4 ? 0.5 : 1, cursor: loading || pin.join('').length !== 4 ? 'not-allowed' : 'pointer' }}>
							{loading ? (
								<span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
							) : (
								<i className="fas fa-arrow-right" style={{ marginRight: '0.5rem' }}></i>
							)}
							{loading ? 'Processing...' : 'Pay Now'}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default PayPinVerification;