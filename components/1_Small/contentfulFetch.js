export async function fetchContent(query) {
  const space = process.env.NEXT_CONTENTFUL_SPACE_ID;
  const accessToken = process.env.NEXT_CONTENTFUL_ACCESS_TOKEN;

  try {
    const res = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${space}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ query }),
      }
    );
    const { data } = await res.json();
    return data;
  } catch (error) {
    // add a descriptive error message first,
    // so we know which GraphQL query caused the issue
    console.error(
      `There was a problem retrieving entries with the query ${query}`
    );
    console.error(error);
  }
}
