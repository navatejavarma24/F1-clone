document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-theme');
        if (sunIcon && moonIcon) {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }
    if (themeToggle && sunIcon && moonIcon) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            if (document.body.classList.contains('light-theme')) {
                localStorage.setItem('theme', 'light');
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            } else {
                localStorage.setItem('theme', 'dark');
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            }
        });
    }
    const rails = document.querySelectorAll('.video-rail, .tours-track');
    rails.forEach(rail => {
        rail.addEventListener('wheel', (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                rail.scrollLeft += e.deltaY;
            }
        });
    });
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(5, 9, 20, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = 'var(--bg-header)';
            header.style.backdropFilter = 'none';
        }
    });
    const track = document.querySelector('.carousel-track');
    if (track) {
        const slides = Array.from(track.children);
        const nextBtn = document.querySelector('.next-btn');
        const prevBtn = document.querySelector('.prev-btn');
        const indicators = Array.from(document.querySelectorAll('.indicator'));
        let currentIndex = 0;
        const slideInterval = 5000;
        let autoPlay;
        function updateCarousel(index) {
            track.style.transform = `translateX(-${index * 100}%)`;
            indicators.forEach((ind, i) => {
                ind.classList.toggle('active', i === index);
            });
            currentIndex = index;
        }
        function nextSlide() {
            if (currentIndex === slides.length - 1) {
                updateCarousel(0);
            } else {
                updateCarousel(currentIndex + 1);
            }
        }
        function prevSlide() {
            if (currentIndex === 0) {
                updateCarousel(slides.length - 1);
            } else {
                updateCarousel(currentIndex - 1);
            }
        }
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoPlay();
        });
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoPlay();
        });
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                updateCarousel(index);
                resetAutoPlay();
            });
        });
        function startAutoPlay() {
            autoPlay = setInterval(nextSlide, slideInterval);
        }
        function resetAutoPlay() {
            clearInterval(autoPlay);
            startAutoPlay();
        }
        startAutoPlay();
    }
    const profileBtn = document.getElementById('profile-btn');
    const authModal = document.getElementById('auth-modal');
    const closeBtn = document.querySelector('.modal-close');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const showSignupBtn = document.getElementById('show-signup');
    const showLoginBtn = document.getElementById('show-login');
    if (profileBtn) {
        profileBtn.addEventListener('click', (e) => {
            e.preventDefault();
            authModal.classList.add('active');
            document.body.style.overflow = 'hidden'; 
            resetForms();
        });
    }
    const offersBtn = document.getElementById('offers-btn');
    const paymentModal = document.getElementById('payment-modal');
    const closePaymentBtn = document.getElementById('close-payment');
    const paymentForm = document.getElementById('payment-form');
    if (offersBtn) {
        offersBtn.addEventListener('click', (e) => {
            e.preventDefault();
            paymentModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            if (paymentForm) paymentForm.reset();
        });
    }
    function closePaymentModal() {
        paymentModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    if (closePaymentBtn) closePaymentBtn.addEventListener('click', closePaymentModal);
    paymentModal.addEventListener('click', (e) => {
        if (e.target === paymentModal) closePaymentModal();
    });
    if (paymentForm) {
        paymentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = paymentForm.querySelector('.btn-auth');
            const originalText = btn.textContent;
            btn.textContent = 'Processing...';
            setTimeout(() => {
                alert('Successfully Subscribed!');
                closePaymentModal();
                btn.textContent = originalText;
                window.location.href = 'index.html';
            }, 1200);
        });
    }
    
    const planCards = document.querySelectorAll('.plan-card');
    const payBtn = document.getElementById('pay-btn');
    
    if (planCards.length > 0) {
        planCards.forEach(card => {
            card.addEventListener('click', () => {
                planCards.forEach(c => c.classList.remove('active-plan'));
                card.classList.add('active-plan');
                const price = card.getAttribute('data-price');
                if (payBtn) payBtn.textContent = `Pay ₹${price}`;
            });
        });
    }
    
    // Format payment fields
    const cardName = document.getElementById('card-name');
    const cardNum = document.getElementById('card-num');
    const cardExp = document.getElementById('card-exp');
    const cardCvv = document.getElementById('card-cvv');

    if (cardName) {
        cardName.addEventListener('input', (e) => {
            let errorSpan = cardName.nextElementSibling;
            if (!errorSpan || !errorSpan.classList.contains('error-msg')) {
                errorSpan = document.createElement('span');
                errorSpan.className = 'error-msg';
                errorSpan.style.color = '#ff4d4f';
                errorSpan.style.fontSize = '12px';
                errorSpan.style.display = 'block';
                errorSpan.style.marginTop = '5px';
                cardName.parentNode.insertBefore(errorSpan, cardName.nextSibling);
            }
            
            if (/[0-9]/.test(e.target.value)) {
                errorSpan.textContent = "Numbers are not allowed in the name.";
            } else {
                errorSpan.textContent = "";
            }
            e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
        });
    }
    if (cardNum) {
        cardNum.addEventListener('input', (e) => {
            let val = e.target.value.replace(/\D/g, '');
            let match = val.match(/.{1,4}/g);
            e.target.value = match ? match.join(' ') : val;
        });
    }
    if (cardExp) {
        cardExp.addEventListener('input', (e) => {
            let val = e.target.value.replace(/\D/g, '');
            if (val.length > 2) {
                val = val.substring(0, 2) + '/' + val.substring(2, 4);
            }
            e.target.value = val;
        });
    }
    if (cardCvv) {
        cardCvv.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '');
        });
    }

    // Email validation
    const loginEmail = document.getElementById('login-email') || document.querySelector('[id*="login-email"]');
    const signupEmail = document.getElementById('signup-email') || document.querySelector('[id*="signup-email"]');

    function validateEmailInput(e) {
        let errorSpan = e.target.nextElementSibling;
        if (!errorSpan || !errorSpan.classList.contains('error-msg')) {
            errorSpan = document.createElement('span');
            errorSpan.className = 'error-msg';
            errorSpan.style.color = '#ff4d4f';
            errorSpan.style.fontSize = '12px';
            errorSpan.style.display = 'block';
            errorSpan.style.marginTop = '5px';
            e.target.parentNode.insertBefore(errorSpan, e.target.nextSibling);
        }
        if (e.target.value && !e.target.value.includes('@')) {
            errorSpan.textContent = "Email must include '@'.";
        } else {
            errorSpan.textContent = "";
        }
    }

    if (loginEmail) loginEmail.addEventListener('input', validateEmailInput);
    if (signupEmail) signupEmail.addEventListener('input', validateEmailInput);
    const scheduleLink = document.getElementById('schedule-link');
    const scheduleModal = document.getElementById('schedule-modal');
    const closeScheduleBtn = document.getElementById('close-schedule');
    if (scheduleLink) {
        scheduleLink.addEventListener('click', (e) => {
            e.preventDefault();
            scheduleModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    function closeScheduleModal() {
        scheduleModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    if (closeScheduleBtn) closeScheduleBtn.addEventListener('click', closeScheduleModal);
    if (scheduleModal) {
        scheduleModal.addEventListener('click', (e) => {
            if (e.target === scheduleModal) closeScheduleModal();
        });
    }

    function closeModal() {
        authModal.classList.remove('active');
        document.body.style.overflow = 'auto'; 
        setTimeout(() => {
            switchToLogin();
        }, 300);
    }
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    authModal.addEventListener('click', (e) => {
        if (e.target === authModal) closeModal();
    });
    function switchToSignup() {
        loginForm.classList.remove('active-form');
        signupForm.classList.add('active-form');
        resetForms();
    }
    function switchToLogin() {
        signupForm.classList.remove('active-form');
        loginForm.classList.add('active-form');
        resetForms();
    }
    showSignupBtn.addEventListener('click', switchToSignup);
    showLoginBtn.addEventListener('click', switchToLogin);
    function resetForms() {
        loginForm.reset();
        signupForm.reset();
        document.querySelectorAll('.error-msg').forEach(msg => msg.classList.remove('visible'));
        document.querySelectorAll('input').forEach(input => input.classList.remove('error'));
    }
    function showError(inputId, errorId, message) {
        const input = document.getElementById(inputId);
        const error = document.getElementById(errorId);
        input.classList.add('error');
        error.textContent = message;
        error.classList.add('visible');
    }
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const pass = document.getElementById('login-password').value;
        let isValid = true;
        if (email.length < 5 || !email.includes('@')) {
            showError('login-email', 'login-email-error', 'Please enter a valid email address');
            isValid = false;
        }
        if (pass.length < 6) {
            showError('login-password', 'login-password-error', 'Password must be at least 6 characters');
            isValid = false;
        }
        if (isValid) {
            const btn = loginForm.querySelector('.btn-auth');
            const originalText = btn.textContent;
            btn.textContent = 'Logging in...';
            setTimeout(() => {
                alert('Login Successful! Welcome back to FanCode F1.');
                closeModal();
                profileBtn.textContent = 'My Account';
                profileBtn.style.color = '#fff';
                btn.textContent = originalText;
                // Open payment modal
                paymentModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }, 1000);
        }
    });
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('signup-email').value;
        const pass = document.getElementById('signup-password').value;
        let isValid = true;
        if (!email.includes('@')) {
            showError('signup-email', 'signup-email-error', 'Please enter a valid email address');
            isValid = false;
        }
        if (isValid) {
            const btn = signupForm.querySelector('.btn-auth');
            const originalText = btn.textContent;
            btn.textContent = 'Creating Account...';
            setTimeout(() => {
                alert('Account Created Successfully!');
                closeModal();
                profileBtn.textContent = 'My Account';
                profileBtn.style.color = '#fff';
                btn.textContent = originalText;
                // Open payment modal
                paymentModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }, 1000);
        }
    });

    // Toggle Formula 1 Stats Section
    const f1NavLink = document.getElementById('f1-nav-link');
    const f1StatsSection = document.getElementById('f1-stats-section');
    
    if (f1NavLink && f1StatsSection) {
        f1NavLink.addEventListener('click', (e) => {
            e.preventDefault();
            const currentDisplay = window.getComputedStyle(f1StatsSection).display;
            if (currentDisplay === 'none') {
                f1StatsSection.style.display = 'block';
                // Scroll to stats smoothly
                f1StatsSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                f1StatsSection.style.display = 'none';
            }
        });
    }
});

