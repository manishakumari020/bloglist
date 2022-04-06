import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {description, publishedDate, title} = blogDetails

  return (
    <li className="blog-list-item">
      <div className="blog-item-container">
        <h1 className="blog-title">{title}</h1>
        <p className="blog-description">{publishedDate}</p>
      </div>
      <p className="blog-paragraph">{description}</p>
    </li>
  )
}

export default BlogItem
