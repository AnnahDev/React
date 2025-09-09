import React, { useState } from 'react';

const AwardNotification = () => {
	const [loading, setLoading] = useState(false);

	const handleButtonClick = () => {
		setLoading(true);
		setTimeout(() => {
			window.location.hash = 'viewaward';
		}, 1000);
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
				<div style={{ background: '#1f2937', color: 'white', textAlign: 'center', padding: '1rem 0', position: 'sticky', top: 0, zIndex: 50 }}>
					<div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>9:41</div>
					<h4 style={{ fontSize: '1.25rem', fontWeight: 600 }}>FIA</h4>
				</div>
				
				{/* Content */}
				<div style={{ padding: '1.25rem', textAlign: 'center' }}>
					<div style={{ color: '#f59e0b', fontSize: '3.75rem', margin: '2rem 0' }}>
						<i className="fas fa-award"></i>
					</div>
					
					<h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1f2937', marginBottom: '1rem' }}>You have been awarded</h2>
					<p style={{ color: '#4b5563', marginBottom: '2rem' }}>Congratulations! Someone found your document</p>
					
					<button onClick={handleButtonClick} disabled={loading} style={{ ...buttonStyle, marginBottom: '1.25rem', opacity: loading ? 0.75 : 1 }}>
						{loading ? (
							<span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
						) : (
							<i className="fas fa-eye" style={{ marginRight: '0.5rem' }}></i>
						)}
						{loading ? 'Loading...' : 'View Amount'}
					</button>
					
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
						<span>Total amount:</span>
						<strong>10,500frw</strong>
					</div>
					
					<button onClick={handleButtonClick} disabled={loading} style={{ ...buttonStyle, opacity: loading ? 0.75 : 1 }}>
						{loading ? (
							<span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
						) : (
							<i className="fas fa-gift" style={{ marginRight: '0.5rem' }}></i>
						)}
						{loading ? 'Loading...' : 'See Your Award'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default AwardNotification;