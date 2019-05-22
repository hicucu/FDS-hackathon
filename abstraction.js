/*
 * 집에가고싶'조'
 * 김들이, 황유순
 */

// versionState
// console.log 실행여부
// 0 : release -> console.log 출력 안함
// 1 : develop -> console.log 출력
const versionState = 1;

(function game(targetNum) {
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
  const TOTAL_STATION_COUNT = 15;

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

  /* function verifyStation(contentNum)
   * 선택한 환승역 확인
   * contentNum : 선택한 환승역의 번호
   * return : 선택한 환승역의 번호가 TARGET_STATION에 있으면 true, 없으면 false
   */
  function verifyStation(contentNum) {
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
   * contentNum : click한 button의 content값 = 해당 STATION_LIST의 index
   */
  function stationClick(contentNum) {
    printLog(contentNum);

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

  /* function setViewer()
   * 초기화화면 -> 게임화면 화면전환
   * 화면에 환승역 버튼 생성
   * 이벤트 연결
   */
  function setViewer() {}

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
}(3));
