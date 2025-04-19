"use client";

import { MetaPagination } from "@/@custom-types/graphql";
import { useRouter } from "next/navigation";
import Pagination from "../pagination";
import { BlogPaginationWrapper } from "./styled";
import { toLower } from "lodash";
import { stringify } from "querystring";

interface BlogPaginationProps {
  data: MetaPagination;
  searchParams?: { [key: string]: string | string[] | undefined };
}

const BlogPagination = ({ data, searchParams }: BlogPaginationProps) => {
  const router = useRouter();
  return (
    <BlogPaginationWrapper>
      <Pagination
        limited={5}
        currentPage={Number(searchParams?.page) ? Number(searchParams?.page) : 1}
        totalPage={data.pagination.pageCount}
        onChangePage={(page) => {
          router.push(
            `/tin-tuc/noi-bat/?${stringify({
              ...searchParams,
              page: page,
            })}`
          );
        }}
      />
    </BlogPaginationWrapper>
  );
};

export default BlogPagination;
