# Vercel 배포 가이드

## 방법 1: Vercel 웹사이트를 통한 배포 (추천)

1. **Vercel 웹사이트 접속**
   - https://vercel.com 접속
   - GitHub 계정으로 로그인

2. **프로젝트 가져오기**
   - "Add New Project" 클릭
   - GitHub 저장소 `kylesung0901-ops/lucidlife` 선택
   - "Import" 클릭

3. **프로젝트 설정**
   - **Framework Preset**: Vite 선택 (자동 감지됨)
   - **Root Directory**: `./` (기본값)
   - **Build Command**: `npm run build` (자동 설정됨)
   - **Output Directory**: `build` (자동 설정됨)
   - **Install Command**: `npm install` (자동 설정됨)

4. **환경 변수 설정** (선택사항)
   - "Environment Variables" 섹션에서 Firebase 설정 추가:
     - `VITE_FIREBASE_API_KEY`
     - `VITE_FIREBASE_AUTH_DOMAIN`
     - `VITE_FIREBASE_PROJECT_ID`
     - `VITE_FIREBASE_STORAGE_BUCKET`
     - `VITE_FIREBASE_MESSAGING_SENDER_ID`
     - `VITE_FIREBASE_APP_ID`
     - `VITE_FIREBASE_MEASUREMENT_ID`

5. **배포**
   - "Deploy" 버튼 클릭
   - 배포 완료 후 자동으로 URL이 생성됩니다

## 방법 2: Vercel CLI를 통한 배포

1. **Vercel 로그인**
   ```bash
   npx vercel login
   ```

2. **프로젝트 배포**
   ```bash
   npm run deploy
   ```
   또는
   ```bash
   npx vercel --prod
   ```

## 배포 후 확인사항

- ✅ 빌드가 성공적으로 완료되는지 확인
- ✅ 환경 변수가 제대로 설정되었는지 확인
- ✅ Firebase 연결이 정상 작동하는지 확인
- ✅ 모든 페이지가 정상적으로 로드되는지 확인

## 자동 배포 설정

GitHub 저장소와 연결하면:
- `main` 브랜치에 푸시할 때마다 자동으로 배포됩니다
- Pull Request를 생성하면 프리뷰 배포가 생성됩니다

