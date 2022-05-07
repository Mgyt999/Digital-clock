const yr = document.getElementById('yr');

const mo = document.getElementById('mo');

const dy = document.getElementById('dy');

const hr = document.getElementById('hr');

const mn = document.getElementById('mn');

const sc = document.getElementById('sc');

const ms = document.getElementById('ms');

const cn = document.getElementById('cn');

const cb = document.getElementById('cb');

const th = document.getElementById('th');


const es = setInterval(esf, 1000);

const em = setInterval(emf, 10);


const themerunner = setInterval(themef, 100);


esf();


function esf() {


  const ndate = new Date();


  const year = ndate.getFullYear();

  const month = ndate.getMonth();

  const date = ndate.getDate();

  const day = ndate.getDay();

  const min = ndate.getMinutes();

  const sec = ndate.getSeconds();


  yr.innerHTML = year;

  mo.innerHTML = MonPlDate(thf(date), mon(month));

  dy.innerHTML = ConToDay(day);

  mn.innerHTML = style(min);

  sc.innerHTML = style(sec);

  cn.innerHTML = YtoCn(year);


}


function emf() {


  const ndate = new Date();

  const hour = ndate.getHours();

  const milisec = ndate.getMilliseconds();


  if (cb.checked == true) {

    hr.innerHTML = style(ItoN(hour));

  }

  else {

    hr.innerHTML = style(hour);

  }


  ms.innerHTML = style(Math.trunc((milisec / 10)));


}


function themef() {


  const body = document.body;

  const theme = document.getElementById('theme');


  theme.onclick = function() {


    body.classList.toggle('theme1');


  }


}


function ConToDay(x) {


  if (x == 0) {

    return 'Sun';

  }

  else if (x == 1) {

    return 'Mon';

  }

  else if (x == 2) {

    return 'Tue';

  }

  else if (x == 3) {

    return 'Wed';

  }

  else if (x == 4) {

    return 'Thus';

  }

  else if (x == 5) {

    return 'Fri';

  }

  else if (x == 6) {

    return 'Sat';

  }


}


function style(x) {


  lx = String(x).length;

  sx = String(x);


  if (lx == 1) {

    return ('0' + sx);

  }

  else {

    return sx;

  }


}


function ItoN(x) {


  if (x > 12) {

    return (x - 12);

  }

  else if (x == 0) {

    return 12;

  }

  else {

    return x;

  }


}


function YtoCn(x) {


  const cen = String((parseInt((String(x)).slice(0, -2))) + 1);


  return (thf(cen) + ' Century');


}


function thf(x) {


  const sx = String(x);

  const len = sx.length;


  if (sx.charAt(len - 2) == 1) {

    return (sx + 'ᵗʰ');

  }

  else if (sx.charAt(len - 1) == 1) {

    return (sx + 'ˢᵗ');

  }

  else if (sx.charAt(len - 1) == 2) {

    return (sx + 'ⁿᵈ');

  }

  else if (sx.charAt(len - 1) == 3) {

    return (sx + 'ʳᵈ');

  }

  else {

    return (sx + 'ᵗʰ');

  }


}


function mon(x) {


  if (x == 0) {

    return ('JAN');

  }

  else if (x == 1) {

    return ('FEB');

  }

  else if (x == 2) {

    return ('MAR');

  }

  else if (x == 3) {

    return ('APR');

  }

  else if (x == 4) {

    return ('MAY');

  }

  else if (x == 5) {

    return ('JUN');

  }

  else if (x == 6) {

    return ('JUL');

  }

  else if (x == 7) {

    return ('AUG');

  }

  else if (x == 8) {

    return ('SEP');

  }

  else if (x == 9) {

    return ('OCT');

  }

  else if (x == 10) {

    return ('NOV');

  }

  else if (x == 11) {

    return ('DEC');

  }


}


function MonPlDate(x, y) {


  sx = String(x);

  sy = String(y);


  return (sx + ' ' + sy);


}
