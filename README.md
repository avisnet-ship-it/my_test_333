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
| `senajg-com/` | Prévia do senajg.com, o site em inglês, nos endereços novos (as 8 páginas e a 404), montada pelo `tools/gen_site_en.py` (repositório privado) |
| `rev51/` | Prévia da rev.51: a página principal com o fundo de estrelas e cometas na densidade 10, as bandeiras novas no seletor de língua e os livros em 2 e 2 nas janelas médias, e o Universos Paralelos com o subtítulo novo (duas páginas; as páginas em inglês estão na prévia `senajg-com/`) |
| `fundo-celular/` | Teste do fundo de estrelas no celular (commits de teste da rev.52): as variantes A (preso ao topo da tela), B (preso à base) e C (preso ao meio), cada uma com a página principal em português e O Cristo Cósmico; a B e a C com a altura da tela inteira, desde o teste 3 |
| `bandeiras/` | Teste das bandeiras novas (commit de teste da rev.52): a comparação das opções (três tamanhos, as cores dos EUA e a proporção do Reino Unido) e a página principal em português e O Cristo Cósmico em cada tamanho, com o fundo B |

As páginas têm `noindex` e não aparecem no Google. Nos testes de fundo, o conteúdo é a página principal original
e muda só o fundo; eles são gerados por `tools/gen_testes.py` (repositório privado). As prévias `rev39/`, `links/`,
`autor-a/`, `autor-b/` e `rev51/` são cópias do site, montadas para o autor testar antes de aprovar.

Os endereços do que vem do site (imagens, ícones e programas de `/assets/`, páginas dos livros) estão completos,
`https://senajg.com.br/...`, porque a raiz do lab.senajg.com.br é a do laboratório. O ajuste é do
`tools/lab_enderecos.py` (repositório privado). A prévia `senajg-com/` é a exceção: ela traz os próprios arquivos, com os
endereços dentro da pasta (`/senajg-com/...`), como o site novo vai ter na raiz do senajg.com.

Densidade dos corpos celestes: padrão 2,75×; ajuste com `?d=1` (original), `?d=2.5`, `?d=3`... na URL.

## Versão

Este laboratório acompanha a versão **v3.3.0** (SenaJG-rev.44) do site, de 28/10/2026.

Em preparação: **v4.0.0**, desde a SenaJG-rev.45, de 29/10/2026, com o domínio internacional, senajg.com, para o site em inglês. A revisão mais recente é a SenaJG-rev.52, de 30/10/2026, com os nomes finais das páginas em português do senajg.com.br; as prévias passam a apontar para os endereços novos. Antes, a SenaJG-rev.51, com as prévias `senajg-com/` e `rev51/`.
