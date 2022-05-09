// .tina/schema.ts

// ...

export config = defineConfig({
- apiURL: `http://localhost:4001/graphql`,
+ apiURL: `https://content.tinajs.io/content/${myClientId}/github/${myBranch}`,
})
