const copy = {
  zh: {skip:'跳转到内容',music:'音乐',about:'关于',intro:'独立 AI 音乐创作。',listen:'在 YouTube 聆听',soundsTitle:'聆听。',all:'全部音乐',night:'夜色',focus:'心流',dream:'漫游',mood:'聆听场景',musicNote:'所有音乐均在 YouTube 频道发布。',bio:'以 AI 为创作工具，探索声音与想象。',visit:'进入频道',pause:'暂停动效',resume:'开启动效',top:'返回顶部 ↑',light:'切换亮色配色',dark:'切换暗色配色',description:'sonavue · AI 音乐创作。于 YouTube 聆听。',nav:'主导航',scroll:'浏览音乐',logo:'sonavue 银色字标与蓝紫色羽翼'},
  en: {skip:'Skip to content',music:'Music',about:'About',intro:'Independent AI music.',listen:'Listen on YouTube',soundsTitle:'Listen.',all:'All music',night:'After hours',focus:'In the flow',dream:'Drift away',mood:'Listening mood',musicNote:'All music is available on our YouTube channel.',bio:'Exploring sound and imagination with AI.',visit:'Visit channel',pause:'Pause motion',resume:'Enable motion',top:'Back to top ↑',light:'Switch to light theme',dark:'Switch to dark theme',description:'sonavue · Independent AI music. Listen on YouTube.',nav:'Main navigation',scroll:'Explore music',logo:'Silver sonavue wordmark with blue and purple wings'}
};
const root = document.documentElement;
const read = key => {try{return localStorage.getItem(key)}catch{return null}};
const save = (key,value) => {try{localStorage.setItem(key,value)}catch{}};
let language = read('sonavue-language') || (navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en');
if (!copy[language]) language = 'zh';
const languageButton = document.querySelector('#language-toggle');
const themeButton = document.querySelector('#theme-toggle');
const motionButton = document.querySelector('#motion-toggle');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
let paused = reduced.matches;
const t = key => copy[language][key];
function applyMotion(){root.classList.toggle('motion-paused',paused);motionButton.textContent=t(paused?'resume':'pause');motionButton.setAttribute('aria-pressed',String(paused));motionButton.hidden=reduced.matches;}
function applyTheme(theme){root.dataset.colorTheme=theme;themeButton.textContent=theme==='light'?'☾':'☼';themeButton.setAttribute('aria-pressed',String(theme==='light'));themeButton.setAttribute('aria-label',t(theme==='light'?'dark':'light'));document.querySelector('meta[name="theme-color"]').content=theme==='light'?'#efedf2':'#08090c';}
function applyLanguage(){root.lang=language==='zh'?'zh-CN':'en';document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n));languageButton.textContent=language==='zh'?'EN':'中文';languageButton.setAttribute('aria-label',language==='zh'?'Switch to English':'切换到中文');document.querySelector('nav').setAttribute('aria-label',t('nav'));document.querySelector('.scroll-link').setAttribute('aria-label',t('scroll'));document.querySelector('.hero-art img').alt=t('logo');document.querySelector('.edition').textContent=language==='zh'?'SONAVUE / 音乐创作':'SONAVUE / INDEPENDENT MUSIC';document.querySelector('meta[name="description"]').content=t('description');document.querySelector('meta[property="og:description"]').content=t('description');applyTheme(root.dataset.colorTheme||'dark');applyMotion();}
languageButton.addEventListener('click',()=>{language=language==='zh'?'en':'zh';save('sonavue-language',language);applyLanguage();});
themeButton.addEventListener('click',()=>{const theme=root.dataset.colorTheme==='light'?'dark':'light';save('sonavue-theme',theme);applyTheme(theme);});
motionButton.addEventListener('click',()=>{paused=!paused;applyMotion();});
reduced.addEventListener('change',()=>{paused=reduced.matches;applyMotion();});
document.querySelector('#year').textContent=new Date().getFullYear();
applyLanguage();
