This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

在 `prisma/schema.prisma` 中定义你的数据模型以及它们之间的关系，完成后运行：

```shell
yarn prisma db push
```

Prisma 会按照这个 Schema, 把数据模型应用到数据库中，它会处理好一对多，多对多的关系，帮助你生成外键、关系表等等。  
数据库生成后，运行

```shell
yarn prisma generate
```

prisma 会在 node_modules/@prisma/clinet 生成操作数据库的 SDK ———— `@prisma/client`

## Dependencies
- typescript
- prettier
- eslint
- next
- tailwindcss
- prisma
- next-connect
- swr
- next-joi

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js 应用开发实践](https://nextjs-in-action-cn.taonan.lu/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [SWR 中文文档](https://swr.vercel.app/zh-CN)