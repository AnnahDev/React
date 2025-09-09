import React, { useState, useEffect } from 'react';

const OTP = () => {
	const [otp, setOtp] = useState(['', '', '', '']);
	const [timeLeft, setTimeLeft] = useState(120);
	const [canResend, setCanResend] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (timeLeft > 0) {
			const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
			return () => clearTimeout(timer);
		} else {
			setCanResend(true);
		}
	}, [timeLeft]);

	const handleOtpChange = (index, value) => {
		if (!/^\d*$/.test(value)) return;

		const newOtp = [...otp];
		newOtp[index] = value;
		setOtp(newOtp);

		if (value && index < 3) {
			document.getElementById(`otp-${index + 1}`).focus();
		}
	};

	const handleKeyDown = (index, e) => {
		if (e.key === 'Backspace' && !otp[index] && index > 0) {
			document.getElementById(`otp-${index - 1}`).focus();
		}
	};

	const handleResend = () => {
		if (canResend) {
			setTimeLeft(120);
			setCanResend(false);
		}
	};

	const handleVerify = () => {
		setLoading(true);
		setTimeout(() => {
			window.location.hash = 'submit';
		}, 1500);
	};

	const minutes = Math.floor(timeLeft / 60);
	const seconds = timeLeft % 60;

	const headerStyle = {
		background: 'linear-gradient(to right, #1f2937, #111827)',
		color: 'white',
		textAlign: 'center',
		paddingTop: '2rem',
		paddingBottom: '2rem',
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
		background: 'linear-gradient(to right, #1f2937, #111827)',
		color: 'white',
		padding: '0.75rem 0',
		borderRadius: '0.5rem',
		fontWeight: 600,
		border: 'none',
		cursor: 'pointer',
		transition: 'all 300ms',
		marginBottom: '1rem',
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
				<div style={headerStyle}>
					<h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>
						<i className="fas fa-lock" style={{ marginRight: '0.5rem' }}></i> Enter OTP
					</h2>
				</div>

				<div style={{ padding: '2rem' }}>
					<p style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
						A 4-digit OTP has been sent to <span style={{ fontWeight: 700, color: '#1f2937' }}>+8801712345678</span>
					</p>

					<div style={{ marginBottom: '1.5rem' }}>
						<div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '1.5rem' }}>
							{otp.map((digit, index) => (
								<input
									key={index}
									id={`otp-${index}`}
									type="text"
									maxLength="1"
									value={digit}
									onChange={(e) => handleOtpChange(index, e.target.value)}
									onKeyDown={(e) => handleKeyDown(index, e)}
									style={inputStyle}
								/>
							))}
						</div>
						<div style={{ width: '100%', height: '0.25rem', background: 'linear-gradient(to right, #1f2937, #111827)', borderRadius: '9999px' }}></div>
					</div>

					<button onClick={handleVerify} disabled={loading || otp.join('').length !== 4} style={{ ...buttonStyle, opacity: loading || otp.join('').length !== 4 ? 0.5 : 1, cursor: loading || otp.join('').length !== 4 ? 'not-allowed' : 'pointer' }}>
						{loading ? (
							<span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
						) : (
							<i className="fas fa-check-circle" style={{ marginRight: '0.5rem' }}></i>
						)}
						Verify OTP
					</button>

					<div onClick={handleResend} style={{ textAlign: 'center', cursor: canResend ? 'pointer' : 'not-allowed', color: canResend ? '#1f2937' : '#9ca3af' }}>
						<strong>
							<i className="fas fa-redo" style={{ marginRight: '0.5rem' }}></i>
							Resend OTP ({`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`})
						</strong>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OTP;