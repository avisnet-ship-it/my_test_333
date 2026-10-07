# my_test_333 — laboratório de testes de senajg.com.br

Versões experimentais da página principal. Cada teste fica numa pasta com uma sigla:

| Pasta | Efeito |
|---|---|
| `nbc/` | Nebulosa em CSS (sem JavaScript) |
| `bgc/` | Bolhas Galácticas em Canvas |
| `cec/` | Céu Estelar em Canvas |
| `cmp/` | Cosmos Completo: estrelas + cometas + bolhas galácticas |
| `cri/` | O Cristo Cósmico (pt) com estrelas e cometas ×7, sem bolhas |
| `cri-en/` | The Cosmic Christ (en), idem |

As páginas têm `noindex` e não aparecem no Google. O conteúdo é a página principal original;
muda só o fundo. Gerado por `geracao/gen_testes.py` (repositório privado).

Densidade dos corpos celestes: padrão 2,75×; ajuste com `?d=1` (original), `?d=2.5`, `?d=3`... na URL.
