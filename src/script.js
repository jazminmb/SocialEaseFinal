function showRegistration() {
    hideAllSections();
    document.getElementById("registrationSection").style.display = "block";
}

function showLogin() {
    hideAllSections();
    document.getElementById("loginSection").style.display = "block";
}

function showHome() {
    hideAllSections();
    document.getElementById("homeSection").style.display = "block";
}

function showBehavioralActivation() {
    hideAllSections();
    document.getElementById("behavioralActivationSection").style.display = "block";
}

function showExposureTherapy() {
    hideAllSections();
    document.getElementById("exposureTherapySection").style.display = "block";
}

function showStressReduction() {
    hideAllSections();
    document.getElementById("stressReductionSection").style.display = "block";
}

function hideAllSections() {
    const sections = document.querySelectorAll(".page");
    sections.forEach(section => {
        section.style.display = "none";
    });
}

showHome();