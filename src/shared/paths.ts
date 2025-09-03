type ArgType = string | number | boolean;

type PathLeaf<Args extends readonly ArgType[] = []> = {
  getHref: (...args: Args) => string;
  getName: (...args: Args) => string;
  topLevel: boolean;
};

type PathTree = {
  [key: string]: PathTree | PathLeaf<ArgType[]>;
};

export const paths = {
  home: {
    getHref: () => `/`,
    getName: () => "Home",
    topLevel: true,
  },
  blogs: {
    root: {
      getHref: () => `/blogs`,
      getName: () => "Blogs",
      topLevel: true,
    },
    posts: {
      getHref: (slug: ArgType) => `/blogs/${slug}`,
      getName: (slug: ArgType) => `Blog Post (${slug})`,
      topLevel: false,
    },
  },
} as const satisfies PathTree;
