import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import PoetryPagePreview from './preview-templates/PoetryPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', PoetryPagePreview)
