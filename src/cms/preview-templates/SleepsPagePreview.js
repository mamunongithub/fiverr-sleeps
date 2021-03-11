import React from "react";
import PropTypes from "prop-types";
import { SleepsPageTemplate } from "../../templates/sleeps-page";

const SleepsPagePreview = ({ entry, widgetFor }) => (
  <SleepsPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

SleepsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default SleepsPagePreview;
