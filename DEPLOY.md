# 🚀 Guia de Deploy do Kiwi Cash

## 🎯 Deploy Rápido na Vercel (RECOMENDADO)

### Método 1: Deploy via CLI (2 minutos)

```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Navegar até a pasta do projeto
cd kiwi-cash

# 3. Fazer login na Vercel
vercel login

# 4. Deploy!
vercel

# Ou direto para produção
vercel --prod
```

✅ Pronto! Seu site estará online em menos de 2 minutos.

---

### Método 2: Deploy via GitHub + Vercel (Automático)

#### Passo 1: Criar Repositório no GitHub

1. Acesse https://github.com/new
2. Crie um repositório novo
3. **Não** inicialize com README

#### Passo 2: Fazer Push do Código

```bash
cd kiwi-cash

# Inicializar git
git init

# Adicionar arquivos
git add .

# Commit
git commit -m "🥝 Kiwi Cash - Sistema Universal de Pontos"

# Conectar ao GitHub (substitua SEU_USUARIO e SEU_REPO)
git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git

# Push
git branch -M main
git push -u origin main
```

#### Passo 3: Conectar na Vercel

1. Acesse https://vercel.com
2. Faça login (pode usar GitHub)
3. Clique em "New Project"
4. Selecione seu repositório
5. Clique em "Deploy"

✅ Deploy automático configurado! Toda vez que você fizer push, a Vercel atualiza automaticamente.

---

### Método 3: Deploy Manual (Arrastar e Soltar)

1. Crie um ZIP do projeto (excluindo node_modules e .next)
2. Acesse https://vercel.com/new
3. Arraste o ZIP para a área de upload
4. Pronto!

---

## 💻 Rodar Localmente

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo desenvolvimento
npm run dev

# 3. Abrir no navegador
# http://localhost:3000
```

---

## 🌐 URLs Após o Deploy

Após o deploy, você terá:

- **URL de Preview**: `https://kiwi-cash-xxx.vercel.app`
- **URL de Produção**: `https://kiwi-cash.vercel.app`

### Configurar Domínio Próprio

1. Vá em **Settings → Domains** no painel da Vercel
2. Adicione seu domínio personalizado
3. Configure o DNS conforme instruções
4. Pronto! Seu SaaS estará em `www.seudominio.com.br`

---

## 🎨 Personalização

### Trocar Cores

Edite `app/globals.css`:

```css
:root {
  --primary: #8B4513;      /* Marrom cacau */
  --secondary: #D2691E;    /* Chocolate */
}
```

### Trocar Nome/Logo

Edite em cada página:

```tsx
🥝 Kiwi Cash  →  Seu Nome
```

---

## 📊 Estrutura do Projeto

```
kiwi-cash/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── layout.tsx                  # Layout raiz
│   ├── globals.css                 # Estilos globais
│   ├── loja/
│   │   └── dashboard/
│   │       └── page.tsx            # Dashboard da loja
│   └── cliente/
│       └── page.tsx                # Painel do cliente
├── public/                         # Arquivos estáticos
├── package.json                    # Dependências
├── tsconfig.json                   # Config TypeScript
├── next.config.js                  # Config Next.js
└── README.md                       # Documentação
```

---

## 🔧 Tecnologias Usadas

- **Next.js 14** - Framework React
- **TypeScript** - Type safety
- **Recharts** - Gráficos
- **Vercel** - Hosting

---

## 🆘 Troubleshooting

### Erro: "Module not found"

```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro de Build

```bash
# Testar build localmente
npm run build

# Ver erros específicos
```

### Porta 3000 Ocupada

```bash
# Usar outra porta
PORT=3001 npm run dev
```

---

## 📈 Próximos Passos

### Backend Real

Para produção, você precisará:

1. **Banco de Dados**
   - PostgreSQL (Supabase)
   - MongoDB (MongoDB Atlas)
   - Firebase

2. **Autenticação**
   - NextAuth.js
   - Clerk
   - Auth0

3. **API Routes**
   - Criar em `app/api/`
   - Endpoints RESTful

### Exemplo de API Route:

```typescript
// app/api/compras/route.ts
export async function POST(request: Request) {
  const data = await request.json()
  // Salvar no banco
  return Response.json({ success: true })
}
```

---

## 💰 Monetização

O Kiwi Cash pode ser vendido como:

1. **SaaS Mensal**: R$ 49 - R$ 249/mês
2. **Por Transação**: R$ 0,05 por compra registrada
3. **Modelo Híbrido**: Base + uso

---

## 🎯 Diferenciais para Vender

✅ Universal - qualquer segmento
✅ Simples - setup em 5 minutos
✅ Sem app - tudo via web
✅ Multi-loja - uma empresa, várias filiais
✅ Relatórios em tempo real
✅ Gamificação (níveis, badges)

---

## 📞 Suporte

Para dúvidas:
- 📧 suporte@kiwicash.com.br
- 💬 Chat no dashboard
- 📚 Docs completos

---

## 🎁 Bônus

### Marketing Kit

Incluso no projeto:
- Templates de email
- Posts para redes sociais
- QR Codes para download
- Folder explicativo

---

**Desenvolvido com ❤️ usando Next.js + TypeScript**

🥝 Transforme cada compra em recompensas!
