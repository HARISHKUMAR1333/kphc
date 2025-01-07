const headerDesk = `<nav class="navbar-default-page-header">
<div class="header-image-container">
  <img src=${guviLogo} id="guvi-logo-desk"/>
</div>
<div class="signout-right-corner">

    <button class="search-box-container">
    <input type="text" placeholder="Try searching “show all 2023 passout”" id="searchStudentName"/>
    </button>

    <button class="share-btn-container">
    <img src=${shareIcon} id="share-btn-desk"/>
    <div class="share-text">Share</div>
    </button>

    <button class="viewLeaderBoard-btn-container">
    <img src=${leaderBoardIcon} id="leaderboard-icon"/>
    <div class="leaderBoard-text">View Leaderboard</div>
    </button>

    <button class="sign-out-btn-container">
    <img src=${signOut} id="sign-out-desk"/>
    <div class="signout-text">Sign out</div>
    </button>
   </div>
</nav>`;

const commonMobileHeader = `
<nav class="navbar-default-page-header-mob">
<div class="menu-icon"><img src=${menuIcon} id="menu-icon"/></div>
<div class="logo-center">
  <img class="guvi-logo-img" src=${guviLogo} />
</div>
<div class="logout-btn-container">
<button class="logout-btn">Logout</button>
</div>
</nav>`;

const navBarElement = `<div class="sidebar">
  <img  src=${dashboardIcon} id="dashboard" style="cursor:Pointer"/>
  <img src=${leaderboardIcon} id="leaderboard" style="cursor:Pointer"/>
  <img src=${manageprofileIcon} id="manageprofile" style="cursor:Pointer"/>
  <img src=${questionIcon} id="help" style="cursor:Pointer"/>
  </div>`;

const navBarElementMob = `<div class="navbar-mobile-container">
  <div class="list-parent-container"> 
  <li class="nav-items">Home</li>
  <li class="nav-items">Reports</li>
  <li class="nav-items">Settings</li>
  <li class="nav-items">Info</li>
  </div>
  </div>`;

function init() {
  document.getElementById('common-header-desk').innerHTML = headerDesk;
  document.getElementById('common-header-mob').innerHTML = commonMobileHeader;

  document.getElementsByClassName('menu-icon')[0].onclick = function (e) {
    const navBarMob = document.getElementById('commonNavbar-mobile');
    if (navBarMob.style.display == 'none' || navBarMob.style.display == '') {
      document.getElementsByClassName('menu-icon')[0].style.background =
        'var(--primary-select-green)';
      navBarMob.style.display = 'block';
    } else {
      document.getElementsByClassName('menu-icon')[0].style.background =
        'var(--primary-dark-green)';
      navBarMob.style.display = 'none';
    }
  };

  document.getElementsByClassName('guvi-logo-img')[0].onclick = function (e) {
    window.location.href = '/home.html';
  };
  document.getElementById('guvi-logo-desk').onclick = function (e) {
    window.location.href = '/home.html';
  };

  document.getElementById('commonNavbar').innerHTML = navBarElement;

  document.getElementById('dashboard').onclick = function () {
    window.location.href = '/home.html';
  };

  document.getElementById('leaderboard').onclick = function () {
    window.location.href = '/leaderboard.html';
  };

  document.getElementById('manageprofile').onclick = function () {
    window.location.href = '/manageprofile.html';
  };

  document.getElementById('help').onclick = function () {
    window.location.href = '/help.html';
  };

  document.getElementById('commonNavbar-mobile').innerHTML = navBarElementMob;
  const navItemList = document.getElementsByClassName('nav-items');

  for (let i = 0; i < navItemList.length; i++) {
    navItemList[i].addEventListener('click', onItemClick);
  }
  document
    .getElementsByClassName('share-btn-container')[0]
    ?.addEventListener('click', (e) => {
      let emailDldBtn = document.getElementsByClassName(
        'emailDown-parent-container'
      )[0];
      if (emailDldBtn.classList.contains('disable-email-hide')) {
        emailDldBtn.classList.remove('disable-email-hide');
      } else {
        emailDldBtn.classList.add('disable-email-hide');
      }
    });
  conditionalHeaderBtnRender();
}

function conditionalHeaderBtnRender() {
  let viewLeaderboardBtn = document.getElementsByClassName(
    'viewLeaderBoard-btn-container'
  )[0];

  if (window.location.href.includes('viewLeaderboard.html')) {
    viewLeaderboardBtn?.classList.add('highlightViewLeaderborad-btn');
  }
  viewLeaderboardBtn?.addEventListener('click', navigateToViewLeaderBoard);

  if (
    window.location.href.includes('home.html') ||
    window.location.href.includes('viewLeaderboard.html') ||
    window.location.href.match(/^https?:\/\/[^/]+\/?$/)
  ) {
    document.getElementsByClassName('search-box-container')[0].style.display =
      'none';
    document.getElementsByClassName('share-btn-container')[0].style.display =
      'none';
  }

  if (
    window.location.href.includes('leaderboard.html') ||
    window.location.href.includes('manageprofile.html') ||
    window.location.href.includes('help.html')
  ) {
    document.getElementsByClassName('search-box-container')[0].style.display =
      'none';
    document.getElementsByClassName('share-btn-container')[0].style.display =
      'none';

    document.getElementsByClassName(
      'viewLeaderBoard-btn-container'
    )[0].style.display = 'none';
  }
}

function onItemClick(event) {
  const selectedItem = event.target.innerText;
  navigateTo(selectedItem);
}

function navigateTo(selectedItem) {
  switch (selectedItem) {
    case 'Home':
      window.location.href = '/home.html';
      break;
    case 'Reports':
      window.location.href = '/leaderboard.html';
      break;
    case 'Settings':
      window.location.href = '/manageprofile.html';
      break;
    case 'Info':
      window.location.href = '/help.html';
      break;
    default:
      window.location.href = '/home.html';
      break;
  }
}

function hightlightSelectedTab() {
  const windowUrl = window.location.pathname;

  switch (windowUrl) {
    case '/home.html':
      document.getElementById('dashboard').style.background =
        'var(--primary-color)';
      break;
    case '/leaderboard.html':
      document.getElementById('leaderboard').style.background =
        'var(--primary-color)';
      break;
    case '/manageprofile.html':
      document.getElementById('manageprofile').style.background =
        'var(--primary-color)';
      break;
    case '/help.html':
      document.getElementById('help').style.background = 'var(--primary-color)';
      break;
    case '/viewLeaderboard.html':
      document.getElementById('leaderboard').style.background =
        'var(--primary-color)';
      break;
    case '/course.html':
      document.getElementById('leaderboard').style.background =
        'var(--primary-color)';
      break;
    default:
      document.getElementById('dashboard').style.background =
        'var(--primary-color)';
  }
}

function navigateToViewLeaderBoard() {
  if (window.location.href.includes('viewLeaderboard.html')) {
    return;
  } else {
    window.location.href = '/viewLeaderboard.html';
  }
}

init();
hightlightSelectedTab();
