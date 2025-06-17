/**
 * Sponsorship Intelligence Platform
 * Main JavaScript functionality
 */

// DOM Elements
const dashboardNav = document.getElementById('dashboard-nav');
const analyzeNav = document.getElementById('analyze-nav');
const monitorNav = document.getElementById('monitor-nav');
const opportunitiesNav = document.getElementById('opportunities-nav');
const reportsNav = document.getElementById('reports-nav');
const loginBtn = document.getElementById('login-btn');
const newAnalysisBtn = document.getElementById('new-analysis-btn');

const dashboardView = document.getElementById('dashboard-view');
const analysisView = document.getElementById('analysis-view');
const analysisResults = document.getElementById('analysis-results');
const compatibilityForm = document.getElementById('compatibility-form');
const loginForm = document.getElementById('login-form');

// Bootstrap Modal
let loginModal;

// Initialization
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sponsorship Intelligence Platform initialized');
    
    // Initialize Bootstrap components
    initBootstrapComponents();
    
    // Setup event listeners
    setupEventListeners();
    
    // Initialize charts
    initializeCharts();
});

/**
 * Initialize Bootstrap components
 */
function initBootstrapComponents() {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Initialize login modal
    loginModal = new bootstrap.Modal(document.getElementById('loginModal'), {
        keyboard: false
    });
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
    // Navigation
    dashboardNav.addEventListener('click', function(e) {
        e.preventDefault();
        showView(dashboardView);
        updateNavActive(dashboardNav);
    });
    
    analyzeNav.addEventListener('click', function(e) {
        e.preventDefault();
        showView(analysisView);
        updateNavActive(analyzeNav);
    });
    
    monitorNav.addEventListener('click', function(e) {
        e.preventDefault();
        // Placeholder for monitoring view
        alert('Monitoring view is coming soon!');
    });
    
    opportunitiesNav.addEventListener('click', function(e) {
        e.preventDefault();
        // Placeholder for opportunities view
        alert('Opportunities view is coming soon!');
    });
    
    reportsNav.addEventListener('click', function(e) {
        e.preventDefault();
        // Placeholder for reports view
        alert('Reports view is coming soon!');
    });
    
    // Login button
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        loginModal.show();
    });
    
    // New Analysis button
    newAnalysisBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showView(analysisView);
        updateNavActive(analyzeNav);
    });
    
    // Form submissions
    compatibilityForm.addEventListener('submit', function(e) {
        e.preventDefault();
        performCompatibilityAnalysis();
    });
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleLogin();
    });
}

/**
 * Show a specific view and hide others
 */
function showView(viewToShow) {
    // Hide all views
    const views = [dashboardView, analysisView];
    views.forEach(view => {
        view.classList.add('d-none');
    });
    
    // Show selected view
    viewToShow.classList.remove('d-none');
}

/**
 * Update active navigation link
 */
function updateNavActive(activeNav) {
    // Remove active class from all nav items
    const navItems = [dashboardNav, analyzeNav, monitorNav, opportunitiesNav, reportsNav];
    navItems.forEach(nav => {
        nav.classList.remove('active');
    });
    
    // Add active class to selected nav
    activeNav.classList.add('active');
}

/**
 * Perform compatibility analysis
 */
function performCompatibilityAnalysis() {
    // Show loading state
    const form = compatibilityForm;
    form.classList.add('loading');
    
    // Get form data
    const brandName = document.getElementById('brand-name').value;
    const sponsorName = document.getElementById('sponsor-name').value;
    
    // Simulate API call with timeout
    setTimeout(() => {
        // Remove loading state
        form.classList.remove('loading');
        
        // Show results
        analysisResults.classList.remove('d-none');
        
        // Scroll to results
        analysisResults.scrollIntoView({ behavior: 'smooth' });
        
        console.log(`Performed analysis between ${brandName} and ${sponsorName}`);
    }, 2000);
}

/**
 * Handle login form submission
 */
function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simulate login - would connect to API in real implementation
    console.log(`Login attempt for ${email}`);
    
    // Show success message and close modal
    alert('Login successful!');
    loginModal.hide();
    
    // Update login button to show logged in state
    loginBtn.textContent = 'My Account';
}

/**
 * Calculate compatibility score based on form inputs
 * This would typically be done server-side with AI
 */
function calculateCompatibilityScore(brandData, sponsorData) {
    // This is a simplified placeholder implementation
    // In a real application, this would be a complex algorithm
    
    // Calculate audience overlap score
    const audienceOverlap = 0.9; // 90%
    
    // Calculate values alignment score
    const valuesAlignment = 0.85; // 85%
    
    // Calculate brand voice consistency
    const voiceConsistency = 0.75; // 75%
    
    // Calculate integration potential
    const integrationPotential = 0.92; // 92%
    
    // Calculate weighted average for overall score
    const overallScore = (
        audienceOverlap * 0.3 +
        valuesAlignment * 0.3 +
        voiceConsistency * 0.2 +
        integrationPotential * 0.2
    ) * 100;
    
    return {
        overall: Math.round(overallScore),
        audience: audienceOverlap * 100,
        values: valuesAlignment * 100,
        voice: voiceConsistency * 100,
        integration: integrationPotential * 100
    };
}