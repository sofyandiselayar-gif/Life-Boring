const star = (x,y,r,c) => `<path class="${c}" d="M${x} ${y-r} Q${x} ${y} ${x+r} ${y} Q${x} ${y} ${x} ${y+r} Q${x} ${y} ${x-r} ${y} Q${x} ${y} ${x} ${y-r}Z"/>`;
const ILL = {
  alarm: () => `<circle class="a" cx="112" cy="104" r="44"/><circle class="a" cx="288" cy="104" r="44"/>
    <path class="s" d="M120 330 L96 368 M280 330 L304 368" style="stroke-width:14"/>
    <circle class="k" cx="200" cy="222" r="132"/>
    <circle cx="200" cy="222" r="110" style="fill:#fffaf0"/>
    ${Array.from({length:12},(_,k)=>`<rect class="k" x="197" y="122" width="6" height="16" rx="3" transform="rotate(${k*30} 200 222)"/>`).join('')}
    <path class="s" d="M200 222 L200 160 M200 222 L246 248"/>
    <circle class="a" cx="200" cy="222" r="12"/>
    <text x="330" y="40" style="font:900 40px Archivo,sans-serif;font-stretch:125%;fill:#8C4A2C">z</text>
    <text x="356" y="16" style="font:900 28px Archivo,sans-serif;font-stretch:125%;fill:#8C4A2C">z</text>`,
  camera: () => `<rect class="k" x="128" y="76" width="104" height="54" rx="14"/>
    <rect class="a" x="48" y="112" width="304" height="212" rx="32"/>
    <rect class="c" x="282" y="136" width="44" height="22" rx="8"/>
    <circle class="k" cx="200" cy="218" r="84"/><circle class="b" cx="200" cy="218" r="62"/>
    <circle class="k" cx="200" cy="218" r="36"/><circle class="c" cx="186" cy="204" r="10"/>
    <rect class="c" x="104" y="336" width="192" height="54" rx="27"/>
    <text x="200" y="372" text-anchor="middle" style="font:800 26px Inter,sans-serif;fill:#2E2A22">#nofilter</text>
    ${star(50,62,26,'c')}${star(356,62,16,'c')}`,
  noodlecup: () => `<path d="M120 112 q20 -40 40 0 q20 -40 40 0 q20 -40 40 0 q20 -40 40 0" style="fill:none;stroke:#E3C99C;stroke-width:12;stroke-linecap:round"/>
    <rect class="k" x="236" y="30" width="12" height="110" rx="6" transform="rotate(16 242 85)"/>
    <rect class="k" x="258" y="34" width="12" height="110" rx="6" transform="rotate(22 264 89)"/>
    <ellipse class="b" cx="200" cy="140" rx="104" ry="20"/>
    <path class="c" d="M96 140 H304 L280 352 H120Z"/>
    <path class="a" d="M102 196 H298 L290 262 H110Z"/>
    <text x="200" y="244" text-anchor="middle" style="font:900 40px Archivo,sans-serif;font-stretch:125%;fill:#F2E8C9">MIE</text>
    <path class="sc" d="M140 70 q-10 -14 0 -28 M200 60 q-10 -14 0 -28 M260 70 q-10 -14 0 -28" style="stroke-width:7"/>`,
  piggy: () => `<circle class="c" cx="310" cy="70" r="26"/><text x="310" y="79" text-anchor="middle" style="font:800 22px Inter,sans-serif;fill:#8C4A2C">Rp</text>
    <circle class="c" cx="250" cy="34" r="18" style="opacity:.7"/>
    <path class="a" d="M150 120 L130 74 L184 108Z"/>
    <rect class="a" x="110" y="270" width="40" height="70" rx="14"/><rect class="a" x="240" y="270" width="40" height="70" rx="14"/>
    <ellipse class="a" cx="196" cy="214" rx="146" ry="104"/>
    <rect class="k" x="166" y="122" width="70" height="12" rx="6"/>
    <ellipse class="b" cx="330" cy="214" rx="34" ry="40"/>
    <circle class="k" cx="322" cy="202" r="6"/><circle class="k" cx="322" cy="226" r="6"/>
    <circle class="k" cx="270" cy="176" r="9"/>
    <path d="M52 200 q-30 -10 -20 -40" style="fill:none;stroke:#8C4A2C;stroke-width:10;stroke-linecap:round"/>`,
  speech: () => `<path class="c" d="M60 70 h240 a40 40 0 0 1 40 40 v120 a40 40 0 0 1 -40 40 h-150 l-60 56 l10 -56 h-40 a40 40 0 0 1 -40 -40 v-120 a40 40 0 0 1 40 -40z"/>
    <text x="180" y="200" text-anchor="middle" style="font:900 72px Archivo,sans-serif;font-stretch:125%;fill:#2E2A22">psst…</text>
    <rect class="a" x="250" y="290" width="120" height="64" rx="32"/>
    <circle class="c" cx="284" cy="322" r="8"/><circle class="c" cx="310" cy="322" r="8"/><circle class="c" cx="336" cy="322" r="8"/>
    ${star(40,40,20,'b')}${star(370,60,14,'b')}`,
};
