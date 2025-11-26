# 🚀 Instruções de Instalação

## Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

## Passos para Instalação

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar em modo desenvolvimento:**
   ```bash
   npm run dev
   ```
   O site estará disponível em: http://localhost:3000

3. **Build para produção:**
   ```bash
   npm run build
   ```

4. **Export estático (para Netlify):**
   ```bash
   npm run build
   ```
   Os arquivos estáticos estarão na pasta `out/`

## 📝 Personalização

Edite os arquivos JSON em `content/settings/` para personalizar:

- **business.json** - Nome, contato, redes sociais
- **general.json** - SEO, URL do site
- **theme.json** - Cores e configurações visuais
- **sections.json** - Todo o conteúdo das seções

## 🖼️ Imagens

Adicione suas imagens na pasta `public/`:
- `logo.png` - Logo da empresa
- `hero-image.png` - Imagem do hero (opcional)
- `about-image.png` - Imagem da seção sobre (opcional)
- `og-image.png` - Imagem para compartilhamento social
- `favicon.ico` - Ícone do site

## 🌐 Deploy no Netlify

1. Faça o build: `npm run build`
2. Faça upload da pasta `out/` para o Netlify
3. Ou conecte seu repositório Git e configure:
   - Build command: `npm run build`
   - Publish directory: `out`

## ⚠️ Notas Importantes

- Certifique-se de atualizar os links do WhatsApp nos arquivos JSON
- Atualize as informações de contato em `business.json`
- Personalize as cores em `theme.json` se desejar
- Adicione suas próprias imagens na pasta `public/`

