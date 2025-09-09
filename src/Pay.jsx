import React from 'react';

const Pay = () => {
	const handlePayNow = () => {
		// Show loading state and redirect
		window.location.hash = 'pin';
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
					<h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1f2937', marginBottom: '1.5rem' }}>Make payment for the service</h2>
					
					<div style={{ marginBottom: '1.5rem' }}>
						<h5 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1f2937', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #e5e7eb' }}>Contact information</h5>
						<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
							<span style={{ color: '#4b5563' }}>Email</span>
							<span style={{ fontWeight: 500 }}>muhrmuccio@gmail.com</span>
						</div>
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<span style={{ color: '#4b5563' }}>Phone</span>
							<span style={{ fontWeight: 500 }}>+250-79-764-269</span>
						</div>
					</div>
					
					<div style={{ marginBottom: '1.5rem' }}>
						<h5 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1f2937', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #e5e7eb' }}>Payment method</h5>
						<div style={{ border: '1px solid #d1d5db', borderRadius: '0.5rem', padding: '1rem' }}>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<i className="fas fa-mobile-alt" style={{ color: '#1f2937', fontSize: '1.5rem', marginRight: '0.75rem' }}></i>
								<div>
									<div>Phone number</div>
									<div style={{ color: '#4b5563' }}>--- 0866 4629</div>
								</div>
							</div>
						</div>
					</div>
					
					<div style={{ marginBottom: '1.5rem' }}>
						<h5 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1f2937', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #e5e7eb' }}>Posting amount</h5>
						<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
							<span style={{ color: '#4b5563' }}>Service fee</span>
							<span style={{ fontWeight: 500 }}>500frw</span>
						</div>
						<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
							<span style={{ color: '#4b5563' }}>Reward amount</span>
							<span style={{ fontWeight: 500 }}>10000frw</span>
						</div>
						<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: 700, color: '#f59e0b', paddingTop: '0.75rem', borderTop: '1px solid #e5e7eb' }}>
							<span>Total amount</span>
							<span>10500frw</span>
						</div>
					</div>
					
					<a
						href="#pin"
						style={{
							display: 'block',
							width: '100%',
							background: '#f59e0b',
							color: 'white',
							padding: '0.75rem 0',
							borderRadius: '0.5rem',
							fontWeight: 600,
							textAlign: 'center',
							transition: 'all 300ms',
						}}
					>
						Pay Now <i className="fas fa-arrow-right" style={{ marginLeft: '0.5rem' }}></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Pay;