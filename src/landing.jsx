import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased text-gray-800">

      
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 to-gray-900 text-white rounded-b-[2.5rem] md:rounded-b-[4rem] shadow-xl">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4">
              Your lost documents,
              <br className="hidden sm:inline" />
              found and safe.
            </h1>
            <p className="max-w-xl mx-auto text-lg md:text-xl font-light text-gray-300 mb-8">
            Work with us to reunite lost documents with their owners through our secure community network.
            </p>
            <a
              href="#login"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white text-base font-semibold rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-105 transform-gpu"
            >
              Start the search
              <svg width="16" height="16" style={{ marginLeft: '0.5rem', verticalAlign: 'middle' }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Why our service feels different
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              It's all about speed, security, and simplicity.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-3xl p-8 shadow-md transition duration-300 hover:shadow-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
                <span className="text-2xl" role="img" aria-label="magnifying glass">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Matching</h3>
              <p className="text-gray-600">Our smart AI instantly scans and matches lost documents with found reports, dramatically increasing your chances of a reunion.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md transition duration-300 hover:shadow-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
                <span className="text-2xl" role="img" aria-label="shield">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Handover</h3>
              <p className="text-gray-600">We verify identities to ensure your precious documents are only returned to the rightful owner. Your safety is our priority.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md transition duration-300 hover:shadow-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
                <span className="text-2xl" role="img" aria-label="trophy">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Rewards</h3>
              <p className="text-gray-600">Found a document? Post it and earn a reward. Looking for one? Offer a reward to motivate the community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 to-gray-900 text-white py-20 md:py-24 rounded-t-[2.5rem] md:rounded-t-[4rem]">
        <div className="mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Ready to find your peace of mind?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join our growing community and let's work together to get those documents home.
          </p>
          <a
            href="#login"
            className="inline-flex items-center px-8 py-4 border-2 border-white text-white text-base font-semibold rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-105 transform-gpu"
          >
            Join the community
            <svg width="16" height="16" style={{ marginLeft: '0.5rem', verticalAlign: 'middle' }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 md:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p className="text-sm">&copy; 2024 DocRecovery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
