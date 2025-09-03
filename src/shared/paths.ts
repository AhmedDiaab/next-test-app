type PathLeaf<Args extends unknown[] = []> = {
  getHref: (...args: Args) => string;
};

type PathTree = {
  [key: string]: PathTree | PathLeaf<unknown[]>;
}

export const paths = {
  home: {
    getHref: () => `/` as string,
  },
} as const satisfies PathTree;