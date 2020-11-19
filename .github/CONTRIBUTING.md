# Contributions Welcome

## Forking Workflow

### 중앙 원격 저장소를 포크(fork)하여 자신의 원격 저장소를 만든다.

- 중앙 원격 저장소를 복제한 저장소는 개인의 공개 저장소(remote repository) 역할
- 다른 개발자는 자신의 원격 저장소에 푸시할 수 없다(내려 받는 것은 가능)

### 프로젝트 참여자는 git clone 명령으로 로컬 저장소를 만든다.

- git clone 명령으로 자신의 원격 저장소(remote repository)를 복제하여 로컬 저장소(local repository) 생성
- 프로젝트 참여자는 이 로컬 저장소에서 작업을 수행

    ```bash
    git clone [내 remote repository URL]
    ```

### 두 개의 원격 저장소를 연결한다.
- 중앙 원격 저장소와 자신의 원격 저장소를 연결
- 일반적으로 포크한 원격 저장소는 origin (git clone시 자동 생성), 중앙 원격 저장소는 upstram으로 지정
- 로컬 저장소를 중앙 원격 저장소와 같은 상태로 유지 가능

    ```bash
    git remote add upstream https://github.com/sgablc-kr/RootChain.git
    ```

### 로컬 저장소에 새로운 기능 개발을 위한 branch를 생성한다.
- 중앙 원격 저장소와 자신의 원격 저장소에는 각각 master branch가 존재
- 자신의 로컬 저장소는 masger branch가 존재하며 기능을 구현할 feature branch를 생성
- feature branch에서 새로운 기능을 개발

    ```bash
    git checkout -b [branch name]

    # 위의 명령어는 아래의 두 명령어를 합한 것
    $ git branch [branch name]
    $ git checkout [branch name]
    ```

### 로컬 저장소의 커밋 이력을 자신의 원격 저장소에 푸시한다.
- 기능 구현 후 커밋한 이력은 중앙 원격 저장소가 아닌, 자신의 원격 저장소에 푸시
- 자신의 원격 저장소에 변경 내용을 올리기 전까지 변경 내용은 비공개

    ```bash
    git commit -a -m "feat: Add function"

    # 위의 명령어는 아래의 두 명령어를 합한 것
    git add . # 변경된 모든 파일을 스테이징 영역에 추가
    git add [some-file] # 스테이징 영역에 some-file 추가
    git commit -m "feat: Add function" # local 작업폴더에 history 하나를 쌓는 것

    git push origin [branch name] # branch name에 해당하는 branch를 자신의 원격 저장소에 푸시
    ```

### 프로젝트 관리자에게 자신의 기여를 반영하는 풀 리퀘스트를 한다.
- GitHub의 경우 페이지의 "Pull requests" 버튼을 이용하여 해당 branch를 선택
- 기능을 구현한 branch를 선택하여 반영

### 프로젝트 관리자는 변경 내용을 확인 후 중앙 원격 저장소에 병합한다.
- 변경한 코드 내용을 확인하고, 중앙 원격 저장소에 병합(merge)하는 작업
- GitHub의 경우 페이지의 "Pull requests"의 File chainged 탭에서 변경 내용을 확인
- Conversation 탭에서 "Confirm merge"를 사용하여 병합(merge)
- 충돌이 일어난 경우 충돌 내용을 수정 후 병합 진행

### 중앙 원격 저장소에 새로운 커밋이 있다면 다음과 같이 가져온다.
- 모든 개발자는 중앙 원격 저장소와 동기화 하여 자신의 로컬 저장소를 최신화

    ```bash
    git pull upstaream master
    ```

### 새로운 기능을 추가하기 위해 새로운 branch를 생성하여 시작한다.
- 4번 부터의 작업을 반복한다.