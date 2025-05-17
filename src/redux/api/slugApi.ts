import { baseApi } from "./baseApi";

const slugApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // check slug for uniqueness

    // /products/check-slug?slug=sdafsdfdfgdfsdfg
    checkProductsSlug: builder.query({
      query: (slug) => `/products/check-slug?slug=${slug}`,
    }),

    // check blog slug for uniqueness
    // /blogs/check-slug?slug=getting-stddddarted-with-vaping-beginners-guide

    checkBlogsSlug: builder.query({
      query: (slug) => `/blogs/check-slug?slug=${slug}`,
    }),
  }),
});

export const { useLazyCheckBlogsSlugQuery, useLazyCheckProductsSlugQuery } = slugApi;
