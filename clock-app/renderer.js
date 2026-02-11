const { ipcRenderer } = require('electron');
const remote = require('electron').remote || require('@electron/remote');

// 要素取得
const hourHand = document.getElementById('hourHand');
const minuteHand = document.getElementById('minuteHand');
const secondHand = document.getElementById('secondHand');
const digitalTime = document.getElementById('digitalTime');
const digitalDate = document.getElementById('digitalDate');
const closeBtn = document.getElementById('closeBtn');

// 曜日名
const dayNames = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];

// 閉じるボタン
closeBtn.addEventListener('click', () => {
  window.close();
});

// 時計を更新
function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const milliseconds = now.getMilliseconds();

  // 滑らかな秒針のための計算
  const smoothSeconds = seconds + milliseconds / 1000;
  const smoothMinutes = minutes + smoothSeconds / 60;
  const smoothHours = (hours % 12) + smoothMinutes / 60;

  // アナログ時計の針を回転
  const secondDeg = smoothSeconds * 6;     // 360 / 60
  const minuteDeg = smoothMinutes * 6;     // 360 / 60
  const hourDeg = smoothHours * 30;        // 360 / 12

  secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;

  // デジタル時計を更新
  const timeStr = [
    String(hours).padStart(2, '0'),
    String(minutes).padStart(2, '0'),
    String(seconds).padStart(2, '0'),
  ].join(':');
  digitalTime.textContent = timeStr;

  // 日付を更新
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const day = dayNames[now.getDay()];
  digitalDate.textContent = `${year}年${month}月${date}日 ${day}`;
}

// 60fpsで更新
function tick() {
  updateClock();
  requestAnimationFrame(tick);
}

tick();
