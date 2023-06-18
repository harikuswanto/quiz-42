export type Pagination = {
  page: number;
  perPage: number;
  totalPages: number;
};

export type Meta = {
  pagination: Pagination;
  sort: "new" | "popular";
  categoryId: number;
  excludedArticleId: number;
};

export type Category = {
  id: number;
  name: string;
};

export type Author = {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Post = {
  id: number;
  category: Category;
  author: Author;
  thumbnail: string;
  slug: string;
  title: string;
  summary: string;
};

export type ApiData = {
  meta: Meta;
  data: Post[];
};
