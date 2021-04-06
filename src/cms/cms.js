import CMS from 'netlify-cms-app'

import ArticlePreview from './preview-templates/ArticlePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import NavbarPreview from './preview-templates/NavbarPreview'
import FooterPreview from './preview-templates/FooterPreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('article', ArticlePreview)
CMS.registerPreviewTemplate('footer', FooterPreview)
CMS.registerPreviewTemplate('navbar', NavbarPreview)
