## Introduction

Enterprise Blockchain Platform

## Getting Started

1. Git repository fork

2. Local clone

    ```
    git clone [fork remote repository URL]

    git remote add upstream https://github.com/sgablc-kr/RootChain.git
    ```
3. Create branch
    ```
    git checkout -b [branch name]

    # 위의 명령어는 아래의 두 명령어를 합한 것
    git branch [branch name]
    git checkout [branch name]
    ```
4. Coding and Commit
    ```
    git commit -a -m "Feat: Add function"

    # 위의 명령어는 아래의 두 명령어를 합한 것
    git add . # 변경된 모든 파일을 스테이징 영역에 추가
    git add [some-file] # 스테이징 영역에 some-file 추가
    git commit -m "Feat: Add function" # local 작업폴더에 history 하나를 쌓는 것
    ```
5. Push for repository
    ```
    git push origin [branch name] # branch name에 해당하는 branch를 자신의 원격 저장소에 푸시
    ```
6. 필요시) Pull repository
    ```
    git pull upstaream master
    ```