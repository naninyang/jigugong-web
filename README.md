# Jigugong for web

## jigugong.com README
`jigugong.com`은 지구공 서비스를 소개하기 위한 웹 사이트입니다.

### CAUTION
이 프로젝트는 `create-react-app` CLI가 아닌 `create-next-app` CLI로 생성된 프로젝트입니다.  
따라서 기본은 CSR이 아닌 SSR로 불러옵니다. (Javascript의 `window`, `document` 사용이 제한될 수 있음)  
Microsoft Edge, Google Chrome, Apple Safari, Apple iPhone, Apple iPad, LG V3에서 테스트되었습니다.

### Getting Started
```Bash
$ git clone git@github.com:earthy2020/jigugong-web.git
# 또는
$ gh repo clone earthy2020/jigugong-web

$ cd jijugong-web

# npm packages install
$ npm ci
# npm i 또는 npm install 명령보다 npm ci 명령을 추천합니다. (npm@5.7.1부터 지원)
```

### Development Env. Start
```bash
$ npm run dev
```

## Next.js README
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
