# 프로젝트 협업 가이드

## 1. 팀원

- 구현우
- 조문기

## 2. 개발 환경 설정

### 1) Repository Clone

```bash
git clone <레포지토리_URL>
cd <프로젝트_폴더>
```

### 2) 작업 브랜치 생성

각자 개인 브랜치를 생성하여 작업한다.

구현우: malakas
조문기:

```bash
git switch malakas
```

## 3. 개발 및 Push

작업한 내용을 자유롭게 커밋하고 원격 저장소에 Push한다.

```bash
git add .
git commit -m "커밋 메시지"
git push -u origin ""
```

최초 Push 이후에는 다음 명령어를 사용한다.

```bash
git add .
git commit -m "커밋 메시지"
git push origin ""
```

## 4. 코드 병합

1. 개인 브랜치에서 개발한다.
2. 작업 내용을 원격 저장소에 Push한다.
3. GitHub에서 `master` 브랜치를 대상으로 Pull Request를 생성한다.
4. 코드 확인 후 `master` 브랜치에 Merge한다.

## 5. 협업 규칙

- 메인 브랜치는 `master`로 사용한다.
- `master` 브랜치에 직접 Push하지 않는다.
- 각자 개인 브랜치에서 작업한다.
- 커밋 메시지는 자유롭게 작성한다.
- 다른 사람의 작업 내용을 덮어쓰지 않도록 주의한다.
- 병합 전 변경 사항을 확인한다.
- malakas -> 수정 test
