// eslint-disable-next-line func-names
function ending() {
  const endingHtml = `
  <h1>HAPPY 4TH OF JULY</h1>
  <div class="fireworks">
    <div class="firework">
      <div class="explosion"><div class="spark green"></div></div>
      <div class="explosion"><div class="spark blue"></div></div>
      <div class="explosion"><div class="spark red"></div></div>
      <div class="explosion"><div class="spark red"></div></div>
      <div class="explosion"><div class="spark yellow"></div></div>
      <div class="explosion"><div class="spark blue"></div></div>
      <div class="explosion"><div class="spark green"></div></div>
      <div class="explosion"><div class="spark yellow"></div></div>
    </div>
    <div class="firework" style="margin-top: -70px">
      <div class="explosion"><div class="spark green"></div></div>
      <div class="explosion"><div class="spark blue"></div></div>
      <div class="explosion"><div class="spark red"></div></div>
      <div class="explosion"><div class="spark red"></div></div>
      <div class="explosion"><div class="spark yellow"></div></div>
      <div class="explosion"><div class="spark blue"></div></div>
      <div class="explosion"><div class="spark green"></div></div>
      <div class="explosion"><div class="spark yellow"></div></div>
    </div>
    <div class="firework">
      <div class="explosion"><div class="spark green"></div></div>
      <div class="explosion"><div class="spark blue"></div></div>
      <div class="explosion"><div class="spark red"></div></div>
      <div class="explosion"><div class="spark red"></div></div>
      <div class="explosion"><div class="spark yellow"></div></div>
      <div class="explosion"><div class="spark blue"></div></div>
      <div class="explosion"><div class="spark green"></div></div>
      <div class="explosion"><div class="spark yellow"></div></div>
    </div>
    <div class="firework" style="margin-top: 70px">
      <div class="explosion"><div class="spark green"></div></div>
      <div class="explosion"><div class="spark blue"></div></div>
      <div class="explosion"><div class="spark red"></div></div>
      <div class="explosion"><div class="spark red"></div></div>
      <div class="explosion"><div class="spark yellow"></div></div>
      <div class="explosion"><div class="spark blue"></div></div>
      <div class="explosion"><div class="spark green"></div></div>
      <div class="explosion"><div class="spark yellow"></div></div>
    </div>
    <div class="firework">
      <div class="explosion"><div class="spark green"></div></div>
      <div class="explosion"><div class="spark blue"></div></div>
      <div class="explosion"><div class="spark red"></div></div>
      <div class="explosion"><div class="spark red"></div></div>
      <div class="explosion"><div class="spark yellow"></div></div>
      <div class="explosion"><div class="spark blue"></div></div>
      <div class="explosion"><div class="spark green"></div></div>
      <div class="explosion"><div class="spark yellow"></div></div>
    </div>
    <div class="firework" style="margin-top: -70px">
      <div class="explosion"><div class="spark green"></div></div>
      <div class="explosion"><div class="spark blue"></div></div>
      <div class="explosion"><div class="spark red"></div></div>
      <div class="explosion"><div class="spark red"></div></div>
      <div class="explosion"><div class="spark yellow"></div></div>
      <div class="explosion"><div class="spark blue"></div></div>
      <div class="explosion"><div class="spark green"></div></div>
      <div class="explosion"><div class="spark yellow"></div></div>
    </div>
    <div class="firework">
      <div class="explosion"><div class="spark green"></div></div>
      <div class="explosion"><div class="spark blue"></div></div>
      <div class="explosion"><div class="spark red"></div></div>
      <div class="explosion"><div class="spark red"></div></div>
      <div class="explosion"><div class="spark yellow"></div></div>
      <div class="explosion"><div class="spark blue"></div></div>
      <div class="explosion"><div class="spark green"></div></div>
      <div class="explosion"><div class="spark yellow"></div></div>
    </div>
  </div>
`;
  const endingFrame = document.createElement('div');
  endingFrame.classList.add('ending-frame');
  endingFrame.innerHTML = endingHtml;
  const container = document.querySelector('.container');
  container.append(endingFrame);
}
