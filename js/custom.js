    const login_container    = document.getElementById('login_container');
    const overlayTitle = document.getElementById('overlayTitle');
    const overlayText  = document.getElementById('overlayText');
    const switchBtn    = document.getElementById('switchBtn');
    const overlayContent = document.getElementById('overlayContent');

    let isLogin = true;

    function toggleMode() {
      isLogin = !isLogin;

      // Fade out overlay content
      overlayContent.style.opacity = '0';
      overlayContent.style.transform = 'translateY(10px)';
      overlayContent.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

      // Toggle classes
      if (isLogin) {
        login_container.classList.remove('signup-active');
        login_container.classList.add('login-active');
      } else {
        login_container.classList.remove('login-active');
        login_container.classList.add('signup-active');
      }

      // Update overlay text after slide
      setTimeout(() => {
        if (isLogin) {
          overlayTitle.textContent = 'New Here?';
          overlayText.textContent  = 'Join us today and unlock a world of possibilities. Create your free account in seconds!';
          switchBtn.textContent    = 'Sign Up';
        } else {
          overlayTitle.textContent = 'Welcome Back!';
          overlayText.textContent  = 'Already have an account? Sign in to pick up right where you left off.';
          switchBtn.textContent    = 'Sign In';
        }
        overlayContent.style.opacity = '1';
        overlayContent.style.transform = 'translateY(0)';
      }, 400);
    }
    document.querySelectorAll('.form-group input').forEach(input => {
      input.addEventListener('focus', function () {
        this.parentElement.parentElement.style.transform = 'scale(1.01)';
        this.parentElement.parentElement.style.transition = 'transform 0.3s ease';
      });
      input.addEventListener('blur', function () {
        this.parentElement.parentElement.style.transform = 'scale(1)';
      });
    });

    const loginEmail = document.querySelector('.login-panel input[type="email"]');
    const loginPassword = document.querySelector('.login-panel input[type="password"]');
    const signupName = document.querySelector('.signup-panel input[type="text"]');
    const signupEmail = document.querySelector('.signup-panel input[type="email"]');
    const signupPasswords = document.querySelectorAll('.signup-panel input[type="password"]');
    const signupPassword = signupPasswords[0];
    const signupConfirmPassword = signupPasswords[1];

    document.querySelectorAll('.submit-btn').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const isLoginAction = this.closest('.login-panel') !== null;
        if (isLoginAction) {
          if (!loginEmail.value.trim() || !loginPassword.value.trim()) {
            alert('Please enter both email and password to sign in.');
            return;
          }
        } else {
          if (!signupName.value.trim() || !signupEmail.value.trim() || !signupPassword.value.trim() || !signupConfirmPassword.value.trim()) {
            alert('Please fill in all fields to create your account.');
            return;
          }
          if (signupPassword.value !== signupConfirmPassword.value) {
            alert('Passwords do not match. Please check and try again.');
            return;
          }
        }

        const ripple = document.createElement('span');
        ripple.style.cssText = `
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          width: 20px; height: 20px;
          top: ${e.offsetY - 10}px;
          left: ${e.offsetX - 10}px;
          animation: rippleOut 0.6s ease forwards;
          pointer-events: none;
        `;
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
        this.textContent = '✓ Success!';
        this.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';

        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 900);
      });
    });
    const style = document.createElement('style');
    style.textContent = `
      @keyframes rippleOut {
        to { transform: scale(15); opacity: 0; }
      }
    `;
    document.head.appendChild(style);


