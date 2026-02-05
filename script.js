(() => {
  // evita rodar duas vezes se você sem querer incluir o script 2x
  if (window.__TV_LOADED__) return;
  window.__TV_LOADED__ = true;

  const SHEETS_WEBAPP_URL =
    "https://script.google.com/macros/s/AKfycbxanP6vQqk8TLNIfUmTVV9jGEl-BWGzpmmTQUtJuePwMBq5W5-MeAuAr9vKjNJqJVtoIQ/exec";

  // ======= ÁREAS =======
  const AREAS = {
    EDU: "Educação & Licenciaturas",
    GES: "Gestão, Negócios & Administração",
    COM: "Comunicação, Design & Criatividade",
    TEC: "Tecnologia & Exatas",
    SAU: "Saúde",
    ENG: "Engenharia & Arquitetura",
    SEG: "Segurança & Área Pública",
  };

  const AREA_DESC = {
    [AREAS.EDU]:
      "Interesse em ensinar, formar pessoas, educação, inclusão e desenvolvimento humano.",
    [AREAS.GES]:
      "Foco em negócios, organização, processos, liderança e resultados.",
    [AREAS.COM]:
      "Criatividade, comunicação, design, mídia e produção de conteúdo.",
    [AREAS.TEC]:
      "Lógica, tecnologia, dados, sistemas e resolução de problemas.",
    [AREAS.SAU]:
      "Cuidado com pessoas, bem-estar, saúde e atenção aos detalhes.",
    [AREAS.ENG]:
      "Projetos, estruturas, planejamento técnico e soluções de engenharia.",
    [AREAS.SEG]:
      "Ordem, regras, proteção, atuação pública e segurança.",
  };

  const COURSES = {
    [AREAS.EDU]: ["Pedagogia", "Educação Especial", "Processos Escolares", "Artes", "Sociologia"],
    [AREAS.GES]: ["Administração", "Gestão Comercial", "Gestão Financeira", "Recursos Humanos", "Processos Gerenciais"],
    [AREAS.COM]: ["Design Gráfico", "Produção Publicitária", "Publicidade e Propaganda", "Jornalismo", "Design de Moda"],
    [AREAS.TEC]: ["Análise e Desenvolvimento de Sistemas", "Sistemas para Internet", "Segurança da Informação", "Sistemas de Informação", "Jogos Digitais"],
    [AREAS.SAU]: ["Estética e Cosmética", "Radiologia", "Nutrição", "Fisioterapia", "Fonoaudiologia"],
    [AREAS.ENG]: ["Engenharia Civil", "Engenharia de Produção", "Engenharia Elétrica", "Arquitetura e Urbanismo", "Engenharia Mecânica"],
    [AREAS.SEG]: ["Segurança Pública", "Segurança do Trabalho", "Investigação Forense e Perícia Criminal", "Gestão de Segurança Privada", "Segurança no Trânsito"],
  };

  // ======= 10 PERGUNTAS (4 alternativas) =======
  // Cada alternativa dá:
  // - +2 na área principal
  // - +1 na área “secundária” (desempate tipo “+2”)
  const QUESTIONS = [
    {
      q: "O que te puxa mais no dia a dia?",
      a: [
        { t: "Ensinar / orientar pessoas", p: AREAS.EDU, s: AREAS.COM },
        { t: "Organizar e liderar", p: AREAS.GES, s: AREAS.SEG },
        { t: "Criar / comunicar / designer", p: AREAS.COM, s: AREAS.EDU },
        { t: "Resolver com lógica/tecnologia", p: AREAS.TEC, s: AREAS.ENG },
      ],
    },
    {
      q: "Qual atividade parece mais natural pra você?",
      a: [
        { t: "Ajudar e cuidar de pessoas", p: AREAS.SAU, s: AREAS.EDU },
        { t: "Analisar números e dados", p: AREAS.TEC, s: AREAS.GES },
        { t: "Planejar projetos e estruturas", p: AREAS.ENG, s: AREAS.TEC },
        { t: "Garantir ordem e regras", p: AREAS.SEG, s: AREAS.GES },
      ],
    },
    {
      q: "Você prefere trabalhar mais com:",
      a: [
        { t: "Pessoas (ensino/atendimento)", p: AREAS.EDU, s: AREAS.SAU },
        { t: "Negócios e metas", p: AREAS.GES, s: AREAS.TEC },
        { t: "Ideias, criação e mídia", p: AREAS.COM, s: AREAS.GES },
        { t: "Sistemas, máquinas e lógica", p: AREAS.TEC, s: AREAS.ENG },
      ],
    },
    {
      q: "Em um time, você normalmente é:",
      a: [
        { t: "Quem explica e guia", p: AREAS.EDU, s: AREAS.COM },
        { t: "Quem organiza e cobra", p: AREAS.GES, s: AREAS.SEG },
        { t: "Quem cria a apresentação", p: AREAS.COM, s: AREAS.EDU },
        { t: "Quem resolve o bug", p: AREAS.TEC, s: AREAS.ENG },
      ],
    },
    {
      q: "Qual cenário te anima mais?",
      a: [
        { t: "Sala de aula / projetos educacionais", p: AREAS.EDU, s: AREAS.COM },
        { t: "Empresa crescendo com processos", p: AREAS.GES, s: AREAS.TEC },
        { t: "Campanha/branding/conteúdo", p: AREAS.COM, s: AREAS.GES },
        { t: "Construção/projeto técnico", p: AREAS.ENG, s: AREAS.TEC },
      ],
    },
    {
      q: "O que você valoriza mais no trabalho?",
      a: [
        { t: "Impacto humano e desenvolvimento", p: AREAS.EDU, s: AREAS.SAU },
        { t: "Resultados e carreira", p: AREAS.GES, s: AREAS.SEG },
        { t: "Liberdade criativa", p: AREAS.COM, s: AREAS.EDU },
        { t: "Desafios técnicos", p: AREAS.TEC, s: AREAS.ENG },
      ],
    },
    {
      q: "Qual tipo de problema você curte resolver?",
      a: [
        { t: "Dificuldade de aprendizagem", p: AREAS.EDU, s: AREAS.SAU },
        { t: "Gargalos de gestão", p: AREAS.GES, s: AREAS.TEC },
        { t: "Mensagem/posicionamento", p: AREAS.COM, s: AREAS.GES },
        { t: "Falhas técnicas e otimização", p: AREAS.TEC, s: AREAS.ENG },
      ],
    },
    {
      q: "Você se descreve mais como:",
      a: [
        { t: "Empático(a) e paciente", p: AREAS.SAU, s: AREAS.EDU },
        { t: "Prático(a) e objetivo(a)", p: AREAS.GES, s: AREAS.SEG },
        { t: "Criativo(a) e expressivo(a)", p: AREAS.COM, s: AREAS.EDU },
        { t: "Racional e curioso(a)", p: AREAS.TEC, s: AREAS.ENG },
      ],
    },
    {
      q: "Qual ambiente combina mais com você?",
      a: [
        { t: "Escola / projetos sociais", p: AREAS.EDU, s: AREAS.SEG },
        { t: "Empresa / comércio", p: AREAS.GES, s: AREAS.COM },
        { t: "Agência / estúdio", p: AREAS.COM, s: AREAS.TEC },
        { t: "Laboratório / canteiro", p: AREAS.ENG, s: AREAS.TEC },
      ],
    },
    {
      q: "Se você pudesse escolher agora, iria mais para:",
      a: [
        { t: "Formar pessoas e ensinar", p: AREAS.EDU, s: AREAS.COM },
        { t: "Gerir e empreender", p: AREAS.GES, s: AREAS.TEC },
        { t: "Criar e comunicar", p: AREAS.COM, s: AREAS.GES },
        { t: "Tecnologia e exatas", p: AREAS.TEC, s: AREAS.ENG },
      ],
    },
  ];

  // ======= DOM =======
  const $ = (id) => document.getElementById(id);

  const quizCard = $("quizCard");
  const leadCard = $("leadCard");
  const resultCard = $("resultCard");

  const qCount = $("qCount");
  const qTitle = $("qTitle");
  const optionsWrap = $("optionsWrap");
  const btnNext = $("btnNext");
  const btnReset = $("btnReset");

  const inName = $("inName");
  const inWhats = $("inWhats");
  const inEmail = $("inEmail");
  const btnSend = $("btnSend");
  const leadErr = $("leadErr");

  const outArea = $("outArea");
  const outDesc = $("outDesc");
  const outCourses = $("outCourses");
  const outAllAreas = $("outAllAreas");

  const chartCanvas = $("areaChart");

  // ======= STATE =======
  let idx = 0;
  let selectedIndex = null;

  const points = {};
  const tie = {};
  Object.values(AREAS).forEach((a) => {
    points[a] = 0;
    tie[a] = 0;
  });

  function normalizeDigits(v) {
    return String(v || "").replace(/\D/g, "");
  }

  function isEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());
  }

  function renderQuestion() {
    const q = QUESTIONS[idx];
    qCount.textContent = `Pergunta ${idx + 1}/${QUESTIONS.length}`;
    qTitle.textContent = q.q;

    optionsWrap.innerHTML = "";
    selectedIndex = null;
    btnNext.disabled = true;

    q.a.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "optBtn";
      btn.textContent = opt.t;

      btn.addEventListener("click", () => {
        selectedIndex = i;
        btnNext.disabled = false;
        [...optionsWrap.querySelectorAll(".optBtn")].forEach((b) =>
          b.classList.remove("active")
        );
        btn.classList.add("active");
      });

      optionsWrap.appendChild(btn);
    });
  }

  function applyAnswer() {
    const q = QUESTIONS[idx];
    const opt = q.a[selectedIndex];

    // +2 principal
    points[opt.p] += 2;

    // +1 secundária (desempate “+2”)
    tie[opt.p] += 1;
    if (opt.s) tie[opt.s] += 1;
  }

  function getRankedAreas() {
    const areas = Object.values(AREAS);
    return areas.sort((a, b) => {
      if (points[b] !== points[a]) return points[b] - points[a];
      return tie[b] - tie[a];
    });
  }

  function drawDonut(labels, values) {
    if (!chartCanvas) return;

    const ctx = chartCanvas.getContext("2d");
    const w = chartCanvas.width;
    const h = chartCanvas.height;
    ctx.clearRect(0, 0, w, h);

    const total = values.reduce((s, v) => s + v, 0) || 1;
    const cx = w / 2;
    const cy = h / 2;
    const rOuter = Math.min(w, h) * 0.42;
    const rInner = rOuter * 0.62;

    let start = -Math.PI / 2;

    for (let i = 0; i < values.length; i++) {
      const frac = values[i] / total;
      const end = start + frac * Math.PI * 2;

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, rOuter, start, end);
      ctx.closePath();

      // cores simples (determinísticas)
      ctx.fillStyle = `hsl(${(i * 55) % 360} 70% 55%)`;
      ctx.fill();

      start = end;
    }

    // furo
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(cx, cy, rInner, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";

    // miolo (cor do fundo do card)
    ctx.beginPath();
    ctx.arc(cx, cy, rInner, 0, Math.PI * 2);
    ctx.fillStyle = "#0f1724";
    ctx.fill();

    // texto central
    ctx.fillStyle = "#e6eefc";
    ctx.font = "bold 14px system-ui, -apple-system, Segoe UI, Roboto, Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Perfil", cx, cy - 10);
    ctx.font = "12px system-ui, -apple-system, Segoe UI, Roboto, Arial";
    ctx.fillStyle = "#9fb2d6";
    ctx.fillText("visual", cx, cy + 10);
  }

  function renderResult() {
    const ranked = getRankedAreas();
    const top = ranked[0];

    outArea.textContent = top;
    outDesc.textContent = AREA_DESC[top] || "";

    // cursos
    outCourses.innerHTML = "";
    (COURSES[top] || []).slice(0, 5).forEach((c) => {
      const li = document.createElement("li");
      li.textContent = c;
      outCourses.appendChild(li);
    });

    // lista completa das áreas (sem pontuação)
    outAllAreas.innerHTML = "";
    ranked.forEach((a) => {
      const li = document.createElement("li");
      li.textContent = a;
      outAllAreas.appendChild(li);
    });

    // donut com top 5 (valores internos, mas NÃO mostramos números)
    const top5 = ranked.slice(0, 5);
    drawDonut(top5, top5.map((a) => points[a]));

    // telas
    quizCard.style.display = "none";
    leadCard.style.display = "none";
    resultCard.style.display = "block";
  }

  async function sendLead(payload) {
    // Para GitHub Pages/Netlify, o browser bloqueia CORS.
    // Então mandamos com no-cors (não dá pra ler resposta, mas grava no Sheets).
    await fetch(SHEETS_WEBAPP_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(payload),
    });
  }

  btnNext.addEventListener("click", () => {
    if (selectedIndex == null) return;

    applyAnswer();
    idx++;

    if (idx < QUESTIONS.length) {
      renderQuestion();
      return;
    }

    // terminou -> abre lead
    quizCard.style.display = "none";
    leadCard.style.display = "block";
    resultCard.style.display = "none";
  });

  btnReset.addEventListener("click", () => {
    idx = 0;
    selectedIndex = null;
    Object.values(AREAS).forEach((a) => {
      points[a] = 0;
      tie[a] = 0;
    });

    leadErr.textContent = "";
    inName.value = "";
    inWhats.value = "";
    inEmail.value = "";

    quizCard.style.display = "block";
    leadCard.style.display = "none";
    resultCard.style.display = "none";

    renderQuestion();
  });

  btnSend.addEventListener("click", async () => {
    leadErr.textContent = "";

    const name = String(inName.value || "").trim();
    const whatsapp = normalizeDigits(inWhats.value);
    const email = String(inEmail.value || "").trim();

    if (!name) {
      leadErr.textContent = "Preencha seu nome.";
      return;
    }
    if (whatsapp.length < 10) {
      leadErr.textContent = "Preencha WhatsApp com DDD.";
      return;
    }
    if (!isEmail(email)) {
      leadErr.textContent = "Preencha um e-mail válido.";
      return;
    }

    const ranked = getRankedAreas();
    const topArea = ranked[0];
    const secondArea = ranked[1] || "";
    const thirdArea = ranked[2] || "";

    const payload = {
      createdAt: new Date().toISOString(),
      name,
      whatsapp,
      email,
      topArea,
      secondArea,
      thirdArea,
      scoresJson: JSON.stringify(points),
      userAgent: navigator.userAgent,
      pageUrl: location.href,
    };

    try {
      btnSend.disabled = true;
      btnSend.textContent = "Enviando...";
      await sendLead(payload);
      renderResult();
    } catch (e) {
      leadErr.textContent = "Não consegui enviar agora. Tente novamente.";
    } finally {
      btnSend.disabled = false;
      btnSend.textContent = "Ver meu resultado";
    }
  });

  // start
  renderQuestion();
})();
