import { PageProps } from 'gatsby';

export interface CustomPageProps extends PageProps {
  locales: {
    edges: Array<{
      node: {
        ns: string;
        data: string;
        language: string;
      };
    }>;
  };
}

export const parseLocalesData = (data: any) => {
  if (!data?.locales?.edges?.length) return {};
  const nodeData = data.locales.edges[0]?.node?.data;
  return nodeData ? JSON.parse(nodeData) : {};
};
