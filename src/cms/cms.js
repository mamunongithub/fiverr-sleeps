import CMS from 'netlify-cms-app'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import NavbarPreview from './preview-templates/NavbarPreview'
import FooterPreview from './preview-templates/FooterPreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('footer', FooterPreview)
CMS.registerPreviewTemplate('navbar', NavbarPreview)
