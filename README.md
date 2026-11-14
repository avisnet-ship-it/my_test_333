# my_test_333 — laboratório de testes, em lab.senajg.com.br

Versões experimentais dos sites do autor, publicadas em <https://lab.senajg.com.br/> desde a SenaJG-rev.47, de 29/10/2026 (antes, o laboratório ficava em senajg.com.br/my_test_333/). A página inicial do laboratório (`index.html`) é o menu com os links dos testes; cada teste fica numa pasta com uma sigla:

| Pasta | Efeito |
|---|---|
| `nbc/` | Nebulosa em CSS (sem JavaScript) |
| `bgc/` | Bolhas Galácticas em Canvas |
| `cec/` | Céu Estelar em Canvas |
| `cmp/` | Cosmos Completo: estrelas + cometas + bolhas galácticas |
| `cri/` | O Cristo Cósmico (pt) com estrelas e cometas ×7, sem bolhas |
| `cri-en/` | The Cosmic Christ (en), idem |
| `rev39/` | Prévia da rev.39: os botões do Kindle com a cidade e a águia em fotos (quatro páginas) |
| `links/` | Prévia da rev.40 e da rev.41: o site com os títulos dos livros como links, o "Sena JG" com destaque e o cifrão novo no ícone |
| `autor-a/` | Prévia A da rev.42: o autor no mesmo link do título, sublinhado junto (as 16 páginas) |
| `autor-b/` | Prévia B da rev.42, a escolhida: o autor no mesmo link do título, sem sublinhado (as 16 páginas) |
| `rev68b/` | Prévia da rev.68, versão B (cruzada): o vídeo entre a capa e a Descrição, com o título, a luz da capa e a legenda da proposta de outra sessão, e a fachada da rev68 |
| `rev68/` | Prévia da rev.68: o vídeo do livro (YouTube, com fachada) logo abaixo dos botões de compra do topo nas duas páginas do Cristo |
| `rev67/` | Prévia da rev.67: as 16 páginas e a página nova em italiano de How does The Reality work? (em rev67/en/come-funziona-la-realta/), com o seletor de três línguas nas três páginas desse livro |
| `rev66d/` | Prévia da rev.66, versão D: a rev66b com, nas duas Realidades, os universos-bolha se revezando a 75% (fusão comum, uma troca a cada 3 s) e a matriz de cubos de metal azul por cima; na página em português, a coluna da esquerda com o mesmo quadro translúcido da direita |
| `rev66b/` | Prévia da rev.66, versão B: a rev66 com a faixa do topo das duas Realidades na mesma largura (1152 px), sobras e altura de linha |
| `rev66c/` | Prévia da rev.66, versão C (ideia do autor): a rev66 com o seletor de língua no meio da faixa do topo das duas Realidades |
| `rev66/` | Prévia da rev.66: o seletor de língua com o mesmo estilo nas 16 páginas (a mesma fonte, peso, altura e sobras; as cores de cada página), toda navegável dentro do laboratório |
| `idiomas-c/` | Seletor de língua, versão C (ideia do autor): a prévia rev64b com cada botão da altura das bandeiras, o fundo só entre elas, atrás do nome |
| `idiomas-a/` | Seletor de língua, versão A: a prévia rev64b com só as 4 bandeiras, sem cápsula, e um traço dourado na língua da página |
| `idiomas-b/` | Seletor de língua, versão B: a prévia rev64b com o seletor numa barra única dividida em duas, a língua da página preenchida |
| `rev64b/` | Prévia da rev.64: o contato na mesma linha do subtítulo e, nos quatro livros da série Ganhe Dinheiro / Make Money, sem a linha da série abaixo do autor (as 8 páginas de cada site) |
| `rev64/` | Prévia da rev.64: o metal sem travar a página (começa depois da carga e espera a placa de vídeo sem travar); as três páginas da medição, com o mesmo medidor |
| `rev63/` | Medição da travada dos botões de metal: três páginas do senajg.com.br com um medidor que mostra, 20 s depois de abrir, os tempos de cada etapa do metal |
| `rev62/` | Prévia da rev.62: o e-mail de contato abaixo do "Sena JG" do topo e nos dados do autor (as 8 páginas do senajg.com.br e, em `rev62/en/`, as 8 do senajg.com) |
| `rev61/` | Prévia da rev.61: os botões de metal só com placa de vídeo; sem ela (como no teste ao vivo do Search Console), os botões planos de antes (as 8 páginas do senajg.com.br) |
| `senajg-com/` | Prévia do senajg.com, o site em inglês, nos endereços novos (as 8 páginas e a 404), montada pelo `tools/gen_site_en.py` (repositório privado) |
| `rev51/` | Prévia da rev.51: a página principal com o fundo de estrelas e cometas na densidade 10, as bandeiras novas no seletor de língua e os livros em 2 e 2 nas janelas médias, e o Universos Paralelos com o subtítulo novo (duas páginas; as páginas em inglês estão na prévia `senajg-com/`) |

As páginas têm `noindex` e não aparecem no Google. Nos testes de fundo, o conteúdo é a página principal original
e muda só o fundo; eles são gerados por `tools/gen_testes.py` (repositório privado). As prévias `rev39/`, `links/`,
`autor-a/`, `autor-b/`, `rev51/`, `rev61/` e `rev62/` são cópias dos sites, montadas para o autor testar antes de aprovar.

Os endereços do que vem do site (imagens, ícones e programas de `/assets/`, páginas dos livros) estão completos,
`https://senajg.com.br/...`, porque a raiz do lab.senajg.com.br é a do laboratório. O ajuste é do
`tools/lab_enderecos.py` (repositório privado). A prévia `senajg-com/` é a exceção: ela traz os próprios arquivos, com os
endereços dentro da pasta (`/senajg-com/...`), como o site novo tem na raiz do senajg.com.

Densidade dos corpos celestes: padrão 2,75×; ajuste com `?d=1` (original), `?d=2.5`, `?d=3`... na URL.

## Versão

Este laboratório acompanha a versão **v4.1.0** (SenaJG-rev.66) do site, de 14/11/2026. O processo de versão (tags, branches e Releases) está no `VERSIONING.md` do repositório privado do projeto, `avisnet-ship-it/privado`; o `CLAUDE.md` daqui lembra o Claude de lê-lo antes de agir.
