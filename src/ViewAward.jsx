import React, { useState } from 'react';

const ViewAward = () => {
	const [showNotification, setShowNotification] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleContact = () => {
		setLoading(true);

		// Simulate connection
		setTimeout(() => {
			setShowNotification(true);
			setLoading(false);

			// Auto-hide notification after 5 seconds
			setTimeout(() => {
				setShowNotification(false);
			}, 5000);
		}, 1500);
	};

	const buttonStyle = {
		width: '100%',
		background: '#f59e0b',
		color: 'white',
		padding: '1rem 0',
		borderRadius: '0.75rem',
		fontWeight: 600,
		border: 'none',
		cursor: 'pointer',
		transition: 'all 300ms',
	};

	return (
		<div style={{ minHeight: '100vh', background: '#f3f4f6', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<div style={{ width: '100%', maxWidth: '28rem', background: 'white', boxShadow: '0 10px 15px rgba(0,0,0,0.1)', minHeight: '100vh', position: 'relative' }}>
				{/* Header */}
				<div style={{ background: '#1f2937', color: 'white', textAlign: 'center', padding: '1rem 0' }}>
					<h4 style={{ fontSize: '1.25rem', fontWeight: 600 }}>DocRecovery</h4>
				</div>
				
				{/* Content */}
				<div style={{ padding: '1.25rem' }}>
					<h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1f2937', marginBottom: '1.5rem', textAlign: 'center' }}>View your reward</h2>
					
					<div style={{ background: '#f3f4f6', borderRadius: '0.75rem', padding: '1.25rem', marginBottom: '1.5rem' }}>
						<h5 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1f2937', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #e5e7eb' }}>Contact information</h5>
						<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
							<span style={{ color: '#4b5563' }}>Email</span>
							<span style={{ fontWeight: 500 }}>main@gmail.com</span>
						</div>
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<span style={{ color: '#4b5563' }}>Phone</span>
							<span style={{ fontWeight: 500 }}>+730-79-764-259</span>
						</div>
					</div>
					
					<div style={{ color: '#f59e0b', fontSize: '1.25rem', fontWeight: 700, margin: '1.5rem 0', padding: '1.25rem', background: '#fffbeb', borderRadius: '0.75rem' }}>
						<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
							<i className="fas fa-file-alt" style={{ fontSize: '1.5rem', marginRight: '1rem' }}></i>
							<div>
								<div>Passport document</div>
								<div>500frw</div>
							</div>
						</div>
					</div>
					
					<button onClick={handleContact} disabled={loading} style={{ ...buttonStyle, marginBottom: '1rem', opacity: loading ? 0.75 : 1 }}>
						{loading ? (
							<span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
						) : (
							<i className="fas fa-comment-alt" style={{ marginRight: '0.5rem' }}></i>
						)}
						{loading ? 'Connecting...' : 'Contact Finder'}
					</button>
					
					<a href="#landing" style={{ display: 'block', width: '100%', background: '#1f2937', color: 'white', padding: '0.75rem 0', borderRadius: '0.5rem', fontWeight: 600, textAlign: 'center', transition: 'all 300ms' }}>
						<i className="fas fa-home" style={{ marginRight: '0.5rem' }}></i> Back To Home
					</a>
				</div>
			</div>

			{/* Notification */}
			{showNotification && (
				<div style={{ position: 'fixed', top: '1.25rem', left: '50%', transform: 'translateX(-50%)', background: 'white', padding: '1.25rem', borderRadius: '0.75rem', boxShadow: '0 10px 15px rgba(0,0,0,0.1)', zIndex: 50, display: 'flex', alignItems: 'center', borderLeft: '4px solid #f59e0b', width: '100%', maxWidth: '28rem' }}>
					<i className="fas fa-check-circle" style={{ color: '#f59e0b', fontSize: '1.25rem', marginRight: '1rem' }}></i>
					<div style={{ flex: 1 }}>
						<div style={{ fontWeight: 700, color: '#1f2937' }}>Connection Established</div>
						<div style={{ color: '#4b5563', fontSize: '0.875rem' }}>You can now communicate with the finder to arrange document handover.</div>
					</div>
					<button onClick={() => setShowNotification(false)} style={{ color: '#9ca3af', background: 'transparent', border: 'none', cursor: 'pointer', marginLeft: '0.75rem' }}>
						<i className="fas fa-times"></i>
					</button>
				</div>
			)}
		</div>
	);
};

export default ViewAward;