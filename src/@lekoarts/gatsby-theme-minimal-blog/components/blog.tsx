/** @jsx jsx */
import { Link } from "gatsby"
import { Flex } from "@theme-ui/components"
import Listing from "./listing"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import replaceSlashes from "../utils/replaceSlashes"
import SEO from "./seo"

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
  [key: string]: any
}

const Blog = ({ posts }: PostsProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig()

  return 
}

export default Blog