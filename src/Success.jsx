import React, { useState } from 'react';

const Success = () => {
	const [loading, setLoading] = useState(false);

	const handleRedirect = () => {
		setLoading(true);
		setTimeout(() => {
			window.location.hash = 'landing';
		}, 1000);
	};

	return (
		<div style={{ minHeight: '100vh', background: '#f3f4f6', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<div style={{ width: '100%', maxWidth: '28rem', background: 'white', boxShadow: '0 10px 15px rgba(0,0,0,0.1)', minHeight: '100vh' }}>
				{/* Header */}
				<div style={{ background: '#1f2937', color: 'white', textAlign: 'center', padding: '1rem 0' }}>
					<div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>9:41</div>
					<h4 style={{ fontSize: '1.25rem', fontWeight: 600 }}>FIA</h4>
				</div>
				
				{/* Content */}
				<div style={{ padding: '1.25rem', textAlign: 'center' }}>
					<div style={{ color: '#22c55e', fontSize: '3.75rem', margin: '2rem 0' }}>
						<i className="fas fa-check-circle"></i>
					</div>
					
					<h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1f2937', marginBottom: '1rem' }}>You have posted successfully</h2>
					<p style={{ color: '#4b5563', marginBottom: '2rem' }}>Your document has been posted to our system</p>
					
					<div style={{ color: '#22c55e', fontSize: '1.25rem', fontWeight: 700, margin: '1.5rem 0', padding: '1rem', background: '#ecfdf5', borderRadius: '0.75rem' }}>
						Total amount: 10,500frw
					</div>
					
					<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
						<a href="#viewaward" style={{ display: 'block', width: '100%', background: '#1f2937', color: 'white', padding: '0.75rem 0', borderRadius: '0.5rem', fontWeight: 600, textAlign: 'center', transition: 'all 300ms' }}>
							<i className="fas fa-award" style={{ marginRight: '0.5rem' }}></i> View Award
						</a>
						
						<a href="#landing" style={{ display: 'block', width: '100%', background: '#1f2937', color: 'white', padding: '0.75rem 0', borderRadius: '0.5rem', fontWeight: 600, textAlign: 'center', transition: 'all 300ms' }}>
							<i className="fas fa-home" style={{ marginRight: '0.5rem' }}></i> Back To Home
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Success;