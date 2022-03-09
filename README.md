This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Define your entities and relations in `prisma/schema.prisma`. After that, run

```shell
yarn prisma db push
```

Prisma will apply data model to database. Next, run

```shell
yarn prisma generate
```

Prisma will generate the SDK ——— `@prisma/client` in `node_modules/@prisma/clinet`

## Dependencies
- typescript
- prettier
- eslint
- nextjs
- tailwindcss
- prisma
- next-connect
- swr
- next-joi

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js 应用开发实践](https://nextjs-in-action-cn.taonan.lu/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [SWR Documentation](https://swr.vercel.app/)