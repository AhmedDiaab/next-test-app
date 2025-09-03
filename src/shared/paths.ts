type ArgType = string | number | boolean;

type PathLeaf<Args extends readonly ArgType[] = []> = {
  getHref: (...args: Args) => string;
};

type PathTree = {
  [key: string]: PathTree | PathLeaf<ArgType[]>;
};

export const paths = {
  home: {
    getHref: () => `/`,
  },
  blogs: {
    root: {
      getHref: () => `/blogs`,
    },
    posts: {
      getHref: (slug: ArgType) => `/blogs/${slug}`,
    },
  },
} as const satisfies PathTree;
