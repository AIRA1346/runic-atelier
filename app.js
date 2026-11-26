// Runic Atelier Official Studio Hub — Bilingual (KO / EN) + Theme + Channel Registry
// Update `STUDIO_CHANNELS` below whenever you open or link a new official channel URL.

const STUDIO_CHANNELS = [
  {
    nameKo: 'ARCHE 공개 웹 위키',
    nameEn: 'ARCHE Public Web Wiki',
    subKo: '로그인 없이 감상하는 판타지 세계관 정본 위키',
    subEn: 'Account-free read-only fantasy worldbuilding wiki',
    url: 'https://wiki.akashalibrary.com',
  },
  {
    nameKo: 'AKASHA 공식 사이트',
    nameEn: 'AKASHA Official Website',
    subKo: '평생의 개인 기록 서고 · Steam 5개 언어 지원',
    subEn: 'Personal lifelong archive · 5 languages on Steam',
    url: 'https://akashalibrary.com/',
  },
  {
    nameKo: 'Steam 개발자 (Runic Atelier)',
    nameEn: 'Steam — Runic Atelier',
    subKo: 'AKASHA 출시 중 · ARCHE 심사 진행 중',
    subEn: 'AKASHA live · ARCHE currently in Valve review',
    url: 'https://store.steampowered.com/app/4677560/AKASHA/',
  },
  {
    nameKo: 'YouTube · X · Reddit · TikTok · Instagram',
    nameEn: 'YouTube · X · Reddit · TikTok · Instagram',
    subKo: '개발 과정과 철학을 나누는 공방 채널 준비 중 (개설 즉시 연결)',
    subEn: 'Build-in-public devlog channels opening soon',
    url: null,
  },
];

const COPY = {
  ko: {
    pageTitle: 'Runic Atelier — 룬 아뜰리에',
    navPhilosophy: '철학',
    navProjects: '프로젝트',
    navWorkshop: '공방 소식',
    heroEyebrow: 'INDEPENDENT ONE-PERSON SOFTWARE WORKSHOP',
    heroTitle: '가치 있다고 믿는 것을,<br>오래 남는 방식으로 직접 만듭니다.',
    heroSubtitle: '광고와 강제 구독 없이, 사람이 자기 기억과 세계의 주인이 되는 조용하고 단단한 도구를 깎아 만드는 1인 공방 <strong>룬 아뜰리에(Runic Atelier)</strong>입니다.',
    heroCtaPrimary: '프로젝트 둘러보기',
    heroCtaSecondary: 'ARCHE 공개 웹 위키 열기 ↗',
    philKicker: 'OUR PRINCIPLES',
    philTitle: '공방이 지키는 세 가지 기준',
    p1Title: '사람이 주인이 되는 기록과 세계',
    p1Body: '플랫폼이나 특정 AI에 종속되지 않도록, 평문 원본·출처·판본 이력을 사용자와 공동체 손에 오래 남깁니다.',
    p2Title: '낮은 유지 부담과 정직한 지속성',
    p2Body: '강제 광고나 원치 않는 과금 대신, 1인 공방이 오래 책임지고 운영할 수 있는 단단하고 가벼운 구조를 설계합니다.',
    p3Title: '결과보다 투명한 제작 과정',
    p3Body: '직접 쓰지 않아도 응원할 만한 의미를 지향하며, 왜 이런 선택을 했는지 고민과 시행착오까지 솔직하게 기록합니다.',
    projKicker: 'PROJECTS',
    projTitle: '만들고 있는 것들',
    projLead: '개인의 평생 기억을 지키는 서고부터, 여럿이 함께 짓는 판타지 세계와 나만의 선별 나침반까지.',
    akashaTag: '1호 프로젝트 · 개인 서고',
    akashaStatus: 'Steam 출시 중 · v1.8',
    akashaDesc: '사람이 자기 삶과 자신이 바라본 세계를 잃지 않도록 지켜 주는 평생의 개인 아카이브입니다. 감상·일기·메모를 특정 서비스에 가두지 않고 사용자 소유의 원본 서고로 보존하며, 5개 언어를 지원합니다.',
    akashaPt1: '사용자 소유 평문 원본 서고 & 출처·개정 이력 보존',
    akashaPt2: 'Steam 정식 출시(한국어·영어·일본어·중국어 간체/번체)',
    akashaPt3: 'Google Drive Vault 다중 PC 연동 & 에이전트 기억 바닥 고도화 중',
    akashaLinkWeb: 'AKASHA 공식 사이트 ↗',
    akashaLinkSteam: 'Steam 스토어 ↗',
    archeTag: '2호 프로젝트 · 공동 세계관',
    archeStatus: 'Steam 심사 중 · 웹 위키 라이브',
    archeDesc: '마법과 종족, 생태와 법칙의 근거를 함께 토론하며 하나의 일관된 판타지 세계를 쌓아 올리는 무료 협업 위키 앱입니다. Steam 앱에서 자동 로그인으로 편집 제안과 토론에 참여하고, 누구나 웹에서 로그인 없이 감상할 수 있습니다.',
    archePt1: '120여 개 기본 정본 문서 · 8개 세계관 도메인 · 35종족 다축 비교 표',
    archePt2: '문단별 편집 제안 · 줄 단위 Diff 비교 · 세계관 정합성 자가 점검 허브',
    archePt3: '계정 없이 바로 읽는 공개 웹 위키 & 한국어·영어 UI 제자리 전환',
    archeLinkWiki: '공개 웹 위키 감상하기 ↗',
    archeLinkLegal: '정책 · 약관 안내 ↗',
    pharosTag: 'Runic Atelier Lab',
    pharosStatus: '정적 웹 앱 라이브 · 600+ 항목',
    pharosDesc: '평균 별점과 광고에 휘둘리지 않고, 나만의 가중치와 절대 거름 조건(강제 광고·확률형 아이템·불투명 크레딧 등)으로 앱·게임·AI 도구를 브라우저 안에서 바로 선별하는 정적 웹 나침반입니다.',
    pharosLinkKo: 'Pharos 열기 (한국어) ↗',
    pharosLinkEn: 'Open Pharos (English) ↗',
    wsKicker: 'MAKER & BUILD IN PUBLIC',
    wsTitle: '만드는 과정도 함께 기록합니다',
    wsBody1: '룬 아뜰리에는 가치 있다고 믿는 도구를 오래 남는 방식으로 직접 깎아 만드는 독립 공방입니다. 화려한 마케팅 문구 대신, 왜 이런 구조를 선택했고 어떤 시행착오를 겪었는지 개발 과정과 철학을 꾸준히 나누고 있습니다.',
    wsBody2: '제품 제안, 버그 제보, 협업 문의, 혹은 그냥 응원 한마디까지 언제든 편하게 연락해 주세요.',
    wsContactLabel: '공식 개발사 연락처',
    chTitle: '공방 채널',
    chNote: '개발 일지와 쇼케이스 영상, 오픈 리소스를 모아 두는 공간입니다.',
    badgeLive: '열기 ↗',
    badgeSoon: '개설 예정',
    footerLegal: 'ARCHE 법적 안내',
    footerLicense: '폰트 라이선스',
  },
  en: {
    pageTitle: 'Runic Atelier — Independent One-Person Workshop',
    navPhilosophy: 'Philosophy',
    navProjects: 'Projects',
    navWorkshop: 'Workshop',
    heroEyebrow: 'INDEPENDENT ONE-PERSON SOFTWARE WORKSHOP',
    heroTitle: 'We craft lasting tools<br>we truly believe in.',
    heroSubtitle: '<strong>Runic Atelier</strong> is a quiet one-person software workshop building durable, user-owned tools for personal memory and shared worldbuilding—without ads or forced subscriptions.',
    heroCtaPrimary: 'Explore Projects',
    heroCtaSecondary: 'Browse ARCHE Web Wiki ↗',
    philKicker: 'OUR PRINCIPLES',
    philTitle: 'Three Principles of the Workshop',
    p1Title: 'Human Ownership of Records & Worlds',
    p1Body: 'Plain-text archives, clear provenance, and transparent revision histories ensure your memories and lore never belong to a locked platform or black-box AI.',
    p2Title: 'Low Overhead, Honest Sustainability',
    p2Body: 'Instead of invasive ads or bloated cloud bills, we design lean architectures that an independent workshop can maintain responsibly for the long run.',
    p3Title: 'Transparent Craft Over Hype',
    p3Body: 'We aim to build projects worth cheering for even if you never install them—sharing real design trade-offs, mistakes, and lessons in the open.',
    projKicker: 'PROJECTS',
    projTitle: 'What We Are Building',
    projLead: 'From a lifelong personal archive to a collaborative fantasy worldbuilding wiki and a personal criteria compass.',
    akashaTag: 'Flagship #1 · Personal Archive',
    akashaStatus: 'Live on Steam · v1.8',
    akashaDesc: 'A lifelong personal library that helps you preserve your life, media memories, and reflections without losing ownership. Your plain-text records stay yours forever, available in 5 languages.',
    akashaPt1: 'User-owned plain-text vault with strict provenance & revision tracking',
    akashaPt2: 'Live on Steam in Korean, English, Japanese, Simplified & Traditional Chinese',
    akashaPt3: 'In active development: multi-PC Google Drive Vault sync & agent memory foundation',
    akashaLinkWeb: 'AKASHA Website ↗',
    akashaLinkSteam: 'View on Steam ↗',
    archeTag: 'Flagship #2 · Shared Worldbuilding',
    archeStatus: 'In Steam Review · Web Wiki Live',
    archeDesc: 'A free collaborative fantasy worldbuilding wiki and desktop app where creators debate magic laws, compare species, and grow one coherent universe together—with an account-free public web wiki for readers.',
    archePt1: '120+ interconnected starter entries across 8 domains & 35-species comparison matrices',
    archePt2: 'Section-level edit proposals, line-by-line diffs, and automated Consistency Audit',
    archePt3: 'Account-free public web wiki & in-place Korean / English interface switching',
    archeLinkWiki: 'Read Public Web Wiki ↗',
    archeLinkLegal: 'Policies & Terms ↗',
    pharosTag: 'Runic Atelier Lab',
    pharosStatus: 'Live Static Web App · 600+ Items',
    pharosDesc: 'A client-side compass for filtering apps, games, and AI tools by your own weights and hard dealbreakers (forced ads, gacha, opaque credits) instead of noisy star averages.',
    pharosLinkKo: 'Open Pharos (KO) ↗',
    pharosLinkEn: 'Open Pharos (English) ↗',
    wsKicker: 'MAKER & BUILD IN PUBLIC',
    wsTitle: 'Sharing the Craft in the Open',
    wsBody1: 'Runic Atelier is an independent workshop crafting tools we truly believe in for the long run. Rather than polished corporate marketing, we share honest devlogs on architecture choices, sustainable design trade-offs, and the philosophy behind each tool.',
    wsBody2: 'Questions, bug reports, collaboration ideas, or a simple hello are always welcome.',
    wsContactLabel: 'Official Studio Contact',
    chTitle: 'Workshop Channels',
    chNote: 'Live portals, Steam releases, and upcoming build-in-public devlog channels.',
    badgeLive: 'Visit ↗',
    badgeSoon: 'Coming Soon',
    footerLegal: 'ARCHE Legal & Privacy',
    footerLicense: 'Font License',
  },
};

function resolveInitialLang() {
  const params = new URLSearchParams(window.location.search);
  const queryLang = params.get('lang');
  if (queryLang === 'en' || queryLang === 'ko') return queryLang;
  try {
    const saved = localStorage.getItem('runicatelier:lang');
    if (saved === 'en' || saved === 'ko') return saved;
  } catch {}
  return navigator.language && !navigator.language.toLowerCase().startsWith('ko') ? 'en' : 'ko';
}

function resolveInitialTheme() {
  try {
    const saved = localStorage.getItem('runicatelier:theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {}
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function renderChannels(lang) {
  const list = document.getElementById('channel-list');
  if (!list) return;
  const dict = COPY[lang];
  list.innerHTML = STUDIO_CHANNELS.map(ch => {
    const name = lang === 'en' ? ch.nameEn : ch.nameKo;
    const sub = lang === 'en' ? ch.subEn : ch.subKo;
    if (ch.url) {
      return `<a class="channel-item" href="${ch.url}" target="_blank" rel="noopener noreferrer">`
        + `<span class="channel-meta"><span class="channel-name">${name}</span><span class="channel-sub">${sub}</span></span>`
        + `<span class="channel-badge channel-badge-live">${dict.badgeLive}</span></a>`;
    }
    return `<div class="channel-item">`
      + `<span class="channel-meta"><span class="channel-name">${name}</span><span class="channel-sub">${sub}</span></span>`
      + `<span class="channel-badge channel-badge-soon">${dict.badgeSoon}</span></div>`;
  }).join('');
}

function applyLang(lang) {
  const safeLang = lang === 'en' ? 'en' : 'ko';
  const dict = COPY[safeLang];
  document.documentElement.lang = safeLang;
  document.title = dict.pageTitle;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!key || !(key in dict)) return;
    if (key === 'heroTitle' || key === 'heroSubtitle') {
      el.innerHTML = dict[key];
    } else {
      el.textContent = dict[key];
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const active = btn.getAttribute('data-lang') === safeLang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
  renderChannels(safeLang);
  try { localStorage.setItem('runicatelier:lang', safeLang); } catch {}
}

function applyTheme(theme) {
  const safeTheme = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', safeTheme);
  const icon = document.querySelector('#theme-toggle .theme-icon');
  if (icon) icon.textContent = safeTheme === 'dark' ? '☀' : '☾';
  try { localStorage.setItem('runicatelier:theme', safeTheme); } catch {}
}

document.addEventListener('DOMContentLoaded', () => {
  applyTheme(resolveInitialTheme());
  applyLang(resolveInitialLang());

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
  });

  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme');
      applyTheme(cur === 'dark' ? 'light' : 'dark');
    });
  }
});
