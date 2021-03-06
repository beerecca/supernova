(function () {
  function createMenu() {
    var menu = document.createElement('div');
    menu.classList.add('main_menu');

    const menuItems = document.querySelectorAll('.brick.size11');
    menuItems.forEach(item => {
      item.classList.remove('brick');
      item.classList.remove('size11');
      item.removeAttribute("style");
    });

    const bricks = document.querySelector('#Bricks');
    menu.appendChild(bricks);

    const header = document.querySelector('#Header');
    header.appendChild(menu);

    unWrapMultiple(document.querySelectorAll('.size32'));
    document.querySelector('#MainLogo').remove();

    const logo = document.createElement('div');
    logo.classList.add('wetransfer_logo');

    header.appendChild(logo);

    logo.addEventListener('click', function() {
      document.querySelector('#back-button').click();
    });
  }

  function iconRemove() {
    const icons = document.querySelectorAll('.icon-box');
    icons.forEach(icon => {
      icon.remove();
    });
  }

  function renderName() {
    const nameDisplay = document.createElement('span');
    nameDisplay.classList.add('name');

    const firstName = document.querySelector('#Header_Account_Name h2').textContent;
    nameDisplay.innerText = firstName;

    const imageContainer = document.querySelector('#Header_Account_Image');
    imageContainer.appendChild(nameDisplay);
    imageContainer.classList.remove('float-right');

    document.querySelector('#Header_Account_Name').remove();
    document.querySelector('.Header_Account_Image_Arrow').remove();

    unWrap(document.querySelector('#Header .clearfix .float-right'));
    unWrap(document.querySelector('#Header .clearfix'));

    setTimeout(() => {
      unWrapMultiple(document.querySelectorAll('#Header .size22'));
    }, 150);
  }

  function homePageCleanup() {
    const homeBlock = document.createElement('div');
    homeBlock.classList.add('block--homepage');

    const SideColumn = document.createElement('aside');
    const MainColumn = document.createElement('main');

    unWrap(document.querySelector('.size22'));


    const bigBricks = document.querySelectorAll('.brick.size21');
    bigBricks.forEach(brick => {
      brick.classList.remove('brick');
      brick.classList.remove('size21');
      brick.removeAttribute('style');
      brick.classList.add('block_container');
      SideColumn.appendChild(brick);
    });

    const introText = document.querySelector('.brick.size2-2');
    introText.classList.remove('brick');
    introText.classList.remove('size2-2');
    introText.removeAttribute('style');
    introText.classList.add('block_container');
    MainColumn.appendChild(introText);

    homeBlock.appendChild(MainColumn);
    homeBlock.appendChild(SideColumn);

    const main = document.querySelector('#Main');
    main.appendChild(homeBlock);
    console.log(main);
  }

  function cleanContent() {
    const content = document.querySelector('#Content');
    content.removeAttribute("style");
  }

  function descriptiveClassNames() {
    const classNames = [
      {
        id: 'Brick_essrapport',
        className: 'block--reports'
      },
      {
        id: 'Brick_essverlofsaldo',
        className: 'block--leaveBalance'
      },
      {
        id: 'Brick_Intro',
        className: 'block--intro'
      }
    ];

    classNames.forEach(item => {
      const el = document.body.querySelector(`div [data-id="${item.id}"]`);
      el.classList.add(item.className);
    });
  }

  function unWrap(el){
    var parent = el.parentNode;
    while (el.firstChild) parent.insertBefore(el.firstChild, el);
    parent.removeChild(el);
  }


  function unWrapMultiple(el) {
    el.forEach(element => {
      var parent = element.parentNode;
      while (element.firstChild) parent.insertBefore(element.firstChild, element);
      parent.removeChild(element);
    });
  }

  function hideSplash() {
    document.body.classList.add('loaded');
  }

  //Login page

  function renameElements(){
    document.querySelector('label[for="Login_Remember"]').innerHTML = "Keep me signed in";
    document.querySelector(`div [data-type="passwordlost"]`).innerHTML = "Forgot password?";
    document.querySelector(`div [data-function="Login"]`).value = "Sign in";
    document.getElementById('Login_Password').setAttribute('placeholder', 'Password')
    document.getElementById('Login_Naam').setAttribute('placeholder', 'Email')

    var seperators = document.getElementsByClassName('remember');
    for(var i = 0; i < seperators.length; i++){
      if(seperators[i].innerHTML === "||"){
        seperators[i].innerHTML = "·";
      }
    }
  }


  if (window.location.href.indexOf("loggen") > -1) {
    setTimeout(() => {
      hideSplash();
      renameElements();
    }, 150);
  } else {
    hideSplash();
    setTimeout(() => {

      descriptiveClassNames();

      createMenu();
      homePageCleanup();

      iconRemove();
      renderName();
      cleanContent();

    }, 2000);
    setInterval(() => {
      unhideMenu();
      reflowContent();
      navChecker();
    }, 100);
  }

})();

function unhideMenu() {
  const bricks = document.querySelector('#Bricks');
  bricks.removeAttribute("style");
}
function reflowContent() {
  const content = document.querySelector('#Content');
  content.removeAttribute("style");
}

function navChecker() {
  if (window.location.hash) {
    document.querySelector('#Main').classList.remove('home');
  } else {
    document.querySelector('#Main').classList.add('home');
  }
}
