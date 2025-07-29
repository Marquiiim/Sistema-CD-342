## 📦 Projeto PatrimonyControl – Sistema de Gestão & Catalogação de Equipamentos Patrimoniais

### 🧾 Descrição

O **PatrimonyControl** é um sistema desenvolvido para auxiliar na **gestão de equipamentos patrimoniais**, permitindo um controle eficiente de onde estão os ativos, suas especificações e dados de rede. Ele foi criado com foco na organização, rastreabilidade e segurança das informações.

### 🧩 Funcionalidades

* 📍 Localização exata do equipamento (setor)
* 🖥️ Tipo e nome do equipamento
* 🏷️ Marca (quando aplicável)
* 🌐 Endereço IP (se disponível)
* 🔒 Endereço MAC
* 🧾 Número de patrimônio

### 🗄️ Estrutura do Banco de Dados (MySQL)

* `id` (chave primária, auto incrementada)
* `created_at` (data e hora da inclusão)
* `nome_equipamento`
* `ip` (único)
* `mac` (único)
* `num_patrimonio` (único)
* `setor`

O banco foi estruturado para garantir **organização, integridade e consistência dos dados**.

### 🛠️ Tecnologias Utilizadas

**Backend:**

* Node.js
* Express.js
* MySQL
* XAMPP (para ambiente local)

**Frontend:**

* HTML5
* CSS3 + Sass
* JavaScript
* Axios (para consumo da API)
