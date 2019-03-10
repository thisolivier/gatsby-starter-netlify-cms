import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class PoetryPageListings extends React.Component {

    render() {
        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark
        
        return (
            <div>
                {posts && posts.map(({ node: post }) => (
                    <div key={post.id}>
                        <Link to={post.fields.slug}>
                            {post.frontmatter.title}
                        </Link>
                    </div>
                ))}
            </div>
        );
    }
}

PoetryPageListings.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export default () => (
    <StaticQuery
        query={graphql`
            query PoetryListingsQuery {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] },
                filter: { frontmatter: { templateKey: { eq: "poetry-page" } }}
            ) {
                edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        templateKey
                    }
                }
                }
            }
            }
    `   }
        render={(data, count) => (
            <PoetryPageListings data={data} count={count} />
        )}
    />
)