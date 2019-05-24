/*
 * 집에가고싶'조'
 * 김들이, 황유순
 */

// versionState
// console.log 실행여부
// 0 : release -> console.log 출력 안함
// 1 : develop -> console.log 출력
const versionState = 1;

function game(targetNum) {
  const $map = document.querySelector('.map-div');
  const $targetList = document.querySelector('.target-list');
  const $gameController = document.querySelector('.game-controller');
  // 찾을 환승역의 총 수
  const TARGET_COUNT = targetNum;

  // 찾을 환승역, 타켓 환승역 리스트 생성자
  function STATION_PROTO() {}

  // 객체에 프로퍼티 수 return을 위한 prototype 매개변수;
  // 화살표 생성자 사용시 this가 전역이 됨
  STATION_PROTO.prototype.length = function () {
    return Object.keys(this).length;
  };

  // 전체 환승역 리스트
  // 표시 번호와 배열 index 일치를 위하여 index 0에 objec의 property 정보 입력 후 index 1부터 환승역 객체 입력
  const STATION_LIST = [
    {
      x: 'left',
      y: 'top',
      id: 'TAGET_STATION 프로퍼티',
      stationName: '역 이름',
      status: '상태'
    }
  ];
  // 찾을 환승역 리스트
  const TARGET_STATION = new STATION_PROTO();
  const TOTAL_STATION_COUNT = 39;

  // 선택 성공 갯수
  let successCount = 0;

  // 환승역 선택 버튼 동작 여부
  let toggleStatus = true;

  /* function printLog(log)
   * console.log 일괄 관리
   * versionState가 1이면 주석 표시, 0이면 미표시
   * log : log 출력 내용
   */
  function printLog(log) {
    if (versionState) {
      console.log(
        `${'-'.repeat(30)}${arguments.callee.caller.name}${'-'.repeat(30)}`
      );
      console.log(log);
    }
  }

  /* function TransferStation(x, y, id, stationName, status = 0)
   * 환승역 생성자
   * x : x좌표
   * y : y좌표
   * id : 역 약어
   * status : 0 기본, 1 문제, 2 맞춤
   * stationName : 환승역 명
   */
  function TransferStation(x, y, id, stationName, status = 0) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.stationName = stationName;
    this.status = status;
  }

  // 전체 환승역 객체 생성
  function setStation() {
    STATION_LIST[1] = new TransferStation(434, 445, 'gn', '강남');
    STATION_LIST[2] = new TransferStation(510, 248, 'gnco', '강남구청');
    STATION_LIST[3] = new TransferStation(575, 165, 'ku', '건대입구');
    STATION_LIST[4] = new TransferStation(391, 351, 'gt', '고속터미널');
    STATION_LIST[5] = new TransferStation(160, 175, 'gd', '공덕');
    STATION_LIST[6] = new TransferStation(391, 445, 'sune', '교대');
    STATION_LIST[7] = new TransferStation(208, 319, 'ny', '노량진');
    STATION_LIST[8] = new TransferStation(36, 232, 'ds', '당산');
    STATION_LIST[9] = new TransferStation(42, 390, 'dl', '대림');
    STATION_LIST[10] = new TransferStation(334, 47, 'dp', '동대문역사문화공원');
    STATION_LIST[11] = new TransferStation(306, 327, 'dj', '동작');
    STATION_LIST[12] = new TransferStation(306, 445, 'sd', '사당');
    STATION_LIST[13] = new TransferStation(274, 175, 'skg', '삼각지');
    STATION_LIST[14] = new TransferStation(221, 132, 'seoul', '서울역');
    STATION_LIST[15] = new TransferStation(510, 443, 'sl', '선릉');
    STATION_LIST[16] = new TransferStation(510, 388, 'sjl', '선정릉');
    STATION_LIST[17] = new TransferStation(575, 130, 'ss', '성수');
    STATION_LIST[18] = new TransferStation(220, 47, 'co', '시청');
    STATION_LIST[19] = new TransferStation(127, 330, 'sg', '신길');
    STATION_LIST[20] = new TransferStation(397, 47, 'sind', '신당');
    STATION_LIST[21] = new TransferStation(36, 330, 'sdl', '신도림');
    STATION_LIST[22] = new TransferStation(397, 128, 'ys', '약수');
    STATION_LIST[23] = new TransferStation(164, 281, 'yud', '여의도');
    STATION_LIST[24] = new TransferStation(36, 273, 'ydpco', '영등포구청');
    STATION_LIST[25] = new TransferStation(391, 219, 'oks', '옥수');
    STATION_LIST[26] = new TransferStation(510, 53, 'wsl', '왕십리');
    STATION_LIST[27] = new TransferStation(221, 241, 'yong', '용산');
    STATION_LIST[28] = new TransferStation(277, 47, 'e3', '을지로3가');
    STATION_LIST[29] = new TransferStation(309, 47, 'e4', '을지로4가');
    STATION_LIST[30] = new TransferStation(306, 259, 'echn', '이촌');
    STATION_LIST[31] = new TransferStation(575, 344, 'js', '잠실');
    STATION_LIST[32] = new TransferStation(564, 403, 'sport', '종합운동장');
    STATION_LIST[33] = new TransferStation(397, 82, 'cg', '청구');
    STATION_LIST[34] = new TransferStation(306, 384, 'cs', '총신대입구(이수)');
    STATION_LIST[35] = new TransferStation(305, 89, 'cm', '충무로');
    STATION_LIST[36] = new TransferStation(164, 47, 'cj', '충정로');
    STATION_LIST[37] = new TransferStation(36, 175, 'hj', '합정');
    STATION_LIST[38] = new TransferStation(36, 117, 'hu', '홍대입구');
    STATION_LIST[39] = new TransferStation(182, 175, 'hyo', '효창공원앞');
  }

  function renderBtn() {
    const targetBtnDiv = document.createElement('div');
    targetBtnDiv.classList.add('target-btn-div');
    STATION_LIST.forEach((item, index) => {
      if (index > 0) {
        const targetBtn = document.createElement('button');
        targetBtn.classList.add('map-btn');
        targetBtn.style.position = 'absolute';
        targetBtn.style.top = `${item.y - 10}px`;
        targetBtn.style.left = `${item.x - 10}px`;
        targetBtn.innerText = `${index}`;
        targetBtnDiv.append(targetBtn);
      }
    });
    $map.append(targetBtnDiv);
  }

  function renderList() {
    STATION_LIST.forEach((item) => {
      if (item.status === 1) {
        $targetList.innerHTML += `<li class="target-list-item">${
          item.stationName
        }</li>`;
      }
    });
  }

  /* function randomItem()
   * 맞출 환승역 무작위 생성
   * return : STATION_LIST에서 random하게 선택된 TransferStation object
   */
  function randomItem() {
    return STATION_LIST[Math.floor(Math.random() * TOTAL_STATION_COUNT) + 1];
  }

  /* function setTarget()
   * 맞출 환승역 리스트 세팅
   */
  function setTarget() {
    while (TARGET_STATION.length() < TARGET_COUNT) {
      const tempStation = randomItem();

      if (!TARGET_STATION[tempStation.id]) {
        TARGET_STATION[tempStation.id] = new TransferStation(
          tempStation.x,
          tempStation.y,
          tempStation.id,
          tempStation.stationName,
          1
        );
        tempStation.status = 1;
      }
    }
  }

  /* function initialize()
   * 초기화 함수
   * return : 생성된 환승역 = 총 환승역, 생성된 타켓 = 입력된 타켓 수 : true / 아니면 false
   */
  function initialize() {
    // 환승역 리스트 생성
    setStation();
    printLog(STATION_LIST);

    // 타겟 환승역 리스트 생성
    setTarget();
    printLog(TARGET_STATION);
    return !!(
      STATION_LIST.length === TOTAL_STATION_COUNT + 1
      && TARGET_STATION.length() === TARGET_COUNT
    );
  }

  /* function verifyStation(target)
   * 선택한 환승역 확인
   * target : 선택한 환승역
   * return : 선택한 환승역의 번호가 TARGET_STATION에 있으면 true, 없으면 false
   */
  function verifyStation(target) {
    if (STATION_LIST[target].status !== 1) {
      console.log('not a target');
      return false;
    }
    const targetName = TARGET_STATION[STATION_LIST[target].id].stationName;
    STATION_LIST[target].status = 2;
    const targetItems = $targetList.childNodes;
    targetItems.forEach((item) => {
      if (targetName === item.innerText) {
        item.style.textDecoration = 'line-through';
      }
    });
    console.log(targetName);
    return true;
  }

  /* function success()
   * 환승역 선택 성공시
   */
  function success() {
    successCount += 1;
    // 화면 갱신
  }

  /* function success()
   * 환승역 선택 실패시
   */
  function fail() {
    // 화면 갱신
  }

  /* function showEnding()
   * 게임 종료시
   */
  function showEnding() {
    // alert('다 맞췄다!');
    ending();
    // 버튼 리스너 막기
    // 엔딩 화면
  }
  /* function checkGameStatus()
   * 게임 종료 여부 확인
   * 맞춘 수가 맞출 수와 같으면 엔딩
   */
  function checkGameStatus() {
    if (successCount === TARGET_COUNT) showEnding();
  }

  /* function stationClick(contentNum)
   * 환승역 선택시
   * button click event 연결 -> closer
   * chosenNum = 선택한 버튼의 숫자
   */
  function stationClick(chosenNum) {
    // const { target } = e;
    // printLog(target);

    if (toggleStatus) {
      toggleStatus = false;

      if (verifyStation(chosenNum)) {
        success();
      } else {
        fail();
      }

      checkGameStatus();
      toggleStatus = true;
    }
  }

  // 클릭된 버튼 선택, 버튼의 숫자 추출
  $map.addEventListener('click', (e) => {
    const { target } = e;
    if (target.classList.contains('map-btn')) {
      chosenNum = target.firstChild.nodeValue;
      stationClick(chosenNum);
    }
  });

  /* function setViewer()
   * 초기화화면 -> 게임화면 화면전환
   * 화면에 환승역 버튼 생성
   * 이벤트 연결
   */
  function setViewer() {
    renderBtn();
    renderList();
    $gameController.style.display = 'none';
  }

  /* 초기화화면 -> 게임화면 화면전환
   * return :  화면 전환 완료시 true
   */
  function isShowReady() {
    // 화면 초기화
    setViewer();
    return true;
  }

  /* function onGame()
   * 실행
   * return :  게임 준비 성공 여부
   */
  function onGame() {
    // 초기화
    if (initialize() && isShowReady()) {
      // 게임 준비 실패
      return true;
    }
    return false;
  }
  // game 실행
  onGame() ? printLog('실행 성공') : printLog('실행 실패');
}

document.querySelector('.btn-start').addEventListener('click', () => {
  const gameOption = document.querySelector('.game-option:checked');
  game(Number(gameOption.value));
});
