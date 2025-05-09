import React from 'react';

const Home = () => {
  const userEmail = localStorage.getItem('userEmail');
  const userName = userEmail ? userEmail.split('@')[0] : 'User';
  const capitalizedUser = userName.charAt(0).toUpperCase() + userName.slice(1);

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header with Profile and Passion Image */}
      <header className="flex items-center justify-between bg-indigo-600 text-white py-6 px-10 relative">
        <div className="flex items-center gap-6 z-10">
          {/* Profile Image and Info */}
          <img
            src={`https://ui-avatars.com/api/?name=${userName}&background=fff&color=4f46e5`}
            alt="User Avatar"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <div>
            <h2 className="font-medium text-xl">{capitalizedUser}</h2>
            <p className="text-sm">{userEmail}</p>
          </div>
        </div>

       
      </header>

      
      
    <div className="landing-container">
      <header className="hero">
        <h1>Welcome to My Product</h1>
        <p>Your solution for better productivity.</p>
        <button className="cta-button">Get Started</button>
      </header>

      <section style = {{color:'black'}} className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div style = {{color:'black'}} className="feature">🚀 Fast Performance</div>
          <div style = {{color:'black'}} className="feature">🔒 Secure</div>
          <div style = {{color:'black'}} className="feature">⚙️ Easy Integration</div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 My Company. All rights reserved.</p>
      </footer>
    
 

    </div>
	</div>
  );
};

export default Home;



