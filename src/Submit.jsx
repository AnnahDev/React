import React, { useState, useEffect } from 'react';

const App = () => {
  const [documentType, setDocumentType] = useState(null);
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [notifBarWidth, setNotifBarWidth] = useState('0%');
  const [notificationMessage, setNotificationMessage] = useState('');
  const [showDocTypeModal, setShowDocTypeModal] = useState(true);

  // Effect to manage notification state and auto-hide
  useEffect(() => {
    if (!showNotification) return;

    setNotifBarWidth('100%');
    const closeNotification = setTimeout(() => {
      setShowNotification(false);
    }, 5000);

    return () => clearTimeout(closeNotification);
  }, [showNotification]);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmitFoundDocument = () => {
    setNotificationMessage("We've received your found document report. The owner will be notified immediately.");
    setShowNotification(true);
  };

  const setupForm = (type) => {
    setDocumentType(type);
    setShowDocTypeModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 md:p-8 font-sans">
      {/* Main Form Container */}
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl overflow-hidden min-h-[500px]">
        
        {/* Header */}
        <div className="bg-slate-900 text-white text-center py-4 rounded-b-2xl shadow-md">
          <h4 className="text-xl font-semibold">DocRecovery</h4>
        </div>

        {/* Content */}
        <div className="p-6">
          {documentType && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {documentType === 'lost' ? 'Report Lost Document' : 'Report Found Document'}
              </h2>

              <span className={`inline-block px-4 py-1.5 rounded-full font-semibold text-sm mb-6 ${
                documentType === 'lost' ? 'bg-red-100 text-red-600' : 'bg-teal-100 text-teal-600'
              }`}>
                {documentType === 'lost' ? 'Lost Document' : 'Found Document'}
              </span>

              {/* Description Input */}
              <div className="mb-6">
                <label htmlFor="documentDescription" className="block text-gray-700 font-medium mb-2">
                  Document description
                </label>
                <textarea
                  rows="3"
                  placeholder="Describe the document (type, identification marks, etc.)"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
                ></textarea>
              </div>

              {/* File Upload */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-3">
                  Add Document Pictures
                </label>
                <div
                  onClick={() => document.getElementById('fileInput').click()}
                  className="p-6 text-center border-2 border-dashed border-blue-400 rounded-2xl bg-blue-50 cursor-pointer transition-colors duration-200 hover:bg-blue-100"
                >
                  <svg className="mx-auto h-12 w-12 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 13a3.5 3.5 0 013.5-3.5h.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5h-.5a2.5 2.5 0 00-2.5 2.5v.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-4.5zM10 10.5a.5.5 0 01.5-.5h.5a2.5 2.5 0 012.5 2.5v4.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-4.5a3.5 3.5 0 00-3.5-3.5z" /></svg>
                  <p className="text-gray-600 text-sm mt-2">
                    Drag & drop images here or <span className="text-blue-600 font-semibold">click to browse</span>
                  </p>
                  <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>

                {images.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {images.map((image, index) => (
                      <img
                        key={index}
                        src={URL.createObjectURL(image)}
                        alt="Preview"
                        className="w-24 h-24 object-cover rounded-lg border border-gray-200"
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div className="mt-6">
                {documentType === 'lost' ? (
                  <a
                    href="#pay"
                    className="block w-full text-center py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
                  >
                    Pay to Post
                    <svg className="inline ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  </a>
                ) : (
                  <button
                    onClick={handleSubmitFoundDocument}
                    className="block w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Submit Report
                    <svg className="inline ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

    
      {showNotification && (
        <div
          role="status"
          aria-live="polite"
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 p-6 rounded-2xl shadow-2xl text-center bg-white transition-all duration-300 animate-fadeIn"
          style={{ width: '90%', maxWidth: '20rem' }}
        >
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-100 mx-auto mb-4">
            <svg className="h-6 w-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
          </div>
          <p className="font-bold text-gray-900 mb-1">Thank You for Your Kindness!</p>
          <p className="text-gray-600 text-sm mb-4">{notificationMessage}</p>

          {/* Progress bar */}
          <div className="relative h-1 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute h-full bg-teal-500 transition-all linear"
              style={{ width: notifBarWidth, transitionDuration: '5s' }}
            ></div>
          </div>
        </div>
      )}

      {/* Document Type Modal */}
      {showDocTypeModal && (
        <div
          id="docTypeModal"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 transition-opacity duration-300 animate-fadeIn"
        >
          <div className="bg-white rounded-2xl w-full max-w-xs mx-4 p-8 text-center shadow-lg transform scale-100 transition-transform duration-300 animate-modalSlideIn">
            <h4 className="text-xl font-bold text-gray-800 mb-6">Lost or Found?</h4>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => setupForm('lost')}
                className="w-full py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                I Lost a Document
              </button>
              <button
                onClick={() => setupForm('found')}
                className="w-full py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                I Found a Document
              </button>
            </div>
          </div>
        </div>
      )}

      
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fadeIn { animation: fadeIn 0.3s forwards; }

          @keyframes modalSlideIn {
            from { transform: translateY(-20px) scale(0.95); opacity: 0; }
            to { transform: translateY(0) scale(1); opacity: 1; }
          }
          .animate-modalSlideIn { animation: modalSlideIn 0.3s ease-out; }
        `}
      </style>
    </div>
  );
};

export default App;
