## 프로젝트 생성 

## 부가기능 설치 

▶ `npm install @react-navigation/native` -> 네비게이션 설치<br>
▶ ` npm install @react-navigation/bottom-tabs` -> 하단 네비게이션 설치<br>
▶ `npm install react-native-screens react-native-safe-area-context`<br>

## HomeScreen 과 HistoryScreen

▶ BottomTab을 이용해 이동 <br>

## 랜덤 함수를 통해 6개의 수 추출하기 

▶ Math.random() 메소드를 통해 6개의 수 추출 <br>
▶ if 문을 통해 각각의 추출되는 6개의 수 색깔 다르게 하기<br>
▶ LottoNumberView.js를 통해 로또 번호 나오는 로직 컴포넌트화 하기<br>

## HistoryScreen을 통해 기존에 뽑은 함수 기억하기 

▶FlatList와 renderItem을 통해 나열하기 + 날짜까지 보여줌<br> 

## 1~45개의 난수를 랜덤으로 추출하기 

▶util.js에서 기능추가 Filter를 통해 배열중 없는 부분에 숫자를 추가 length가 6일때 까지 진행하고 중복을 방지<br>
▶숫자를 오름차순으로 정렬 -> sort함수 사용<br> 


## 이전 생성한 번호를 Redux에 저장 

▶ npm install redux redux-logger react-redux -> redux, logger 설치<br> 
▶ actions, reducer,store 생성<br>
▶ reducer를 통해 history를 저장한다.<br>
▶ store에서 combineReducer를 통해 모든 Reducer들을 저장 , applymiddleware를 통해 logger 실행<br>
▶ HomeScreen에서 useDispatch를 통해 action을 불러온다.<br>

## 애니메이션 추가하기 

▶ onLayout에서 nativeEvent를 활용하여 높이를 측정한다.<br>
▶ Animated를 임포트 하고 translateY를 사용하여 높이를 변환<br>

## DataStorage를 활용해 효과적으로 데이터 관리 하기 

▶ `npm install redux-persist` 설치 <br>
▶ `npm install @react-native-async-storage/async-storage` 설치<br>
▶ redux에 저장하기 위해 String 형태로 변환해야 함<br>
▶ redux-persist 사용 -> store에서 persistReducer를 생성한 다음  -> app.js에서 PersistGate 사용<br>
▶ 앱 종료 후에도 마지막에 뽑았던 수를 보여주고 히스토리가 남아있는 기능 <br>


## 웹에서 사용 가능한 다운로드

▶ `npx expo install react-native-web react-dom @expo/metro-runtime`
▶ `npm run web` 웹에서 실행 





