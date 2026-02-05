/** URL do seu Apps Script (Web App) */
const SHEETS_WEBAPP_URL = "https://script.google.com/macros/s/AKfycby9E-kBMtv1ozeP5AwuE_BKupfZyJ17xWidRXQx7uL0idfQ0xK_So97WL6PDS8ENcQP/exec";

/** Áreas */
const AREAS = [
  "TecnologiaExatas",
  "Saude",
  "Educacao",
  "Gestao",
  "Comunicacao",
  "Seguranca",
  "Engenharia"
];

const areaLabels = {
  TecnologiaExatas: "Tecnologia & Exatas",
  Saude: "Saúde",
  Educacao: "Educação & Licenciaturas",
  Gestao: "Gestão, Negócios & Administração",
  Comunicacao: "Comunicação, Design & Criatividade",
  Seguranca: "Segurança & Área Pública",
  Engenharia: "Engenharia & Arquitetura",
};

const areaDescriptions = {
  TecnologiaExatas: "Perfil analítico, lógica, sistemas, dados e tecnologia.",
  Saude: "Vocação para cuidado, bem-estar, atuação comunitária e áreas afins.",
  Educacao: "Interesse em ensinar, formar pessoas e atuar com educação.",
  Gestao: "Foco em negócios, organização, processos, liderança e resultados.",
  Comunicacao: "Criatividade, comunicação, design, mídia e produção de conteúdo.",
  Seguranca: "Interesse por segurança, perícia, normas e atuação na área pública/privada.",
  Engenharia: "Perfil técnico aplicado a projetos, produção, construção e infraestrutura.",
};

/** Cursos por área */
const coursesByArea = {
  TecnologiaExatas: [
    "Análise e Desenvolvimento de Sistemas",
    "Sistemas de Informação",
    "Sistemas para Internet",
    "Segurança da Informação",
    "Ciência do Futuro",
    "Jogos Digitais",
  ],
  Saude: [
    "Agente Comunitário",
    "Educação Física (Bacharelado)",
    "Educação Física (Licenciatura)",
    "Podologia",
    "Química",
  ],
  Educacao: [
    "Pedagogia",
    "Educação Especial",
    "Processos Escolares",
    "Sociologia",
    "Filosofia",
    "Geografia",
    "História",
    "Letras (Português/Inglês)",
    "Letras (Português/Libras)",
    "Matemática",
    "Música",
    "Artes",
    "Ciências Biológicas (Licenciatura)",
    "Ciências Biológicas (Bacharelado)",
    "Biblioteconomia",
  ],
  Gestao: [
    "Administração",
    "Administração - Segunda Graduação",
    "Ciências Contábeis",
    "Ciências Contábeis - Segunda Graduação",
    "Ciências Econômicas",
    "Comércio Exterior",
    "Logística",
    "Marketing",
    "Negócios Imobiliários",
    "Processos Gerenciais",
    "Secretariado",
    "Hotelaria",
    "Gastronomia",
    "Gestão Comercial",
    "Gestão da Qualidade",
    "Gestão de Produção Industrial",
    "Gestão de Recursos Humanos",
    "Gestão do Agronegócio",
    "Gestão Financeira",
    "Gestão Hospitalar",
    "Gestão Pública",
    "Gestão Ambiental",
  ],
  Comunicacao: [
    "Produção Publicitária",
    "Publicidade e Propaganda",
    "Jornalismo",
    "Design de Produto",
    "Design de Interiores",
    "Design de Moda",
    "Design Gráfico",
    "Artes Visuais",
  ],
  Seguranca: [
    "Segurança Pública",
    "Segurança no Trânsito",
    "Gestão de Segurança Privada",
    "Investigação Forense e Perícia Criminal",
    "Segurança do Trabalho",
  ],
  Engenharia: [
    // Pode preencher depois
  ],
};

/** 10 perguntas */
const questions = [
  {
    text: "Quando você precisa resolver um problema, o que você faz primeiro?",
    options: [
      { label: "A) Analiso dados, lógica e busco uma solução técnica.", score: { primary:"TecnologiaExatas", secondary:"Engenharia" } },
      { label: "B) Penso no impacto nas pessoas e em como ajudar.", score: { primary:"Saude", secondary:"Educacao" } },
      { label: "C) Organizo o plano, prazos e recursos para executar.", score: { primary:"Gestao", secondary:"Engenharia" } },
      { label: "D) Procuro um jeito criativo e comunicável de resolver.", score: { primary:"Comunicacao", secondary:"Gestao" } },
    ]
  },
  {
    text: "Qual tipo de atividade mais combina com você?",
    options: [
      { label: "A) Programar, mexer com sistemas e tecnologia.", score: { primary:"TecnologiaExatas", secondary:"Engenharia" } },
      { label: "B) Cuidar/atuar com pessoas, comunidade e bem-estar.", score: { primary:"Saude", secondary:"Educacao" } },
      { label: "C) Planejar, administrar, vender ou organizar um negócio.", score: { primary:"Gestao", secondary:"Comunicacao" } },
      { label: "D) Criar peças, comunicar ideias e trabalhar com imagem/mídia.", score: { primary:"Comunicacao", secondary:"Gestao" } },
    ]
  },
  {
    text: "Em um trabalho em equipe, qual papel você tende a assumir?",
    options: [
      { label: "A) O(a) que cria a solução técnica e testa o que funciona.", score: { primary:"TecnologiaExatas", secondary:"Engenharia" } },
      { label: "B) O(a) que orienta, ensina e ajuda o time a evoluir.", score: { primary:"Educacao", secondary:"Gestao" } },
      { label: "C) O(a) que organiza tarefas e garante o andamento do projeto.", score: { primary:"Gestao", secondary:"Engenharia" } },
      { label: "D) O(a) que comunica, apresenta e cuida da mensagem/identidade.", score: { primary:"Comunicacao", secondary:"Gestao" } },
    ]
  },
  {
    text: "Qual frase descreve melhor o que você busca no dia a dia?",
    options: [
      { label: "A) Entender como as coisas funcionam e melhorar processos.", score: { primary:"TecnologiaExatas", secondary:"Engenharia" } },
      { label: "B) Fazer diferença na vida das pessoas por meio de orientação e apoio.", score: { primary:"Educacao", secondary:"Saude" } },
      { label: "C) Construir resultados com estratégia, metas e organização.", score: { primary:"Gestao", secondary:"Comunicacao" } },
      { label: "D) Criar e expressar ideias de um jeito que chame atenção.", score: { primary:"Comunicacao", secondary:"Educacao" } },
    ]
  },
  {
    text: "Qual cenário te interessa mais?",
    options: [
      { label: "A) Trabalhar com sistemas, internet e segurança da informação.", score: { primary:"TecnologiaExatas", secondary:"Seguranca" } },
      { label: "B) Trabalhar com políticas, normas, proteção e perícia.", score: { primary:"Seguranca", secondary:"Gestao" } },
      { label: "C) Trabalhar com gestão pública/negócios e melhoria de processos.", score: { primary:"Gestao", secondary:"Seguranca" } },
      { label: "D) Trabalhar com educação, formação e desenvolvimento humano.", score: { primary:"Educacao", secondary:"Saude" } },
    ]
  },
  {
    text: "O que mais te motiva a estudar e escolher uma carreira?",
    options: [
      { label: "A) Resolver desafios complexos usando lógica e tecnologia.", score: { primary:"TecnologiaExatas", secondary:"Engenharia" } },
      { label: "B) Ajudar pessoas e atuar com impacto social/comunitário.", score: { primary:"Saude", secondary:"Educacao" } },
      { label: "C) Crescer em negócios, liderança e oportunidades de mercado.", score: { primary:"Gestao", secondary:"Comunicacao" } },
      { label: "D) Criar projetos, campanhas, design e comunicação com público.", score: { primary:"Comunicacao", secondary:"Gestao" } },
    ]
  },
  {
    text: "Em qual ambiente você se imagina trabalhando melhor?",
    options: [
      { label: "A) Computador/sistemas, com foco técnico e organização.", score: { primary:"TecnologiaExatas", secondary:"Gestao" } },
      { label: "B) Escola, projetos educacionais e formação de pessoas.", score: { primary:"Educacao", secondary:"Comunicacao" } },
      { label: "C) Empresa/negócio, com metas, processos e decisões.", score: { primary:"Gestao", secondary:"TecnologiaExatas" } },
      { label: "D) Campo/atuando com segurança, normas e investigação.", score: { primary:"Seguranca", secondary:"Gestao" } },
    ]
  },
  {
    text: "Qual habilidade você considera mais forte?",
    options: [
      { label: "A) Raciocínio lógico e aprendizado técnico rápido.", score: { primary:"TecnologiaExatas", secondary:"Engenharia" } },
      { label: "B) Comunicação, escrita, criatividade e persuasão.", score: { primary:"Comunicacao", secondary:"Gestao" } },
      { label: "C) Organização, liderança e visão de negócio.", score: { primary:"Gestao", secondary:"Comunicacao" } },
      { label: "D) Empatia, escuta e capacidade de orientar pessoas.", score: { primary:"Educacao", secondary:"Saude" } },
    ]
  },
  {
    text: "Qual tipo de conteúdo você tende a gostar mais?",
    options: [
      { label: "A) Tecnologia, internet, dados e segurança digital.", score: { primary:"TecnologiaExatas", secondary:"Seguranca" } },
      { label: "B) Educação, sociedade, história, cultura e formação.", score: { primary:"Educacao", secondary:"Comunicacao" } },
      { label: "C) Negócios, economia, gestão e mercado.", score: { primary:"Gestao", secondary:"TecnologiaExatas" } },
      { label: "D) Investigação, normas, perícia e segurança.", score: { primary:"Seguranca", secondary:"Gestao" } },
    ]
  },
  {
    text: "Se você tivesse que escolher um projeto agora, qual seria?",
    options: [
      { label: "A) Criar/organizar um site/sistema e proteger informações.", score: { primary:"TecnologiaExatas", secondary:"Seguranca" } },
      { label: "B) Fazer uma campanha (design + comunicação) para um público.", score: { primary:"Comunicacao", secondary:"Gestao" } },
      { label: "C) Montar um plano de negócio e melhorar resultados.", score: { primary:"Gestao", secondary:"Comunicacao" } },
      { label: "D) Atuar em um projeto social/educacional com pessoas.", score: { primary:"Educacao", secondary:"Saude" } },
    ]
  },
];

/** Estado */
let idx = 0;
let selected = null;
let points = Object.fromEntries(AREAS.map(a => [a, 0]));
let primaryHits = Object.fromEntries(AREAS.map(a => [a, 0]));

/** UI */
const qText = document.getElementById("qText");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const restartBtn2 = document.getElementById("restartBtn2");
const progressPill = document.getElementById("progressPill");
const hint = document.getElementById("hint");

const quizCard = document.getElementById("quizCard");
const leadCard = document.getElementById("leadCard");
const resultCard = document.getElementById("resultCard");

const leadName = document.getElementById("leadName");
const leadWhats = document.getElementById("leadWhats");
const leadEmail = document.getElementById("leadEmail");
const leadError = document.getElementById("leadError");
const leadSubmitBtn = document.getElementById("leadSubmitBtn");

function renderQuestion() {
  selected = null;
  nextBtn.disabled = true;

  const q = questions[idx];
  progressPill.textContent = `Pergunta ${idx+1}/${questions.length}`;
  qText.textContent = q.text;

  optionsEl.innerHTML = "";
  q.options.forEach((opt, i) => {
    const div = document.createElement("div");
    div.className = "opt";
    div.textContent = opt.label;
    div.onclick = () => {
      selected = i;
      nextBtn.disabled = false;
      [...optionsEl.children].forEach(c => c.style.outline = "none");
      div.style.outline = "2px solid #2d74ff";
    };
    optionsEl.appendChild(div);
  });

  hint.textContent = "Selecione uma alternativa para continuar.";
}

function applyScore(opt) {
  const p = opt.score.primary;
  points[p] += 2;
  primaryHits[p] += 1;

  const s = opt.score.secondary;
  if (s) points[s] += 1;
}

function getRankedAreaKeys() {
  return [...AREAS].sort((a,b) => {
    if (points[b] !== points[a]) return points[b] - points[a];
    if (primaryHits[b] !== primaryHits[a]) return primaryHits[b] - primaryHits[a];
    return AREAS.indexOf(a) - AREAS.indexOf(b);
  });
}

function openLeadGate() {
  quizCard.style.display = "none";
  resultCard.style.display = "none";
  leadCard.style.display = "block";
  leadError.textContent = "";
  leadSubmitBtn.disabled = false;
}

function normalizeDigits(v) {
  return String(v || "").replace(/\D/g, "");
}

/** ENVIO SEM "FAILED TO FETCH":
 * - tenta sendBeacon
 * - se não der, usa fetch no-cors (não dá erro no browser)
 */
function sendLead(payload) {
  const body = JSON.stringify(payload);

  if (navigator.sendBeacon) {
    try {
      const blob = new Blob([body], { type: "text/plain;charset=utf-8" });
      const ok = navigator.sendBeacon(SHEETS_WEBAPP_URL, blob);
      return ok;
    } catch (e) {}
  }

  // fallback
  fetch(SHEETS_WEBAPP_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body
  });
  return true;
}

/** Gráfico donut (sem libs) */
function drawDonut(canvasId, labels, values) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");
  const total = values.reduce((a,b)=>a+b,0) || 1;

  const colors = ["#2d74ff","#45c4b0","#f5b942","#ff6b6b","#9b59b6","#16a085","#e67e22"];
  const cx = canvas.width/2;
  const cy = canvas.height/2;
  const r = Math.min(cx,cy) - 6;
  const inner = r * 0.62;

  ctx.clearRect(0,0,canvas.width,canvas.height);

  let start = -Math.PI/2;
  values.forEach((v, i) => {
    const angle = (v/total) * Math.PI*2;
    ctx.beginPath();
    ctx.moveTo(cx,cy);
    ctx.arc(cx,cy,r,start,start+angle);
    ctx.closePath();
    ctx.fillStyle = colors[i % colors.length];
    ctx.fill();
    start += angle;
  });

  // furo
  ctx.beginPath();
  ctx.arc(cx,cy,inner,0,Math.PI*2);
  ctx.fillStyle = "#121a24";
  ctx.fill();
}

/** Legenda */
function renderLegend(labels) {
  const colors = ["#2d74ff","#45c4b0","#f5b942","#ff6b6b","#9b59b6","#16a085","#e67e22"];
  const legend = document.getElementById("chartLegend");
  legend.innerHTML = "";
  labels.forEach((t, i) => {
    const li = document.createElement("li");
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.style.background = colors[i % colors.length];
    const txt = document.createElement("span");
    txt.textContent = t;
    li.appendChild(dot);
    li.appendChild(txt);
    legend.appendChild(li);
  });
}

function renderResult() {
  const ranked = getRankedAreaKeys();
  const top = ranked[0];

  const all = (coursesByArea[top] || []).slice();
  const recommended = all.slice(0, Math.min(5, Math.max(3, all.length)));

  document.getElementById("resultMeta").textContent =
    "Pontuação calculada por área (desempate: mais respostas como +2).";

  document.getElementById("topAreaName").textContent = areaLabels[top] || top;
  document.getElementById("topAreaDesc").textContent = areaDescriptions[top] || "";

  const recommendedList = document.getElementById("recommendedList");
  recommendedList.innerHTML = "";
  recommended.forEach(c => {
    const li = document.createElement("li");
    li.textContent = c;
    recommendedList.appendChild(li);
  });

  const allCoursesList = document.getElementById("allCoursesList");
  allCoursesList.innerHTML = "";
  all.forEach(c => {
    const li = document.createElement("li");
    li.textContent = c;
    allCoursesList.appendChild(li);
  });

  // gráfico com top 5
  const top5 = ranked.slice(0, 5);
  const labels = top5.map(k => areaLabels[k] || k);
  const values = top5.map(k => points[k]);

  drawDonut("areaChart", labels, values);
  renderLegend(labels);

  leadCard.style.display = "none";
  quizCard.style.display = "none";
  resultCard.style.display = "block";
}

function finishQuiz() {
  openLeadGate();
}

nextBtn.onclick = () => {
  const q = questions[idx];
  const opt = q.options[selected];
  applyScore(opt);

  idx += 1;
  if (idx >= questions.length) finishQuiz();
  else renderQuestion();
};

leadSubmitBtn.onclick = () => {
  leadError.textContent = "";

  const name = String(leadName.value || "").trim();
  const whats = normalizeDigits(leadWhats.value);
  const email = String(leadEmail.value || "").trim();

  if (!name) { leadError.textContent = "Informe seu nome."; return; }
  if (whats.length < 10) { leadError.textContent = "Informe seu WhatsApp com DDD (somente números)."; return; }
  if (!email || !email.includes("@")) { leadError.textContent = "Informe um e-mail válido."; return; }

  const ranked = getRankedAreaKeys();
  const payload = {
    createdAt: new Date().toISOString(),
    name,
    whatsapp: whats,
    email,
    topArea: areaLabels[ranked[0]] || ranked[0],
    secondArea: areaLabels[ranked[1]] || ranked[1],
    thirdArea: areaLabels[ranked[2]] || ranked[2],
    scores: Object.fromEntries(ranked.map(k => [areaLabels[k] || k, points[k]])),
    userAgent: navigator.userAgent || "",
    pageUrl: location.href || "",
  };

  // envia (sem quebrar o resultado)
  sendLead(payload);

  // limpa inputs e mostra resultado
  leadName.value = "";
  leadWhats.value = "";
  leadEmail.value = "";
  leadError.textContent = "";

  renderResult();
};

function reset() {
  idx = 0;
  selected = null;
  points = Object.fromEntries(AREAS.map(a => [a, 0]));
  primaryHits = Object.fromEntries(AREAS.map(a => [a, 0]));

  leadCard.style.display = "none";
  resultCard.style.display = "none";
  quizCard.style.display = "block";

  leadName.value = "";
  leadWhats.value = "";
  leadEmail.value = "";
  leadError.textContent = "";
  leadSubmitBtn.disabled = false;

  renderQuestion();
}

restartBtn.onclick = reset;
restartBtn2.onclick = reset;

renderQuestion();
