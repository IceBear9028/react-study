# README

## 환경 Version
#### Project Build : 2023 11.11
`node` : 18.16.0  
`node` : 4.4.5

## 개발일기
> #### 2023.11.15
> - 파일위치 : render/renderingTest1
> - `test 목적` : Rendering 순서 공부 복습
> - `코드 설명` :
>   1. renderingTest1 에 A, D 컴포넌트 마운팅  
>   2. A 컴포넌트 안에는 B 컴포넌트, B 컴포넌트 안에는 C 컴포넌트 마운팅 [A -> B -> C]
>   3. D 컴포넌트는 독립적으로 A 에 마운팅


> #### 2023.11.14
> - 파일위치 : useState/useStateTest1.tsx
> - `test 목적` : useState 를 가진 컴포넌트에 state 값이 변경되었을 때의 컴포넌트 랜더링 순서 확인
> - `코드 설명` : 
>   1. 마운팅 테스트 목적만의 A 컴포넌트 구현
>   2. UseStateTest1 컴포넌트에 useState 로 선언 후 버튼을 클릭했을 때 state 가 변경, 그리고 A 컴포넌트 호출
> - `test 목표` :
>   1. 처음 랜더링 되었을 때 console.log 어떤 결과를 가질까?
>   2. 버튼을 클릭할 때 마다 console.log 는 어떻게 출력될까?
> - `test 결과` :
>   1. 처음 랜더링 시 console.log 는 "render App render App render A render A"

> #### 2023.11.12
> - 파일위치 : useEffect/UseEffectTest1.tsx 
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