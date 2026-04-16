const photos = [
  { id: 1, date: '2026-04-06', desc: '第一次独立拼好100片拼图', cover: '../assets/images/photo-1.svg' },
  { id: 2, date: '2026-04-11', desc: '春游时收集了好多小树叶', cover: '../assets/images/photo-2.svg' },
  { id: 3, date: '2026-04-15', desc: '睡前讲故事会主动提问题', cover: '../assets/images/photo-3.svg' },
];

let route = { name: 'home' };
let liked = false;
let favorited = false;

function setRoute(next) {
  route = next;
  render();
}

function homeView() {
  return `
    <section class="card hero" id="hero">
      <img src="../assets/images/avatar.svg" alt="avatar" />
      <div>
        <h1>小星星 · 4岁2个月</h1>
        <p>记录每一个第一次，每一次长大</p>
      </div>
    </section>

    <section class="actions">
      <button class="btn-glass" data-act="timeline">浏览时间轴</button>
      <button class="btn-gold" data-act="toast">回忆播放（Demo）</button>
    </section>

    <section class="card highlight">
      <strong>本月成长亮点</strong>
      <p style="margin:8px 0 0;color:#5b6985;">第一次自己系鞋带、会完整背诵《静夜思》。</p>
    </section>
  `;
}

function timelineView() {
  return `
    <section class="top">
      <h2>成长时间轴</h2>
      <button class="btn-glass" data-act="home">返回首页</button>
    </section>
    <section class="grid">
      ${photos.map((p) => `
        <article class="item" data-id="${p.id}">
          <img src="${p.cover}" alt="${p.desc}" />
          <div class="overlay">
            <div style="font-size:12px;opacity:.9">${p.date}</div>
            <div>${p.desc}</div>
          </div>
        </article>
      `).join('')}
    </section>
  `;
}

function detailView(id) {
  const item = photos.find((p) => p.id === Number(id));
  if (!item) return '<p>记录不存在</p>';
  return `
    <img class="photo" src="${item.cover}" alt="${item.desc}" />
    <section class="card panel">
      <div class="date">${item.date}</div>
      <div class="desc">${item.desc}</div>
      <div class="row">
        <button class="chip like ${liked ? 'on' : ''}" data-act="like">❤ 点赞</button>
        <button class="chip fav ${favorited ? 'on' : ''}" data-act="fav">★ 收藏</button>
      </div>
    </section>
    <button class="btn-glass back" data-act="timeline">返回时间轴</button>
    <div class="note">这是网页预览版，用于浏览器演示交互。</div>
  `;
}

function render() {
  const app = document.getElementById('app');
  if (route.name === 'home') app.innerHTML = homeView();
  if (route.name === 'timeline') app.innerHTML = timelineView();
  if (route.name === 'detail') app.innerHTML = detailView(route.id);

  const hero = document.getElementById('hero');
  if (hero) requestAnimationFrame(() => hero.classList.add('in'));
}

document.addEventListener('click', (e) => {
  const act = e.target.dataset.act;
  if (act === 'timeline') return setRoute({ name: 'timeline' });
  if (act === 'home') return setRoute({ name: 'home' });
  if (act === 'toast') return alert('回忆播放功能演示中');
  if (act === 'like') {
    liked = !liked;
    return render();
  }
  if (act === 'fav') {
    favorited = !favorited;
    return render();
  }

  const card = e.target.closest('.item');
  if (card) {
    liked = false;
    favorited = false;
    setRoute({ name: 'detail', id: card.dataset.id });
  }
});

render();
