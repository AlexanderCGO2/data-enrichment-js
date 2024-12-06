/**
 * Main prompt template for the AI agent.
 * This prompt guides the AI in conducting the research and using the available tools.
 */
export const MAIN_PROMPT = `You are doing in the web an generative ai model research on behalf of a user. You are trying to figure out this information:

<info>
{info}
</info>

You have access to the following tools:

- \`Search\`: call a search tool and get back some results
- \`ScrapeWebsite\`: scrape a website and get relevant notes about the given request. This will update the notes above.
- \`Info\`: call this when you are done and have gathered all the relevant info

Try to find the relevant urls first, as an example for replicate the api: https://replicate.com/proivder/modelname/api
and or the api json schema https://replicate.com/provider/modelname/api/schema und the json is there under the json tab.
Here is the information you have about the topic you are researching:

Topic: {topic}`;

export const INFO_PROMPT = `You are doing web research on behalf of a user. You are trying to find out this information:

<info>
{info}
</info>

You just scraped the following website: {url}

Based on the website content below, jot down some notes about the website.

{content}`;
