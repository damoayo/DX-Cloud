# MAMAPAI-Homepage

Devextreme 라이브러리를 사용하여 간단한 반응형 홈페이지 제작

<img src="./public/mamapai.png" alt="Mamapai 커버이미지" width="480" />

### 배포 링크, 테스트 계정

!! 로그인 페이지를 볼수있게 메뉴에 dashboard버튼을 만들어 둠.

- 배포 링크: [https://dx-cloud.vercel.app/](https://dx-cloud.vercel.app/)
- ID: [mp@email.com](mailto:demo.account@example.com)
- PW: pass

## **기술 스택**

### 프레임워크 및 라이브러리

- ![Vite](https://img.shields.io/badge/-Vite-black?style=flat-square&logo=Vite)
  ![TypeScript](https://img.shields.io/badge/-TypeScript-black?style=flat-square&logo=typescript)
  ![Devextreme](https://img.shields.io/badge/-Devextreme-FF00FF?style=flat-rounded&logo=DevExtreme&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/-TailwindCSS-black?style=flat-square&logo=TailwindCSS)

### 데이터베이스 및 계정 관리

- ![Express](https://img.shields.io/badge/-Express-black?style=flat-square&logo=Express)

### HTTP 클라이언트 및 유틸리티

### UI 구성 요소

- ![Tailwind CSS](https://img.shields.io/badge/-TailwindCSS-black?style=flat-square&logo=TailwindCSS)
- ![Devextreme](https://img.shields.io/badge/-Devextreme-FF00FF?style=flat-rounded&logo=DevExtreme&logoColor=white)

### 코드 품질 도구

- **ESLint**
- **Prettier**

### 디자인 및 프로토타입

### 프로젝트 및 이슈 관리

- **GitHub**

## 개발 환경설정

### **커밋 컨벤션**

- **feat**: 새로운 기능 추가
- **ui**: UI 요소, 스타일링, UX 개선 및 디자인 변경 사항
- **fix**: 버그 수정
- **perf**: 성능 개선
- **refactor**: 코드 리팩토링 (기능 변경 없음)
- **chore**: 빌드 설정, 패키지 관리, 기타 보조 작업
- **docs**: 문서 작업 (README, 주석 등)

### 브랜치 전략

### 코드 포매터 및 품질 관리

Prettier와 ESLint를 함께 사용하여 코드 스타일을 일관되게 유지하고 코드 품질을
관리했습니다. Prettier는 코드 포맷팅을 자동화하고, ESLint는 코드 품질 검사와
오류 방지를 담당했습니다. 특히, Airbnb 룰을 적용하여 엄격하고 일관된 코드
스타일을 유지함으로써 협업 시 코드 가독성과 품질을 높였습니다.

## **설치 및 실행 방법**

- git clone https://github.com/damoayo/DX-Cloud.git
- npm install
- npm run dev

### 로컬에서 실행하기 위한 필수 요구사항

- npm 또는 yarn

### 환경 변수 설정 방법: .env 파일 예시

루트 디렉토리에 `.env` 파일을 생성하고 아래와 같은 형식으로
환경 변수를 설정합니다:

```
NEXT_PUBLIC_API_SERVER_URL=
```

`.env` 파일은 보안 및 환경 차이로 인해 Git에 커밋되지 않도록 `gitignore`에
추가해두는 것이 좋습니다.

## **주요 기능**

### 간단한 홈페이지 제작

- Devextreme의 다양한 컴포넌트 사용 적용

### 검색

### 북마크
