import Image from 'next/image'
import createImageUrl from '../utils/createImageUrl'

const ArticleItem = (props) => {
  const {title, caption, imageUrl, url} = props
  const imageurl = createImageUrl(imageUrl)
  return(
    <a href={url} target='_blank' style={{textDecoration:'none', color:'black', fontFamily:'Inter'}}>
    <div className="article_content_wrapper" style={{cursor:"pointer"}}>
    <Image src={imageurl} height="340" width="340" alt="article-image" />
        <div className="article_content">
            <p><strong>{title}</strong>< br />{caption}</p>
        </div>
    </div>
    </a>
  )
  }
export default ArticleItem