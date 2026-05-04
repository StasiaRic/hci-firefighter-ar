function goToPage(page) {
  window.location.href = page;
}

// Name Modal functions
function showNameModal() {
  const modal = document.getElementById('nameModal');
  if (modal) {
    modal.classList.add('active');
    setTimeout(() => {
      document.getElementById('nameInput').focus();
    }, 100);
  }
}

function closeNameModal() {
  const modal = document.getElementById('nameModal');
  if (modal) {
    modal.classList.remove('active');
    document.getElementById('nameInput').value = '';
  }
}

function confirmName() {
  const nameInput = document.getElementById('nameInput');
  const name = nameInput.value.trim();
  
  if (name) {
    localStorage.setItem('userName', name);
    closeNameModal();
    goToPage('start-ar.html');
  } else {
    nameInput.focus();
  }
}

// Home Modal functions
function showHomeModal() {
  const modal = document.getElementById('homeModal');
  if (modal) {
    modal.classList.add('active');
  }
}

function closeHomeModal() {
  const modal = document.getElementById('homeModal');
  if (modal) {
    modal.classList.remove('active');
  }
}

// Settings Modal functions
function showSettingsModal() {
  const modal = document.getElementById('settingsModal');
  if (modal) {
    modal.classList.add('active');
  }
}

function closeSettingsModal() {
  const modal = document.getElementById('settingsModal');
  if (modal) {
    modal.classList.remove('active');
  }
}

function logout() {
  localStorage.clear();
  goToPage('index.html');
}

// Close modals when clicking outside
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('settings-modal')) {
    e.target.classList.remove('active');
  }
});

// Allow Enter key to submit name
document.addEventListener('DOMContentLoaded', function() {
  const nameInput = document.getElementById('nameInput');
  if (nameInput) {
    nameInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        confirmName();
      }
    });
  }
});

// Continue game function - routes to next character based on equipment count
function continueGame() {
  const count = parseInt(localStorage.getItem('equipmentCount') || '0');
  
  if (count === 1) {
    // After Bob (item 1), go to Sara
    goToPage('scan-sara.html');
  } else if (count === 2) {
    // After Sara (item 2), go to equipment overview
    goToPage('equipment-overview.html');
  } else {
    // Default: go to equipment overview
    goToPage('equipment-overview.html');
  }
}