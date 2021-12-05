import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Link from "next/link";

export const options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="text-h2 lg:text-h1 font-bold text-black_87 mb-8">{children}</h1>
    ),
    // Akkurat nå er det h2 som regulerer spacing mellom avsnittene/seksjonene
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="text-h3 lg:text-h2 font-semibold mb-8 mt-80 text-black_87 lg:mt-140" id={children}>
        {children}
      </h2>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-24 mt-16">{children}</p>,
    [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc pb-16">{children}</ul>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li className="-mb-24 text-blogg ml-16 lg:ml-32 my-8">{children}</li>,
    [INLINES.HYPERLINK]: ({ data }, children) => (
      <Link href={`${data.uri}`}>
        <a target="blank" className="text-primary underline">
          {children}
        </a>
      </Link>
    ),
  },
};

export const options_sommerfest = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-h2 lg:text-big font-semibold mb-8">{children}</h1>,
    // Akkurat nå er det h2 som regulerer spacing mellom avsnittene/seksjonene
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="ext-h3 lg:text-h1 font-semibold mb-8 mt-80 lg:mt-140" id={children}>
        {children}
      </h2>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-24 mt-16 text-neutral_300">{children}</p>,
    [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc pb-16">{children}</ul>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li className="-mb-24 text-blogg ml-16 lg:ml-32 my-8">{children}</li>,
    [INLINES.HYPERLINK]: ({ data }, children) => (
      <Link href={`${data.uri}`}>
        <a target="blank" className="text-primary underline">
          {children}
        </a>
      </Link>
    ),
  },
};

export const options_info_fane = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="text-white text-body_medium">{children}</p>,
    [INLINES.HYPERLINK]: ({ data }, children) => (
      <Link href={`${data.uri}`}>
        <a target="blank" className="text-white text-body_medium underline">
          {children}
        </a>
      </Link>
    ),
  },
};
