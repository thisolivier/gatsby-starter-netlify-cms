import React from 'react'
import PropTypes from 'prop-types'
import { PoetryPageTemplate } from '../../templates/poetry-page'

const PoetryPagePreview = ({ entry, widgetFor }) => (
  <PoetryPageTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

PoetryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PoetryPagePreview
