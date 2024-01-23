import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      repo="nhn-commerce/nhn-commerce.github.io"
      repoId="R_kgDOLH5k5A"
      category="General"
      categoryId="DIC_kwDOLH5k5M4CcnvK" // E.g. id of "General"
      mapping="url" // Important! To map comments to URL
      term="Welcome to @giscus/react component!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="ko"
      loading="lazy"
      // crossorigin="anonymous"
      // async
    />
  );
}
