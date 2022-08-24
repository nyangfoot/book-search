# :books: Book Search & Book Basket
### Contents
0. [Team Members](#team-members)
1. [OverView of the Project - 프로젝트 개요](#overview-of-the-project---프로젝트-개요)
2. [Content of the Project - 프로젝트 내용](#content-of-the-project---프로젝트-내용)

<br/><br/>

## Team Members

[Jinkyung]:https://github.com/realjinkyung
[Minhyang]:https://github.com/hmy343
[Hyunmin]:https://github.com/hyunminini
[Bora]:https://github.com/Bora0k

&nbsp;&nbsp;&nbsp;&nbsp; :tiger: [Jinkyung]   |  :cow: [Minhyang]  |  :mouse: [Hyunmin]  |  :sheep: [Bora]

<br/><br/>

## OverView of the Project - 프로젝트 개요
### 1. 프로젝트 개요
- 오픈 API 검색 중 도서 검색 API 발견
- 도서 검색 API를 활용한 도서 검색 사이트 개발
  
<br/>

### 2. API - 카카오 도서 검색 API
- 국내 도서 검색 Open API는 카카오, 네이버, 알라딘 등
- 카카오 Open API가 비교적 많은 양의 정보를 갖고 있으며, 가장 큰 장점으로 CORS 문제를 마주하지 않아도 됨! :+1::+1:
- 알라딘의 경우 현재 관리가 되지 않고 있음.
  
<br/>

### 3. 프로젝트 일정
| schedule | 8/18 | 8/19 | 8/20 | 8/21 | 8/22 | 8/23 | 8/24 | 8/25 |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | 
| 주제 선정 | :heavy_check_mark: |  |  |  |  |  |  |  |
| 레이아웃 디자인 | :heavy_check_mark: |  |  |  |  |  |  |  |
| 개별 프로젝트 진행 |  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |  |  |  |  |
| 개별 코드 리뷰 및 병합 |  |  |  |  | :heavy_check_mark: |  |  |  |
| 프로젝트 추가작업 및 테스트 시행 |  |  |  |  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |  |
| 발표 준비 |  |  |  |  |  |  | :heavy_check_mark: |  |
| 발표 |  |  |  |  |  |  |  | :heavy_check_mark: |
  
<br/><br/>

## Content of the Project - 프로젝트 내용
### 1. 프로젝트 레이아웃 및 기본 기능
- 레이아웃 >> 피그마 사용
  - https://www.figma.com/file/UOswQnIczXwF1vGgy7HTf4/Untitled?node-id=0%3A1
- 기능
  - 도서 검색
  - 장바구니

<br/>

### 2. 추가 기능 구현 - 책 상세 페이지
- 책 상세 페이지를 위해 라우터 사용
- Context와 Route 같이 사용하는 방법

<br/>

### 3. css && scss :mag_right:
> css와 scss를 모두 사용해보며 차이점과 장점 파악
- css와 scss 차이점
  - 중괄호 중첩 표현 가능
  - $ 변수 사용
- scss의 장점
  - 중첩 표현으로 인해 코드의 가독성이 높아짐
  - 변수 및 모듈 사용으로 재사용성이 높고, 유지 및 관리가 용이함
