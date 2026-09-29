const translations = {
  "zh": {
    "skip": "跳转到内容",
    "navSounds": "聆听灵感",
    "navAbout": "关于我们",
    "heroTitle": "让想象，<br>成为<span class=\"outlined\">声音。</span>",
    "heroDescription": "当人类的灵感，遇见 AI 的无限可能。<br>在 sonavue，听见尚未被定义的音乐。",
    "explore": "探索声音宇宙",
    "meet": "认识 sonavue ",
    "heroNote": "为耳朵创造惊喜，为想象保留自由。",
    "scroll": "向下探索 ",
    "soundsTitle": "此刻，你想听见什么？",
    "soundsDescription": "让声音陪你进入不同的状态。<br>挑选一个场景，给今天一点新的灵感。",
    "night": "夜色漫游",
    "focus": "心流时刻",
    "dream": "放空宇宙",
    "footnote": "每一种心情，都值得拥有自己的配乐。",
    "aboutTitle": "科技创造声音。<br><span>感受，来自你。</span>",
    "lead": "sonavue 是一个以 AI 音乐为核心的创作频道。我们相信，新的创作工具，也能承载真实的情绪。",
    "aboutBody": "从一个念头、一种氛围，到一段意想不到的旋律，我们探索人工智能与音乐相遇的可能。让技术成为想象力的延伸，让每一次聆听，都有新的发现。",
    "principle1": "灵感，没有边界",
    "principle1Body": "不被单一风格定义，保持对声音的好奇。",
    "principle2": "音乐，回归感受",
    "principle2Body": "不论声音如何诞生，与你共鸣才有意义。",
    "joinTitle": "下一段旋律，<br>也许正好<span>懂你。</span>",
    "joinBody": "在 YouTube 遇见 sonavue，继续这场声音探索。",
    "footer": " sonavue. 让想象，成为声音。",
    "channel": "前往 YouTube 频道",
    "pause": "暂停动效",
    "resume": "开启动效",
    "scene": "灵感场景",
    "light": "切换亮色配色",
    "dark": "切换暗色配色",
    "home": "sonavue 首页",
    "back": "回到 sonavue 首页",
    "nav": "主导航",
    "scenes": "聆听场景",
    "external": "前往 sonavue YouTube 频道（新窗口）",
    "logo": "sonavue 银色金属字标，两侧展开蓝紫色羽翼",
    "title": "sonavue — 让想象，成为声音。",
    "description": "sonavue，一个探索 AI 音乐的 YouTube 频道。让想象成为旋律，发现属于你的声音宇宙。"
  },
  "en": {
    "skip": "Skip to content",
    "navSounds": "Explore",
    "navAbout": "About",
    "heroTitle": "Imagine it.<br><span class=\"outlined\">Hear it.</span>",
    "heroDescription": "Human inspiration. Infinite AI possibilities.<br>Discover a new world of sound with sonavue.",
    "explore": "Explore the sound",
    "meet": "Meet sonavue ",
    "heroNote": "Surprise your ears. Set your imagination free.",
    "scroll": "Explore more ",
    "soundsTitle": "Find your state of sound.",
    "soundsDescription": "A different sound for every state of mind.<br>Choose a mood. Find a little inspiration.",
    "night": "After hours",
    "focus": "In the flow",
    "dream": "Drift away",
    "footnote": "Every mood deserves its own soundtrack.",
    "aboutTitle": "Technology makes sound.<br><span>You give it meaning.</span>",
    "lead": "sonavue is a creative channel exploring AI music. We believe new ways of making music can carry real emotion.",
    "aboutBody": "From a passing thought or a feeling to an unexpected melody, we explore what happens when AI meets music. Technology extends our imagination, opening up something new with every listen.",
    "principle1": "Inspiration without limits",
    "principle1Body": "Stay curious about sound, beyond any single genre.",
    "principle2": "Music that moves you",
    "principle2Body": "However a sound is made, what matters is how it makes you feel.",
    "joinTitle": "Your next melody.<br>Your kind of <span>feeling.</span>",
    "joinBody": "Find sonavue on YouTube. Keep exploring the sound.",
    "footer": " sonavue. Imagination in sound.",
    "channel": "Visit YouTube channel",
    "pause": "Pause motion",
    "resume": "Enable motion",
    "scene": "Listening mood",
    "light": "Switch to light theme",
    "dark": "Switch to dark theme",
    "home": "sonavue home",
    "back": "Back to sonavue home",
    "nav": "Main navigation",
    "scenes": "Listening moods",
    "external": "Visit sonavue on YouTube (opens in a new tab)",
    "logo": "Silver sonavue wordmark with blue and purple wings",
    "title": "sonavue — Imagination in sound.",
    "description": "sonavue is a YouTube channel exploring AI music. Turn imagination into melodies and discover your world of sound."
  }
};
const root = document.documentElement;
function readPreference(key) { try { return localStorage.getItem(key); } catch { return null; } }
function savePreference(key, value) { try { localStorage.setItem(key, value); } catch {} }
const savedLanguage = readPreference('sonavue-language');
let language = ['zh', 'en'].includes(savedLanguage) ? savedLanguage : (navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en');
const t = key => translations[language][key];
const moods = {
  night: { category: 'THE LATE-NIGHT STATE OF MIND', title: '把城市调成静音。', description: '让思绪沿着旋律漫游，把白天的喧嚣留在身后。', index: '01' },
  focus: { category: 'A LITTLE SPACE FOR YOUR MIND', title: '让灵感，慢慢浮现。', description: '给纷繁的念头一点空间，找到属于自己的专注节奏。', index: '02' },
  dream: { category: 'SOMEWHERE BEYOND THE EVERYDAY', title: '暂时离开地心引力。', description: '闭上眼，让想象自由漂浮。此刻，不必急着抵达。', index: '03' }
};
const englishMoods = {
  night: { title: 'Turn the city down.', description: 'Follow the melody into the night. Leave the noise of the day behind.' },
  focus: { title: 'Let inspiration find you.', description: 'Make room for your thoughts and settle into your own rhythm.' },
  dream: { title: 'Leave gravity behind.', description: 'Close your eyes and let your imagination drift. There is no rush to arrive.' }
};
const tabs = [...document.querySelectorAll('[role="tab"]')];
const panel = document.querySelector('#mood-panel');
function selectMood(tab) {
  const mood = { ...moods[tab.dataset.mood], ...(language === 'en' ? englishMoods[tab.dataset.mood] : {}) };
  tabs.forEach(item => {
    const active = item === tab;
    item.classList.toggle('active', active);
    item.setAttribute('aria-selected', String(active));
    item.tabIndex = active ? 0 : -1;
  });
  panel.dataset.theme = tab.dataset.mood;
  panel.setAttribute('aria-labelledby', tab.id);
  document.querySelector('#mood-category').textContent = mood.category;
  document.querySelector('#mood-title').textContent = mood.title;
  document.querySelector('#mood-description').textContent = mood.description;
  document.querySelector('#mood-index').textContent = mood.index;
  document.querySelector('#mood-kicker').textContent = `${t('scene')} / ${mood.index}`;
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectMood(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); selectMood(tabs[next]); tabs[next].focus(); }
  });
});
const mobile = matchMedia('(max-width: 700px)');
function updateOrientation() { document.querySelector('[role="tablist"]').setAttribute('aria-orientation', mobile.matches ? 'horizontal' : 'vertical'); }
mobile.addEventListener('change', updateOrientation);
updateOrientation();
const wave = document.querySelector('.frequency');
for (let i = 0; i < 75; i++) {
  const bar = document.createElement('i');
  bar.style.setProperty('--height', `${12 + Math.abs(Math.sin(i * .71) * Math.cos(i * .17)) * 83}px`);
  bar.style.setProperty('--delay', `${-i * .13}s`);
  wave.append(bar);
}
const motionButton = document.querySelector('#motion-toggle');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
function setMotion(paused) {
  document.documentElement.classList.toggle('motion-paused', paused);
  motionButton.setAttribute('aria-pressed', String(paused));
  motionButton.textContent = paused ? t('resume') : t('pause');
}
setMotion(reduceMotion.matches);
if (reduceMotion.matches) { motionButton.hidden = true; }
motionButton.addEventListener('click', () => setMotion(!document.documentElement.classList.contains('motion-paused')));
document.querySelector('#year').textContent = new Date().getFullYear();

const languageButton = document.querySelector('#language-toggle');
const themeButton = document.querySelector('#theme-toggle');
const systemTheme = matchMedia('(prefers-color-scheme: light)');
function applyTheme(theme) {
  root.dataset.colorTheme = theme;
  const light = theme === 'light';
  themeButton.setAttribute('aria-pressed', String(light));
  themeButton.setAttribute('aria-label', t(light ? 'dark' : 'light'));
  themeButton.title = t(light ? 'dark' : 'light');
  themeButton.firstElementChild.textContent = light ? '☾' : '☼';
  document.querySelector('meta[name="theme-color"]').content = light ? '#f4f7f6' : '#080b0d';
}
function applyLanguage() {
  root.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(element => {
    // Translation markup is authored locally, never supplied by a visitor.
    element.innerHTML = t(element.dataset.i18n);
  });
  document.title = t('title');
  document.querySelector('meta[name="description"]').content = t('description');
  document.querySelector('meta[property="og:title"]').content = t('title');
  document.querySelector('meta[property="og:description"]').content = t('description');
  const labels = { '.site-header .wordmark': 'home', '.site-footer .wordmark': 'back', 'nav': 'nav', '[role="tablist"]': 'scenes' };
  Object.entries(labels).forEach(([selector, key]) => document.querySelector(selector).setAttribute('aria-label', t(key)));
  document.querySelectorAll('[data-channel]').forEach(link => link.setAttribute('aria-label', t('external')));
  document.querySelector('.hero-art img').alt = t('logo');
  languageButton.textContent = language === 'zh' ? 'EN' : '中文';
  languageButton.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换为中文');
  languageButton.lang = language === 'zh' ? 'en' : 'zh-CN';
  selectMood(tabs.find(tab => tab.getAttribute('aria-selected') === 'true'));
  setMotion(root.classList.contains('motion-paused'));
  applyTheme(root.dataset.colorTheme);
}
languageButton.addEventListener('click', () => {
  language = language === 'zh' ? 'en' : 'zh';
  savePreference('sonavue-language', language);
  applyLanguage();
});
themeButton.addEventListener('click', () => {
  const theme = root.dataset.colorTheme === 'light' ? 'dark' : 'light';
  savePreference('sonavue-theme', theme);
  applyTheme(theme);
});
systemTheme.addEventListener('change', event => {
  if (!['light', 'dark'].includes(readPreference('sonavue-theme'))) applyTheme(event.matches ? 'light' : 'dark');
});
applyLanguage();
