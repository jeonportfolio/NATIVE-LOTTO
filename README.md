## 프로젝트 생성 

## 부가기능 설치 

▶ `npm install @react-navigation/native` -> 네비게이션 설치
▶ ` npm install @react-navigation/bottom-tabs` -> 하단 네비게이션 설치
▶ `npm install react-native-screens react-native-safe-area-context`

## HomeScreen 과 HistoryScreen

▶ BottomTab을 이용해 이동 

## 랜덤 함수를 통해 6개의 수 추출하기 

▶ Math.random() 메소드를 통해 6개의 수 추출 
▶ if 문을 통해 각각의 추출되는 6개의 수 색깔 다르게 하기
▶ LottoNumberView.js를 통해 로또 번호 나오는 로직 컴포넌트화 하기

## HistoryScreen을 통해 기존에 뽑은 함수 기억하기 

▶FlatList와 renderItem을 통해 나열하기 + 날짜까지 보여줌 

## 1~45개의 난수를 랜덤으로 추출하기 

▶util.js에서 기능추가 Filter를 통해 배열중 없는 부분에 숫자를 추가 length가 6일때 까지 진행하고 중복을 방지
▶숫자를 오름차순으로 정렬 -> sort함수 사용 


## 이전 생성한 번호를 Redux에 저장 

▶ npm install redux redux-logger react-redux -> redux, logger 설치 
▶ actions, reducer,store 생성
▶ reducer를 통해 history를 저장한다.
▶ store에서 combineReducer를 통해 모든 Reducer들을 저장 , applymiddleware를 통해 logger 실행
▶ HomeScreen에서 useDispatch를 통해 action을 불러온다.

## 애니메이션 추가하기 

▶ onLayout에서 nativeEvent를 활용하여 높이를 측정한다.
▶ Animated를 임포트 하고 translateY를 사용하여 높이를 변환





