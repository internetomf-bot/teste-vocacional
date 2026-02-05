const SHEETS_WEBAPP_URL = "https://script.google.com/macros/s/AKfycby9E-kBMtv1ozeP5AwuE_BKupfZyJ17xWidRXQx7uL0idfQ0xK_So97WL6PDS8ENcQP/exec";

// Áreas (IDs)
const AREAS = [
  "TecnologiaExatas",
  "Saude",
  "Educacao",
  "Gestao",
  "Comunicacao",
  "Seguranca",
  "Engenharia",
];

// Labels
const areaLabels = {
  TecnologiaExatas: "Tecnologia & Exatas",
  Saude: "Saúde",
  Educacao: "Educação & Licenciaturas",
  Gestao: "Gestão, Negócios & Administração",
  Comunicacao: "Comunicação, Design & Criatividade",
  Seguranca: "Segurança & Área Pública",
  Engenharia: "Engenharia & Arquitetura",
};

// Descrições
const areaDescriptions = {
  TecnologiaExatas: "Perfil analítico, lógica, sistemas, dados e tecnologia.",
  Saude: "Vocação para cuidado, bem-estar, atuação comunitária e áreas afins.",
  Educacao: "Interesse em ensinar, formar pessoas, educação, inclusão e desenvolvimento humano.",
  Gestao: "Foco em negócios, organização, processos, liderança e resultados.",
  Comunicacao: "Criatividade, comunicação, design, mídia e produção de conteúdo.",
  Seguranca: "Interesse por segurança, perícia, normas e atuação na área pública/privada.",
  Engenharia: "Perfil técnico aplicado a projetos, produção, construção e infraestrutura.",
};

// Cursos por área (ajuste livre)
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
    "Psicopedagogia",
  ],
  Gestao: [
    "Administração",
    "Ciências Contábeis",
    "Ciências Econômicas",
    "Comércio Exterior",
    "Logística",
    "Marketing",
    "Negócios Imobiliários",
    "Processos Gerenciais",
    "Gestão Financeira",
    "Gestão Pública",
  ],
  Comunicacao: [
    "Produção Publicitária",
    "Publicidade e Propaganda",
    "Jornalismo",
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
  Engenharia: [],
};

// 10 perguntas (2 pts na área principal +1 na secundária)
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

// Estado
let idx = 0;
let selected = null;
let points = Object.fromEntries(AREAS.map(a => [a, 0]));
let primaryHits = Object.fromEntries(AREAS.map(a => [a, 0]));

// UI
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

function buildResultSnapshot() {
  const ranked = getRankedAreaKeys();
  return {
    topArea: areaLabels[ranked[0]] || ranked[0],
    secondArea: areaLabels[ranked[1]] || ranked[1],
    thirdArea: areaLabels[ranked[2]] || ranked[2],
    scores: Object.fromEntries(ranked.map(k => [areaLabels[k] || k, points[k]])),
  };
}

/**
 * CORREÇÃO DO "Failed to fetch":
 * - Não manda header application/json (evita preflight/OPTIONS)
 * - Usa no-cors
 * - Tenta sendBeacon primeiro
 */
function sendLeadToSheets(payload) {
  const body = JSON.stringify(payload);

  try {
    if (navigator.sendBeacon) {
      const ok = navigator.sendBeacon(
        SHEETS_WEBAPP_URL,
        new Blob([body], { type: "text/plain;charset=utf-8" })
      );
      if (ok) return Promise.resolve(true);
    }
  } catch (_) {}

  return fetch(SHEETS_WEBAPP_URL, {
    method: "POST",
    mode: "no-cors",
    body
  }).then(() => true);
}
function drawDonutChart(canvasId, labels, values) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;

  // limpa
  ctx.clearRect(0, 0, w, h);

  const total = values.reduce((a, b) => a + b, 0);
  if (!total) return;

  const cx = w / 2;
  const cy = h / 2;
  const r = Math.min(w, h) * 0.42;
  const innerR = r * 0.62;

  // cores simples e fixas (sem depender de libs)
  const palette = ["#2d74ff","#27c2a2","#ffb020","#ff5c8a","#9b6bff","#00b3ff","#7ddc5a"];

  let start = -Math.PI / 2;

  values.forEach((val, i) => {
    const ang = (val / total) * Math.PI * 2;
    const end = start + ang;

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, start, end);
    ctx.closePath();
    ctx.fillStyle = palette[i % palette.length];
    ctx.fill();

    start = end;
  });

  // furo do donut
  ctx.beginPath();
  ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
  ctx.fillStyle = "#121a24";
  ctx.fill();

  // texto central
  ctx.fillStyle = "#e8eef6";
  ctx.font = "600 12px system-ui, -apple-system, Segoe UI, Roboto, Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Perfil", cx, cy - 8);
  ctx.font = "700 14px system-ui, -apple-system, Segoe UI, Roboto, Arial";
  ctx.fillText("do teste", cx, cy + 10);
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

  const scoreList = document.getElementById("scoreList");
  scoreList.innerHTML = "";
  ranked.forEach(a => {
    const li = document.createElement("li");
    li.textContent = `${areaLabels[a] || a}: ${points[a]} ( +2: ${primaryHits[a]} )`;
    scoreList.appendChild(li);
  });

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

  leadCard.style.display = "none";
  quizCard.style.display = "none";
  resultCard.style.display = "block";
    // gráfico visual (donut)
  const rankedForChart = getRankedAreaKeys();
  const topN = rankedForChart.slice(0, 5);

  const chartLabels = topN.map(k => areaLabels[k] || k);
  const chartValues = topN.map(k => points[k]);

  drawDonutChart("areaChart", chartLabels, chartValues);

}

function openLeadGate() {
  quizCard.style.display = "none";
  resultCard.style.display = "none";
  leadCard.style.display = "block";
  leadError.textContent = "";
  leadSubmitBtn.disabled = false;
}

nextBtn.onclick = () => {
  const q = questions[idx];
  const opt = q.options[selected];
  applyScore(opt);

  idx += 1;
  if (idx >= questions.length) openLeadGate();
  else renderQuestion();
};

function normalizeDigits(v) {
  return String(v || "").replace(/\D/g, "");
}
function isValidEmail(v) {
  const s = String(v || "").trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

leadSubmitBtn.onclick = async () => {
  leadError.textContent = "";
  leadSubmitBtn.disabled = true;

  const name = String(leadName.value || "").trim();
  const whats = normalizeDigits(leadWhats.value);
  const email = String(leadEmail.value || "").trim();

  if (!name) { leadError.textContent = "Informe seu nome."; leadSubmitBtn.disabled = false; return; }
  if (whats.length < 10) { leadError.textContent = "Informe seu WhatsApp com DDD (somente números)."; leadSubmitBtn.disabled = false; return; }
  if (!isValidEmail(email)) { leadError.textContent = "Informe um e-mail válido."; leadSubmitBtn.disabled = false; return; }

  const snap = buildResultSnapshot();

  const payload = {
    createdAt: new Date().toISOString(),
    name,
    whatsapp: whats,
    email,
    topArea: snap.topArea,
    secondArea: snap.secondArea,
    thirdArea: snap.thirdArea,
    scores: snap.scores,
    userAgent: navigator.userAgent || "",
    pageUrl: location.href || "",
  };

  try {
    // envia e mostra resultado
    await sendLeadToSheets(payload);
    renderResult();
  } catch (_) {
    // só cai aqui se der erro real de rede (offline)
    leadError.textContent = "Não consegui enviar agora. Tente novamente.";
    leadSubmitBtn.disabled = false;
  }
};

function reset() {
  idx = 0;
  selected = null;
  points = Object.fromEntries(AREAS.map(a => [a, 0]));
  primaryHits = Object.fromEntries(AREAS.map(a => [a, 0]));

  leadName.value = "";
  leadWhats.value = "";
  leadEmail.value = "";
  leadError.textContent = "";
  leadSubmitBtn.disabled = false;

  leadCard.style.display = "none";
  resultCard.style.display = "none";
  quizCard.style.display = "block";

  renderQuestion();
}

restartBtn.onclick = reset;
restartBtn2.onclick = reset;

// init
renderQuestion();
