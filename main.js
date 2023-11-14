let butt = document.querySelector('button');
butt.addEventListener('click', function () {
  const main = document.createElement('main');
  const aside = document.createElement('aside');
  let main_aside = document.getElementById('mainTarget').checked;
  console.log(main_aside);
  if (main_aside === true) {
    let tekst = document.getElementById('elementText').value;
    const element = document.getElementById('elemSel').value;

    if (element === 'p') {
      const p = document.createElement('p');
      aside.append(p);
      p.append(tekst);
    } else if (element === 'div') {
      const div = document.createElement('div');
      aside.append(div);
      div.append(tekst);
    } else if (element === 'footer') {
      const footer = document.createElement('footer');
      aside.append(footer);
      footer.append(tekst);
    } else {
      const asidde = document.createElement('aside');
      aside.append(asidde);
      asidde.append(tekst);
    }
    console.log('main');
  } else if (main_aside === false) {
    let tekst = document.getElementById('elementText').value;
    const element = document.getElementById('elemSel').value;
    if (element === 'p') {
      const p = document.createElement('p');
      aside.append(p);
      p.append(tekst);
    } else if (element === 'div') {
      const div = document.createElement('div');
      aside.append(div);
      div.append(tekst);
    } else if (element === 'footer') {
      const footer = document.createElement('footer');
      aside.append(footer);
      footer.append(tekst);
    } else {
      const asidde = document.createElement('aside');
      aside.append(asidde);
      asidde.append(tekst);
    }
    console.log('aside');
  } else {
    console.log('nic');
  }
});
