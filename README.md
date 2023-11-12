# README

## 환경 Version
#### Project Build : 2023 11.11
`node` : 18.16.0  
`node` : 4.4.5

## 개발일기
> #### 2023.11.12
> - 파일위치 : useEffect/useEffectTest1.tsx 
> - `test 목적` : useState 상태값을 useEffect 의 dependency Array 로 대입 시 랜더링 테스트
> - `코드 설명` :
>   1. 버튼 클릭했을 때 useState 의 state 값을 1씩 추가
>   2. useEffect 의 dependencyArray 에 state 를 인자로 할당, console.log 콜백 함수로 state 값 출력
> - `test 목표` :
>   1. 처음 랜더링 되었을 때 console.log 는 몇번 출력할까?
>   2. 버튼을 클릭할 때 마다 console.log 는 2번씩 출력할까? 1번만 출력할까?
> - `test 결과` :
>   1. 처음 랜더링 시 console.log 는 2번 출력
>   2. 클릭할 때마다 1번씩만 console.log 가 출력
> - `왜 이런 현상이 발생했을까?`
>   -> 확인해보자

> #### 2023.11.11
> - 프로젝트 생성
> - git first commit

## 사이트 링크
github : [Icebear9028](https://github.com/IceBear9028/react-study)