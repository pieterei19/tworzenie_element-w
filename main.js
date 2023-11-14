let butt = document.querySelector('button');
butt.addEventListener('click', function () {
  const main = document.querySelector('main');
  const aside = document.querySelector('aside');
  let main_aside = document.getElementById('mainTarget').checked;
  if (main_aside === true) {
    let tekst = document.getElementById('elementText').value;
    const element = document.getElementById('elemSel').value;
    let giga = document.createElement(element);
    giga.innerText = tekst;
    main.append(giga);
  } else {
    let tekst = document.getElementById('elementText').value;
    const element = document.getElementById('elemSel').value;
    let giga = document.createElement(element);
    giga.innerText = tekst;
    aside.append(giga);
  }
});
