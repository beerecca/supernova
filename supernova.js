(function () {
  console.log("It's aliiiiveeee!");

  function createMenu() {
    var menu = document.createElement('div');
    menu.classList.add('main_menu');
    console.log(menu);
    // var main = document.querySelector('#Main');
    // console.log(main);
    // main.appendChild(menu);

    // const logo = document.querySelector('#MainLogo');
    // menu.appendChild

    const menuItems = document.querySelectorAll('.brick.size11');
    menuItems.forEach(item => {
      item.classList.remove('brick');
      item.classList.remove('size11');
      item.removeAttribute("style")
      menu.appendChild(item);
      console.log(item);
    })

    const header = document.querySelector('#Header');
    header.appendChild(menu);

    document.querySelector('#MainLogo').remove();
  }

  function htmlCleanup() {
    const icons = document.querySelectorAll('.icon-box');
    icons.forEach(icon => {
      icon.remove();
    })
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

  function bigBrickCleanup() {
    unWrap(document.querySelector('.size22'));

    const bigBricks = document.querySelectorAll('.brick.size21');
    bigBricks.forEach(brick => {
      brick.classList.remove('brick');
      brick.classList.remove('size21');
      brick.removeAttribute("style");
      brick.classList.add('block_container');
    })
  }

  function unWrap(el){
    var parent = el.parentNode;
    while (el.firstChild) parent.insertBefore(el.firstChild, el);
    parent.removeChild(el);
  }

  setTimeout(() => {
    createMenu();
    bigBrickCleanup();
  htmlCleanup();
  renderName();
}, 2000);
})();
