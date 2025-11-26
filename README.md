# ClimaTech - Landing Page de Manutenção de Ar Condicionado

Landing page one-page moderna e otimizada para conversão, desenvolvida com Next.js 16, Tailwind CSS e shadcn/ui.

## 🚀 Tecnologias

- **Next.js 16.0.1** - Framework React
- **React 19.2.0** - Biblioteca UI
- **Tailwind CSS** - Estilização
- **next-themes** - Suporte a tema dark/light
- **react-icons** - Ícones
- **framer-motion** - Animações

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Export estático (para Netlify)
npm run export
```

## ⚙️ Configuração

Todo o conteúdo do site é configurável através dos arquivos JSON em `content/settings/`:

- `business.json` - Informações da empresa (nome, contato, redes sociais)
- `general.json` - Configurações gerais (SEO, URL, etc)
- `theme.json` - Cores e configurações visuais
- `sections.json` - Conteúdo de todas as seções da página

## 📁 Estrutura

```
/
├── components/
│   ├── ui/          # Componentes reutilizáveis
│   └── layout/      # Layout principal
├── content/
│   └── settings/    # Arquivos de configuração JSON
├── lib/             # Utilitários
├── pages/           # Páginas Next.js
├── public/          # Arquivos estáticos
└── styles/          # Estilos globais
```

## 🎨 Personalização

1. **Cores**: Edite `content/settings/theme.json`
2. **Conteúdo**: Edite os arquivos em `content/settings/`
3. **Imagens**: Adicione em `public/` e referencie nos JSONs

## 📱 Deploy

O projeto está configurado para export estático, ideal para Netlify:

```bash
npm run build
```

A pasta `out/` será gerada com os arquivos estáticos prontos para deploy.

## ✨ Features

- ✅ Design responsivo mobile-first
- ✅ Tema dark/light
- ✅ SEO otimizado
- ✅ Performance alta
- ✅ Configuração via JSON
- ✅ Focado em conversão (CRO)

## 📝 Licença

MIT

