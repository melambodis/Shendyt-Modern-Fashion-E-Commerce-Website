// import React, { useState } from 'react';

// // Input Component
// const Input = ({
//   type = 'text',
//   value,
//   onChange,
//   placeholder,
//   label,
//   disabled = false,
//   error,
//   className,
//   ...props
// }) => {
//   const inputStyles = {
//     container: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '6px',
//       width: '100%',
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
//     },
//     label: {
//       fontSize: '14px',
//       fontWeight: '500',
//       color: disabled ? '#9ca3af' : '#374151',
//       marginBottom: '2px',
//       cursor: disabled ? 'not-allowed' : 'pointer',
//       transition: 'color 0.2s ease-in-out'
//     },
//     input: {
//       width: '100%',
//       padding: '12px 16px',
//       fontSize: '14px',
//       lineHeight: '1.5',
//       color: disabled ? '#9ca3af' : '#374151',
//       backgroundColor: disabled ? '#f9fafb' : error ? '#fef2f2' : '#ffffff',
//       border: `1.5px solid ${error ? '#ef4444' : disabled ? '#e5e7eb' : '#d1d5db'}`,
//       borderRadius: '8px',
//       outline: 'none',
//       transition: 'all 0.2s ease-in-out',
//       boxSizing: 'border-box',
//       cursor: disabled ? 'not-allowed' : 'text'
//     },
//     errorMessage: {
//       fontSize: '12px',
//       color: '#dc2626',
//       marginTop: '2px',
//       fontWeight: '400',
//       lineHeight: '1.4'
//     }
//   };

//   const inputFocusStyle = {
//     borderColor: error ? '#dc2626' : '#3b82f6',
//     boxShadow: error ? '0 0 0 3px rgba(239, 68, 68, 0.1)' : '0 0 0 3px rgba(59, 130, 246, 0.1)',
//     backgroundColor: '#fefefe'
//   };

//   return (
//     <div style={{...inputStyles.container, ...(className ? {} : {})}} className={className}>
//       {label && (
//         <label style={inputStyles.label} htmlFor={props.id}>
//           {label}
//         </label>
//       )}
//       <input
//         type={type}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         disabled={disabled}
//         style={inputStyles.input}
//         onFocus={(e) => {
//           if (!disabled) {
//             Object.assign(e.target.style, inputFocusStyle);
//           }
//         }}
//         onBlur={(e) => {
//           Object.assign(e.target.style, inputStyles.input);
//         }}
//         {...props}
//       />
//       {error && <span style={inputStyles.errorMessage}>{error}</span>}
//     </div>
//   );
// };








// // Modal Component
// const Modal = ({
//   isOpen = false,
//   onClose,
//   title,
//   children,
//   footer,
//   className,
//   ...props
// }) => {
//   React.useEffect(() => {
//     const handleEscape = (event) => {
//       if (event.key === 'Escape' && isOpen) {
//         onClose();
//       }
//     };

//     if (isOpen) {
//       document.addEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'hidden';
//     }

//     return () => {
//       document.removeEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen, onClose]);

//   const handleOverlayClick = (event) => {
//     if (event.target === event.currentTarget) {
//       onClose();
//     }
//   };

//   if (!isOpen) {
//     return null;
//   }

//   const modalStyles = {
//     overlay: {
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: 'rgba(0, 0, 0, 0.5)',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       zIndex: 1000,
//       padding: '20px',
//       boxSizing: 'border-box',
//       animation: 'fadeIn 0.3s ease-in-out'
//     },
//     modal: {
//       backgroundColor: '#ffffff',
//       borderRadius: '12px',
//       boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
//       maxWidth: '500px',
//       width: '100%',
//       maxHeight: '90vh',
//       overflow: 'hidden',
//       display: 'flex',
//       flexDirection: 'column',
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
//       animation: 'slideIn 0.3s ease-out'
//     },
//     header: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       padding: '24px 24px 16px 24px',
//       borderBottom: '1px solid #e5e7eb'
//     },
//     title: {
//       fontSize: '18px',
//       fontWeight: '600',
//       color: '#111827',
//       margin: 0,
//       lineHeight: '1.5'
//     },
//     closeButton: {
//       background: 'none',
//       border: 'none',
//       cursor: 'pointer',
//       padding: '8px',
//       borderRadius: '6px',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       color: '#6b7280',
//       transition: 'all 0.2s ease-in-out'
//     },
//     body: {
//       padding: '24px',
//       flex: 1,
//       overflowY: 'auto',
//       color: '#374151',
//       lineHeight: '1.6'
//     },
//     footer: {
//       padding: '16px 24px 24px 24px',
//       borderTop: '1px solid #e5e7eb',
//       display: 'flex',
//       justifyContent: 'flex-end',
//       gap: '12px',
//       alignItems: 'center'
//     }
//   };

//   return (
//     <div
//       style={modalStyles.overlay}
//       onClick={handleOverlayClick}
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="modal-title"
//       {...props}
//     >
//       <div style={{...modalStyles.modal, ...(className ? {} : {})}} className={className}>
//         <div style={modalStyles.header}>
//           <h2 id="modal-title" style={modalStyles.title}>
//             {title}
//           </h2>
//           <button
//             style={modalStyles.closeButton}
//             onClick={onClose}
//             aria-label="Close modal"
//             type="button"
//             onMouseEnter={(e) => {
//               e.target.style.backgroundColor = '#f3f4f6';
//               e.target.style.color = '#374151';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.backgroundColor = 'transparent';
//               e.target.style.color = '#6b7280';
//             }}
//           >
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <line x1="18" y1="6" x2="6" y2="18"></line>
//               <line x1="6" y1="6" x2="18" y2="18"></line>
//             </svg>
//           </button>
//         </div>
//         <div style={modalStyles.body}>
//           {children}
//         </div>
//         {footer && (
//           <div style={modalStyles.footer}>
//             {footer}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };


// // 

// // Main App Component
// function App() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  
//   // Form states
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     age: ''
//   });
//   const [errors, setErrors] = useState({});

//   const handleSave = () => {
//     alert("Changes saved!");
//     setIsModalOpen(false);
//   };

//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required';
//     }
    
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email';
//     }
    
//     if (!formData.password.trim()) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }
    
//     if (!formData.age.trim()) {
//       newErrors.age = 'Age is required';
//     } else if (isNaN(formData.age) || formData.age < 1 || formData.age > 120) {
//       newErrors.age = 'Please enter a valid age (1-120)';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleFormSubmit = () => {
//     if (validateForm()) {
//       alert(`Form submitted successfully!\nName: ${formData.name}\nEmail: ${formData.email}\nAge: ${formData.age}`);
//       setIsEditModalOpen(false);
//       // Reset form
//       setFormData({ name: '', email: '', password: '', age: '' });
//     }
//   };

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//     // Clear error when user starts typing
//     if (errors[field]) {
//       setErrors(prev => ({ ...prev, [field]: '' }));
//     }
//   };

//   const appStyles = {
//     container: {
//       minHeight: '100vh',
//       backgroundColor: '#f8fafc',
//       padding: '40px 20px',
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
//     },
//     content: {
//       maxWidth: '800px',
//       margin: '0 auto',
//       backgroundColor: '#ffffff',
//       padding: '40px',
//       borderRadius: '12px',
//       boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
//     },
//     title: {
//       fontSize: '32px',
//       fontWeight: '700',
//       color: '#111827',
//       marginBottom: '8px',
//       textAlign: 'center'
//     },
//     subtitle: {
//       fontSize: '16px',
//       color: '#6b7280',
//       marginBottom: '40px',
//       textAlign: 'center'
//     },
//     section: {
//       marginBottom: '32px'
//     },
//     sectionTitle: {
//       fontSize: '20px',
//       fontWeight: '600',
//       color: '#374151',
//       marginBottom: '16px'
//     },
//     buttonGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//       gap: '16px',
//       marginBottom: '24px'
//     },
//     button: {
//       padding: '12px 24px',
//       fontSize: '14px',
//       fontWeight: '500',
//       borderRadius: '8px',
//       border: 'none',
//       cursor: 'pointer',
//       transition: 'all 0.2s ease-in-out',
//       textAlign: 'center'
//     },
//     primaryButton: {
//       backgroundColor: '#3b82f6',
//       color: '#ffffff'
//     },
//     secondaryButton: {
//       backgroundColor: '#f3f4f6',
//       color: '#374151'
//     },
//     successButton: {
//       backgroundColor: '#10b981',
//       color: '#ffffff'
//     },
//     dangerButton: {
//       backgroundColor: '#ef4444',
//       color: '#ffffff'
//     },
//     inputDemo: {
//       display: 'grid',
//       gap: '20px',
//       marginBottom: '24px'
//     },
//     formRow: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr',
//       gap: '16px'
//     }
//   };

//   return (
//     <>
//       <style>
//         {`
//           @keyframes fadeIn {
//             from { opacity: 0; }
//             to { opacity: 1; }
//           }
          
//           @keyframes slideIn {
//             from {
//               opacity: 0;
//               transform: scale(0.95) translateY(-20px);
//             }
//             to {
//               opacity: 1;
//               transform: scale(1) translateY(0);
//             }
//           }
          
//           * {
//             margin: 0;
//             padding: 0;
//             box-sizing: border-box;
//           }
//         `}
//       </style>
      
//       <div style={appStyles.container}>
//         <div style={appStyles.content}>
//           <h1 style={appStyles.title}>Component Demo</h1>
//           <p style={appStyles.subtitle}>Interactive demonstration of Input and Modal components</p>

//           {/* Input Component Demo */}
//           <div style={appStyles.section}>
//             <h2 style={appStyles.sectionTitle}>Input Component Examples</h2>
//             <div style={appStyles.inputDemo}>
//               <Input
//                 label="Text Input"
//                 placeholder="Enter your name"
//                 value={formData.name}
//                 onChange={(e) => handleInputChange('name', e.target.value)}
//               />
              
//               <Input
//                 type="email"
//                 label="Email Input"
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={(e) => handleInputChange('email', e.target.value)}
//                 error={errors.email}
//               />
              
//               <div style={appStyles.formRow}>
//                 <Input
//                   type="password"
//                   label="Password Input"
//                   placeholder="Enter password"
//                   value={formData.password}
//                   onChange={(e) => handleInputChange('password', e.target.value)}
//                   error={errors.password}
//                 />
                
//                 <Input
//                   type="number"
//                   label="Number Input"
//                   placeholder="Enter your age"
//                   value={formData.age}
//                   onChange={(e) => handleInputChange('age', e.target.value)}
//                   error={errors.age}
//                 />
//               </div>
              
//               <Input
//                 label="Disabled Input"
//                 value="This input is disabled"
//                 disabled={true}
//               />
//             </div>
//           </div>

//           {/* Modal Component Demo */}
//           <div style={appStyles.section}>
//             <h2 style={appStyles.sectionTitle}>Modal Component Examples</h2>
//             <div style={appStyles.buttonGrid}>
//               <button
//                 style={{...appStyles.button, ...appStyles.primaryButton}}
//                 onClick={() => setIsModalOpen(true)}
//                 onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
//                 onMouseLeave={(e) => e.target.style.backgroundColor = '#3b82f6'}
//               >
//                 Basic Modal
//               </button>
              
//               <button
//                 style={{...appStyles.button, ...appStyles.secondaryButton}}
//                 onClick={() => setIsEditModalOpen(true)}
//                 onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
//                 onMouseLeave={(e) => e.target.style.backgroundColor = '#f3f4f6'}
//               >
//                 Form Modal
//               </button>
              
//               <button
//                 style={{...appStyles.button, ...appStyles.dangerButton}}
//                 onClick={() => setIsConfirmModalOpen(true)}
//                 onMouseEnter={(e) => e.target.style.backgroundColor = '#dc2626'}
//                 onMouseLeave={(e) => e.target.style.backgroundColor = '#ef4444'}
//               >
//                 Confirmation Modal
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Basic Modal */}
//       <Modal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         title="Basic Modal Example"
//         footer={
//           <>
//             <button
//               style={{...appStyles.button, ...appStyles.secondaryButton}}
//               onClick={() => setIsModalOpen(false)}
//             >
//               Cancel
//             </button>
//             <button
//               style={{...appStyles.button, ...appStyles.successButton}}
//               onClick={handleSave}
//             >
//               Save Changes
//             </button>
//           </>
//         }
//       >
//         <p>This is a basic modal with a title, content, and footer buttons.</p>
//         <p style={{marginTop: '16px'}}>
//           You can close this modal by clicking the X button, clicking outside the modal, 
//           pressing the Escape key, or using the footer buttons.
//         </p>
//       </Modal>

//       {/* Form Modal */}
//       <Modal
//         isOpen={isEditModalOpen}
//         onClose={() => setIsEditModalOpen(false)}
//         title="Edit Profile"
//         footer={
//           <>
//             <button
//               style={{...appStyles.button, ...appStyles.secondaryButton}}
//               onClick={() => {
//                 setIsEditModalOpen(false);
//                 setErrors({});
//               }}
//             >
//               Cancel
//             </button>
//             <button
//               style={{...appStyles.button, ...appStyles.primaryButton}}
//               onClick={handleFormSubmit}
//             >
//               Submit Form
//             </button>
//           </>
//         }
//       >
//         <div style={{display: 'grid', gap: '20px'}}>
//           <Input
//             label="Full Name"
//             placeholder="Enter your full name"
//             value={formData.name}
//             onChange={(e) => handleInputChange('name', e.target.value)}
//             error={errors.name}
//           />
          
//           <Input
//             type="email"
//             label="Email Address"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={(e) => handleInputChange('email', e.target.value)}
//             error={errors.email}
//           />
          
//           <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
//             <Input
//               type="password"
//               label="Password"
//               placeholder="Enter password"
//               value={formData.password}
//               onChange={(e) => handleInputChange('password', e.target.value)}
//               error={errors.password}
//             />
            
//             <Input
//               type="number"
//               label="Age"
//               placeholder="Enter your age"
//               value={formData.age}
//               onChange={(e) => handleInputChange('age', e.target.value)}
//               error={errors.age}
//             />
//           </div>
//         </div>
//       </Modal>

//       {/* Confirmation Modal */}
//       <Modal
//         isOpen={isConfirmModalOpen}
//         onClose={() => setIsConfirmModalOpen(false)}
//         title="Confirm Action"
//         footer={
//           <>
//             <button
//               style={{...appStyles.button, ...appStyles.secondaryButton}}
//               onClick={() => setIsConfirmModalOpen(false)}
//             >
//               Cancel
//             </button>
//             <button
//               style={{...appStyles.button, ...appStyles.dangerButton}}
//               onClick={() => {
//                 alert("Action confirmed!");
//                 setIsConfirmModalOpen(false);
//               }}
//             >
//               Confirm Delete
//             </button>
//           </>
//         }
//       >
//         <p>Are you sure you want to delete this item? This action cannot be undone.</p>
//         <div style={{
//           marginTop: '16px',
//           padding: '12px',
//           backgroundColor: '#fef2f2',
//           borderRadius: '6px',
//           border: '1px solid #fecaca'
//         }}>
//           <p style={{color: '#dc2626', fontSize: '14px', fontWeight: '500'}}>
//             ⚠️ Warning: This is a destructive action
//           </p>
//         </div>
//       </Modal>
//     </>
//   );
// }

// export default App;