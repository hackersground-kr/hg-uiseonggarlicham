# 의성마늘햄 - 온나

해커그라운드 해커톤에 참여하는 `의성마늘햄` 팀의 `온나`입니다.

## 참고 문서

> 아래 두 링크는 해커톤에서 앱을 개발하면서 참고할 만한 문서들입니다. 이 문서들에서 언급한 서비스 이외에도 더 많은 서비스들이 PaaS, SaaS, 서버리스 형태로 제공되니 참고하세요.

- [순한맛](./REFERENCES_BASIC.md)
- [매운맛](./REFERENCES_ADVANCED.md)

## 제품/서비스 소개

<!-- 아래 링크는 지우지 마세요 -->
[제품/서비스 소개 보기](TOPIC.md)
<!-- 위 링크는 지우지 마세요 -->

## 오픈 소스 라이센스

<!-- 아래 링크는 지우지 마세요 -->
[오픈소스 라이센스 보기](./LICENSE)
<!-- 위 링크는 지우지 마세요 -->

## 설치 방법

> **아래 제공하는 설치 방법을 통해 심사위원단이 여러분의 제품/서비스를 실제 Microsoft 애저 클라우드에 배포하고 설치할 수 있어야 합니다. 만약 아래 설치 방법대로 따라해서 배포 및 설치가 되지 않을 경우 본선에 진출할 수 없습니다.**

### 사전 준비 사항

> **여러분의 제품/서비스를 Microsoft 애저 클라우드에 배포하기 위해 사전에 필요한 준비 사항들을 적어주세요.**
1. Azure 계정 생성
2. github 계정 생성
- https://github.com/으로 이동합니다.
- 로그인을 클릭합니다.
- 프롬프트에 따라 개인 계정을 만듭니다.
3. https://docs.github.com/ko/desktop/installing-and-authenticating-to-github-desktop/installing-github-desktop에서 github desktop 설치


## 시작하기

## 리액트로 정적 웹앱 배포

github에서 organization 생성(링크 참고)https://github.com/account/organizations/new?plan=free&ref_cta=Create%2520a%2520free%2520organization&ref_loc=cards&ref_page=%2Forganizations%2Fplan
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/594df44f-7c31-4a26-9468-439bac915d0e">


github에서 repository생성(링크 참고)
https://github.com/new?template_name=vanilla-basic&template_owner=staticwebdev
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/f06f30ba-4820-4462-b60e-c61ba5c1564c">

github desktop 실행

깃허브 로그인
가지고 있는 깃허브 아이디로 로그인이 가능
File -> Options -> Accounts -> Sign in

프로젝트 클론

1. File > clone Repository 클릭

2. URL > 아래사진을 보고 repository의 링크를 복사하여 URL칸에 붙여넣기
<img width="1265" alt="image" src="https://github.com/user-attachments/assets/b025a41e-630f-4da2-a16d-bca5d7252c01">

3. Clone
4. 상단바 터미널 > 새 터미널 통해 새로운 터미널 생성
5. 터미널에 npx create-react-app 원하는프로젝트명 입력
6. react 설치 완료 후 깃허브 좌측 아래 제목에 react설치를 적고 아래의 파란색 버튼 클릭(commit to ~~~)
   <img width="247" alt="image" src="https://github.com/user-attachments/assets/9ad6bb87-a900-41d8-a65c-8f2e6c9bef2a">
7. commit 완료 후 우측 위 3번쨰 버튼 클릭 (publish branch)
   <img width="886" alt="image" src="https://github.com/user-attachments/assets/9a44b4c8-45df-4271-b6e3-32ea2fed3b38">


https://portal.azure.com/ 에 접속 후 좌측 상단 리소스 만들기 클릭
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/ec981935-dc78-424c-abb8-66d01ee697a7">

검색창에 "static web app" 검색
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/b1909d9d-7bce-4e12-9a2f-8182cbe845e8">

정적 웹 앱 선택(아래 사진 하트 눌려있는 항목)
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/adb91f0d-dadf-4c36-a228-3b9a4887a9a8">

만들기 클릭
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/944e5a7d-6d6c-483b-b24f-197c83206dc9">

구독에서는 Azure 구독을 선택
리소스 그룹은 미리 생성해놓은게 있다면 선택, 아니라면 새 링크 만들기를 선택하고 텍스트 상자에 원하는 리소스 그룸명 입력
이름은 원하는 이름을 입력
계획유형에서 무료를 선택
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/6a28a09f-67f9-4092-8b98-015daebc838a">
원본은 github로 선택, github 계정을 연동, 조직에서 방금 생성한 organization 선택, 리포지토리는 방금 생성한 repository 선택, 분기는 main
<img width="742" alt="image" src="https://github.com/user-attachments/assets/b98df327-d979-416e-a85e-6132a8a0a439">
위 항목을 모두 선택하면 아래처럼 뜸.
<img width="768" alt="image" src="https://github.com/user-attachments/assets/868ac500-2e3a-4c90-afe3-fcc083c8df41">

좌측 하단의 검토+만들기 클릭, 최종적으로 만들기를 눌러 정적 웹앱 생성.
<img width="884" alt="image" src="https://github.com/user-attachments/assets/23aa0e2f-9fa3-410a-948e-0bcebf5c57fb">

잠시 기다리면 준비됨 표시가 뜸. 하단 사이트 방문을 눌러 배포된 본인의 사이트 방문
<img width="1187" alt="image" src="https://github.com/user-attachments/assets/b48e2e1d-e838-4517-9667-5c4bcc49af54">

## 만약 생성 과정에서 오류가 발생한다면 github내의 본인 권한을 admin으로 설정


## 자바와 스프링 부트를 활용한 서버 배포
준비물 : 자바 17버전 이상, 인텔리제이

"github.com" 접속
깃허브 로그인 하기
레포지토리 만들기

start.spring.io 접속 후 프로젝트 하나 만들기
프로젝트 다운로드 받기
인텔리제이에서 다운받은 폴더 열기

만들고 싶은 기능 만들기

"Azure" 포털에 로그인하거나 계정이 없으면 가입하기
로컬 머신에 "Azure CLI"가 설치하기

터미널을 열고 "az login" 치기

터미널에 "az group create --name myResourceGroup --location eastus" 리소스 그룹 생성하기
az appservice plan create --name myAppServicePlan --resource-group myResourceGroup --sku B1 --is-linux
명령어를 사용하여 App Service 플랜 생성하기

az webapp create --resource-group myResourceGroup --plan myAppServicePlan --name myUniqueAppName --runtime "PYTHON|3.8"
웹 애플리케이션 생성하기

az webapp up --name myUniqueAppName --resource-group myResourceGroup --runtime "PYTHON|3.8"
로컬 애플리케이션 배포하기

배포가 완료되면 다음 주소로 이동하여 웹이 잘 작동하는지 확인하기
https://(내 웹 서비스 이름).azurewebsites.net

> **여러분의 제품/서비스를 Microsoft 애저 클라우드에 배포하기 위한 절차를 구체적으로 나열해 주세요.**
