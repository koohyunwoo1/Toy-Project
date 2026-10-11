# 프로젝트 협업 가이드

## 1. 팀원

- 구현우 — `malakas`
- 조문기 — `jomungi`

## 2. 개발 환경

| 구분            | 기술              |
| --------------- | ----------------- |
| Frontend        | React + Vite      |
| Backend         | Node.js + Express |
| Package Manager | npm               |
| Version Control | Git + GitHub      |
| Main Branch     | `master`          |

## 3. 최초 프로젝트 설정

### 1) Node.js 설치

[Node.js 공식 사이트](https://nodejs.org/en/download)에서 LTS 버전을 설치한다.

설치 후 Git Bash를 열고 확인한다.

```bash
node -v
npm -v
git --version
```

### 2) Repository Clone

두 팀원 모두 실행한다.

```bash
git clone https://github.com/koohyunwoo1/Toy-Project.git
cd Toy-Project
```

### 3) 개인 브랜치 이동

**구현우**

```bash
git switch malakas
git pull origin malakas
```

**조문기**

```bash
git switch jomungi
git pull origin jomungi
```

개인 브랜치가 원격 저장소에 아직 없다면 다음 명령어로 생성한다.

구현우:

```bash
git switch -c malakas
git push -u origin malakas
```

조문기:

```bash
git switch -c jomungi
git push -u origin jomungi
```

이미 브랜치가 존재한다면 생성 명령어를 다시 실행하지 않는다.

## 4. 프론트엔드 설정

프로젝트 루트에서 실행한다.

```bash
cd frontend
npm install
npm run dev
```

브라우저에서 접속한다.

```text
http://localhost:5173
```

정상 실행되면 프론트엔드 개발 환경 설정 완료.

### 프론트엔드 실행 종료

```text
Ctrl + C
```

## 5. 백엔드 설정

새 터미널을 열고 프로젝트 루트에서 실행한다.

```bash
cd backend
npm install
npm run dev
```

서버 주소:

```text
http://localhost:5000
```

API 테스트 주소:

```text
http://localhost:5000/api/hello
```

정상적으로 JSON 응답이 반환되면 백엔드 개발 환경 설정 완료.

### 백엔드 실행 종료

```text
Ctrl + C
```

※ `backend/package.json`에 `dev` 스크립트가 등록되어 있어야 한다.

```json
"scripts": {
  "start": "node src/app.js",
  "dev": "nodemon src/app.js"
}
```

## 6. 환경변수 설정

현재 DB를 사용하지 않으므로 `.env`는 필수가 아니다.

추후 `.env.example` 파일이 제공되면 해당 디렉터리에서 복사해 개인 `.env`를 생성한다.

예시:

```bash
cp .env.example .env
```

실제 `.env` 파일과 비밀번호, API 키는 GitHub에 올리지 않는다.

## 7. 개발 및 Push

개인 브랜치에서 작업한다.

### 1) 현재 브랜치 확인

```bash
git branch
git status
```

### 2) 작업 내용 저장

```bash
git add .
git commit -m "작업 내용"
```

### 3) 원격 저장소에 Push

구현우:

```bash
git push origin malakas
```

조문기:

```bash
git push origin jomungi
```

최초 Push 시에는 다음 명령어를 사용한다.

```bash
git push -u origin 개인브랜치명
```

## 8. 최신 코드 가져오기

### 1) 내 브랜치의 최신 코드 가져오기

구현우:

```bash
git switch malakas
git pull origin malakas
```

조문기:

```bash
git switch jomungi
git pull origin jomungi
```

### 2) master 브랜치의 변경 사항 반영하기

개인 브랜치에서 실행한다.

```bash
git fetch origin
git merge origin/master
```

충돌이 발생하면 충돌 파일을 수정한 후 해결된 파일을 `git add`하고 커밋한다.

## 9. 코드 병합

1. 개인 브랜치에서 개발한다.
2. 작업 내용을 커밋하고 Push한다.
3. GitHub에서 Pull Request를 생성한다.
4. 대상 브랜치를 `master`로 지정한다.
5. 변경 사항을 확인한다.
6. 승인 후 Merge한다.

## 10. 협업 규칙

- 메인 브랜치는 `master`로 사용한다.
- `master`에 직접 Push하지 않는다.
- 구현우는 `malakas`, 조문기는 `jomungi`에서 작업한다.
- 커밋 메시지는 자유롭게 작성한다.
- `node_modules`, `.env`는 커밋하지 않는다.
- 다른 사람의 작업 내용을 확인 없이 덮어쓰지 않는다.
- 작업 전 `git status`로 현재 브랜치와 변경 사항을 확인한다.
- 병합 전 충돌 여부를 확인한다.
