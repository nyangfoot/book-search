# 피그마 참고 주소


# Book Search & Book Basket

| schedule | 8/18 | 8/19 | 8/20 | 8/21 | 8/22 | 8/23 | 8/24 |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | 
| 주제 선정 | :heavy_check_mark: |  |  |  |  |  |  |
| 레이아웃 디자인 | :heavy_check_mark: |  |  |  |  |  |  |
| 개별 프로젝트 진행 |  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |  |  |  |
| 개별 코드 리뷰 및 병합 |  |  |  |  | :heavy_check_mark: |  |  |
| 발표 준비 |  |  |  |  |  | :heavy_check_mark: |  |
| 발표 |  |  |  |  |  |  | :heavy_check_mark: |

메인페이지 오류 - API 호출 시 도서 제목 필수, 검색창에 제목 기록됨


장바구니 오류 - 장바구니 추가 후 검색, 페이지 이동 등 새로운 이벤트 발생 시 에러 값 발생
        수정 - order파라미터 : 새로운 이벤트 books isbn 값 비교 -> 전체 books 값 저장 : 새로운 이벤트 발생에 isbn 비교

정렬 오류 - 최신, 가격 높/낮 정렬 선택 시 정렬불가 
     수정 - 공통 : 정렬 데이터를 객처로 만듦 -> 프로퍼티 재설정
            최신: 날짜 값을 new Date 객체의 getTime() 메서드를 이용 

품절 오류 - 할인 판매가 -1로 출력
     수정 - 품절로 표시
     
동일 ISBN 츨력 & div key Warning 오류 - 출력되는 첫 번째 도서가 고정
                                 수정 - div key Warnig:index 값 강제 부여 /  
                                        ISBN 츨력- response값과 디버깅에는 문제없어API 문제로 추정

한 페이지 출력 도서 개수 변경 - 오류 : 이벤트가 발생해야만 개수 변경 핸들 실행
                              수정 : 
