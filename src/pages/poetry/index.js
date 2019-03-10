import React from 'react'

import Layout from '../../components/Layout'

export default class BlogIndexPage extends React.Component {
  render() {
    
  return (
      <Layout>
        <section className="section">
              <div className="content">
                  <h1>Latest Stories</h1>
                  There's no content here, since we don't need an overview of the blog posts, instead each entry should be a menu item.
              </div>
        </section>
      </Layout>
    )
  }
}
