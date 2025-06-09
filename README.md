# 🖥️ Sistema de Controle de Equipamentos Patrimoniais

Este projeto foi desenvolvido com o objetivo de **otimizar a gestão de ativos patrimoniais**, proporcionando um controle detalhado e eficiente de equipamentos em ambientes corporativos.

## 🎯 Funcionalidade Principal

O sistema permite acompanhar com precisão:

✔️ Localização atual de cada equipamento
✔️ Tipo e marca do equipamento
✔️ Endereço **IP** (quando disponível na rede)
✔️ Endereço **MAC**
✔️ Número de patrimônio
✔️ Setor responsável

---

## 🗄️ Banco de Dados

O banco de dados foi estruturado em **MySQL**, garantindo integridade, organização e segurança dos dados. A modelagem inclui os seguintes campos:

* `id` – Chave primária (única e auto incrementada)
* `created_at` – Data e hora de criação do registro
* `nome_equipamento` – Nome descritivo do equipamento
* `ip` – Endereço IP (único)
* `mac` – Endereço MAC (único)
* `numero_patrimonio` – Código patrimonial (único)
* `setor` – Setor ou departamento responsável

---

## ⚙️ Tecnologias Utilizadas

### 🔧 Backend

* **Node.js** – Ambiente de execução JavaScript no servidor
* **Express.js** – Framework para criação da API REST
* **MySQL** – Banco de dados relacional

### 🎨 Frontend

* **HTML5 & CSS3** – Estrutura e estilo da aplicação
* **Sass** – Pré-processador CSS para organização de estilos
* **JavaScript** – Lógica de interação e dinamismo
* **Axios** – Cliente HTTP para integração com a API REST

---

## 📌 Benefícios

Com esse sistema, a gestão patrimonial se torna:

✅ Mais clara
✅ Mais rápida
✅ Mais eficiente

Permitindo **localizar, manter e organizar os ativos** de forma centralizada, segura e acessível.
