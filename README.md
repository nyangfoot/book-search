# :books: Book Search & Book Basket
### Contents
0. [Team Members](#team-members)
1. [OverView of the Project - 프로젝트 개요](#overview-of-the-project---프로젝트-개요)
2. [Content of the Project - 프로젝트 내용](#content-of-the-project---프로젝트-내용)
3. [Problem that Occurred - 문제점](#problem-that-occurred---문제점)
4. [Future Plans - 향후 계획 및 발전 가능성](#future-plans---향후-계획-및-발전-가능성)
5. [References - 참고자료](#references---참고자료)

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
  - 페이지네이션 >> react의 pagination 라이브러리 사용
  ```javascript
  import Pagination from "react-js-pagination";
  ```

<br/>

### 2. 추가 기능 구현 - 책 상세 페이지
> 책 선택 시, 책의 상세 정보를 보여주는 페이지 생성
- 책 상세 페이지 디자인
<br/> ![KakaoTalk_20220825_100353394](https://user-images.githubusercontent.com/57212274/186553138-c4afe239-91f4-4880-b83e-cc4fd867279d.png)
- 책 상세 페이지를 위해 라우터 사용
  - Context와 Route 같이 사용하는 방법 <br/>
    ```javascript
    <BrowserRouter>
        <div>
        <Routes>
          <Route path="/"
                 elements={<AppStateProvider>
                              <MainPage />
                           </AppStateProvider>} />
        </Routes>
        </div>
     </BrowserRouter>
     ```

<br/>

### 3. css && scss :mag_right:
> css와 scss를 모두 사용해보며 차이점과 장점 파악
- css와 scss 차이점
  - 중괄호 중첩 표현 가능
  - $ 변수 사용
- scss의 장점
  - 중첩 표현으로 인해 코드의 가독성이 높아짐
  - 변수 및 모듈 사용으로 재사용성이 높고, 유지 및 관리가 용이함

<br/><br/>

## Problem that Occurred - 문제점
### 1. 프로젝트 과정 중
- 프로젝트의 전체 구조 파악 어려움
- state, effect, context 등 다양한 hooks 사용 미숙
- git 사용 미숙
- api 사용 어려움 및 api 자체 오류

<br/>

### 2. 프로그램 내부 오류 🆘
[.env 파일 사용 에러]:https://github.com/hmy343/book-search/issues/10
[가격 정렬 오류]:https://github.com/hmy343/book-search/issues/16
[장바구니 오픈 시, 검색 오류]:https://github.com/hmy343/book-search/issues/15
[페이지 중복 값 고정 오류]:https://github.com/hmy343/book-search/issues/31
[메인 화면 페이지네이션 불가능]:https://github.com/hmy343/book-search/issues/32
[API 품절 상품 '-1' 값으로 인한 오류]:https://github.com/hmy343/book-search/issues/34

- [.env 파일 사용 에러]
- [가격 정렬 오류]
- [장바구니 오픈 시, 검색 오류]
- [페이지 중복 값 고정 오류]
- [메인 화면 페이지네이션 불가능]
- [API 품절 상품 '-1' 값으로 인한 오류]


<br/><br/>

## Future Plans - 향후 계획 및 발전 가능성
### 1. 기능 구현방법 변경
- context 대신 redux 사용
- pagination 라이브러리 대신 자체 코드 구현

<br/>

### 2. 추가 기능
- 장바구니에 담긴 책과 상세 정보 확인 중인 책의 가격 비교
- 댓글 작성을 통한 후기
- 책 상세 페이지에 뒤로가기 기능 추가

<br/>

### 3.sever side 구현을 한다면
- sever 에서 api 호출 처리
- context와 state 값으로 유지되고 있는 장바구니 데이터를 DB로 관리
- comments 작성

<br/>


## References - 참고자료
> 참고자료 출처
> 

<br/>

## Skills
<img src="https://img.shields.io/badge/VS Code-1A1F71?style=flat-square&logo=Visual Studio Code&logoColor=white"/>&nbsp;&nbsp;<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>&nbsp;&nbsp;<img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=Git&logoColor=white"/>&nbsp;&nbsp;<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/>&nbsp;&nbsp;<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"/>&nbsp;&nbsp;<img src="https://img.shields.io/badge/KakaoAPI-FFCD00?style=flat-square&logo=Kakao&logoColor=white"/>&nbsp;&nbsp;<img src="https://img.shields.io/badge/CSS/SCSS-1572B6?style=flat-square&logo=CSS3&logoColor=white"/><br/><br/><br/><br/>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
![logo](https://user-images.githubusercontent.com/57212274/186549137-954c40d9-dde3-4cd7-905e-dbb7070789a8.png)

