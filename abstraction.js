function game(targetNum) {
  // 찾을 환승역의 총 수
  const TARGET_COUNT = targetNum;
  // 전체 환승역 리스트

  // 찾을 환승역, 타켓 환승역 리스트 생성자
  function STATION_PROTO() {}

  // 객체에 프로퍼티 수 return;
  STATION_PROTO.prototype.length = function () {
    return Object.keys(this).length;
  };

  const STATION_LIST = new STATION_PROTO();
  // 찾을 환승역 리스트
  const TARGET_STATION = new STATION_PROTO();
  const TOTAL_STATION_COUNT = 15;

  // 선택 성공 갯수
  let successCount = 0;

  // 환승역 선택 버튼 동작 여부
  let toggleStatus = true;

  /* 환승역 생성자
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
    STATION_LIST[1] = new TransferStation(10, 20, 'ydp1', '영등포1');
    STATION_LIST[2] = new TransferStation(11, 20, 'ydp2', '영등포2');
    STATION_LIST[3] = new TransferStation(12, 20, 'ydp3', '영등포3');
    STATION_LIST[4] = new TransferStation(13, 20, 'ydp4', '영등포4');
    STATION_LIST[5] = new TransferStation(14, 20, 'ydp5', '영등포5');
    STATION_LIST[6] = new TransferStation(15, 20, 'ydp6', '영등포6');
    STATION_LIST[7] = new TransferStation(16, 20, 'ydp6', '영등포7');
    STATION_LIST[8] = new TransferStation(17, 20, 'ydp7', '영등포8');
    STATION_LIST[9] = new TransferStation(18, 20, 'ydp8', '영등포8');
    STATION_LIST[10] = new TransferStation(19, 20, 'ydp9', '영등포9');
    STATION_LIST[11] = new TransferStation(20, 20, 'ydp10', '영등포10');
    STATION_LIST[12] = new TransferStation(21, 20, 'ydp11', '영등포11');
    STATION_LIST[13] = new TransferStation(22, 20, 'ydp12', '영등포12');
    STATION_LIST[14] = new TransferStation(23, 20, 'ydp13', '영등포13');
    STATION_LIST[15] = new TransferStation(24, 20, 'ydp14', '영등포14');
    /* ... */
  }

  // 맞출 환승역 무작위 생성
  function randomItem() {
    return STATION_LIST[Math.floor(Math.random() * TOTAL_STATION_COUNT) + 1];
  }

  // 맞출 환승역 리스트 세팅
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

  // 초기화 함수
  function initialize() {
    // 환승역 리스트 생성
    setStation();
    // 타겟 환승역 리스트 생성
    setTarget();
    console.log(STATION_LIST);
    console.log(TARGET_STATION);
  }

  /*
   * 선택한 환승역 확인
   * contentNum : 선택한 환승역의 번호
   * return : 선택한 환승역의 번호가 TARGET_STATION에 있으면 true, 없으면 false
   */
  function verifyStation(contentNum) {
    return true;
  }

  // 환승역 선택 성공
  function success() {
    successCount += 1;
    // 화면 갱신
  }
  // 환승역 선택 실패
  function fail() {
    // 화면 갱신
  }

  function showEnding() {
    // 버튼 리스너 막기
    // 엔딩 화면
  }
  // 게임 종료 여부 확인
  // 맞춘 수가 맞출 수와 같으면 엔딩
  function checkGameStatus() {
    if (successCount === TARGET_COUNT) showEnding();
  }

  // 환승역 선택시
  // button click event 연결
  function stationClick(contentNum) {
    if (toggleStatus) {
      toggleStatus = false;

      if (verifyStation(contentNum)) {
        success();
      } else {
        fail();
      }

      checkGameStatus();
      toggleStatus = true;
    }
  }

  // 화면에 환승역 버튼 생성
  // 이벤트 연결
  function setViewer() {}

  /* 초기화화면 -> 게임화면 화면전환
   * return :  화면 전환 완료시 true
   */
  function showReady() {
    // 화면 초기화
    setViewer();
    return true;
  }
  function onGame() {
    // 초기화
    initialize();

    if (!showReady()) {
      // 게임 준비 실패
      return false;
    }
    return true;
  }

  // game 실행
  if (onGame()) console.log('game start');
  else console.log('game error');
}

game(3);
