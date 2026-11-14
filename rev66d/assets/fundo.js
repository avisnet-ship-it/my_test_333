// Prévia rev66d (laboratório): o fundo das duas Realidades com os universos-bolha se revezando a 75% (o fundo original fica
// com 25%; fusão comum, escolha do autor) e, por cima deles, a matriz de cubos de metal azul (35 px, a 140 px nos três eixos,
// cada um girado ao acaso), desenhada uma vez e publicada como imagem. Tudo começa depois que a página carregou; com
// "reduzir movimento", fica uma imagem só, parada.
// As duas camadas ficam na altura -1, como o degradê da página em português (body::before), e depois dele na ordem da
// página: o degradê, as bolhas, os cubos. A caixa das bolhas inteira fica a 75%, e as imagens dentro dela a 100%: na troca,
// a nova dissolve por cima da anterior dentro da caixa, e a anterior só sai quando a dissolução termina. Assim a cobertura
// é sempre 75%, durante e depois da troca (com as duas imagens a 75% cada uma, a cobertura subia para 94% na troca e caía
// de uma vez para 75% quando a anterior saía: o fundo original piscava).
(function () {
  const base = document.currentScript.src.replace(/fundo\.js.*$/, '');
  const BOLHAS = ['bolhas-4.webp', 'bolhas-2.webp', 'bolhas-1.webp'].map(f => base + f), TROCA = 3000, DISSOLVE = 1000, FORCA = 0.75;   // uma troca a cada 3 s (pedido do autor), dissolvendo em 1 s
  const st = document.createElement('style');
  st.textContent = `
    #fundo-bolhas { position: fixed; inset: 0; z-index: -1; pointer-events: none; opacity: ${FORCA}; }
    #fundo-bolhas > div { position: absolute; inset: 0; background: center / cover no-repeat; opacity: 0; }
    #fundo-bolhas > div.entra { transition: opacity ${DISSOLVE / 1000}s ease; }
    #fundo-bolhas > div.ativa { opacity: 1; }
    #fundo-cubos { position: fixed; inset: 0; z-index: -1; pointer-events: none; background: center / 3000px 1700px no-repeat; opacity: 0; transition: opacity 1.2s ease; }
    #fundo-cubos.ativa { opacity: 1; }
    @media (prefers-reduced-motion: reduce) { #fundo-bolhas > div.entra, #fundo-cubos { transition: none; } }`;
  document.head.appendChild(st);
  const carrega = src => new Promise((ok, erro) => { const i = new Image(); i.onload = () => ok(src); i.onerror = erro; i.src = src; });
  function inicia() {
    const caixa = document.createElement('div'); caixa.id = 'fundo-bolhas'; caixa.setAttribute('aria-hidden', 'true');
    const cubos = document.createElement('div'); cubos.id = 'fundo-cubos'; cubos.setAttribute('aria-hidden', 'true');
    document.body.prepend(cubos); document.body.prepend(caixa);
    const parado = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let n = 0, atual = null;
    const mostra = src => {
      const nova = document.createElement('div'); nova.className = 'entra'; nova.style.backgroundImage = `url("${src}")`;
      caixa.appendChild(nova); void nova.offsetWidth; nova.classList.add('ativa');   // a nova por cima, dissolvendo
      const velha = atual; atual = nova;
      if (!velha) return;
      if (parado) { velha.remove(); return; }
      let feito = false; const tira = () => { if (!feito) { feito = true; velha.remove(); } };
      nova.addEventListener('transitionend', tira, { once: true }); setTimeout(tira, DISSOLVE + 500);   // a reserva, se o evento não vier
    };
    carrega(BOLHAS[0]).then(mostra).then(() => carrega(base + 'cubos.webp')).then(src => { cubos.style.backgroundImage = `url("${src}")`; cubos.classList.add('ativa'); }).catch(() => {});
    if (!parado) setInterval(() => { n = (n + 1) % BOLHAS.length; carrega(BOLHAS[n]).then(mostra).catch(() => {}); }, TROCA);
  }
  const depois = () => ('requestIdleCallback' in window ? requestIdleCallback(inicia, { timeout: 1500 }) : setTimeout(inicia, 200));
  if (document.readyState === 'complete') depois(); else addEventListener('load', depois);
})();
