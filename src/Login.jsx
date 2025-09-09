import React, { useState } from 'react';

const Login = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [shake, setShake] = useState(false);

	const handleContinue = () => {
		if (!name || !email) {
			setShake(true);
			setTimeout(() => setShake(false), 500);
		} else {
			window.location.hash = 'phone'; // This will navigate to PhoneVerification
		}
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
					transition: 'all 300ms',
					transform: shake ? 'translateX(0)' : 'translateX(0)',
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
						<i className="fas fa-user-circle" style={{ marginRight: '0.5rem' }}></i> Welcome
					</h2>
				</div>

				<div style={{ padding: '2rem' }}>
					<p style={{ color: '#4b5563', marginBottom: '1.5rem', textAlign: 'center' }}>
						<strong style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
							<i className="fas fa-file-alt" style={{ marginRight: '0.5rem' }}></i>Lost document or found it? Work with us
						</strong>
						<br />
						Find with AI is there for you to enable you to get your Lost documents.
					</p>

					<div style={{ marginBottom: '1rem' }}>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								border: '1px solid #d1d5db',
								borderRadius: '0.5rem',
								overflow: 'hidden',
							}}
						>
							<span style={{ padding: '0.75rem 1rem', background: 'transparent' }}>
								<i className="fas fa-user" style={{ color: '#6b7280' }}></i>
							</span>
							<input
								type="text"
								placeholder="Enter your name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
								style={{ flex: 1, padding: '0.75rem', outline: 'none', border: 'none' }}
							/>
						</div>
					</div>

					<div style={{ marginBottom: '1.5rem' }}>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								border: '1px solid #d1d5db',
								borderRadius: '0.5rem',
								overflow: 'hidden',
							}}
						>
							<span style={{ padding: '0.75rem 1rem', background: 'transparent' }}>
								<i className="fas fa-envelope" style={{ color: '#6b7280' }}></i>
							</span>
							<input
								type="email"
								placeholder="Enter your email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								style={{ flex: 1, padding: '0.75rem', outline: 'none', border: 'none' }}
							/>
						</div>
					</div>

					<button
						onClick={handleContinue}
						style={{
							display: 'block',
							width: '100%',
							background: 'linear-gradient(to right, #1f2937, #111827)',
							color: 'white',
							padding: '0.75rem 0',
							borderRadius: '0.5rem',
							fontWeight: 600,
							textAlign: 'center',
							transition: 'all 300ms',
							border: 'none',
							cursor: 'pointer',
						}}
					>
						Continue <i className="fas fa-arrow-right" style={{ marginLeft: '0.5rem' }}></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;