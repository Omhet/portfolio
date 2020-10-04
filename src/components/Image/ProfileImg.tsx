import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const ProfileImg = ({ filename, alt, className }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 720) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) return null;

      const imageFixed = image.node.childImageSharp.fluid;
      return <Img className={className} alt={alt} fluid={imageFixed} />;
    }}
  />
);

ProfileImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string
};

export default ProfileImg;
