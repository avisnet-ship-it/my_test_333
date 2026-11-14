// Prévia rev66d (laboratório): o fundo das duas Realidades com os universos-bolha se revezando a 40% e, por cima deles, a
// matriz de cubos de metal azul (35 px, a 140 px nos três eixos, cada um girado ao acaso), desenhada uma vez e publicada
// como imagem. Tudo começa depois que a página carregou; com "reduzir movimento", fica uma imagem só, parada.
// O botão do canto (só na prévia) troca a fusão das bolhas: "por luz" (só o que brilha entra) ou "comum" (opacidade).
// As duas camadas ficam na altura -1, como o degradê da página em português (body::before), e depois dele na ordem da
// página: o degradê, as bolhas, os cubos.
(function () {
  const base = document.currentScript.src.replace(/fundo\.js.*$/, '');
  const BOLHAS = ['bolhas-4.webp', 'bolhas-2.webp', 'bolhas-1.webp'].map(f => base + f), TROCA = 12000;
  const st = document.createElement('style');
  st.textContent = `
    #fundo-bolhas { position: fixed; inset: 0; z-index: -1; pointer-events: none; mix-blend-mode: screen; }
    #fundo-bolhas.comum { mix-blend-mode: normal; }
    #fundo-bolhas > div { position: absolute; inset: 0; background: center / cover no-repeat; opacity: 0; transition: opacity 3s ease; }
    #fundo-bolhas > div.ativa { opacity: 0.4; }
    #fundo-cubos { position: fixed; inset: 0; z-index: -1; pointer-events: none; background: center / 3000px 1700px no-repeat; opacity: 0; transition: opacity 1.2s ease; }
    #fundo-cubos.ativa { opacity: 1; }
    @media (prefers-reduced-motion: reduce) { #fundo-bolhas > div, #fundo-cubos { transition: none; } }
    #fusao { position: fixed; right: 10px; bottom: 10px; z-index: 50; font: 600 12px system-ui, sans-serif; padding: 6px 12px; border-radius: 999px;
             border: 1px solid rgba(255,255,255,0.6); background: rgba(0,0,0,0.55); color: #fff; cursor: pointer; }`;
  document.head.appendChild(st);
  const carrega = src => new Promise((ok, erro) => { const i = new Image(); i.onload = () => ok(src); i.onerror = erro; i.src = src; });
  function inicia() {
    const caixa = document.createElement('div'); caixa.id = 'fundo-bolhas'; caixa.setAttribute('aria-hidden', 'true');
    const camadas = [document.createElement('div'), document.createElement('div')]; camadas.forEach(c => caixa.appendChild(c));
    const cubos = document.createElement('div'); cubos.id = 'fundo-cubos'; cubos.setAttribute('aria-hidden', 'true');
    document.body.prepend(cubos); document.body.prepend(caixa);
    const parado = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let n = 0, vez = 0;
    const mostra = src => { const c = camadas[vez]; c.style.backgroundImage = `url("${src}")`; c.classList.add('ativa'); camadas[1 - vez].classList.remove('ativa'); vez = 1 - vez; };
    carrega(BOLHAS[0]).then(mostra).then(() => carrega(base + 'cubos.webp')).then(src => { cubos.style.backgroundImage = `url("${src}")`; cubos.classList.add('ativa'); }).catch(() => {});
    if (!parado) setInterval(() => { n = (n + 1) % BOLHAS.length; carrega(BOLHAS[n]).then(mostra).catch(() => {}); }, TROCA);
    const b = document.createElement('button'); b.id = 'fusao'; b.type = 'button';
    const rotulo = () => { b.textContent = caixa.classList.contains('comum') ? 'Fusão: comum' : 'Fusão: por luz'; };
    b.addEventListener('click', () => { caixa.classList.toggle('comum'); rotulo(); }); rotulo(); document.body.appendChild(b);
  }
  const depois = () => ('requestIdleCallback' in window ? requestIdleCallback(inicia, { timeout: 1500 }) : setTimeout(inicia, 200));
  if (document.readyState === 'complete') depois(); else addEventListener('load', depois);
})();
