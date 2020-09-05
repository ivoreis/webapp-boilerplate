/** @jsx jsx */
import { jsx } from '@emotion/core'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'

const Blog: NextPage<{ slug: string }> = (props) => {
  const { slug } = props
  return (
    <div>
      <h1>Blog</h1>
      <p>{slug}</p>
    </div>
  )
}

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = [1, 2, 3, 4, 5]
  const paths = posts.map((post) => `/blog/${post}`)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{ slug: string }> = async (
  props,
) => {
  const { params } = props
  const slug = params?.slug as string
  return {
    props: {
      slug,
    },
  }
}

export default Blog
