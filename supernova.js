(function () {
  console.log("It's aliiiiveeee!");

  function createMenu() {
    var menu = document.createElement('div');
    menu.classList.add('main_menu');
    console.log(menu);

    const menuItems = document.querySelectorAll('.brick.size11');
    menuItems.forEach(item => {
      item.classList.remove('brick');
      item.classList.remove('size11');
      item.removeAttribute("style");
      console.log(item);
    });

    const bricks = document.querySelector('#Bricks');
    // unhideMenu();
    // bricks.classList.remove('free-wall');
    menu.appendChild(bricks);

    const header = document.querySelector('#Header');
    header.appendChild(menu);

    unWrapMultiple(document.querySelectorAll('.size32'));
    // unWrapMultiple(document.querySelectorAll('.size22'));
    document.querySelector('#MainLogo').remove();
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
    const lastName = document.querySelector('#Header_Account_Name h3').textContent;
    nameDisplay.innerText = firstName;
    console.log(firstName, lastName);
    const imageContainer = document.querySelector('#Header_Account_Image');
    imageContainer.appendChild(nameDisplay);
    imageContainer.classList.remove('float-right');

    document.querySelector('#Header_Account_Name').remove();
    document.querySelector('.Header_Account_Image_Arrow').remove();

    unWrap(document.querySelector('#Header .clearfix .float-right'));
    unWrap(document.querySelector('#Header .clearfix'));
  }

  function homePageCleanup() {

    unWrap(document.querySelector('.size22'));

    const homeBlock = document.createElement('div');
    homeBlock.classList.add('block--homepage');
    console.log(homeBlock);

    const bigBricks = document.querySelectorAll('.brick.size21');
    bigBricks.forEach(brick => {
      brick.classList.remove('brick');
      brick.classList.remove('size21');
      brick.removeAttribute('style');
      brick.classList.add('block_container');
      homeBlock.appendChild(brick);
    });

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
