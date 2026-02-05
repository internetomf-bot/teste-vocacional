const SHEETS_WEBAPP_URL =
"https://script.google.com/macros/s/AKfycby9E-kBMtv1ozeP5AwuE_BKupfZyJ17xWidRXQx7uL0idfQ0xK_So97WL6PDS8ENcQP/exec";

const AREAS = {
  Tecnologia: { desc:"Tecnologia, lógica e sistemas", courses:["ADS","SI","Jogos Digitais"] },
  Gestão: { desc:"Negócios, liderança e processos", courses:["Administração","Gestão RH","Marketing"] },
  Comunicação: { desc:"Design, mídia e criatividade", courses:["Publicidade","Design Gráfico","Jornalismo"] },
  Educação: { desc:"Ensino e formação humana", courses:["Pedagogia","Educação Especial","Letras"] }
};

const questions = [
  ["Você prefere trabalhar com:",["Tecnologia","Gestão","Comunicação","Educação"]],
  ["Você se identifica mais com:",["Computadores","Negócios","Criação","Ensino"]],
  ["Qual atividade te anima mais?",["Programar","Gerir","Criar","Ensinar"]],
  ["Você se considera mais:",["Analítico","Estratégico","Criativo","Didático"]],
  ["Seu ambiente ideal:",["Tech","Empresa","Estúdio","Escola"]],
  ["Você resolve problemas com:",["Lógica","Planejamento","Ideias","Orientação"]],
  ["Você gosta mais de:",["Sistemas","Resultados","Design","Pessoas"]],
  ["Prefere trabalhar:",["Sozinho","Em equipe","Criando","Orientando"]],
  ["Seu forte é:",["Tecnologia","Gestão","Comunicação","Educação"]],
  ["Você se vê no futuro em:",["TI","Negócios","Criação","Ensino"]]
];

let qIndex=0;
let selected=null;
let points={Tecnologia:0,Gestão:0,Comunicação:0,Educação:0};

const qText=document.getElementById("qText");
const options=document.getElementById("options");
const nextBtn=document.getElementById("nextBtn");

function renderQuestion(){
  const q=questions[qIndex];
  qText.textContent=q[0];
  options.innerHTML="";
  nextBtn.disabled=true;
  selected=null;

  q[1].forEach((opt)=>{
    const d=document.createElement("div");
    d.className="opt";
    d.textContent=opt;
    d.onclick=()=>{
      selected=opt;
      nextBtn.disabled=false;
      [...options.children].forEach(e=>e.style.outline="none");
      d.style.outline="2px solid #2d74ff";
    };
    options.appendChild(d);
  });
}

nextBtn.onclick=()=>{
  points[selected]+=1;
  qIndex++;
  if(qIndex<questions.length) renderQuestion();
  else{
    document.getElementById("quizCard").style.display="none";
    document.getElementById("leadCard").style.display="block";
  }
};

renderQuestion();

document.getElementById("leadSubmitBtn").onclick=()=>{
  const name=leadName.value.trim();
  const whats=leadWhats.value.replace(/\D/g,"");
  const email=leadEmail.value.trim();

  if(!name||whats.length<10||!email.includes("@")){
    leadError.textContent="Preencha todos os campos corretamente.";
    return;
  }

  const ranked=Object.keys(points).sort((a,b)=>points[b]-points[a]);
  const top=ranked[0];

  // ENVIO SEM ESPERAR RESPOSTA (NÃO DÁ ERRO)
  fetch(SHEETS_WEBAPP_URL,{
    method:"POST",
    mode:"no-cors",
    body:JSON.stringify({
      createdAt:new Date().toISOString(),
      name,whatsapp:whats,email,
      topArea:top,
      scores:points
    })
  });

  // RESULTADO VISUAL
  document.getElementById("leadCard").style.display="none";
  document.getElementById("resultCard").style.display="block";
  document.getElementById("topAreaName").textContent=top;
  document.getElementById("topAreaDesc").textContent=AREAS[top].desc;

  const ul=document.getElementById("courseList");
  ul.innerHTML="";
  AREAS[top].courses.forEach(c=>{
    const li=document.createElement("li");
    li.textContent=c;
    ul.appendChild(li);
  });

  new Chart(document.getElementById("areaChart"),{
    type:"doughnut",
    data:{
      labels:ranked,
      datasets:[{data:ranked.map(a=>points[a])}]
    },
    options:{plugins:{legend:{position:"bottom"}}}
  });
};
const SHEETS_WEBAPP_URL =
"https://script.google.com/macros/s/AKfycby9E-kBMtv1ozeP5AwuE_BKupfZyJ17xWidRXQx7uL0idfQ0xK_So97WL6PDS8ENcQP/exec";

const AREAS = {
  Tecnologia: { desc:"Tecnologia, lógica e sistemas", courses:["ADS","SI","Jogos Digitais"] },
  Gestão: { desc:"Negócios, liderança e processos", courses:["Administração","Gestão RH","Marketing"] },
  Comunicação: { desc:"Design, mídia e criatividade", courses:["Publicidade","Design Gráfico","Jornalismo"] },
  Educação: { desc:"Ensino e formação humana", courses:["Pedagogia","Educação Especial","Letras"] }
};

const questions = [
  ["Você prefere trabalhar com:",["Tecnologia","Gestão","Comunicação","Educação"]],
  ["Você se identifica mais com:",["Computadores","Negócios","Criação","Ensino"]],
  ["Qual atividade te anima mais?",["Programar","Gerir","Criar","Ensinar"]],
  ["Você se considera mais:",["Analítico","Estratégico","Criativo","Didático"]],
  ["Seu ambiente ideal:",["Tech","Empresa","Estúdio","Escola"]],
  ["Você resolve problemas com:",["Lógica","Planejamento","Ideias","Orientação"]],
  ["Você gosta mais de:",["Sistemas","Resultados","Design","Pessoas"]],
  ["Prefere trabalhar:",["Sozinho","Em equipe","Criando","Orientando"]],
  ["Seu forte é:",["Tecnologia","Gestão","Comunicação","Educação"]],
  ["Você se vê no futuro em:",["TI","Negócios","Criação","Ensino"]]
];

let qIndex=0;
let selected=null;
let points={Tecnologia:0,Gestão:0,Comunicação:0,Educação:0};

const qText=document.getElementById("qText");
const options=document.getElementById("options");
const nextBtn=document.getElementById("nextBtn");

function renderQuestion(){
  const q=questions[qIndex];
  qText.textContent=q[0];
  options.innerHTML="";
  nextBtn.disabled=true;
  selected=null;

  q[1].forEach((opt)=>{
    const d=document.createElement("div");
    d.className="opt";
    d.textContent=opt;
    d.onclick=()=>{
      selected=opt;
      nextBtn.disabled=false;
      [...options.children].forEach(e=>e.style.outline="none");
      d.style.outline="2px solid #2d74ff";
    };
    options.appendChild(d);
  });
}

nextBtn.onclick=()=>{
  points[selected]+=1;
  qIndex++;
  if(qIndex<questions.length) renderQuestion();
  else{
    document.getElementById("quizCard").style.display="none";
    document.getElementById("leadCard").style.display="block";
  }
};

renderQuestion();

document.getElementById("leadSubmitBtn").onclick=()=>{
  const name=leadName.value.trim();
  const whats=leadWhats.value.replace(/\D/g,"");
  const email=leadEmail.value.trim();

  if(!name||whats.length<10||!email.includes("@")){
    leadError.textContent="Preencha todos os campos corretamente.";
    return;
  }

  const ranked=Object.keys(points).sort((a,b)=>points[b]-points[a]);
  const top=ranked[0];

  // ENVIO SEM ESPERAR RESPOSTA (NÃO DÁ ERRO)
  fetch(SHEETS_WEBAPP_URL,{
    method:"POST",
    mode:"no-cors",
    body:JSON.stringify({
      createdAt:new Date().toISOString(),
      name,whatsapp:whats,email,
      topArea:top,
      scores:points
    })
  });

  // RESULTADO VISUAL
  document.getElementById("leadCard").style.display="none";
  document.getElementById("resultCard").style.display="block";
  document.getElementById("topAreaName").textContent=top;
  document.getElementById("topAreaDesc").textContent=AREAS[top].desc;

  const ul=document.getElementById("courseList");
  ul.innerHTML="";
  AREAS[top].courses.forEach(c=>{
    const li=document.createElement("li");
    li.textContent=c;
    ul.appendChild(li);
  });

  new Chart(document.getElementById("areaChart"),{
    type:"doughnut",
    data:{
      labels:ranked,
      datasets:[{data:ranked.map(a=>points[a])}]
    },
    options:{plugins:{legend:{position:"bottom"}}}
  });
};
